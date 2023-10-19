import React from "react"
import "./style.css"

class LoopItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card">
                <img className="card-img" src={this.props.contentimage} alt="" />
                <div className="card-body">
                    <img className="user-img" src={this.props.userimage} alt="" />
                    
                    <div className="card-text">
                        <p className="content-name">{this.props.text}</p>
                        <p className="user-name">{this.props.name} <i class="fas fa-check-circle"></i></p>
                        <div style={{ display: "flex" }}>
                            <p className="views"><span>{this.props.views}</span> views</p>
                            <div className="nuqta"></div>
                            <p className="time"><span>{this.props.time}</span> ago</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoopItems