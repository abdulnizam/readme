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

// ✅ Mock NextResponse.json to avoid Request errors in test
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data) => ({
      status: 200,
      json: () => Promise.resolve(data),
    })),
  },
}));

// ✅ Mock all utility functions
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