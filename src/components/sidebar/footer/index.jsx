import React from "react"
import "./style.css"

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="footer-wrapper">
                <div className="sec1">
                    <a href="#" style={{ marginRight: "5px" }}>About</a>
                    <a href="#" style={{ marginRight: "5px" }}>Press</a>
                    <a href="#">Copyright</a>
                    <a href="#" style={{ marginRight: "5px" }}>Contact us</a>
                    <a href="#">Creators</a>
                    <a href="#" style={{ marginRight: "5px" }}>Advertise</a>
                    <a href="#">Developers</a>
                </div>
                <div className="sec2">
                    <a href="#">Terms Privacy Policy & Safety</a>
                    <a href="#">How Youtube works</a>
                    <a href="#">Test new features</a>
                </div>
                <div className="sec3">
                    <i class="far fa-copyright"></i>
                    <p>2021 Google LLC</p>
                </div>
            </div>
        )
    }
}

export default Footer