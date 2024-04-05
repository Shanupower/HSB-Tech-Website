import { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./myComponents/home";
import Services from "./myComponents/services";
import Industries from "./myComponents/industries";


class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path='/industries' element={<Industries />} />
        </Routes>
      </Router>
    )
  }
}

export default App