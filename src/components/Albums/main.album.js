import React from 'react';
import { Container } from 'react-bootstrap';
import Collection from './collection.albums';

const Albums = (props) => {

   

    const {tittle,description}= props
    return (
        <React.Fragment>  
            <Container className="mt-2">
{/*                 
                <h1>{tittle}</h1>     
                <p>{description}</p> */}
                <Collection/>  
            </Container>
       
        </React.Fragment>
    )
}

export default Albums;
//  {/* <h1>{min(5,3)}</h1> */}
  // const min=(a, b)=>{
    //     return a-b
    // }