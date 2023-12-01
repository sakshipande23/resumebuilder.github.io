import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ChatbotComponent from './components/ChatbotComponent';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ChatbotComponent />
      
    </div>
  );
}

export default App;
