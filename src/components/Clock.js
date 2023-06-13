import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.display = setInterval(
            () => {
                this.setState({date: new Date()})
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.display);
    }


    render() {
        return(
            <li className="clock">{this.state.date.toLocaleString()}</li>
        );
    }
}

export default Clock;