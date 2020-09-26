import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./homepage/homepage";
import Navbar from "./Navbar/navbar";
import Photos from "./Photos/photos";
import Posts from "./Posts/posts";
import Contacts from "./Contacts/Contacts"

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-window">
        <Redirect exact path="/" to="/homepage" />
        <Route path="/homepage" component={Homepage} />
        <Route path="/posts" component={Posts} />
        <Route path="/photos" component={Photos} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </div>
  );
}

export default App;
