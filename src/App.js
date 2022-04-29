import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './frontend/home';

function App() {
  return (


    <div>
       
        
    <Router> 
      
            <Routes>

        <Route exact path = '/' element = {<Home />}/>

   
       {/* <Route path='/aboutUs'  element = {<About/>}/>
       
        <Route path='/marketingService' element = {<MarketingService/>}/>
        
    
            <Route path='/pricing'  element = {< Pricing  key = {products.id} products = {products} /> }/>
        
         
        <Route  path="/contactUs"  element = {<ContactUs/>}/>

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
