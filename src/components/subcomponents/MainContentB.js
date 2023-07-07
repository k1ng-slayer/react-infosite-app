import React from "react";

function MainContentB() {
    return (
        <body
            style={{
                padding: "10px",
                backgroundColor: "#23252D",
                color: "#61DAFB",
                minHeight: "100vh",
                backgroundImage: "url('react-icon-large.png')",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
                backgroundPositionY: "175%",
                backgroundSize: "400px",
            }}
        >
            <h3>Reasons I'm excited to learn React</h3>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </body>
    );
}

export default MainContentB;
