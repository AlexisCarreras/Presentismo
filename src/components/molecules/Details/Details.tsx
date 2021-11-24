import { makeStyles }      from '@material-ui/core';
import   Card              from '@material-ui/core/Card';
import   CardHeader        from '@material-ui/core/CardHeader';
import   Typography        from '@material-ui/core/Typography';
import { AccordionDetail } from '../../atoms/Accordion/AccordionDetail';

const useStyles = makeStyles({
    card: {
        width: '80%',
        marginTop: '3rem',
    },
    cardHeader: {
        backgroundColor: '#54CAA6',
        color: '#FFFF',
        fontSize: '17px',
        textAlign: 'center', 
    },
    date: {
        color: '#7D7D7D',
        fontSize: '15px',
        padding: '1rem',
    }
});

export const Details = () => {

    const classes = useStyles();

    return (
        <Card className={ classes.card }>
            <CardHeader
                className={ classes.cardHeader } 
                disableTypography
                title='Detalles'  
            />

            <Typography 
                className={ classes.date }
                variant='subtitle1'
                align='center' 
            >
                24 Noviembre 2021
            </Typography> 
 
            <AccordionDetail />
            <AccordionDetail />
            <AccordionDetail />
        </Card>
    )
}

 