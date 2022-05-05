import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
function Home(){
    const [color, setColor] = useState('#000000')
    const [txtcolor, setTxtColor ] = useState('white')
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
                                        <h1>Content would be displayed here</h1>
                                        <h1>Content would be displayed here</h1>
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
                                        <div style ={{backgroundColor:color}} onClick={()=>{setColor('rgb(229, 214, 130)')}}  id = {Styles.pick}>
                                            <p>Name of content</p>
                                            <p style = {{marginTop:'-20px'}}>Content written here</p>
                                                
                                        </div>
                                        
                                    </div>
                            </div>
            </div>
        </div>
    )
}
export default Home