import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Zafeer",
            var1: 0
        };
    }
    changeName() {
        this.setState({
            name: "Zafeer Rangoonwala"
        });
    }

    add() {
        this.setState({
            var1: this.state.var1 + 1
        })
    }

    Subtract() {
        this.setState({
            var1: this.state.var1 - 1
        })
    }

    render() {
        return (
            <div>
                My Name is {this.state.name}
                <button onClick={this.changeName.bind(this)} style={{ margin: '0 50px' }}>Click Me!</button>
                <h2>Addition & Subtraction</h2>
                <div>
                    <button onClick={this.add.bind(this)} style={{ margin: '0 50px' }}>ADD</button>
                    <button onClick={this.Subtract.bind(this)} style={{ margin: '0 50px' }}>SUBTRACT</button>
                </div>
            </div >
        );
    }
}
export default Counter;