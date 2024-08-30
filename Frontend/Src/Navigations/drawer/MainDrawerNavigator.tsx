import { createDrawerNavigator } from "@react-navigation/drawer"
import MapHomeScreen from "../../Screens/MapHomeScreen";

function MainDrawerNavigator(){

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "MapHome" component={MapHomeScreen} />
        </Drawer.Navigator>
        )
}

export default MainDrawerNavigator