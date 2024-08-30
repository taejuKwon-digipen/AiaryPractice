
/*사용자가 가장 먼저 마주하게 되는 로직*/

import AuthStackNavigator from "../../AuthStackNavigator";
import MainDrawerNavigator from "../MainDrawerNavigator";

function RootNavigator(){
    const isLoggedIn = false;

    return <> 
        {isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>}
    </>
}

export default RootNavigator