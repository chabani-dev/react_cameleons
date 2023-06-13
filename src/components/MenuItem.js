import React from "react";

class MenuItem extends React.Component {
    render() {
        return(
            <li><a href={this.props.link}>{this.props.text}</a></li>
        );
    }
}

export default MenuItem;