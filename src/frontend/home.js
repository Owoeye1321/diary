import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function Home(){
    const [color, setColor] = useState('#000000')
    const [txtcolor, setTxtColor ] = useState('white')
    const [body, setBody ] = useState([])
    const [getMessage, setGetMessage ] = useState ('Content would be displayed soon')
 

    useEffect(()=>{
        const response = async ()=>{
            let check = await axios.get('/check');
            if(check.data ==='failed') window.location.assign('http://localhost:3001/login')
            console.log(check.data)
        }
        response()


         const fetchAll = async () =>{
            const result = await axios.get('/read')
            if(result.data.length){
                setBody(result.data)
            }else{
                console.log('Invalid data')
            }

         }
            const interval = setInterval (()=>{
                fetchAll()
            },1000)

            return()=>{
                    clearInterval(interval)
            }
        
    },[])

    const setBodyMessageToRead = async (ObjectId)=>{
        const messageId = ObjectId
        const result = await axios.post('/fetchBody',messageId)
        if(result.data){
            const details = result.data
            details.map((key)=>{
                setGetMessage(key.body)
            })
        }
    }

  console.log(body)

    return( 
        <div>
            <div id = {Styles.desktop}>
            <div className = 'row' style = {{backgroundColor:'rgb(229, 214, 130)',height:'700px'}}>
                    <div style = {{width:'100%',padding:'20px 20px 0px 20px',height:'50px',marginBottom:'20px'}}>
                                    <h1 style = {{color:'white',float:'left'}}> Notepad</h1>
                                    <a style = {{float:'right',marginTop:'5px'}} href = '/text'><FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'white'}}/> </a>
                                </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll}> 
                                           { body ? body.map((key)=>{
                                               return(
                                                <div key={key._id}
                                                style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                                 id = {Styles.pick}>
                                                     <p  onClick={()=>setBodyMessageToRead(key._id)}>{key.title}</p>
                                                      <p style = {{marginTop:'-20px'}}>{key.body}</p>

                                                  </div>
                                               )
                                           }) :   <div
                                           style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                            id = {Styles.pick}>
                                                <p>Empty notes</p>
                                                 <p style = {{marginTop:'-20px'}}>Start saving notes</p>

                                             </div>}
                                            
                                    </div>
                            </div>
                        </div>   

                            <div className="col-sm-12 col-md-7 col-lg-8">
                                <div id = {Styles.contentDisc}>
                                    <div id = {Styles.readScroll}>
                                        <h1>{getMessage}</h1>
                                       
                                    </div>
                                      
                                </div>
                            
                            </div>

                    </div>
            </div>
            <div id = {Styles.mobile}>
            <div style = {{width:'100%',padding:'20px 20px 0px 20px'}}>
                    <h1 style = {{color:'black',float:'left'}}> Notepad</h1>
                    <a style = {{float:'right',marginTop:'5px'}} href = '/text'><FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'black'}}/> </a>
                </div>
            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll}> 
                                    { body ? body.map((key)=>{
                                               return(
                                                <div key={key._id}
                                                style ={{backgroundColor:color,marginBottom:'10px'}}
                                                 id = {Styles.pick}>
                                                       <p  onClick={()=>setBodyMessageToRead(key._id)}>{key.title}</p>
                                                      <p style = {{marginTop:'-20px'}}>{key.body}</p>

                                                  </div>
                                               )
                                           }) :   <div
                                           style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                            id = {Styles.pick}>
                                                <h1>{getMessage}</h1>
                                             </div>}
                                        
                                    </div>
                            </div>
            </div>
        </div>
    )
}
export default Home