import {Navbar, Container, Nav} from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import "./nav.css";

const Navigation = () => {
    const pathName=window.location.pathname;
    const path=pathName.substring(1);

    return(
        <>

        <Navbar  bg="dark" variant="dark" >
          <Container >
            <Navbar.Brand href="/">React Website</Navbar.Brand>
              <Nav className="navigation">
                <Nav.Link  href="/"className={
                    path === ""
                      ? "navbar-link active navv li underline-hover"
                      : "underline-hover li  "
                  }  >Home</Nav.Link>
                <Nav.Link  href="/albums"className={
                    path === "albums"
                      ? "navbar-link active li navv underline-hover"
                      : "underline-hover li "
                  }  >Albums</Nav.Link>
                  
                <Nav.Link href="/posts" className={path==="posts"? "navbar-link active navv li underline-hover  ": "underline-hover li"}>Posts</Nav.Link>
              </Nav>
          </Container>
          </Navbar> 
    </>
    )
}

export default Navigation;