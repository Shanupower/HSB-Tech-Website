import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Services from "./myComponents/services";
import Industries from "./myComponents/industries";
import CustomizableSolutions from "./myComponents/customizableSolutions";
import LetsTalk from "./myComponents/letsTalk";
import WebDevelopment from "./myComponents/serviceDetailedPage";
import MobileDevelopment from "./myComponents/mobileServiceDetails";
import QualityAssurance from "./myComponents/qualityAssurance";
import UIUXDevelopment from "./myComponents/uiuxDetailsPage";
import BusinessAnalysisServices from "./myComponents/businessAnalysis";
import FullStackDevelopment from "./myComponents/fullStack";
import Manufacturing from "./myComponents/manufacturing";
import FintechIndustry from "./myComponents/fintechIndustry";
import HealthcareIndustry from "./myComponents/healthcareIndustry";
import EducationIndustry from "./myComponents/educationIndustry";
import "bootstrap/dist/css/bootstrap.min.css";
import TelecomIndustry from "./myComponents/Telecom";
import EcommerceIndustry from "./myComponents/Ecommerce";
import TravelAndHospitalityIndustry from "./myComponents/Travel&Hospitality";
import BFSIIndustry from "./myComponents/BSFI";
import DevOpsTechnoligy from "./myComponents/Technology/DevOps";
import FlutterTechnoligy from "./myComponents/Technology/Flutter";
import GraphSQlTechnoligy from "./myComponents/Technology/GraphSql";
import LaravelTechnoligy from "./myComponents/Technology/Laravel";
import NextTechnoligy from "./myComponents/Technology/NextJs";
import NodeJsTechnoligy from "./myComponents/Technology/NodeJS";
import ReactNativeTechnoligy from "./myComponents/Technology/ReactNative";
import PostgreSQLTechnoligy from "./myComponents/Technology/PostgreSQL";
import Home from "./myComponents/home";
import MenuBar from "./myComponents/menu";
import { useMediaQuery } from "@mui/material";
import TermsAndConditions from "./myComponents/TermsAndConditions/TermsAndConditions";
import Agile from "./myComponents/ProductModel/Agile";
import Fixed from "./myComponents/ProductModel/Fixed";
import RealEstateIndustries from "./myComponents/RealEstateIndustries";
import Blog from "./myComponents/Blog/Blog";
import ManagedService from "./myComponents/ProductModel/ManagedService";
import About from "./myComponents/About/About";

const App = () => {
  const isMd = useMediaQuery("(max-width:1068px)");

  return (
    <>
      {isMd && <MenuBar />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/agile" component={Agile} />
        <Route exact path="/fixed" component={Fixed} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />

        <Route exact path="/managed_service" component={ManagedService} />

        <Route
          exact
          path="/terms_and_conditions"
          component={TermsAndConditions}
        />

        <Route exact path="/industries" component={Industries} />
        <Route
          exact
          path="/customisable solutions"
          component={CustomizableSolutions}
        />
        <Route exact path="/lets_talk" component={LetsTalk} />
        <Route
          exact
          path="/services/web development"
          component={WebDevelopment}
        />
        <Route
          exact
          path="/services/mobile development"
          component={MobileDevelopment}
        />
        <Route
          exact
          path="/services/quality assurance"
          component={QualityAssurance}
        />
        <Route
          exact
          path="/services/uiux development"
          component={UIUXDevelopment}
        />
        <Route
          exact
          path="/services/busines analysis services"
          component={BusinessAnalysisServices}
        />
        <Route
          exact
          path="/services/fullstack development"
          component={FullStackDevelopment}
        />
        {/* Industries */}
        <Route
          exact
          path="/industries/manufacturing"
          component={Manufacturing}
        />
        <Route exact path="/industries/fintech" component={FintechIndustry} />
        <Route
          exact
          path="/industries/healthcare"
          component={HealthcareIndustry}
        />
        <Route
          exact
          path="/industries/education"
          component={EducationIndustry}
        />
        <Route exact path="/industries/telecom" component={TelecomIndustry} />

        <Route
          exact
          path="/industries/realEstate"
          component={RealEstateIndustries}
        />
        <Route
          exact
          path="/industries/ecommerce"
          component={EcommerceIndustry}
        />
        <Route
          exact
          path="/industries/travel-hospitality"
          component={TravelAndHospitalityIndustry}
        />
        <Route exact path="/industries/bsfi" component={BFSIIndustry} />

        {/* Technology */}
        <Route exact path="/technology/devOps" component={DevOpsTechnoligy} />
        <Route exact path="/technology/flutter" component={FlutterTechnoligy} />
        <Route
          exact
          path="/technology/graphSQl"
          component={GraphSQlTechnoligy}
        />
        <Route exact path="/technology/laravel" component={LaravelTechnoligy} />
        <Route exact path="/technology/nextJs" component={NextTechnoligy} />
        <Route exact path="/technology/nodsJs" component={NodeJsTechnoligy} />
        <Route
          exact
          path="/technology/postgreSql"
          component={PostgreSQLTechnoligy}
        />
        <Route
          exact
          path="/technology/react-native"
          component={ReactNativeTechnoligy}
        />
      </Switch>
    </>
  );
};

export default App;
