import { makeStyles } from '@material-ui/core';
import Typography     from '@material-ui/core/Typography';

interface userName {
    name : string;
}

const useStyles = makeStyles({
    text: {
        color: '#29279D',
    },
});

export const NameHeader = ({ name }: userName) => {
    
    const classes = useStyles();

    return (
        <Typography 
            className={ classes.text }
            variant="subtitle1" 
            display="block" 
            gutterBottom
        >
            { name }
        </Typography>
    )
}
