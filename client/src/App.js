import React, { Component } from "react";
import "./App.css";
import {Add} from './components/Add';
import News from './components/News';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Add" exact element={<Add/>}/>
          <Route path="/News" exact element={<News/>}/>
        </Routes>
     </Router>
    </div>
        );
    }
}

export default App;