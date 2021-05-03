import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import Feed from "../pages/FeedPage/Feed";
import Post from "../pages/PostPage/Post";
import Header from "../components/Headers/Header";

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>   
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/feed">
                    <Feed/>
                </Route>
                <Route exact path="/post/:id">
                    <Post/>
                </Route>
                <Route exact path="/erro">
                    <div>Erro 404. Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Router