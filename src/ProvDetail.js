import React, {useState, useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import Grid from '@material-ui/core/Grid'

function ProvDetail({match}) {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);
    const [prov, setProv] = useState(undefined)
    

    useEffect(() => {
        fetchItems();
        showProv(); 
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
                    //console.log(item[i])
                    break;
                }
            }
        }
    }
    return (
        <div>
            { prov !== undefined ? (   
                <Grid container justify="center">
                    <Grid item xs={12} >
                        <h2>{match.params.id.toUpperCase()}</h2>
                    </Grid>
                    <Grid container md={7} justify="center">
                        <Grid item md={6} xs={10} style={{borderBottom: '1px solid #00C9C7', borderRight: '1px solid #00C9C7'}} className="provDetail">
                            <h3> Kasus: {format(prov.kasus)} </h3>
                        </Grid>
                        <Grid item md={6} xs={10} style={{borderBottom: '1px solid #00C9C7', borderLeft: '1px solid #00C9C7'}} className="provDetail">
                            <h3> Meninggal: {format(prov.meninggal)} </h3>
                        </Grid>
                        <Grid item md={6} xs={10} style={{borderTop: '1px solid #00C9C7', borderRight: '1px solid #00C9C7'}} className="provDetail">
                            <h3> Sembuh: {format(prov.sembuh)} </h3>
                        </Grid>
                        <Grid item md={6} xs={10} style={{borderTop: '1px solid #00C9C7', borderLeft: '1px solid #00C9C7'}} className="provDetail">
                            <h3> Dirawat: {format(prov.dirawat)} </h3>
                        </Grid>
                    </Grid>
                    
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