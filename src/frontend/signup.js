import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


function SignUp() { 
    const [error, setError] = useState('')
    const [data, setData ] = useState({
        username:'',
        email:'',
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
            email:data.email,
            password:data.password
        }
        const result = await axios.post('/signup',{details})
        if(result.data === 'success'){
            window.location.assign('http://localhost:3001/')
        }else{
            setError('invalid details')
            console.log(result.data)
        }
         
        
    }
        

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
	                                <label>Email Address</label>
	                                <input onChange={(e)=>{handle(e)}} type="text" id="email" className="form-control"/>
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
                                    <i style={{fontSize:'13px'}}>Already have an account <a style = {{textDecoration:'none'}} href="/login"> Sign In</a></i>
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
export default SignUp