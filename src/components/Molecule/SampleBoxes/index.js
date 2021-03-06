
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    slide: {
        height: '100vh',
        width: "100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }
}))
const SampleBoxes = (props) => {

    const classes = useStyles()

    return (
        <Box className={classes.slide}
        style={{ background: `${props.bgColor}` }} 
        >
            {props.children}
        </Box>
    );
}

export default SampleBoxes;
