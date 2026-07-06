import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [postData, setPostData] = useState('');
  const [postResponse, setPostResponse] = useState('');

  const handleGetTest = async () => {
    const response = await fetch('/test');
    const data = await response.json();
    setMessage(data.message);
  };

  const handlePostTest = async () => {
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: postData }),
    });
    const data = await response.json();
    setPostResponse(data.message);
  };

  return (
    <div>
      <h1>TestApp</h1>

      <h2>GET /test</h2>
      <button onClick={handleGetTest}>Check API</button>
      {message && <p>{message}</p>}

      <h2>POST /test</h2>
      <input 
        type="text" 
        value={postData} 
        onChange={(e) => setPostData(e.target.value)} 
        placeholder="Enter data to post"
      />
      <button onClick={handlePostTest}>Send Data</button>
      {postResponse && <p>{postResponse}</p>}
    </div>
  );
}

export default App;
