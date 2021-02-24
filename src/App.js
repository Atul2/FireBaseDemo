import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import User from "./User";

function App() {
  return (
    <>
    <div className="App">
      <h1>FireBase Demo</h1>
    </div>
    <div className="container">
      <div className="row">
          <User />
        </div>
      </div>
      </>
  );
}

export default App;
