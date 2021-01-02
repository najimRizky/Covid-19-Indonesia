import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '@material-ui/core/Icon';
import TesIcon from '@material-ui/icons/AssignmentReturned';


function ProvinsiHome() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    //const [fetchStatusProv, setFetchStatusProv] = useState(false);
    const [prov, setProv] = useState(undefined)
    //const [currDate, setCurrDate] = useState('')

    useEffect(() => {
        fetchItems();
        showProv();
        //getCurrDate();
        // eslint-disable-next-line
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
        const items = await data.json();
        //console.log(items)
        setItem(items);
        setFetchStatus(true)
    }

    const format = num => {
        const n = String(num),
            p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m},` : m
        )
    }

    /*function formatDate(num){
        let tmp = num.toString()
        if(tmp.length === 1) return '0'+tmp
    }

    const getCurrDate = () =>{
        var today = new Date();
        //setCurrDate(today.getFullYear() + '-' + formatDate(today.getMonth() + 1) + '-' + formatDate(today.getDate()));
    }*/

    function lowerWord(val){
        return val.toLowerCase()
    }

    function showProv(val){
        if(val !== undefined){
            let tmp1="A", tmp2="A";
            tmp1 = val
            for(let i=0;i<item.length; i++){
                tmp2 = item[i].provinsi
                if(lowerWord(tmp2) === lowerWord(tmp1)){
                    console.log(item[i])
                    setProv(item[i])
                    return
                    //setFetchStatusProv(true)
                }
            }
            setProv(undefined);
        }
    }
    
    return (
        <div>
            {fetchStatus ? (
            <div>  
                <p>Cari Berdasarkan Provinsi</p>
                <Grid container justify="center" xs={12}>
                    <Grid item xs={12} md={6} align="center">
                        <Autocomplete
                            id="combo-box-demo"
                            options={item}
                            getOptionLabel={(option) => option.provinsi}
                            style={{ width: 500}}
                            size="small"
                            onInputChange={(event, value) => showProv(value)}
                            renderInput={(params) => <TextField {...params} label="Pilih provinsi" variant="outlined" />}
                        />
                    </Grid>
                </Grid>
                { prov !== undefined ? (
                    <>
                        <h1>{prov.provinsi}</h1>
                        <Grid container justify="center">
                            <Grid container xs={12} md={8} justify="center">
                                <Grid item md={6} xs={12}>
                                    <h2>Kasus</h2> 
                                    {format(prov.kasus)}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <h2>Dirawat </h2>
                                    {format(prov.dirawat)}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <h2>Sembuh </h2>
                                    {format(prov.sembuh)}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <h2>Meninggal </h2>
                                    {format(prov.meninggal)}
                                </Grid>
                                <Grid xs={12}>
                                    <p> Lihat Detail </p>
                                </Grid>
                                <TesIcon></TesIcon>
                            </Grid>
                        </Grid>
                    </>
                    
                ) : (
                    <></>
                )

                }

            </div>
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

*/
