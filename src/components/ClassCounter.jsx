import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.decrementValue = this.decrementValue.bind(this)
        this.incrementValue = this.incrementValue.bind(this)
    }

    incrementValue() {
        this.setState({count: this.state.count + 1})
    }

    decrementValue() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementValue}> increment</button>
                <button onClick={this.decrementValue}> decrement</button>
            </>
        )
    }
}

export default ClassCounter
