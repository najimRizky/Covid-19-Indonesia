import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Nav() {    
    const useStyles = makeStyles({
        list: {
          width: 200,
        },
        fullList: {
          width: 'auto',
        },
      });
    
    const classes = useStyles();
    const [state, setState] = React.useState({left: false,});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
        className={clsx(classes.list, {[classes.fullList]: anchor === 'top' || anchor === 'bottom',})}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem>
                <h1>Menu</h1>
            </ListItem>
            <ListItem button component={Link} to="/">
                <ListItemText  primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/provinsi">
                <ListItemText  primary="Data Per Provinsi" />
            </ListItem>
            <ListItem button component={Link} to="/about">
                <ListItemText  primary="About" />
            </ListItem>
        </List>
        <Divider />
        </div>
    );

    return (
        <AppBar position="static"  style={{backgroundColor: '#005DA6', display: 'flex'}}>
            <Toolbar>
                <div className="menu">
                    <React.Fragment key={'left'}>
                        <Button onClick={toggleDrawer('left', true)}><MenuIcon className="menuIcon" /></Button>
                        <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
                            {list('left')}
                        </SwipeableDrawer>
                    </React.Fragment>
                </div>
                <Typography className="pageTitle" variant="h5" >Covid-19 Indonesia</Typography>
                <div className="navigasi">
                    <Button component={Link} to="/" style={{color: 'white'}}>Home</Button>
                    <Button component={Link} to="/provinsi" style={{color: 'white'}}>Data Per Provinsi</Button>
                    <Button component={Link} to="/about" style={{color: 'white'}}>About</Button>
                </div>
                
            </Toolbar>
                
        </AppBar>
    );
}

export default Nav;

/* 
<ul>
                    <Link to="/" style={navstyle}>
                        <li>Home</li>
                    </Link>
                    <Link style={navstyle} to="/provinsi">
                        <li>Data Per provinsi</li>
                    </Link>
                    <Link style={navstyle} to="/about">
                        <li>About</li>
                    </Link>
                </ul>

                <IconButton >
                        <MenuIcon className="menuIcon" />
                    </IconButton>
*/