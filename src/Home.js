import React from 'react'
import Total from './Total'
import Provinsi from './ProvinsiHome'

function Home() {
    
    return (
        <div>
            <Total/>
            <hr style={{marginTop: 20, marginBottom: 20}}></hr>
            <Provinsi/>
            <p>"This website is still under development"</p>

        </div>
    );
}

export default Home;
