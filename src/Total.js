import React, {useState, useEffect} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';

function HomeTotal() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    const [currDate, setCurrDate] = useState('')

    useEffect(() => {
        fetchItems();
        getCurrDate();
        Aos.init({duration: 1000, once: true});
        // eslint-disable-next-line
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more');
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

    function formatDate(num){
        let tmp = num.toString()
        if(tmp.length === 1) return '0'+tmp;
        else return tmp;
    }

    const getCurrDate = () =>{
        var today = new Date();
        setCurrDate(today.getFullYear() + '-' + formatDate(today.getMonth() + 1) + '-' + formatDate(today.getDate()));
    }

    function tingkatKematian(){
        var tmp = (Number(item.total.meninggal)/Number(item.total.positif)*100).toFixed(2)
        // return tmp.toString() + '%';
        return tmp;
    }

    return (
        <div>
            {fetchStatus ? (
            <>
                <h2 className="judulHome" data-aos="fade-down">Data Covid-19 di Indonesia</h2>
                <p data-aos="fade-down" data-aos-delay="400">Last Updated: {item.penambahan.tanggal}</p>
                <p data-aos="fade-down" data-aos-delay="800" >Now: {currDate}</p>
                <Grid container xs={12} justify="center" className="containerUtama">
                    <Grid xs={12} align="center" data-aos="flip-left" data-aos-delay="1200">
                        <Grid item xs={9} sm={4} >
                            <Paper className="totalKasus" style={{borderRadius: '18px'}}>
                                <h2>Jumlah Kasus</h2> 
                                {/* <h3>{format(item.total.positif)}</h3> */}
                                <h3><CountUp end={item.total.positif} separator="." delay={1.5}/></h3>
                            </Paper>
                            <div className="kasusBaru">
                                {currDate === item.penambahan.tanggal ? (
                                    <h4 >+{format(item.penambahan.positif)}</h4>
                                ) : 
                                (
                                    <></>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={9} sm={3} data-aos="flip-left" data-aos-delay="1400">
                        <Paper className="totalSembuh" style={{borderRadius: '18px'}}>
                            <h2>Sembuh</h2>
                            {/* <h3>{format(item.total.sembuh)}</h3>z */}
                            <h3><CountUp end={item.total.sembuh} separator="." delay={1.6}/></h3>
                        </Paper>
                        <div className="sembuhBaru">
                            {currDate === item.penambahan.tanggal ? (
                                <h4 >+{format(item.penambahan.sembuh)}</h4>
                            ) : 
                            (
                                <></>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={9} sm={3}  data-aos="flip-left" data-aos-delay="1600">
                        <Paper className="totalMeninggal" style={{borderRadius: '18px'}}>
                            <h2>Meninggal</h2>
                            {/* <h3>{format(item.total.meninggal)}</h3> */}
                            <h3><CountUp end={item.total.meninggal} separator="." delay={1.7}/></h3>
                        </Paper>
                        <div className="meninggalBaru">
                            {currDate === item.penambahan.tanggal ? (
                                <h4 >+{format(item.penambahan.meninggal)}</h4>
                            ) : 
                            (
                                <></>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={9} sm={9} data-aos="fade-left" >
                        <h4 style={{color: 'black', fontWeight: 'normal', marginBottom: '-19px'}}>Tingkat Kematian</h4>
                        <h1 style={{color: 'red', fontWeight: 'lighter'}}>{tingkatKematian()}%</h1>
                    </Grid>
                </Grid>
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

export default HomeTotal;
