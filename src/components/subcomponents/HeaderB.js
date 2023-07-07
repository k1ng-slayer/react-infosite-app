import React from "react";

function HeaderB() {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // height: "60px",
                backgroundColor: "#2f2c1a",
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
    );
}

export default HeaderB;
