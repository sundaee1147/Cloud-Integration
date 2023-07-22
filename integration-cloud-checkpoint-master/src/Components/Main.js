import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="col col1">
                <h2>Make your Pick!</h2>
                <p>In here, you can select whatever category you want.<br/>If you want to select more, just click the button</p>
                <button type="button">More</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>

        </div>
    );
}

export default Main;