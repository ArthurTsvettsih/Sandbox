import React, { Component } from "react";

class StringManipulator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputString: "",
			parsedString: "",
			prependWith: "",
			appendWith: "",
		}
	}

	toUpper = () => {
		var temp = this.state.inputString.toUpperCase();

		this.setState({
			parsedString: temp
		})
	}

	toLower = () => {
		var temp = this.state.inputString.toLowerCase();

		this.setState({
			parsedString: temp
		})
	}

	toOneLine = () => {
		var temp = this.state.inputString.replace(/\r?\n|\r/g, "");

		this.setState({
			parsedString: temp
		})
	}

	addNAtTheBeginningOfEveryNWord = () => {
		var temp = this.state.inputString.split(" ");

		for(var i = 0; i < temp.length; i++){
			temp[i] = this.state.prependWith + temp[i] + this.state.appendWith;
		}

		temp = temp.join(" ");

		this.setState({
			parsedString: temp
		})
	}

	handleInputChange = (event) => {
		this.setState({
			inputString: event.target.value
		})
	}

	handlePrependWithChange = (event) => {
		this.setState({
			prependWith: event.target.value
		})
	}

	handleAppendWithChange = (event) => {
		this.setState({
			appendWith: event.target.value
		})
	}

	render() {
		return (
			<div>
				<div>
					<textarea value={this.state.inputString} onChange={this.handleInputChange} style={{ width: "500px", height: "200px" }} />
				</div>
				<div>
					Basic
					<button onClick={this.toUpper}>To Upper</button>
					<button onClick={this.toLower}>To Lower</button>
					<button onClick={this.toOneLine}>To One Line</button>
				</div>
				<div>
					Fancier
					<input value={this.state.prependWith} onChange={this.handlePrependWithChange} style={{width: "50px"}} />
					<input value={this.state.appendWith} onChange={this.handleAppendWithChange} style={{width: "50px"}} />
					<button onClick={this.addNAtTheBeginningOfEveryNWord}>Replace</button>
				</div>
				<div>
					<textarea style={{ backgroundColor: "gray", width: "500px", height: "200px" }} value={this.state.parsedString} readOnly />
				</div>
			</div>
		);
	}
}

export default StringManipulator;