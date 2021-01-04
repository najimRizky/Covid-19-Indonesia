import React from 'react'
import './App.css';
import {Typography} from '@material-ui/core';
import Linkedin from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';


function Footer() {
    return(
        <div className="footer" style={{backgroundColor: 'black', padding: 40, paddingBottom: 20 ,color: 'white'}}>
            <Typography>Selamat datang di website Covid-19 Indonesia. Website berfungsi untuk menampilkan data kasus virus covid-19
                di indonesia secara Up To Date. Hal-hal terkait pengembangan, sumber data, saran, kritik, dan lain sebagainya, dapat dilakukan di menu About. Terima kasih.
            </Typography>
            <a href="https://www.linkedin.com/in/najim-rizky/" target="_blank" rel="noreferrer"><Linkedin fontSize="large" style={{color: 'white', margin: 5}}/></a>
            <a href="https://github.com/najimRizky" target="_blank" rel="noreferrer"><Github fontSize="large" style={{color: 'white', margin: 5}} /></a>
            <a href="https://twitter.com/erSySz" target="_blank" rel="noreferrer"><Twitter fontSize="large" style={{color: 'white', margin: 5}} /></a>
            <a href="https://instagram.com/najim_80" target="_blank" rel="noreferrer"><Instagram fontSize="large" style={{color: 'white', margin: 5}} /></a>
        </div>
    )
}

export default Footer;