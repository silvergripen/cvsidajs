import React from "react"
import { Container } from "react-bootstrap"
//import MyWork from "../MyWork.js"
import work from '../json/Work.json'
import education from '../json/Education.json'
import './Components.css'



export const CvComponent = () => {
    return (
        <Container className={"w-75 h-100"}>
            <div className="pb-5">
            {
                 work && work.map( work => {
                     return(
                         <div className=" p-1 ">
                              <div className="card p-2 " key={work.id}>
                               <div className="cardbody box">
                                  <h4 className="card-title">{work.company}</h4> 
                                  <h5 className="card-title">{work.title}</h5>
                                  <p className="card-text">{work.datestart} {work.dateend}</p> 
                                </div>
                        
                             </div>
                        </div>
                    
                )
            })
            
        }
            </div>
            <div>
            {
                education && education.map( education => {
                    return(
                        <div className=" p-1 ">
                            <div className="card p-2 " key={education.id}>
                                <div className="cardbody box">
                                      <h4 className="card-title">{education.school}</h4> 
                                      <h5 className="card-title">{education.education}</h5>
                                      <p className="card-text">{education.datestart} {education.dateend}</p> 
                                </div>
                        
                             </div>
                     </div>
                    
                )
            })
        }
            </div>
        
        
        </Container>
      
            )
}