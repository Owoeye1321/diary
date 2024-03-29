import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil ,  faBookmark, faTrashCan,faSignOut} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function Home(){
    
    const local_storage_username = localStorage.getItem('username')
    const local_storage_messageId = localStorage.getItem('messageId')
    const [color, setColor] = useState('#000000')
    const [txtcolor, setTxtColor ] = useState('white')
    const [body, setBody ] = useState([])
    const [blockForI, setBlockForI] = useState('block')
    const [noneForM, setNoneForM ] = useState('none')
    const [getMessage, setGetMessage ] = useState ('Content would be displayed soon')
    const [newTake, setNewTake ] = useState('block')
    const [block, setBlock ] = useState('none')
    const [none, setNone] = useState('none')
   

    const onHandle = async (e)=>{
      //  console.log(e.target.value)
        setGetMessage(e.target.value)
    }

    const LogOut = async()=>{
        const logUserOut = await axios.get('https://diary-app-48602.herokuapp.com/logOut')
        if(logUserOut.data === "success"){
            localStorage.clear()
          window.location.assign('https://diary-app-a890f9.netlify.app/login')
        }
      }
    const SubmitUpdateForDesktop = async (e)=>{
        e.preventDefault()
        const updateResponse = await axios.post('https://diary-app-48602.herokuapp.com/update',{body:getMessage,username:local_storage_username,updateId:local_storage_messageId})
        if(updateResponse.data === 'success'){
            window.location.assign('https://diary-app-a890f9.netlify.app/')
        }

    }
    const SubmitMobile= async (e)=>{
        e.preventDefault()
        const updateResponse = await axios.post('https://diary-app-48602.herokuapp.com/update',{body:getMessage,username:local_storage_username,updateId:local_storage_messageId})
        if(updateResponse.data === 'success'){
            if(blockForI === "none" && noneForM === "block"){
                setBlockForI("block")
                setNoneForM("none")
            }
            window.location.assign('https://diary-app-a890f9.netlify.app/')
        }else{
            console.log(updateResponse.data)
        }

    }

    const trashDiary = async (trashId)=>{
        const trashingId = trashId
        console.log(trashingId)
        await axios.post('https://diary-app-48602.herokuapp.com/trash',{trashingId:trashingId, username:local_storage_username},( error, result)=>{
            if(error){
                console.log('Unable to delete data')
            }else{
                console.log('data deleted successfully')
            }
        })
    
        
    }

    useEffect(()=>{
        
        const response = async ()=>{
            const get_user = localStorage.getItem('username');
                const re_check_for_client_local_storage = await axios.post('https://diary-app-48602.herokuapp.com/check',{username:get_user})
                if(re_check_for_client_local_storage === 'success'){
                    console.log('Logged in successfully')
                }else if(re_check_for_client_local_storage.data === 'failed'){
                    window.location.assign('https://diary-app-a890f9.netlify.app/login')
                   //  console.log(re_check_for_client_local_storage.data)
                }
            
        }
        response()


         const fetchAll = async () =>{
            const get_name  = localStorage.getItem("username")

            const result = await axios.post('https://diary-app-48602.herokuapp.com/read',{username:get_name})
            if(result.data.length && result.data !== 'failed'){
                setBody(result.data)
               // console.log(result.data)
            }

         }
         fetchAll()
        
    },[body])

    const setBodyMessageToRead = async (ObjectId)=>{
        if(newTake === 'block') {
            setNewTake('none');
            setBlock('block')
            
        }
        const messageId = ObjectId
        localStorage.setItem('messageId',ObjectId)
        console.log(messageId)
        const result = await axios.post('https://diary-app-48602.herokuapp.com/fetchBody',{messageId:messageId,username:local_storage_username})
        if(result.data){
            console.log('working...')
         //   console.log(result.data._id)
            setGetMessage(result.data.body)
        }
    }
    const setBodyMessageToReadForMobile = async (ObjectId)=>{
        if(blockForI === "block" && noneForM === "none"){
            setBlockForI("none")
            setNoneForM("block")
        }
        const messageId = ObjectId
        console.log(messageId)
        const result = await axios.post('https://diary-app-48602.herokuapp.com/fetchBody',{messageId:messageId,username:local_storage_username})
        if(result.data){
            console.log('working...')
          //  console.log(result.data._id)
            setGetMessage(result.data.body)
        }

    }


    return( 
        <div>
            <div id = {Styles.desktop}>
            <div className = 'row' style = {{backgroundColor:'rgb(229, 214, 130)',height:'700px'}}>
                    <div style = {{width:'100%',padding:'20px 20px 0px 20px',height:'50px',marginBottom:'20px'}}>
                        <div style={{float:"left"}}>
                        <h1 style = {{color:'white',float:'left'}}> Notepad</h1>
                        </div>
                        <div style={{float:"right"}}>
                        <i style = {{float:'right',marginTop:'5px'}} 
                        onClick={()=>{LogOut()}} className='mx-1'
                           >
                        <FontAwesomeIcon icon={faSignOut}  size = 'xl' style = {{color:'white'}}/> </i>
                                    <a style = {{float:'right',marginTop:'5px'}} href = '/text' className="mx-2">
                                        <FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'white'}}/>
                                         </a>

                        </div>
                                    
                                    
                                </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll} > 
                                           { body.length ? body.map((key)=>{
                                               return(
                                                <div  key={key._id}
                                                style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px',width:'100%',height:'60px'}}
                                                 id = {Styles.pick}
                                                 >
                                                    <div style = {{width:'80%',float:'left'}}>
                                                    <p  onClick={()=>{setBodyMessageToRead(key._id)}}>{key.title}</p>
                                                      <p style = {{marginTop:'-20px',fontSize:'10px'}}>{key.body.substring(0,50)}</p>
                                               
                                                    </div>
                                                  
                                                <div style={{float:"right", width:'5%'}}>
                                                <center>
                                                     <FontAwesomeIcon onClick={()=>{
                                                         trashDiary(key._id)
                                                     }} icon={faTrashCan}  size = 'xl' style = {{color:'white',height:'15px'}}/>
                                                </center>

                                                     </div>
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
                                    setBlock('block')
                                    }} 
                                    id = {Styles.contentDisc} style ={{display:newTake}}>
                                    <div className="p-2" id = {Styles.readScroll}>
                                        <h6>{getMessage}</h6>
                                       
                                    </div>
                                      
                                </div>
                                <div id={Styles.contentDisc} style= {{height:'620px',display:block}}>

                                <div className="py-4" id = {Styles.readScroll} style= {{height:'620px',display:block}}> 
                                <form onSubmit = {(e)=>SubmitUpdateForDesktop(e)}>
                                               <textarea 
                                                   type = 'text'
                                                   value={getMessage}
                                                   required
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
                                           <input  type ='submit' className="form-control my-4" value = 'Update'/>
                                       </form>
                                                
                                    </div>
                                 </div>
                            
                            </div>

                    </div>
            </div>
            <div id = {Styles.mobile}>
            <div style = {{width:'100%',padding:'20px 20px 0px 20px'}}>
                    <h1 style = {{color:'black',float:'left'}}> Notepad</h1>
                    <i style = {{float:'right',marginTop:'5px'}} 
                    onClick={()=>{LogOut()}}
                    >
                        <FontAwesomeIcon icon={faSignOut}  size = 'xl' style = {{color:'black'}}/> </i>

                  
                    <a className="mx-2"  style = {{float:'right',marginTop:'5px'}} href = '/text'>
                        <FontAwesomeIcon icon={faPencil}  size = 'xl' style = {{color:'black'}}/> </a>
                </div>
            <div id = {Styles.titleContent} style = {{display:blockForI}}>
                                    <div id = {Styles.readScroll}> 
                                      { body ? body.map((key)=>{
                                               return(
                                                <div  key={key._id}
                                                style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px',width:'100%',height:'60px'}}
                                                 id = {Styles.pick}
                                                 >
                                                    <div style = {{width:'80%',float:'left'}}>
                                                    <p  onClick={()=>{setBodyMessageToReadForMobile(key._id)}}>{key.title}</p>
                                                      <p style = {{marginTop:'-20px',fontSize:'10px'}}>{key.body.substring(0,50)}</p>
                                               
                                                    </div>
                                                  
                                                <div style={{float:"right", width:'5%'}}>
                                                <center>
                                                     <FontAwesomeIcon onClick={()=>{
                                                          trashDiary(key._id)
                                                     }} icon={faTrashCan}  size = 'xl' style = {{color:'white',height:'15px'}}/>
                                                </center>

                                                     </div>
                                                  </div>
                                               )
                                           }):   <div
                                           style ={{backgroundColor:color,color:txtcolor,marginBottom:'10px'}}
                                            id = {Styles.pick} >
                                                <h1>{getMessage}</h1>
                                             </div>}
                                        
                                    </div>
                            </div>
                            <div style = {{display:noneForM}} className  = 'm-3'>
                                <div onClick={()=> {
                                    setNoneForM('none')
                                    setNone('block')
                                    }} 
                                     id = {Styles.contentDisc}>
                                    <div className="p-2" id = {Styles.readScroll}>
                                        <h6>{getMessage}</h6 >
                                       
                                    </div>
                                      
                                </div>
                            
                            </div>
                            <div id = {Styles.titleContent} style= {{height:'700px',display:none}}>
                                    <div className="py-5" id = {Styles.readScroll} style= {{height:'620px'}}> 
                                        
                                        <form onSubmit = {(e)=>SubmitMobile(e)}>
                                           <textarea 
                                                 type = 'text'
                                                 value={getMessage}
                                                 required
                                                 style={{
                                                 color:'white',    
                                                 width:'100%',
                                                 height:'500px',
                                                 border:'none',
                                                 borderRadius:'10px',
                                                 backgroundColor:' black',
                                                 padding: '10px 10px 10px 10px'
                                           }}  id = 'body' onChange = {(e)=>onHandle(e)}/>
                                           <input  type ='submit' name = 'submit' className="form-control my-3" value = 'Save'/>
                                       </form>
                                                
                                    </div>
                            </div>
            </div>
            <div>
                <center>
                <a href="https://mainstack.me/cyberxurde" style={{color:"black",textDecoration:'none'}}>The Brain box</a>
                </center>
            </div>
        </div>
    )
}
export default Home