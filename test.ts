/**
 * @jest-environment jsdom
 */

import generateFollowUpQs from "../generateFollowUpQs";
import { FOLLOW_UP_TEST_PARAMS, MOCK_RESPONSE } from "@/app/constants/ApiTests";
import { loadHistory, catchError } from "../../../utils";

// ✅ Mock `NextResponse` to avoid ReferenceError from next/server
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
  updateHistory: jest.fn(),
  loadHistory: jest.fn(),
  addHistory: jest.fn(),
  calculateIndex: jest.fn(),
  filterChatHistory: jest.fn(),
  catchError: jest.fn(),
}));

const { question, answer, citations } = FOLLOW_UP_TEST_PARAMS;

describe("Generating follow up questions", () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    // ✅ Mock sessionStorage
    const sessionStorageMock = (() => {
      let store: Record<string, string> = {
        session_id: 'mock-session-id-456',
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

    Object.defineProperty(window, 'sessionStorage', {
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
    fetchSpy?.mockRestore();
    jest.resetAllMocks();
  });

  it("should successfully call fetch with the correct params", async () => {
    await generateFollowUpQs(question, answer, citations, "England");

    expect(fetchSpy).toHaveBeenCalledWith("/api/followup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        session_id: "mock-session-id-456",
      },
      body: JSON.stringify({
        prev_chat: {
          question,
          answer,
          citations,
        },
        location: "England",
      }),
      signal: AbortSignal.timeout(90000),
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

    await generateFollowUpQs(question, answer, citations, "England");

    expect(catchError).toHaveBeenCalledWith(500);
  });
});