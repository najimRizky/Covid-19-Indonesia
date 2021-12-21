import React from 'react'
import Total from "../components/Total"
import Provinsi from '../components/ProvinsiHome'
import Grafik from "../components/Grafik"

function Home() {
    
    return (
        <div>
            <Total/>
            <hr style={{marginTop: 20, marginBottom: 20}}></hr>
            <Grafik/>
            <hr style={{marginTop: 20, marginBottom: 20}}></hr>
            <Provinsi/>
        </div>
    );
}

export default Home;
