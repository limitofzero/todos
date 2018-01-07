import React, { Component } from "react";
import { connect } from "react-redux";
import {addTodo} from "../actions";
import "../less/input-form.less";

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    onKeyPress(event) {
        if(event.key === 'Enter' && this.state.value) {
            this.props.addTodo(this.state.value);
            this.setState({value: ''});
        }
    }

    onValueChanged(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="input-form">
                <input type="text"
                       placeholder="What need to be done?"
                       value={this.state.value}
                       onChange={this.onValueChanged.bind(this)}
                       onKeyPress={this.onKeyPress.bind(this)}/>
            </div>
        );
    }
}

export default connect(null, {addTodo})(InputForm);