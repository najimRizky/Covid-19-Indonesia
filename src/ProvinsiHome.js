import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';



function ProvinsiHome() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    const [prov, setProv] = useState(undefined)

    useEffect(() => {
        fetchItems();
        showProv();
        Aos.init({duration: 700, once: true});
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
                    //console.log(item[i])
                    setProv(item[i])
                    return
                }
            }
            setProv(undefined);
        }
    }

    return (
        <div style={{marginBottom: '15px'}}>
            {fetchStatus ? (
            <div>  
                <p data-aos="fade-left">Cari Berdasarkan Provinsi</p>
                <Grid container justify="center" xs={12} data-aos="fade-right"> 
                    <Grid item xs={12} md={6} align="center">
                        <Autocomplete
                            id="combo-box-demo"
                            options={item}
                            getOptionLabel={(option) => option.provinsi}
                            style={{ width: 300}}
                            size="small"
                            onInputChange={(event, value) => showProv(value)}
                            renderInput={(params) => <TextField {...params} label="Pilih provinsi" variant="outlined" />}
                        />
                    </Grid>
                </Grid>
                { prov !== undefined ? (
                    <>
                        <h2 data-aos="zoom-in-up" data-aos-delay="0">{prov.provinsi}</h2>
                        <Grid container justify="center" className="provinsiHome">
                            <Grid container xs={12} md={6} justify="center" >
                                <table id="provHome">
                                    <thead>
                                        <th data-aos="fade-right" data-aos-delay="0">Keterangan</th>
                                        <th data-aos="fade-left" data-aos-delay="0">Jumlah</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-aos="fade-right" data-aos-delay="400">Kasus</td>
                                            <td data-aos="fade-left" data-aos-delay="400">{format(prov.kasus)}</td>
                                        </tr>
                                        <tr>
                                            <td data-aos="fade-right" data-aos-delay="800">Dirawat</td>
                                            <td data-aos="fade-left" data-aos-delay="800">{format(prov.dirawat)}</td>
                                        </tr>
                                        <tr>
                                            <td data-aos="fade-right" data-aos-delay="1200">Sembuh</td>
                                            <td data-aos="fade-left" data-aos-delay="1200">{format(prov.sembuh)}</td>
                                        </tr>
                                        <tr>
                                            <td data-aos="fade-right" data-aos-delay="1600">Meninggal</td>
                                            <td data-aos="fade-left" data-aos-delay="1600">{format(prov.meninggal)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Grid data-aos="fade-left" xs={12}>
                                    <Link to={`/provinsi/${prov.provinsi.toLowerCase()}`} style={{textDecoration: 'none'}}>
                                        <Button variant="contained" style={{marginBottom: 10, backgroundColor: '#344fa1', color: 'white'}} size="small" >
                                            Lihat Detail
                                        </Button>
                                    </Link>
                                </Grid>
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
<Grid data-aos="zoom-in-up" data-aos-delay="400"  item md={6} xs={12} style={{color: "rgb(209, 94, 0)"}}>
                                    <h2>Kasus</h2>
                                    <h3>{format(prov.kasus)}</h3>
                                </Grid>
                                <Grid data-aos="zoom-in-up" data-aos-delay="800" item md={6} xs={12} style={{color: "rgb(210, 183, 0 )"}}>
                                    <h2>Dirawat</h2> 
                                    <h3>{format(prov.dirawat)}</h3>
                                </Grid>
                                <Grid data-aos="zoom-in-up" data-aos-delay="1200" item md={6} xs={12} style={{color: "rgb(0, 161, 22)"}}>
                                    <h2>Sembuh</h2> 
                                    <h3>{format(prov.sembuh)}</h3>
                                </Grid>
                                <Grid data-aos="zoom-in-up" data-aos-delay="1600" item md={6} xs={12} style={{color: "rgb(190, 0, 0)"}}>
                                    <h2>Meninggal</h2> 
                                    <h3>{format(prov.meninggal)}</h3>
                                </Grid>
*/
