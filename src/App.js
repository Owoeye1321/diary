import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './frontend/home';
import LogIn from './frontend/login';
import SignUp from './frontend/signup';
import Text from './frontend/text';
import Forgetpassword from './frontend/forgetpassword';

function App() {
  return (


    <div>
       
        
    <Router> 
      
            <Routes>

        <Route exact path = '/' element = {<Home />}/>

   
        <Route path='/text'  element = {<Text/>}/>
       
        <Route path='/login' element = {<LogIn/>}/>
        
    
            <Route path='/signup'  element = {< SignUp/> }/>


            <Route path='/forgetPassword'  element = {< Forgetpassword/> }/>



        
       

        </Routes>

 
        

    
    </Router>
 
    </div>    




  );
}

export default App;
