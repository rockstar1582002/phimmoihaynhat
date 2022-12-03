import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()


    useEffect(() => {
        if (value === 0) {
            navigate('/')
        }
        else if (value === 1) {
            navigate('/movies')
        }
        else if (value === 2) {
            navigate('/search');
        }
    }, [value, navigate]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="Now Playing"
                icon={<WhatshotIcon />} />
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="Top Rated"
                icon={<MovieIcon />} />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search"
                icon={<SearchIcon />}
            />
        </BottomNavigation>
    );
}
