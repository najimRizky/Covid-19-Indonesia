import React from 'react'
import Total from './Total'
import Provinsi from './ProvinsiHome'
import Grafik from './Grafik'

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
