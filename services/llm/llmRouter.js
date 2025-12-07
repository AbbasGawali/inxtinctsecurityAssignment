import model from "./geminiClient.js";

const llmRouter = async (query) => {
  const prompt = `You are a routing assistant. Return strict JSON only. 
    
    {"tool":"weather" | "database" | "unknown",
     "params":{}
    }

    examples:

    "weather in Mumbai" -> {"tool":"weather", "params":{"city":"mumbai"}}

    "employes joined last month" -> {"tool":"database", "params":{"type":"EMPLOYEES_JOINED_LAST_MONTH"}}
    
    "all orders over 500" -> {"tool":"database", "params":{"type":"ORDERS_OVER_500"}}

    very strictly, give in this format only eg: {"tool":"weather", "params":{"city":"mumbai"}}
    respond only in JSON. User Query is  :"${query}"  , give in json format only, without any special characters
    
    dont give me data in backticks, just give plain data in json format 
    `;
  try {
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    return await JSON.parse(text.trim());
  } catch (error) {

    const errorMessage = error.message || "";
    if (errorMessage.includes('429') || errorMessage.includes('quota')) {
      return { tool: "GeminiError", params: {}, message: "API quota exceeded, try again later" };
    }

    return { tool: "Unknown", params: {} };
  }
};

export default llmRouter;
