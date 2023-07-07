import React from "react";

function ComponentB() {
    return (
        <>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // height: "60px",
                    backgroundColor: "black",
                    color: "white",
                }}
            >
                <h4 style={{ marginLeft: "10px" }}>The K1ngSlayers</h4>
                <nav>
                    <img
                        src="/logo192.png"
                        alt="Logo"
                        style={{ width: "40px", marginTop: "2px" }}
                    />
                </nav>
            </header>
            <body style={{ margin: "20px" }}>
                <h3>Reasons I'm excited to learn React</h3>
                <ol>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>
                        Powers thousands of enterprise apps, including mobile
                        apps
                    </li>
                </ol>
            </body>
            <footer
                style={{
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                }}
            >
                © 2023 K1ngSlayer development. All rights reserved.
            </footer>
        </>
    );
}

export default ComponentB;
