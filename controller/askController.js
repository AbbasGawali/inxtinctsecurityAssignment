import llmRouter from "../services/llm/llmRouter.js";
import dbTool from "../services/tools/dbTool.js";
import weatherTool from "../services/tools/weatherTool.js";

export const processAskQuery = async (req, res) => {
  try {
    const { query } = req.body;
    const instruction = await llmRouter(query);
    let result;
    if (instruction.tool == "weather") {
      result = await weatherTool(instruction.params);
    } else if (instruction.tool == "database") {
      result = await dbTool(instruction.params);
    } else if (instruction.tool == "GeminiError") {
      result = { text: "Gemini Api is having some problem or quota exceeded" };
    } else {
      result = { text: "Sorry, we couldn't process your request at this time" };
    }

    res.send(result.text);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};
