import ColPosts from "./collection.posts";
import React from 'react';
import Navigation from "../Layouts/NavigationLayouts";

import { Container } from 'react-bootstrap';
const Posts=()=>{
    return(
        <React.Fragment>  
        <Container className="mt-2">
{/*                 
            <h1>{tittle}</h1>     
            <p>{description}</p> */}

            <ColPosts/>  
        </Container>
   
    </React.Fragment>
    )
}
export default Posts;