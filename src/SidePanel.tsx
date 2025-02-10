import { useEffect } from 'react';

useEffect;

const SidePanel = () => {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.type === 'GREETING') {
        console.log('Received message in Side Panel:', message.payload);
        sendResponse({ message: 'Hello from Side Panel' });
      }
    });
  }, []);

  return <div className="SidePanel bg-red-400 p-4">SidePanel</div>;
};

export default SidePanel;
