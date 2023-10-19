import React from 'react'
import "./style.css"

class ScrollBarInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a className="theme" href="#">{this.props.text}</a>
        )
    }
}

export default ScrollBarInfo