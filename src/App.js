import { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./myComponents/home";
import Services from "./myComponents/services";
import Industries from "./myComponents/industries";
import CustomizableSolutions from './myComponents/customizableSolutions'
import LetsTalk from "./myComponents/letsTalk";


class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path='/industries' element={<Industries />} />
          <Route exact path='/customisable solutions' element={<CustomizableSolutions />} />
          <Route exact path='/lets talk' element={<LetsTalk />} />
        </Routes>
      </Router>
    )
  }
}

export default App