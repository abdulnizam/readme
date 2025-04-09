/**
 * @jest-environment node
 */

import { NextResponse } from "next/server";
import sendQueryMessage from "../../api/sendQueryMessage";
import { MOCK_BODY, MOCK_RESPONSE } from "@/app/constants/ApiTests";
import { loadHistory, catchError, updateHistory } from "../../../utils";

jest.mock("../../../utils", () => ({
  updateHistory: jest.fn(),
  loadHistory: jest.fn(),
  addHistory: jest.fn(),
  calculateIndex: jest.fn(),
  filterChatHistory: jest.fn(),
  catchError: jest.fn(),
}));

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(jest.fn());
  jest.spyOn(console, "log").mockImplementation(jest.fn());
});

describe("sendQueryMessage", () => {
  let fetchSpy: jest.SpyInstance;
  let jsonMock: jest.SpyInstance;

  beforeEach(() => {
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

  it("should successfully process a query and update history", async () => {
    const { query, location } = MOCK_BODY;
    await sendQueryMessage(query, location);

    expect(fetch).toHaveBeenCalledWith("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        location,
      }),
      signal: AbortSignal.timeout(90000),
    });
  });

  it("should update chat history", async () => {
    const { query, location } = MOCK_BODY;
    (loadHistory as jest.Mock).mockReturnValue([]);
    await sendQueryMessage(query, location);
    expect(updateHistory).toHaveBeenCalledWith({
      answer: "",
      citations: [],
      id: null,
    });
  });

  it("should handle fetch errors and still return a valid response", async () => {
    fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ ...MOCK_RESPONSE, type: "error", code: 500 }),
      ok: false,
      status: 500,
    } as any);

    const { query, location } = MOCK_BODY;
    (loadHistory as jest.Mock).mockReturnValue([]);
    const result = await sendQueryMessage(query, location);
    expect(result).toBeDefined();
  });

  it("should handle errors and call catchError", async () => {
    const mockQuery = "What is the capital of Spain?";
    const mockLocation = "Madrid";
    const mockErrorResponse = {
      error: "Internal Server Error",
      code: 500,
    };

    (loadHistory as jest.Mock).mockReturnValue([]);
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(mockErrorResponse),
    });

    await sendQueryMessage(mockQuery, mockLocation);
    expect(catchError).toHaveBeenCalledWith(500);
  });
});
