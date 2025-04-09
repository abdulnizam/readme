 ✓ should handle errors and call catchError (1 ms)

  ● refineQueryMessage › should update chat history

    expect(jest.fn()).toHaveBeenCalledWith(...expected)

    Expected: {"citations": [], "generated": false, "question": "", "refined": true}

    Number of calls: 0

      112 |     await refineQueryMessage("summarise", "England");
      113 |
    > 114 |     expect(updateHistory).toHaveBeenCalledWith({
          |                           ^
      115 |       citations: [],
      116 |       generated: false,
      117 |       question: "",

        getting the above error. here is the code

import {
  loadHistory,
  addHistory,
  calculateIndex,
  updateHistory,
  catchError,
  capitalise,
} from "@/app/utils";
import { getSessionId } from "../storage/storage";

export default async function refineQueryMessage(
  type: "summarise" | "elaborate",
  location: string,
) {
  // Define chat history object
  let chat_history = loadHistory();
  const sessionId = getSessionId();
  // Insert the question into session storage
  addHistory({ question: capitalise(type) });
  let index = calculateIndex("refine");
  const historyObject = chat_history[index];

  try {
    const data = await fetch(`/api/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "session-id": sessionId,
      },
      body: JSON.stringify({
        prev_chat: {
          ...historyObject,
          citations: historyObject.citations || [],
        },
        location,
      }),
      signal: AbortSignal.timeout(90000),
    });
    const parsedResponse = await data.json();

    if (parsedResponse.error) {
      // If the response object includes an error value, then a HTTP error has occured
      // An error should be thrown which is caught by catchError and handled appropriately
      throw new Error(parsedResponse.error, {
        cause: { code: parsedResponse.code },
      });
    }

    chat_history = loadHistory();

    const response =
      type === "elaborate"
        ? parsedResponse.elaborated_answer
        : parsedResponse.summarised_answer;

    // Update session storage chat history
    index = calculateIndex("query");
    const lastItem = chat_history[index];
    updateHistory({
      ...lastItem,
      answer: response,
      refined: true,
      generated: false,
      id: parsedResponse.id,
    });
  } catch (error: any) {
    // The HTTP error code should be passed to this function so an appropriate message can be displayed on the frontend and the metadata for the chat history object can be updated
    catchError(error?.cause?.code || 500);
  }

  // Reload chat_history to return it
  chat_history = loadHistory();
  return chat_history;
}
