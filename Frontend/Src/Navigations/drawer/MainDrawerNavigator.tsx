import { createDrawerNavigator } from "@react-navigation/drawer"
import MapHomeScreen from "../../Screens/map/MapHomeScreen";
import FeedHomeScreen from "../../Screens/feed/FeedHomeScreen";
import CalenderHomeScreen from "../../Screens/calender/CalenderHomeScreen";

const Drawer = createDrawerNavigator();

function MainDrawerNavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "MapHome" component={MapHomeScreen} />
            <Drawer.Screen name = "FeedHome" component={FeedHomeScreen} />
            <Drawer.Screen name = "CalanderHome" component={CalenderHomeScreen} />
        </Drawer.Navigator>
        )
}

export default MainDrawerNavigator