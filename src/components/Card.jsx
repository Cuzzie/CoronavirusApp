import React from 'react'
import FadeIn from "react-fade-in"
import "../css/Card.css"

const Card = ({ data, type, title }) => {
    const formattedData = data ? data.toLocaleString() : ""
    return (
        <div className={`card ${type}`}>
            <FadeIn>
                <div className="card-title">{title}</div>
                <div className="figure">{formattedData}</div>
            </FadeIn>
        </div>
    )
}

export default Card