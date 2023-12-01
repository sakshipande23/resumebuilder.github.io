// ChatbotComponent.js

import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Load Botpress embed script
    const script = document.createElement('script');
    script.src = 'https://mediafiles.botpress.cloud/501d914f-e014-4371-8559-0a5da4dc386a/webchat/bot.html';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="botpress-container">
      {/* This div will contain the Botpress chatbot */}
    </div>
  );
};

export default ChatbotComponent;
