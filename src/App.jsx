import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.css";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import Index from "./pages/Admin";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import Products from "./pages/Admin/Products";
import Admin from "./pages/Admin";

 function App(){
     return (
         <div className="App">
             <Router>
                 <Switch>
                     <Route path={["/admin", "/admin/products"]}>
                         <PrivateLayout>
                             <Switch>
                                 <Route path="admin/products">
                                     <Products />
                                 </Route>
                                 <Route path="/admin">
                                     <Admin />
                                 </Route>
                             </Switch>
                         </PrivateLayout>
                     </Route>
                     <Route path={["/login", "/registration"]}>
                         <AuthenticationLayout>
                             <Switch>
                                 <Route path="/login">
                                     <Login />
                                 </Route>
                                 <Route path="/registration">
                                     <Registration />
                                 </Route>
                             </Switch>
                         </AuthenticationLayout>
                     </Route>
                     <Route path={["/"]}>
                         <PublicLayout>
                             <Switch>
                                 <Route path="/">
                                     <index />
                                 </Route>
                             </Switch>
                         </PublicLayout>
                     </Route>
                 </Switch>
             </Router>
         </div>
     )
 }
 export default App;