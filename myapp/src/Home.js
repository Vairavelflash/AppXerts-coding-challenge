import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import FinalGetData from './FinalGetData';
import FinalPostData from './FinalPostData';

const Home = () =>{
    return(

      <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div>
        <Router>
        <Stack spacing={2} direction="row">
              <Link to="/"> <Button variant="contained">HOME</Button></Link>
                <Link to="/getFinaldata"><Button variant="contained">GET Data</Button></Link>
                <Link to="/postFinaldata"><Button variant="contained">POST Data</Button></Link>
    </Stack>
          
           <Routes>
                 <Route exact path='/' element={< Content />}></Route>
                 <Route exact path='/getFinaldata' element={< FinalGetData />}></Route>
                 <Route exact path='/postFinaldata' element={< FinalPostData />}></Route>
             
          </Routes>
       </Router>
       
        </div>
      </Container>
    </React.Fragment>

       
    )
}

export default Home;

function Content (){
    return <address>
      <br />
      <br />
               This is main Content:<br />
               
           </address>
   }