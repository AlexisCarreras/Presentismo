import { useState, useEffect } from 'react';
import { makeStyles          } from '@material-ui/core';
import   Typography            from '@material-ui/core/Typography';
import   vector                from '../../atoms/Svg/Vector.svg';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
        width: '100%',
    },
    root: {
        backgroundColor: '#FFFF',
        width: '200px',
        height: '200px',
        borderRadius: '200px',
        border: '25px solid #98C0D0',
        marginRight: '2rem',
        marginLeft: '2rem',
    },
    img: {
        position: 'absolute',
        // left: 457,
        // top: 203,
        left: '30.8%',
        top: '23.8%',
    },
    img2: {
        position: 'absolute',
        // right: 594,
        // top: 203,
        right: '40%',
        top: '23.8%',
    },
    circleYellow: {
        backgroundColor: '#FFFF',
        width: '191px',
        height: '191px',
        borderRadius: '200px',
        border: '5px solid #FCEBCD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    points: {
        display: 'flex',
        alignItems: 'center',
        color: '#54CAA6',
        margin: 0, 
        textShadow: '2px 4px 4px #BEBEBE', 
    },
    counter: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '2px 4px 4px #BEBEBE', 
    }, 
}); 

export const Watch = () => {

    const classes = useStyles();

    const [countMinutes, setcountMinutes] = useState(0);

    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         setcountMinutes( countMinutes + 1 );
    //     }, 1000);

    //     return () => clearTimeout(timer);
    //   }, [countMinutes]);

    return (
        <section className={ classes.container }>
            <div className={ classes.root }>
                <img src={ vector } alt='vector' className={ classes.img }/>
                <div className={ classes.circleYellow }>
                    <Typography className={ classes.counter } variant="h1" gutterBottom>
                        00
                    </Typography>
                </div>
            </div>
            <Typography className={ classes.points } variant="h1" gutterBottom>
                :
            </Typography>
            <div className={ classes.root }>
                <img src={ vector } alt='vector' className={ classes.img2 }/>
                <div className={ classes.circleYellow }>
                    <Typography className={ classes.counter } variant="h1" gutterBottom>
                        00
                    </Typography>
                </div>
            </div>
        </section>
    )
}
