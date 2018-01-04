import React, { Component } from "react";
import Todos from "./Todos";
import { Provider } from "react-redux";
import store from "../store";
import "../less/app.less"


export default class App extends Component {
    render(){
        return (
            <div className="app">
                <h1 className="title">todos</h1>
                <Provider store={store}>
                <Todos/>
                </Provider>
            </div>
        );
    };
}