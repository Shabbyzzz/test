import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/ping") // Ensure this matches your FastAPI endpoint
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("API request failed:", error);
        setMessage("API not working");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>API Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;


