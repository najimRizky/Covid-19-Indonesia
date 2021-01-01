import React, {useState, useEffect} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//import axios from 'axios'

function Home() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);

    useEffect(() => {
        fetchItems();
        
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more');
        const items = await data.json();
        console.log(items)
        setItem(items);
        setFetchStatus(true)
    }

    return (
        <div>
            {fetchStatus ? (
            <>
                <h1>Total:</h1>
                <Grid container xs={12} justify="center" spacing={3} >
                    <Grid item xs={3} >
                        <Paper>
                            <h2>Positif: {item.total.positif}</h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper>
                            <h2>Sembuh: {item.total.sembuh}</h2>
                        </Paper>
                    </Grid>
                </Grid>
                <h1>Pertambahan:</h1>
                <h2>Kasus Baru: +{item.penambahan.positif}</h2>
                <h2>Sembuh: +{item.penambahan.sembuh}</h2>
                <h3>Last Update: {item.penambahan.tanggal}</h3>
            </>
            ):
            (   <h2>Loading..</h2>
            )
            }
        </div>
    );
}

export default Home;

/*

*/




