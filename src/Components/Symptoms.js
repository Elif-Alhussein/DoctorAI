import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (symptoms.trim()) {
      // Here, you can send the symptoms to the smart doctor API

      // Show a confirmation message before navigating to the chat page
      setConfirmationMessage("Your symptoms have been sent successfully!");

      // Navigate to the chat page after a short delay
      setTimeout(() => {
        navigate("/chat");
      }, 1000); // Navigate after 2 seconds
    }
  };

  return (
    <div className="container mx-auto mt-32 p-56 bg-gradient-to-br from-cyan-500 to-cyan-800">
      <h2 className="text-3xl font-bold mb-2 text-slate-100">Describe Your Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="border p-2 w-full"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Type your symptoms here..."
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-tl from-cyan-200 to-cyan-400 text-slate-900 hover:from-cyan-500 hover:to-orange-500 hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear rounded-full p-3 mt-4"
        >
          Send Symptoms
        </button>
      </form>

      {confirmationMessage && (
        <div className="mt-4 text-green-500 font-bold">{confirmationMessage}</div>
      )}
    </div>
  );
};

export default Symptoms;





