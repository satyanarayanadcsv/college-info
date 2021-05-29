
import React from 'react';
import {  useParams } from 'react-router-dom';
import collegedata from '../data/colleges.json';
import cse from '../img/CSE.jpg'
import civil from '../img/Civil.jpg'
import ece from '../img/ece.jpg'
import eee from '../img/eee.jpg'
import mech from '../img/MECH.jpg'
import it from '../img/IT.jpg'
import AI from '../img/AI.jpg'
import CE from '../img/CE.jpg'

export const Collegeview = () => {

    const { id } = useParams()
  
    return (
        <div>
           {
               collegedata.map((da)=>
                {
                    if(da.id === id){
                        return (
                            <div >
                            <center><h1>{da.name}</h1></center><br/>
                            <p>{da.desc}</p>
                            <span class="btn"> &nbsp;Counselling Code : <b>{da.code}</b> &nbsp;</span> <br/><br/>
                            <center><h2>Courses Offered</h2></center>
                            <div className="course-container">
                            {da.courses.map(course =>{ 
                                var add = null
                                if(course === "Computer Science Engineering"){
                                    add=cse
                                }
                                else if (course === "Civil Engineering")
                                {
                                    add = civil 
                                }
                                else if (course === "Mechanical Engineering")
                                {
                                    add = mech
                                }
                                else if (course === "Electrical and Electronics Engineering")
                                {
                                    add = eee
                                }
                                else if (course === "Information Technology")
                                {
                                    add = it
                                }
                                else if(course === "Artificial Intelligence & Data Science"){
                                    add = AI
                                }
                                else if(course === "Chemical Engineering"){
                                    add = CE
                                }
                                else 
                                {
                                    add = ece
                                }
                                return (
                                 <div className='course-part'>
                                 <div className='course-img'>
                                     
                                     <img src={add} alt="not found" />
                                 </div>
                                 <button className='course-btn' disabled="true">{course}</button>
                             </div>
                            )})}     
                            </div> 
                            <h3>For more details visit: <a href={da.website}>{da.website}</a></h3>                    
                            </div>                    
                        )
                    }
                    else {
                        return null;
                    }
                }
                )
           }
        </div>
    )
}
