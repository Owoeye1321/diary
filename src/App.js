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
        
         
       {/* <Route  path="/contactUs"  element = {<ContactUs/>}/>

        <Route  path="/cart"  element = {<Cart/>}/>

        <Route  path="/login"  element = {<Login/>}/>

        <Route  path="/signUp"  element = {<SignUp/>}/>
        <Route  path="/simplePaystackPaymentPageForAddriggo"  element = {<App/>}/> */}

        </Routes>

 
        

    
    </Router>
 
    </div>    




  );
}

export default App;
