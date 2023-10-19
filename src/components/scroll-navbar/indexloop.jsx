import React from 'react'
import "./styleloop.css"
import ScrollBarInfo from './scrollbarinfo'

class ScrollBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataBase: [
                {
                    text: "All",
                },
                {
                    text: "Lo-fi music",
                },
                {
                    text: "Science Fiction",
                },
                {
                    text: "Schitt's Creeek",
                },
                {
                    text: "Comedy festivals",
                },
                {
                    text: "Cryptocurrency",
                },
                {
                    text: "Bossa Nova",
                },
                {
                    text: "RuPaul's Drag Race",
                },
                {
                    text: "Comedies",
                },
            ]
        }
    }

    render() {
        return (
            <div className="scrollbar">
                <button className="prev-btn">
                    <i class="fas fa-angle-left"></i>
                </button>
                {
                    this.state.dataBase.map((value) => {
                        return <ScrollBarInfo text={value.text} />
                    })
                }
                <button className="next-btn">
                    <i class="fas fa-angle-right"></i>
                </button>
            </div>
        )
    }
}

export default ScrollBar