import React, {useState, useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import Grid from '@material-ui/core/Grid'
import { Typography, Divider } from '@material-ui/core';
import ChartJenisKelamin from './DoughnutChart'
import ChartKelompokUsia from './BarChart'
import Aos from "aos";
import "aos/dist/aos.css";

function ProvDetail({match}) {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    const [prov, setProv] = useState(undefined)
    

    useEffect(() => {
        fetchItems();
        showProv();  
        Aos.init({duration: 1000, once: true});
        // eslint-disable-next-line
    },[fetchStatus])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more');
        const items = await data.json();
        //console.log(items)
        setItem(items);
        setFetchStatus(true)
    }

    const format = num => {
        return num.toLocaleString('en-US')
    }

    function showProv() {
        //console.log(fetchStatus)
        if(fetchStatus){
            for(let i=0; i<34; i++){
                if(item[i].provinsi === match.params.id.toUpperCase()){
                    setProv(item[i])
                    // console.log(item[i].kelompok_umur)
                    break;
                }
            }
        }
    }

    /*function genderPercent(val) {
        return (val / (prov.jenis_kelamin["laki-laki"] + prov.jenis_kelamin.perempuan) * 100).toFixed(2) + '%'
    }*/

    function deathRate(val) {
        return (val/prov.kasus*100).toFixed(2) + '%'
    }

    return (
        <div>
            { prov !== undefined ? (   
                <Grid container justify="center" >
                    <Grid item xs={12} data-aos="fade-down" >
                        <h2>{match.params.id.toUpperCase()}</h2>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6" data-aos="fade-up" >Tingkat Kematian: <b style={{color: 'red', fontSize: 'normal'}}>({deathRate(prov.meninggal)})</b></Typography>
                        <br></br>
                    </Grid>
                    <Grid container md={7} justify="center">
                        <Grid data-aos="fade-down-right" item md={6} xs={10} style={{borderBottom: '1px solid #00C9C7', borderRight: '1px solid #00C9C7'}} className="provDetail">
                            <Typography > Kasus</Typography>
                            <Typography  variant="h5" >{format(prov.kasus)}</Typography>
                            <Typography >(+{format(prov.penambahan.positif)})</Typography>
                        </Grid>
                        <Grid data-aos="fade-down-left" item md={6} xs={10} style={{borderBottom: '1px solid #00C9C7', borderLeft: '1px solid #00C9C7'}} className="provDetail">
                            <Typography > Meninggal</Typography>
                            <Typography variant="h5">{format(prov.meninggal)}</Typography>
                            <Typography >(+{format(prov.penambahan.meninggal)})</Typography>

                        </Grid>
                        <Grid  data-aos="fade-up-right" item md={6} xs={10} style={{borderTop: '1px solid #00C9C7', borderRight: '1px solid #00C9C7'}} className="provDetail">
                            <Typography > Sembuh</Typography>
                            <Typography  variant="h5">{format(prov.sembuh)}</Typography>
                            <Typography >(+{format(prov.penambahan.sembuh)})</Typography>

                        </Grid>
                        <Grid  data-aos="fade-up-left" item md={6} xs={10} style={{borderTop: '1px solid #00C9C7', borderLeft: '1px solid #00C9C7'}} className="provDetail">
                            <Typography> Dirawat</Typography>
                            <Typography variant="h5">{format(prov.dirawat)}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <br></br>
                            <Divider/>
                        </Grid>
                        <Grid container xs={8} justify="center" >
                            <Grid item xs={12} data-aos="fade-up">
                                <h3>Jenis Kelamin</h3>
                            </Grid>
                            
                            <Grid item  xs={12} data-aos="fade-up">
                                <ChartJenisKelamin data={prov.jenis_kelamin}/>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} justify="center">
                            <Grid item xs={12} data-aos="fade-up">
                                <br></br>
                                <br></br>
                                <h3>Kelompok Usia</h3>
                            </Grid>
                            <Grid xs={10} data-aos="fade-up">
                                <ChartKelompokUsia data={prov.kelompok_umur} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}><br></br></Grid>
                </Grid>
            ) : (
                <>
                    <CircularProgress className="margin-top-20" />
                </>
            )
            }
        </div>
    );
}

export default ProvDetail;

/*
<Typography >0-5 Tahun: {format(prov.kelompok_umur["0-5_tahun"])}</Typography>
                                <Typography >6-18 Tahun: {format(prov.kelompok_umur["6-18_tahun"])}</Typography>
                                <Typography >19-30 Tahun: {format(prov.kelompok_umur["19-30_tahun"])}</Typography>
                                <Typography >31-45 Tahun: {format(prov.kelompok_umur["31-45_tahun"])}</Typography>
                                <Typography >46-59 Tahun: {format(prov.kelompok_umur["46-59_tahun"])}</Typography>
                                <Typography >Diatas 60 Tahun: {format(prov.kelompok_umur["≥60_tahun"])}</Typography>


                                 <Grid item xs={6} style={{color: '#FF5733'}}>
                                <Typography >Laki-Laki</Typography>
                                <Typography variant="h5">{format(prov.jenis_kelamin["laki-laki"])}</Typography>
                                <Typography>{genderPercent(prov.jenis_kelamin["laki-laki"])}</Typography>
                            </Grid>
                            <Grid item xs={6} style={{color: '#6F26AB'}}>
                                <Typography>Perempuan</Typography>
                                <Typography variant="h5">{format(prov.jenis_kelamin.perempuan)}</Typography>
                                <Typography>{genderPercent(prov.jenis_kelamin.perempuan)}</Typography>
                            </Grid>

                            <Grid  xs={12}  justify="center">
                                    <li>0-5 Tahun: {format(prov.kelompok_umur["0-5_tahun"])}</li>
                                    <li>6-18 Tahun: {format(prov.kelompok_umur["6-18_tahun"])}</li>
                                    <li>19-30 Tahun: {format(prov.kelompok_umur["19-30_tahun"])}</li>
                                    <li>31-45 Tahun: {format(prov.kelompok_umur["31-45_tahun"])}</li>
                                    <li>46-59 Tahun: {format(prov.kelompok_umur["46-59_tahun"])}</li>
                                    <li>Diatas 60 Tahun: {format(prov.kelompok_umur["≥60_tahun"])}</li>
                            </Grid>
                                */