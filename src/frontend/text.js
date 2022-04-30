import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookmark } from '@fortawesome/free-solid-svg-icons';

function Text(){
    const [color, setColor] = useState('#000000')
    const [border, setBorder] = useState('none')
    return( 
        <div>
            
            <div id = {Styles.desktop}>
                    <div className = 'row' style = {{backgroundColor:'rgb(229, 214, 130)',height:'700px'}}>
                        <div style = {{width:'100%',padding:'20px 20px 0px 20px',height:'50px'}}>
                                        <h1 style = {{color:'white',float:'left'}}> Notepad</h1>
                                    <a style = {{float:'right',marginTop:'5px'}} href = '/'><FontAwesomeIcon icon={faBookmark}  size = 'xl' style = {{color:'white'}}/> </a>
                                    </div>
                        <div className="col-sm-12 col-md-5 col-lg-4">
                            <div id = {Styles.titleContent}>
                                    <div id = {Styles.readScroll}> 
                                        <div style ={{backgroundColor:color}} onClick={()=>{setColor('rgb(229, 214, 130)')}}  id = {Styles.pick}>
                                            <p>Name of content</p>
                                            <p style = {{marginTop:'-20px'}}>Content written here</p>

                                        </div>
                                        
                                    </div>
                            </div>
                        </div>   

                            <div className="col-sm-12 col-md-7 col-lg-8">
                                <div id = {Styles.contentDisc}>
                                    <div id = {Styles.readScroll}>
                                       <form>
                                           <textarea name ='diary' placeholder="Enter text"  id = {Styles.text} onClick={()=>{setBorder('none')}}/>
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
                    <a style = {{float:'right',marginTop:'5px'}} href = '/'><FontAwesomeIcon icon={faBookmark}  size = 'xl' style = {{color:'black'}}/> </a>
                </div>
            <div id = {Styles.titleContent} style= {{height:'700px'}}>
                                    <div id = {Styles.readScroll} style= {{height:'620px'}}> 
                                        
                                        <form>
                                           <textarea name ='diary' placeholder="Enter text" on  id = {Styles.text} style = {{border:border}} onClick={()=>{setBorder('none')}}/>
                                           <input type ='submit' name = 'submit' className="form-control" value = 'Save'/>
                                       </form>
                                                
                                        
                                        
                                    </div>
                            </div>
            </div>
        </div>
    )
}
export default Text