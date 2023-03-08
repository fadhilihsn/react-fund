import React from "react";
import { Container } from 'react-bootstrap';
import Navigation from "./NavigationLayouts";
import Footer from "./footer";


const MainLayouts=({children})=>{
    return(
        <React.Fragment>
            <Navigation/>
            {children}
            <Footer/>
            
      

        </React.Fragment>
    )
}
export default MainLayouts;