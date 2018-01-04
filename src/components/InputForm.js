import React, { Component } from "react";
import "../less/input-form.less";

export default class InputForm extends Component {

    render() {
        return (
            <div className="input-form">
                <input type="text" placeholder="Введите текст..."/>
            </div>
        );
    }
}