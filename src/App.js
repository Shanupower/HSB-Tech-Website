import { Component } from "react"
import { Route, Switch } from 'react-router-dom';
import Home from "./myComponents/home";
import Services from "./myComponents/services";
import Industries from "./myComponents/industries";
import CustomizableSolutions from './myComponents/customizableSolutions'
import LetsTalk from "./myComponents/letsTalk";
import WebDevelopment from "./myComponents/serviceDetailedPage";
import MobileDevelopment from "./myComponents/mobileServiceDetails";
import QualityAssurance from "./myComponents/qualityAssurance";
import UIUXDevelopment from "./myComponents/uiuxDetailsPage";
import BusinessAnalysisServices from "./myComponents/businessAnalysis";

class App extends Component{
  render(){
    return(
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path='/industries' component={Industries} />
          <Route exact path='/customisable solutions' component={CustomizableSolutions} />
          <Route exact path='/lets talk' component={LetsTalk} />
          <Route exact path="/services/web development" component={WebDevelopment} />
          <Route exact path="/services/mobile development" component={MobileDevelopment} />
          <Route exact path="/services/quality assurance" component={QualityAssurance} />
          <Route exact path="/services/uiux development" component={UIUXDevelopment} />
          <Route exact path="/services/busines analysis services" component={BusinessAnalysisServices} />
        </Switch>
    )
  }
}

export default App