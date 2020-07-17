/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Login from "views/Login.js";
import Terms from "views/Terms.js";
import Addpayment from 'views/Addpayment';
import Fpassword from "views/Forgeot";
import Cprofile from "views/Cprofile.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import Support from "views/Upgrade.js";
import Register from "views/Register";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/payflex/admin",
  },


  {
    path: "/user-page",
    name: "Edit/View Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/payflex/admin",
  },

  {
    path: "/Terms & Conditions",
    name: "Terms & Conditions",
    icon: "nc-icon nc-single-02",
    component: Terms,
    layout: "/payflex/admin",
  },

  {
    path: "/Addpayment",
    name: "Addpayment",
    icon: "nc-icon nc-single-02",
    component: Addpayment,
    layout: "/payflex/admin",
  },

  {
   
    path: "/Support",
    name: "Support Desk",
    icon: "nc-icon nc-spaceship",
    component: Support,
    layout: "/payflex/admin",
  },


  {
   
    path: "/login",
    name: "login",
    icon: "nc-icon nc-spaceship",
    component: Login,
    layout: "/payflex/newuser",
  },

  {
   
    path: "/register",
    name: "register",
    icon: "nc-icon nc-spaceship",
    component: Register,
    layout: "/payflex/newuser",
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    icon: "nc-icon nc-single-02",
    component: Fpassword,
    layout: "/payflex/newuser",
  },


  {
   
    path: "/Application",
    name: "Application",
    icon: "nc-icon nc-spaceship",
    component: Cprofile,
    layout: "/payflex/application",
  }
  
];
export default routes;
