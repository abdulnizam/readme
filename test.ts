/**
 * @jest-environment node
 */

jest.mock("../../../utils", () => ({
  loadHistory: jest.fn(),
  addHistory: jest.fn(),
  calculateIndex: jest.fn(),
  updateHistory: jest.fn(),
  catchError: jest.fn(),
  capitalise: jest.fn(),
}));

import { NextResponse } from "next/server";
import refineQueryMessage from "../refineQueryMessage";
import { MOCK_RESPONSE } from "@/app/constants/ApiTests";
import {
  calculateIndex,
  loadHistory,
  catchError,
  updateHistory,
} from "../../../utils";

describe("refineQueryMessage", () => {
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
      signal: AbortSignal.timeout(90000),
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
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(mockErrorResponse),
    });

    await refineQueryMessage("summarise", "England");
    expect(catchError).toHaveBeenCalledWith(500);
  });
});
