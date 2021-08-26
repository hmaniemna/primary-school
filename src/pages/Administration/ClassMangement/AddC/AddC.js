import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
//import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './AddC.css'

      
function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
 
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      setHelperText('الرجاء تحديد خيار');
      setError(true);
    }
};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="body">
           إضافة الأقسام   
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>

          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="name"
            label="إسم القسم"
            type="name"
            id="name"
            autoComplete="name"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          />
                      
        <TextField 
            margin="normal"
            required
            fullWidth
            id="level"
            label="مستوى القسم"
            name="level"
            autoComplete="level"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          />
          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="number"
            label="عدد التلاميذ"
            type="number"
            id="number"
            autoComplete="number"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          />
          <br/><br/>
          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            اضافة
          </Button>
      
        
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}

export default AddC;