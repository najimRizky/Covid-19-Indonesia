import React from 'react'
import Total from './Total'
import Provinsi from './ProvinsiHome'

function Home() {
    
    return (
        <div>
            <Total/>
            <hr style={{marginTop: 20, marginBottom: 20}}></hr>
            <Provinsi/>
            <p>Nb: <i>Website ini masih dalam proses pengembangan</i></p>

        </div>
    );
}

export default Home;
