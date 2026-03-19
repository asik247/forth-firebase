import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Registation from "../Components/Registation/Registation";
import LogIn from "../Components/LogIn/LogIn";
import Orders from "../Components/Orders/Orders";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:"registation",Component:Registation},
            {path:'login',Component:LogIn},
            {path:'orders',Component:Orders},
        ]
        
    }
])
export default router;