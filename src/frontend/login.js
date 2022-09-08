import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


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
    }

    const submit = async (e)=>{
        e.preventDefault()
        const details = {
            username:data.username,
            password:data.password
        }
        const result = await axios.post('https://diary-app-48602.herokuapp.com/login',{details})
        if(result.data === 'success'){
            window.location.assign('https://diary-app-a890f9.netlify.app/')
            localStorage.setItem('username',data.username)

        }else{
            setError('invalid details')
            console.log(result.data)
        }
         
        
    }
        
    useEffect(()=>{
        const username = localStorage.getItem(username);
        console.log(username)
    })
    return(

    <div>
     <div className='row'>
                <div className='col-sm-12 col-md-3 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-4' style = {{padding:'150px 50px 50px 50px'}}>
	                
	                        <h4 className="mb-3">Login</h4>
	                        <form className="input_style_1" onSubmit={(e)=>{submit(e)}}>
	                            <div className="form-group">
	                                <label>Username</label>
	                                <input onChange={(e)=>{handle(e)}} type="text" id="username" className="form-control"/>
	                            </div>
	                            <div className="form-group">
	                                <label> Password</label>
	                                <input onChange={(e)=>{handle(e)}}  type="password" id="password" className="form-control"/>
	                            </div>
                                <div  style={{ fontSize: '10px' ,marginBottom: '0px'}}>
                                    <center>
                                    <i style={{marginBottom:"-1px",color:'red'}}>{error}</i>
                                    </center>
                                </div>
	                            <div className="clearfix mb-3">
	                                <div className="float-left" style = {{float:'left'}}>
                                    <i style={{fontSize:'13px'}}>Don't have an account? <a style = {{textDecoration:'none'}} href="/signup">Sign Up</a></i>
	                                </div>
	                                <div className="float-right" style ={{float:'right'}}>
	                                    <a  style={{fontSize:'13px',textDecoration:'none'}}id="forgot" href="/forgetpassword">Forgot Password?</a>
	                                </div>
	                            </div>
	                            <input type= 'submit' className = 'form-control success mb-3'  />
	                        </form>
                        <center>© 2021 DIARY PROJECT - All Rights Reserved.</center>
                        </div>

        
                <div className='col-sm-12 col-md-3 col-lg-4'>

                </div>
                

            </div>
</div>

    )
    
}
export default LogIn