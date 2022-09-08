import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

function Text(){
    const [log, setLog] = useState([])
    const [color, setColor] = useState('#000000')
    const [txtcolor, setTxtColor ] = useState('white')

    const onHandle = async (e)=>{
        const newData = {...log}
        newData[e.target.id] = e.target.value
        setLog(newData)
    }

    const SubmitDesktop = async (e)=>{
        e.preventDefault()
        const details = {
            title:log.title,
            body:log.body
        }
        const result = await axios.post('https://diary-app-48602.herokuapp.com/insert',{details})
        if(result.data === 'success'){
           alert('Data saved successfully')
            window.location.assign('https://diary-app-a890f9.netlify.app/')
        }else{
            console.log(result.data)
        }

    }
    const SubmitMobile= async (e)=>{
        e.preventDefault()
        const details = {
            title:log.title,
            body:log.body
        }
        const result = await axios.post('https://diary-app-48602.herokuapp.com/insert',{details})
        if(result.data === 'success'){
            alert('Data saved successfully')
            window.location.assign('https://diary-app-a890f9.netlify.app/')
        }else{
            console.log(result.data)
        }

    }

    useEffect(()=>{
        const response = async ()=>{
            // const re_check_for_client_session = await axios.get('https://diary-app-48602.herokuapp.com/check');
            // if(re_check_for_client_session.data ==='success'){
            //         console.log('Logged in successfully')
            // }
                const re_check_for_client_local_storage = await axios.post('https://diary-app-48602.herokuapp.com/check',username)
                if(re_check_for_client_local_storage === 'success'){
                    console.log('Logged in successfully')
                }else{
                    window.location.assign('https://diary-app-a890f9.netlify.app/login')
                     console.log(re_check_for_client_local_storage.data)
                }
             
        }
        response()
    })

    return( 
        <div>
            
            <div id = {Styles.desktop}>
                    <div className = 'row' style = {{backgroundColor:'rgb(229, 214, 130)',height:'700px'}}>
                        <div style = {{width:'100%',padding:'20px 20px 0px 20px',height:'50px',marginBottom:'20px'}}>
                                        <h1 style = {{color:'white',float:'left'}}> Notepad</h1>
                                    <a style = {{float:'right',marginTop:'5px'}} href = '/'><FontAwesomeIcon icon={faBookmark}  size = 'xl' style = {{color:'white'}}/> </a>
                                    </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll}> 
                                        <div style ={{backgroundColor:color,color:txtcolor}} onClick={()=>{setColor('white');setTxtColor('black')}}  id = {Styles.pick}>
                                            <p>Name of content</p>
                                            <p style = {{marginTop:'-20px'}}>Content written here</p>

                                        </div>
                                        
                                    </div>
                            </div>
                        </div>   

                            <div className="col-sm-12 col-md-7 col-lg-8">
                                <div id = {Styles.contentDisc}>
                                    <div id = {Styles.readScroll}>
                                       <form onSubmit = {(e)=>SubmitDesktop(e)}>
                                       <input className="form-control" type="text" required onChange = {(e)=>onHandle(e)} placeholder="Title" id="title" style= {{color:'white',borderRadius:'5px',marginBottom: '10px',backgroundColor:'black',marginTop:'20px'}}/>
                                           <textarea required name ='diary' placeholder="Enter text"  style={{
                                                   color:'white',    
                                                   width:'100%',
                                                   height:'500px',
                                                   border:'none',
                                                   borderRadius:'10px',
                                                   backgroundColor:' black',
                                                   padding: '10px 10px 10px 10px'
                                           }}  id = 'body' onChange = {(e)=>onHandle(e)}/>
                                           <input type ='submit' name = 'submit' className="form-control" value = 'save'/>
                                       </form>
                                    </div>
                                      
                                </div>
                            
                            </div>

                    </div>
            </div>
            <div id = {Styles.mobile}>
            <div style = {{width:'100%',padding:'20px 20px 0px 20px'}}>
                    <h1 style = {{color:'black',float:'left'}}> Notepad</h1>
                    <a style = {{float:'right',marginTop:'5px'}} href = '/'><FontAwesomeIcon icon={faBookmark}  size = 'xl' style = {{color:'black'}}/> </a>
                </div>
            <div id = {Styles.titleContent} style= {{height:'700px'}}>
                                    <div id = {Styles.readScroll} style= {{height:'620px'}}> 
                                        
                                        <form onSubmit = {(e)=>SubmitMobile(e)}>
                                        <input className="form-control" type="text" required onChange = {(e)=>onHandle(e)} placeholder="Title" id="title" style= {{color:'black',borderRadius:'5px',marginBottom: '10px'}}/>
                                           <textarea required name ='diary' placeholder="Enter text" style={{
                                                 color:'white',    
                                                 width:'100%',
                                                 height:'500px',
                                                 border:'none',
                                                 borderRadius:'10px',
                                                 backgroundColor:' black',
                                                 padding: '10px 10px 10px 10px'
                                           }}  id = 'body' onChange = {(e)=>onHandle(e)}/>
                                           <input type ='submit' name = 'submit' className="form-control" value = 'Save'/>
                                       </form>
                                                
                                        
                                        
                                    </div>
                            </div>
            </div>
        </div>
    )
}
export default Text