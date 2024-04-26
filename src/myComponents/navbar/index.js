import { Component } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";
import { FaArrowRight } from "react-icons/fa6";

import hsbLogoImage from "../../assets/hsb-logo.png";
import "./index.css";

class Navbar extends Component {
  render() {
    return (
      <NavigationMenu className="navbarContainer">
        <NavigationMenuList>
          <NavigationMenuItem>
            <img style={{width: "120px"}} src={hsbLogoImage} alt="logo" />
          </NavigationMenuItem>

          <NavigationMenuItem className="navItem">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Services</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="navItem">
            <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="navItem">
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          
          <button className="letsTalkButton-nav slideRight" type="button">
            LET'S TALK
            <FaArrowRight className="rightArrow-nav" />
          </button>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
}

export default Navbar;
