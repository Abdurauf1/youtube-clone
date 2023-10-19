import React from "react"
import "./style.css"

class Fifthsidebarinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href="#" className="info">
                <i className={this.props.icon}></i>
                <p className="name">{this.props.text}</p>
            </a>
        )
    }
}

export default Fifthsidebarinfo