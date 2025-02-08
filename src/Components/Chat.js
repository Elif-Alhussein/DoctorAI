import React, { useState, useCallback } from "react";
import axios from "axios"; 

export default function Chat() {
  const [question, setQuestion] = useState(""); 
  const [responses, setResponses] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true); 

      setResponses((prevResponses) => [
        ...prevResponses,
        { text: question, type: "user" }
      ]);

      try {
        const response = await axios.post("https://aigency.dev/api/v1/newChat", {
          access_token: "QEWEWQ123",
          ai_id: "12",
          question: question,
        });
        

        setResponses((prevResponses) => [
          ...prevResponses,
          { text: response.data.reply || "No reply from AI", type: "ai" }
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setResponses((prevResponses) => [
          ...prevResponses,
          { text: "An error occurred. Please try again.", type: "ai" }
        ]);
      } finally {
        setLoading(false); 
        setQuestion(""); 
      }
    },
    [question]
  );

  const handleQuestionChange = useCallback((e) => {
    setQuestion(e.target.value);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Chat With AI</h2>

      <div className="border border-gray-300 rounded-lg p-4 h-96 overflow-y-scroll">
        {responses.map((response, index) => (
          <div
            key={index}
            className={`mb-2 ${response.type === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block rounded-lg p-2 ${
                response.type === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {response.text}
            </span>
          </div>
        ))}
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="border rounded-lg p-2 w-full"
          value={question}
          onChange={handleQuestionChange} 
          placeholder="Type your question here..."
          required
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white p-2 mt-2 rounded-lg"
          disabled={loading} 
        >
          Send
        </button>
      </form>
    </div>
  );
}



