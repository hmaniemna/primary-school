import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReadOnlyRowT from './ReadOnlyRowT';
import EditableRowT from './EditableRowT';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }, 
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  newButton:{
      position:'absolute',
      right:'10px'
  }
}));


const PersonalInfoT = () => {
  const classes = useStyles();
  const [id,setId] = useState(null);
  const [teacherList,setTeacherList] = useState({
    id:"",
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  });
  const { firstname,lastname, username,password } = teacherList;
  const onInputChange = e => {
    setTeacherList({ ...teacherList, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    Axios.get(`http://localhost:3000/getTeacher/${id}}`).then((response)=>{
      console.log('??');
      console.log(id)
      setTeacherList(response.data);
    });
  },[]);
  const updateTeacher = (val) => {
    Axios.put(`http://localhost:3000/teachers/${val.id_enseignant}`, teacherList)
  };

  
  function refreshPage() {
    window.location.reload(false); 
  }

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="body">
         مَعـلُــوماتك الـشخصية   
      </Typography>

      <form className={classes.form} noValidate > 
        <TextField 
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="الاسم"
          name="firstname"
          autoComplete="firstname"
          autoFocus
          value={firstname}
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          onChange={e =>{ onInputChange(e);
          console.log(id);}}  
        />
        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="lastname"
          label="اللقب"
          type="lastname"
          id="lastname"
          autoComplete="lastname"
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          onChange={e => onInputChange(e)}
       />
        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="username"
          label="اسم المستخدم"
          type="username"
          id="username"
          autoComplete="username"
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          onChange={e => onInputChange(e)}  
       />

        <TextField
          className=""
          margin="normal"
          required
          fullWidth
          name="password"
          label="كلمة العبور"
          type="password"
          id="password"
          autoComplete="current-password"
          InputLabelProps={{style: {fontFamily:'Tajawal'}}}
          inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
          onChange={e => onInputChange(e)}   
        />

        <br/><br/>
        </form>
        <button type="button" class="ui blue basic button"  
                    onClick={updateTeacher}
                >
                    تعديل
                </button> 
        </div>
        </Container>
    );
  }

export default PersonalInfoT;