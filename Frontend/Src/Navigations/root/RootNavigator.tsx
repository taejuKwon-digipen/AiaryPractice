import AuthStackNavigator from "../../Navigations/AuthStackNavigator";
import MainDrawerNavigator from "../../Navigations/drawer/MainDrawerNavigator";

/*사용자가 가장 먼저 마주하게 되는 로직*/

function RootNavigator(){
    const isLoggedIn = false;

    return <> 
        {isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>}
    </>;
}

export default RootNavigator;