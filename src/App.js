import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './frontend/home';
import LogIn from './frontend/login';
import SignUp from './frontend/signup';
import Text from './frontend/text';

function App() {
  return (


    <div>
       
        
    <Router> 
      
            <Routes>

        <Route exact path = '/' element = {<Home />}/>

   
        <Route path='/text'  element = {<Text/>}/>
       
        <Route path='/login' element = {<LogIn/>}/>
        
    
            <Route path='/signup'  element = {< SignUp/> }/>
        
       

        </Routes>

 
        

    
    </Router>
 
    </div>    




  );
}

export default App;
