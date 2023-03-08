import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button, ButtonGroup} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import Loaders from '../Utilities/loaders';
import Alert from 'react-bootstrap/Alert';

 
const Collection= () => {
    const [datas, setDatas]= useState([])
    const [limit, setLimit]= useState(3)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        let isCancelled =false
        if (isCancelled ==false){
            setLoading(true)
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
        }
        //clean up render
        return () => {isCancelled=true}
    },[limit])

    const handleLimit=(option)=>{
        option === "+" ? setLimit((prev)=>prev+1) : setLimit((prev)=>prev-1)
    }

    if (loading) return <Loaders/>

    return (
        <React.Fragment>
            <h2>Albums API</h2>
            <p>Dynamic Carousel of Albums , default is {limit}</p>
            <Alert  variant="success">
             Currently showing "{limit}" Collection
        </Alert>

            <Carousel>
                {/* mapping data start */}
                {datas.map((data, i)=>{
                    return(
                        <Carousel.Item key={i}>
                             <img className="d-block w-100" 
                              src={data.url}
                              alt="Third slide"     
                              height={450}
                              width={450}
                              />
                            <Carousel.Caption>
                                <h3>{data.id}</h3>
                                <p>{data.title}</p>
                            </Carousel.Caption>
                        

                         </Carousel.Item>
                    )   
                })}
            </Carousel>
            {/* mapping data end */}

            <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
                <Button variant="primary" onClick={() => handleLimit("+")}> <b>  Add Collection</b></Button>
                {/* <button className="btn btn-outline-primary" onClick={()=> handleLimit("+")}>+</button> */}
                {limit >1 &&
                <Button variant="danger" onClick={()=> handleLimit("-")}><b> Remove Post</b></Button>

                // <button className="btn btn-outline-primary" onClick={()=> handleLimit("-")}>-</button>
                }
            </ButtonGroup>


        </React.Fragment>
    )
}
export default Collection;