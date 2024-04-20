import {useNavigate, Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import moment from 'moment';
import { Outlet } from "react-router-dom";

export default function LoginCheck(){
    const navigate = useNavigate()
    
    const [cookies,setCookie,removeCookie] = useCookies(["login"]);

    if (!Object.keys(cookies).length ) {
        return <Navigate to="/login" replace ={true} />
    }
    
   
    if (cookies.login.is_logged == true && moment().isBefore(cookies.login.expiry)  ){
        return <>
        <Outlet />
        </>
    } else {
        console.log("working")
        // var login = {
        //     "is_logged": false,
        //     "expiry": null,
        //     "token": null,
        //     "role": null
        // }
        // setCookie("login",login,{path:"/"})
        return <Navigate to="/login" replace ={true} />
    }
}
