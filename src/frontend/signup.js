import Styles from './style.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function SignUp() { 
    const [color, setColor ] =useState('green')
    const [error, setError] = useState('Password must be at least 8 parameters')
    const [data, setData ] = useState({
        username:'',
        password:'',
        email:''
    })

    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    
    const submit = async(e)=>{
      
        e.preventDefault()
        
        
    }
        
    return(
        
    <div>
    <center>
<div className = "container pt-3" style = {{marginTop:'150px'}}>
          
         
                        <div id={Styles.logDiv}>
                        <span id={Styles.Namestyle}>Login</span>
                        <form onSubmit= {(e) => submit(e) } >
                            <input onChange = {(e)=>handle(e)}  required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="text" id="username" placeholder="Username"/>
                            <input onChange = {(e)=>handle(e)}   required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="password" id="password" placeholder="Password"/>
                            <input onChange = {(e)=>handle(e)}   required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="email" id="email" placeholder="Email"/>
                           <div  id={Styles.err} >
                                <i style={{marginBottom:"-1px",color:color}}>{error}</i>
                                </div>
                            <input style={{marginBottom:"-1px"}} className= "btn btn-outline-primary" type ="submit" value="submit" id = {Styles.newLove} /><br></br>   
                            <a id={Styles.forget_password} href="/forgetPassword">Forget password?</a>                    
                        </form>
                        </div>
                        <div id={Styles.createNewSiteInfo}>
                            <span id={Styles.textfont}>Already have an account?</span> <a style = {{textDecoration:'none'}} href="/login">Login</a><br></br>
                            </div>  
                                     
                           
                    </div>

    </center>
</div>

    )
    
}
export default SignUp