import './project.css'
import Card from  '../components/projectcard.js'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Project(Props){
    const [data,setdata] = useState([]) 
    const [status,setstatus] = useState(false) 
    useEffect(()=>{
        axios.get("http://localhost:5000/project")
        .then((res)=>{
            setdata(res.data)
            setstatus(true)
            console.log(data)
        });
    },[data])
    return(
        <div>
        <h1>PROJECTS</h1> 
        {
            status?    
       <div id = "project">
       
        <Card src = {p1} heading = "Online Resevation System" details = {data[0].name}></Card>
        <Card src = {p2} heading = "IMDB By using Python" details = {data[1].name}></Card>
        <Card src = {p3} heading = "Learning Management System" details = {data[2].name}></Card>
        <Card src = {p4} heading = "Dictonary " details = {data[3].name}></Card>
       
       </div>
       :null
       }
       </div>
    )
}