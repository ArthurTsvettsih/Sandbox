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

	toUpperWrapper = () => {
		var result = this.toUpper(this.state.inputString);

		this.setState({
			parsedString: result
		});
	}

	toUpper = (input) => {
		var temp = input.toUpperCase();

		return temp;
	}

	toLowerWrapper = () => {
		var result = this.toLower(this.state.inputString);

		this.setState({
			parsedString: result
		});
	}

	toLower = (input) => {
		var temp = input.toLowerCase();

		return temp;
	}

	testHistory = (input) => {
		var allFunctions = [this.toUpper, this.toLower, this.toOneLine, this.addNAtTheBeginningOfEveryNWord];
		var test = this.state.inputString;
		for (var i = 0; i < allFunctions.length; i++) {
			test = allFunctions[i].call(this, test);
		}

		this.setState({
			parsedString: test
		});
	}


	toOneLineWrapper = () => {
		var result = this.toOneLine(this.state.inputString);

		this.setState({
			parsedString: result
		});
	}

	toOneLine = (input) => {
		var temp = input.replace(/\r?\n|\r/g, " ");

		return temp;
	}

	addNAtTheBeginningOfEveryNWordWrapper = () => {
		var result = this.addNAtTheBeginningOfEveryNWord(this.state.inputString);

		this.setState({
			parsedString: result
		});
	}

	addNAtTheBeginningOfEveryNWord = (input) => {
		var temp = input.split(/\r?\n|\r|\s/g);
		for (var i = 0; i < temp.length; i++) {
			temp[i] = this.state.prependWith + temp[i] + this.state.appendWith;
		}

		temp = temp.join(" ");

		return temp;
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
			<div className="main-container">
				<section id="main-content-area" className="main-content-area">
					<section id="input-area">
						<textarea value={this.state.inputString} onChange={this.handleInputChange} />
					</section>
					<section id="button-area">
						<div>
							<button onClick={this.toUpperWrapper}>To Upper</button>
							<button onClick={this.toLowerWrapper}>To Lower</button>
							<button onClick={this.toOneLineWrapper}>To One Line</button>
							<button onClick={() => { this.testHistory(this.state.inputString) }}>Chain All</button>
						</div>
						<div>
							<input value={this.state.prependWith} onChange={this.handlePrependWithChange} />
							<input value={this.state.appendWith} onChange={this.handleAppendWithChange} />
							<button onClick={this.addNAtTheBeginningOfEveryNWordWrapper}>Replace</button>
						</div>
					</section>
					<section id="output-area">
						<textarea value={this.state.parsedString} readOnly />
					</section>
				</section>
				<section id="history-area">
				</section>
			</div>
		);
	}
}

export default StringManipulator;