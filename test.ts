/**
 * @jest-environment node
 */

import { NextResponse } from "next/server";
import generateFollowUpQs from "../generateFollowUpQs";
import { FOLLOW_UP_TEST_PARAMS, MOCK_RESPONSE } from "@/app/constants/ApiTests";
import { loadHistory, catchError } from "../../../utils";

const { question, answer, citations } = FOLLOW_UP_TEST_PARAMS;

jest.mock("../../../utils", () => ({
  updateHistory: jest.fn(),
  loadHistory: jest.fn(),
  addHistory: jest.fn(),
  calculateIndex: jest.fn(),
  filterChatHistory: jest.fn(),
  catchError: jest.fn(),
}));

describe("Generating follow up questions", () => {
  let fetchSpy: jest.SpyInstance;
  let jsonMock: jest.SpyInstance;

  beforeEach(() => {

    const sessionStorageMock = (() => {
        let store: Record<string, string> = {
          session_id: 'mock-session-id-456',
        };
        return {
          getItem: jest.fn((key: string) => store[key] || null),
          setItem: jest.fn((key: string, value: string) => {
            store[key] = value;
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
    
    fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_RESPONSE),
      ok: true,
      status: 200,
    } as any);

    // Mock NextResponse.json to return a valid JSON response
    jsonMock = jest.spyOn(NextResponse, "json").mockReturnValue({
      status: 200,
      json: jest.fn().mockResolvedValue(MOCK_RESPONSE),
    } as any);

    
  });

  afterEach(() => {
    fetchSpy.mockRestore();
    jsonMock.mockRestore(); // Restore the original NextResponse.json method after each test
  });
  it("should successfully call fetch with the correct params", async () => {
    await generateFollowUpQs(question, answer, citations, "England");
    expect(fetch).toHaveBeenCalledWith("/api/followup", {
      method: "POST",
      headers: { "Content-Type": "application/json", 'session_id': 'mock-session-id-456' },
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
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(mockErrorResponse),
    });

    await generateFollowUpQs(question, answer, citations, "England");
    expect(catchError).toHaveBeenCalledWith(500);
  });
});

here is the error

 ✕ should successfully call fetch with the correct params (1 ms)
    ✕ should handle errors and call catchError

  ● Generating follow up questions › should successfully call fetch with the correct params

    The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.
    
    ReferenceError: window is not defined

      40 |     })();
      41 |     
    > 42 |     Object.defineProperty(window, 'sessionStorage', {
         |                           ^
      43 |     value: sessionStorageMock,
      44 |     configurable: true,
      45 |     });

      at Object.<anonymous> (app/utils/api/__tests__/generateFollowUpQs.test.ts:42:27)

  ● Generating follow up questions › should successfully call fetch with the correct params

    TypeError: Cannot read properties of undefined (reading 'mockRestore')

      61 |
      62 |   afterEach(() => {
    > 63 |     fetchSpy.mockRestore();
         |              ^
      64 |     jsonMock.mockRestore(); // Restore the original NextResponse.json method after each test
      65 |   });
      66 |   it("should successfully call fetch with the correct params", async () => {

      at Object.<anonymous> (app/utils/api/__tests__/generateFollowUpQs.test.ts:63:14)

  ● Generating follow up questions › should handle errors and call catchError

    The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.
    
    ReferenceError: window is not defined

      40 |     })();
      41 |     
    > 42 |     Object.defineProperty(window, 'sessionStorage', {
         |                           ^
      43 |     value: sessionStorageMock,
      44 |     configurable: true,
      45 |     });

      at Object.<anonymous> (app/utils/api/__tests__/generateFollowUpQs.test.ts:42:27)

  ● Generating follow up questions › should handle errors and call catchError

    TypeError: Cannot read properties of undefined (reading 'mockRestore')

      61 |
      62 |   afterEach(() => {
    > 63 |     fetchSpy.mockRestore();
         |              ^
      64 |     jsonMock.mockRestore(); // Restore the original NextResponse.json method after each test
      65 |   });
      66 |   it("should successfully call fetch with the correct params", async () => {
