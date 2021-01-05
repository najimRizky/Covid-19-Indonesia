import React, {useState, useEffect} from 'react'
import './App.css';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';



function Provinsi() {
    const [item, setItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(false);

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line
    },[])

    const fetchItems = async () => {
        const data = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
        const items = await data.json();
        setItem(items);
        setFetchStatus(true)
    }

    const columns = [
        {   id: 'provinsi', 
            label: 'Provinsi', 
            minWidth: 150 },
        { 
            id: 'kasus', 
            label: 'Kasus', 
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'sembuh',
            label: 'Sembuh',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'meninggal',
            label: 'Meninggal',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'dirawat',
            label: 'Dirawat',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
    });

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const history = useHistory();
    function tes(val) {
        history.push(`/provinsi/${val}`);
    }

    return (
        <>
        {fetchStatus ? (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <h3>Data Kasus Covid-19 Per Provinsi</h3>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} > <b>{column.label}</b></TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {item.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.prov} onClick={() => tes(row.provinsi.toLowerCase())}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                        <TableCell key={column.id} align={column.align} style={{cursor: 'pointer'}}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 34]}
                            component="div"
                            count={item.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
            ) : (
                <CircularProgress className="margin-top-20" />
            )
                
        }
        </>
    )
}

export default Provinsi;