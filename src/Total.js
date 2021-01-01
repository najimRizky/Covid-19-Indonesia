import React, {useState, useEffect} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


function HomeTotal() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    const [currDate, setCurrDate] = useState('')

    useEffect(() => {
        fetchItems();
        getCurrDate();
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
        if(tmp.length === 1) return '0'+tmp
    }

    const getCurrDate = () =>{
        var today = new Date();
        setCurrDate(today.getFullYear() + '-' + formatDate(today.getMonth() + 1) + '-' + formatDate(today.getDate()));
    }

    return (
        <div>
            {fetchStatus ? (
            <>
                <h2 className="judulHome">Data Covid-19 di Indonesia</h2>
                <p>Last Updated: {item.penambahan.tanggal}</p>
                <Grid container xs={12} justify="center" className="containerUtama">
                    <Grid xs={12} align="center">
                        <Grid item xs={12} sm={3} >
                            <Paper className="totalKasus">
                                <h2>Jumlah Kasus</h2> 
                                <h3>{format(item.total.positif)}</h3>
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
                    <Grid item xs={12} sm={3} >
                        <Paper className="totalSembuh">
                            <h2>Sembuh</h2>
                            <h3>{format(item.total.sembuh)}</h3>
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
                    <Grid item xs={12} sm={3} >
                        <Paper className="totalMeninggal">
                            <h2>Meninggal</h2>
                            <h3>{format(item.total.meninggal)}</h3>
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
                </Grid>
                <p>"This website is still under development"</p>
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
