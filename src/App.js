import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 5;
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="Home"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
