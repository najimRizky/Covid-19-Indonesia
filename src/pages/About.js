import React from 'react'
import '../App.css';
import Linkedin from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';


function About() {
    return (
        <div style={{minHeight: "500px"}}>
            <h3>Api Source</h3>
            <p>https://apicovid19indonesia-v2.vercel.app/api</p>
            <br></br>
            <h3>Developer Contact</h3>
            <p>Email: najim.rizky@student.umn.ac.id</p>
            <a href="https://www.linkedin.com/in/najim-rizky/" target="_blank" rel="noreferrer"><Linkedin className="linkedin" fontSize="large" color="primary"/></a>
            <a href="https://github.com/najimRizky" target="_blank" rel="noreferrer"><Github className="github" fontSize="large" style={{color: 'black'}} /></a>
        </div>
    );
}

export default About;