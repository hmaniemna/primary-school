import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
import AddT from './AddT/AddT';


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

const headCells=[
    {id:'actions',label:'الإجراءات'},
    {id:'gender', label:'الجنس'},
    {id:'login', label:'إسم المستخدم'},
    {id:'lastname', label:'الـلقب'},
    {id:'firstname', label:'الإسم'},
]

const ClassMangement = () => {
    const [id,setID]=useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('female');
    const [teacherList,setTeacherList] = useState([]);
    const [openPopup,setOpenPopup]=useState(false);
    function refreshPage() {
      window.location.reload(false); 
    }

  const {
      TblContainer,
      TblHead
    }=useTable(teacherList,headCells);

    useEffect(()=>{
        Axios.get("http://localhost:3000/getTeachers").then((response)=>{
          setTeacherList(response.data);
        });
      },[]);
      const registerTeacher = () => {
        Axios.post("http://localhost:3000/register",{
         id:id,genre:gender,prenom:firstName,nom:lastName,login:userName,mdp:password
      });
        setTeacherList([...teacherList,
          {genre:gender,prenom:firstName,nom:lastName,login:userName,mdp:password},
        ]); 
      };
      const deleteTeachers = (log) => {
        Axios.delete(`http://localhost:3000/deleteTeacher/${log}`)
      };
      const updateTeacher = () => {
        
      }
  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> setOpenPopup(true)}>
          إضـافَة المُعلمين
        </Button>
        <TblContainer>
            <TblHead/>
            <TableBody>
                {teacherList.map((val)=>{
                    return (
                        <TableRow key={NavItem.id_classe}>
                            <TableCell>
                                <button 
                                  class="ui red basic button" 
                                  onClick={() => {
                                    deleteTeachers(val.login)
                                    refreshPage()
                                  }}
                                >
                                  حذف
                                </button>
                                <button class="ui blue basic button">تعديل</button>    
                            </TableCell>   
                            <TableCell>{val.genre}</TableCell> 
                            <TableCell>{val.login}</TableCell>
                            <TableCell>{val.nom}</TableCell> 
                            <TableCell>{val.prenom}</TableCell>
                                            
                           
                              
                        </TableRow>
                    )
                })}
            </TableBody>
        </TblContainer>

        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <AddT setOpenPopup={setOpenPopup}/>
      </Popup>
    </div>
  );
}

export default ClassMangement;