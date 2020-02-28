import { createStackNavigation } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/home";
import ReviewDetails from "../components/reviewDetails";

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
};

const HomeStack = createStackNavigation(screens);

export default createAppContainer(HomeStack);
