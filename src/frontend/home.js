import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil ,  faBookmark} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function Home(){
    const [color, setColor] = useState('#000000')
    const [txtcolor, setTxtColor ] = useState('white')
    const [log, setLog] = useState([])
    const [body, setBody ] = useState([])
    const [blockForI, setBlockForI] = useState('block')
    const [noneForM, setNoneForM ] = useState('none')
    const [getMessage, setGetMessage ] = useState ('Content would be displayed soon')
    const [newTake, setNewTake ] = useState('block')
    const [updateDisplay, setUpdateDisplay ] = useState('none')

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
        const result = await axios.post('/insert',{details})
        if(result.data === 'success'){
           alert('Data saved successfully')
            window.location.assign('http://localhost:3001/')
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
        const result = await axios.post('/insert',{details})
        if(result.data === 'success'){
            alert('Data saved successfully')
            window.location.assign('http://localhost:3001/')
        }else{
            console.log(result.data)
        }

    }

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
         fetchAll()
            const interval = setInterval (()=>{
                fetchAll()
            },60000)

            return()=>{
                    clearInterval(interval)
            }
        
    },[])

    const setBodyMessageToRead = async (ObjectId)=>{
        if(newTake === 'none') setNewTake('block');
        const messageId = ObjectId
        console.log(messageId)
        const result = await axios.post('/fetchBody',{messageId:messageId})
        if(result.data){
            setGetMessage(result.data.body)
        }
    }

  console.log(body)

    return( 
        <div>
            <div id = {Styles.desktop}>
            <div className = 'row' style = {{backgroundColor:'rgb(229, 214, 130)',height:'700px'}}>
                    <div style = {{width:'100%',padding:'20px 20px 0px 20px',height:'50px',marginBottom:'20px'}}>
                        <div style={{float:"left"}}>
                        <h1 style = {{color:'white',float:'left'}}> Notepad</h1>
                        </div>
                        <div style={{float:"right"}}>
                                    <a style = {{float:'right',marginTop:'5px'}} href = '/text'>
                                        <FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'white'}}/>
                                         </a>

                        </div>
                                    
                                    
                                </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll}> 
                                           { body ? body.map((key)=>{
                                               return(
                                                <div key={key._id}
                                                style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                                 id = {Styles.pick}>
                                                     <p  onClick={()=>{setBodyMessageToRead(key._id)}}>{key.title}</p>
                                                      <p style = {{marginTop:'-20px',fontSize:'10px'}}>{key.body.substring(0,30)}</p>

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
                                <div onClick={()=> {
                                    setNewTake('none');
                                    setUpdateDisplay('block')
                                    }} 
                                    id = {Styles.contentDisc} style ={{display:newTake}}>
                                    <div className="p-2" id = {Styles.readScroll}>
                                        <h6>{getMessage}</h6>
                                       
                                    </div>
                                      
                                </div>
                                <div id={Styles.contentDisc}>
                                <div id = {Styles.readScroll} style= {{height:'620px',display:updateDisplay}}> 
                                        
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
                                           <input type ='submit' name = 'submit' className="form-control" value = 'send'/>
                                       </form>
                                                
                                    </div>
                                 </div>
                            
                            </div>

                    </div>
            </div>
            <div id = {Styles.mobile}>
            <div style = {{width:'100%',padding:'20px 20px 0px 20px'}}>
                    <h1 style = {{color:'black',float:'left'}}> Notepad</h1>
                    <a className="mx-2" style = {{float:'right',marginTop:'5px'}} href = '/'>
                        <FontAwesomeIcon icon={faBookmark}  size = 'xl' style = {{color:'black'}}/>
                        </a>
                    <a style = {{float:'right',marginTop:'5px'}} href = '/text'><FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'black'}}/> </a>
                </div>
            <div id = {Styles.titleContent} style = {{display:blockForI}}>
                                    <div id = {Styles.readScroll}> 
                                    { body ? body.map((key)=>{
                                               return(
                                                <div key={key._id}
                                                style ={{backgroundColor:color,marginBottom:'10px'}}
                                                 id = {Styles.pick}>
                                                       <p  
                                                       onClick={()=> { 
                                                           setBodyMessageToRead(key._id);
                                                           setBlockForI('none')
                                                           setNoneForM('block')
                                                           }}>
                                                           {key.title}</p>
                                                      <p style = {{marginTop:'-20px',fontSize:'10px'}}>{key.body.substring(0,30)}</p>

                                                  </div>
                                               )
                                           }) :   <div
                                           style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                            id = {Styles.pick}>
                                                <h1>{getMessage}</h1>
                                             </div>}
                                        
                                    </div>
                            </div>
                            <div style = {{display:noneForM}} className  = 'm-3'>
                                <div onClick={()=> {
                                    setNoneForM('none')
                                    setUpdateDisplay('block')
                                    }} 
                                     id = {Styles.contentDisc}>
                                    <div className="p-2" id = {Styles.readScroll}>
                                        <h6>{getMessage}</h6 >
                                       
                                    </div>
                                      
                                </div>
                            
                            </div>
                            <div id = {Styles.titleContent} style= {{height:'700px',display:updateDisplay}}>
                                    <div id = {Styles.readScroll} style= {{height:'620px'}}> 
                                        
                                        <form onSubmit = {(e)=>SubmitMobile(e)}>
                                        <input 
                                        className="form-control" 
                                        type="text" 
                                        required 
                                        onChange = {(e)=>onHandle(e)} 
                                        placeholder="Title" 
                                        id="title" 
                                        style= {{
                                        color:'black',
                                        borderRadius:'5px',
                                        marginBottom: '10px'
                                        }}/>
                                           <textarea 
                                                 required
                                                 name ='diary' 
                                                 placeholder="Enter text" 
                                                 style={{
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
export default Home