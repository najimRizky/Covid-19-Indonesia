import React, {useState, useEffect} from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';
import Aos from "aos";
import "aos/dist/aos.css";

function Grafik() {
    const [item, setItem] = useState([]);
    const [positif, setPositif] = useState([]);
    const [pertambahan, setPertambahan] = useState([]);
    const [tgl, setTgl] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    
    useEffect(() => {
        fetchItems();
        setArray();
        Aos.init({duration: 1000, once: true});
        // eslint-disable-next-line
    },[fetchStatus])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian');
        const items = await data.json();
        //console.log(items)
        setItem(items);
        setFetchStatus(true)
    }

    function setArray() {
        if(fetchStatus){
            let posTmp=[];
            let tglTmp=[];
            let tambahTmp=[];
            for(let i=0; i<item.length; i++){
                posTmp.push(item[i].positif_kumulatif)
                tglTmp.push((item[i].tanggal).substring(0,10))
                tambahTmp.push(item[i].positif)
            }
            setPositif(posTmp);
            setTgl(tglTmp);
            setPertambahan(tambahTmp);
        }
    }

    return (
        <div>
            {fetchStatus ? (
                <>
                    <Grid container justify="center" data-aos="fade-left">
                        <Grid item xs={11}>
                            <Bar  
                            data={
                                {
                                    labels: tgl,
                                    datasets:[
                                        {
                                            label: 'Jumlah kasus Positif',
                                            data: positif,
                                            backgroundColor: '#0022F7'
                                        },
                                        {
                                            label: 'Pertambahan kasus positif',
                                            data: pertambahan,
                                            backgroundColor: '#F76700'
                                            
                                        }
                                    ],
                                }
                            }
                            height={400}
                            width={200}
                            options={{
                                maintainAspectRatio: false
                            }}
                            />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <></>
            )
            }
        </div>
    )
}

export default Grafik;