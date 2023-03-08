
import React from 'react';
import Albums from './components/Albums/main.album';
import MainLayouts from './components/Layouts/MainLayouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts/main.posts';
const App= () =>{
  return(
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>React Fetching API</h1>}/>           
            <Route path="/albums" element={<Albums/>}/>           
            <Route path="/posts" element={<Posts/>}/>  
            <Route path="*" element={<h1>404 Not Found</h1>}/>

          </Routes>
        </Router>
      </MainLayouts>
      
    </>
    )
}

export default App;

// const [limit, setLimit]= useState(2)
// const [name, setName]= useState('Ihsanss')
// const temps = useRef(name)
// const incNum=()=>{
//   if(limit<10){
//     setLimit(limit+1)
//   }
//   else{
//     setLimit(15)
//   }
// }
// useEffect(()=>{
//   setName(temps.current.value)
  
// },[limit])

// <Container>   
      // {/* <center> */}
        // {/* <input  placeholder="name" onChange={(e) => setName(e.target.value)}/> */}
      //   {/* <input  ref={temps} defaultValue={temps.current}/>
      //   <button onClick={incNum}>Naikkan Limit</button>
      //   <button onClick={()=>setLimit(limit-1)}>Turunkan Limit</button>
      //   <button onClick={()=>setName("wawan")}>ganti namas</button>
      // </center>
      // <Testing tittle="Hello bang" description="apaansih bang"/> */}
    // </Container>
