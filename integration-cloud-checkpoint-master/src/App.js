import React from "react";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Map from "./Components/Maps/Map";



const Home = () => {
    return(
        <div className="home">
        <Header/>
        <Main />
        <Section/>
        <Map />
        

        
        </div>
    );
}
export default Home;