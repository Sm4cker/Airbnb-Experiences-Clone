import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img alt="Logo" src={process.env.PUBLIC_URL + '/images/airbnb-logo.png'} className="nav--logo" />
        </nav>
    )
}
