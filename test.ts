it("should update chat history", async () => {
    (loadHistory as jest.Mock).mockReturnValue([
      { question: "original", answer: "original answer", citations: [] },
      { question: "refined question", answer: "", citations: [] },
    ]);
  
    (calculateIndex as jest.Mock).mockImplementation((type) =>
      type === "refine" ? 0 : 1
    );
  
    await refineQueryMessage("summarise", "England");
  
    expect(updateHistory).toHaveBeenCalledWith(
      expect.objectContaining({
        question: "refined question",
        refined: true,
        generated: false,
      })
    );
  });