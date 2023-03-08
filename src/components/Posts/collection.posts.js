import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import  Axios from "axios";
import { Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';





import Loaders from "../Utilities/loaders";
import { ButtonGroup } from "react-bootstrap";
import Modals from "../Utilities/modals";



const ColPosts=()=>{
    const [datas,setDatas]=useState([])
    const [limit,setLimit]=useState(3)
    const [loading, setLoading] = useState(true);

    

 


    

    useEffect(()=>{
        let isCancelled = false;
        if (isCancelled==false){
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            }).then((result)=> setDatas(result.data)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
        }
        return () => {isCancelled=true}
    },[limit])
      
    const handleLimit = (e) => {
        e === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
      };
    if (loading) return <Loaders/>
   
    return (
        <React.Fragment>
            <h2>Albums API</h2>
            
            <p>Dynamic Popup Modal of Post Details, default is {limit}</p>
            <Alert  variant="success">
             Currently showing "{limit}" posts
        </Alert>
           
            {/* <Card  style={{width:"20rem"}}>  */}
                {datas.map((data,i)=>{
                    return(
                        <div style={{width:"20rem"}} className="m-2">

                        
                         <Modals key={i}
                        
                         tittle={data.title}
                         desc={data.body} 
                         id={data.id}
                         userId={data.userId}
                        />
  
                        
                     </div>

                    )
                })}
                        
               

                <ButtonGroup style={{width:"20rem"}} className=" m-2">

                <Button variant="primary" onClick={() => handleLimit("+")}> <b> Add Post</b></Button>
                    {limit >1 &&
                <Button variant="danger" onClick={()=> handleLimit("-")}><b>Remove Post</b></Button>
                }
                </ButtonGroup>
            {/* </Card>  */}
            


      
        </React.Fragment>
    )
}
export default ColPosts;