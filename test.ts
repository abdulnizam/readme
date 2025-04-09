/**
 * @jest-environment jsdom
 */

import refineQueryMessage from "../refineQueryMessage";
import { MOCK_RESPONSE } from "@/app/constants/ApiTests";
import {
  calculateIndex,
  loadHistory,
  catchError,
  updateHistory,
} from "../../../utils";

// ✅ Polyfill AbortSignal.timeout
beforeAll(() => {
  if (!("timeout" in AbortSignal)) {
    (AbortSignal as any).timeout = (ms: number) => {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), ms);
      return controller.signal;
    };
  }
});

// ✅ Mock NextResponse to prevent server-side error in jsdom
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data) => ({
      status: 200,
      json: () => Promise.resolve(data),
    })),
  },
}));

// ✅ Mock utility functions
jest.mock("../../../utils", () => ({
  loadHistory: jest.fn(),
  addHistory: jest.fn(),
  calculateIndex: jest.fn(),
  updateHistory: jest.fn(),
  catchError: jest.fn(),
  capitalise: jest.fn(),
}));

describe("refineQueryMessage", () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    // ✅ Mock sessionStorage
    const sessionStorageMock = (() => {
      let store: Record<string, string> = {
        session_id: "mock-session-id-456",
      };
      return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value;
        }),
        removeItem: jest.fn((key: string) => {
          delete store[key];
        }),
        clear: jest.fn(() => {
          store = {};
        }),
      };
    })();

    Object.defineProperty(window, "sessionStorage", {
      value: sessionStorageMock,
      configurable: true,
    });

    // ✅ Mock fetch
    fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_RESPONSE),
      ok: true,
      status: 200,
    } as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
    jest.resetAllMocks();
  });

  it("should successfully call fetch with the correct params", async () => {
    (loadHistory as jest.Mock).mockReturnValue([
      { question: "", answer: "", citations: [] },
    ]);
    (calculateIndex as jest.Mock).mockReturnValue(0);

    await refineQueryMessage("summarise", "England");

    expect(fetch).toHaveBeenCalledWith("/api/summarise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        session_id: "mock-session-id-456", // ✅ from sessionStorage
      },
      body: JSON.stringify({
        prev_chat: {
          question: "",
          answer: "",
          citations: [],
        },
        location: "England",
      }),
      signal: expect.any(AbortSignal),
    });
  });

  it("should update chat history", async () => {
    (loadHistory as jest.Mock).mockReturnValue([
      { question: "", answer: "", citations: [] },
    ]);

    await refineQueryMessage("summarise", "England");

    expect(updateHistory).toHaveBeenCalledWith({
      citations: [],
      generated: false,
      question: "",
      refined: true,
    });
  });

  it("should handle errors and call catchError", async () => {
    const mockErrorResponse = {
      error: "Internal Server Error",
      code: 500,
    };

    (loadHistory as jest.Mock).mockReturnValue([]);

    fetchSpy.mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValue(mockErrorResponse),
    } as any);

    await refineQueryMessage("summarise", "England");

    expect(catchError).toHaveBeenCalledWith(500);
  });
});