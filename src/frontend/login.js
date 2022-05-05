import Styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function LogIn() {
    const [error, setError] = useState('')
    const [data, setData ] = useState({
        username:'',
        password:''
    })
    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(data)
    }

    const submit = async (e)=>{
        e.preventDefault()
        const details = {
            username:data.username,
            password:data.password
        }
         
        
    }


    return(

    <div>
    <center>
<div className = "container pt-3" style = {{marginTop:'150px'}}>
          
         
                        <div id={Styles.logDiv} >
                        <span id={Styles.Namestyle}>Login</span>
                        <form onSubmit= {(e) => submit(e) }>
                            <input onChange = {(e)=>handle(e)} value = {data.name }  id="username" required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="text" placeholder="Username"/>
                            <input onChange = {(e)=>handle(e)} value = {data.password} id="password" required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px",
                                    marginBottom:"5px"
                            }} type="password"  placeholder="Password"/>
                            <div  id={Styles.err} >
                                <i style={{marginBottom:"-1px",color:'red'}}>{error}</i>
                                </div>
                            <input style={{marginBottom:"-1px"}} className= "btn btn-outline-primary"   id = {Styles.newLove} type ="submit" value="submit"/><br></br>   
                            <a id={Styles.forget_password} href="/forgetPassword">Forget password?</a>                    
                        </form>
                        </div>
                        <div id={Styles.createNewSiteInfo}>
                            <span id={Styles.textfont}>New to My Profile?</span> <a style = {{textDecoration:'none'}} href="/SignUp">Create an account</a><br></br>
                            </div>  
                                     
                           
                    </div>

    </center>
</div>

    )
    
}
export default LogIn