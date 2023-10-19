import React from "react"
import "./style.css"

class Thirdsidebarinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href="#" className="info">
                <img className="img" src={this.props.image} alt="" />
                <p className="name">{this.props.text}</p>
            </a>
        )
    }
}

export default Thirdsidebarinfo