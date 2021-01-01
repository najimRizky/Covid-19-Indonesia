import React, {useState, useEffect} from 'react'
import './App.css';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';


function ProvinsiHome() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    //const [currDate, setCurrDate] = useState('')

    useEffect(() => {
        fetchItems();
        //getCurrDate();
        // eslint-disable-next-line
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
        const items = await data.json();
        console.log(items)
        setItem(items);
        setFetchStatus(true)
    }

    /*const format = num => {
        const n = String(num),
            p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m},` : m
        )
    }

    function formatDate(num){
        let tmp = num.toString()
        if(tmp.length === 1) return '0'+tmp
    }

    const getCurrDate = () =>{
        var today = new Date();
        //setCurrDate(today.getFullYear() + '-' + formatDate(today.getMonth() + 1) + '-' + formatDate(today.getDate()));
    }*/

    return (
        <div>
            {fetchStatus ? (
            <>
                <h1>Provinsi</h1>
            </>
            )
            :(  <>
                    <CircularProgress className="margin-top-20" />
                </>
            )
            }
        </div>
    );
}

export default ProvinsiHome;

/*
<Autocomplete
                    id="combo-box-demo"
                    options={item}
                    getOptionLabel={(items) => items.provinsi}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
*/
