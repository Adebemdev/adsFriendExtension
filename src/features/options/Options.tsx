function Options() {
  const sendMessage = () => {
    chrome.runtime.sendMessage(
      { type: 'GREETING', payload: 'Hello from Options' },
      (response) => {
        console.log('Response:', response);
      }
    );
  };

  return (
    <div className="options">
      <h1>Extension Options</h1>
      <button className="bg-red-500 p-8" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
}

export default Options;
