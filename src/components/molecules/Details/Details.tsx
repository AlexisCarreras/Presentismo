import { useEffect, useState } from "react";
import { makeStyles }      from '@material-ui/core';
import   Card              from '@material-ui/core/Card';
import   CardHeader        from '@material-ui/core/CardHeader';
import   Typography        from '@material-ui/core/Typography';
import { AccordionDetail } from '../../atoms/Accordion/AccordionDetail';

import RegistroDeHoras from '../../../services/RegistroDeHoras/registroDeHoras';

const useStyles = makeStyles({
    card: {
        width: '100%',
        marginTop: '3rem',
        marginRight: '3rem',
        // marginLeft: '1rem',
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

    const [registroHora, setRegistroHora] = useState<any>({});

    const fecha : string = String(registroHora.fecha);

    // const idRegsitro : string;
    // const inicio : string;
    // const lugarTrabajo : string;
 
    useEffect( () => { 
        async function loadDetails () {
            const response: any =  await RegistroDeHoras()
            console.log(response.data);

            if( response.status === 200 ) {
                setRegistroHora(response.data);
            }
            // return response.data;
        } 
        loadDetails();
    }, []); 

    return (
        <div>
            {  
            registroHora &&
                <Card className={ classes.card }>
                    { console.log('aca' + registroHora) }
                    
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
                        { fecha.slice(0,-9) } 
                    </Typography> 

             
                    <AccordionDetail 
                    //     idRegsitro={ registroHora.data.idRegsitro }
                    //     inicio={ registroHora.data.inicio }
                    //     lugarTrabajo={ registroHora.data.lugarTrabajo }
                    />
                    <AccordionDetail />
                    <AccordionDetail />
 
                </Card>
            }
        </div>
    )
}

 