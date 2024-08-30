import AuthStackNavigator from "../AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator(){
    const isLoggedIn = true;

    return <> /*분기처리*/
        {isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>}
    </>
}

export default RootNavigator