import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
import AddT from './AddT/AddT'
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';


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
    {id:'actions',label:'أجراءات'},
    {id:'year', label:' الجنس'},
    {id:'year', label:'كلمة العبور'},
    {id:'number', label:'إسم المستخدم'},
    {id:'level', label:'اللقب'},
    {id:'name', label:'الاسم'},
]

<<<<<<< HEAD
const TeacherManagement = () => {
    const [id,setID]=useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('female');
    const [newFirstName,setNewFirstName] = useState('');
    const [newLastName,setNewLastName] = useState('');
    const [newUserName,setNewUserName] = useState('');
    const [teacherList,setTeacherList] = useState([]);
    const [newTeacherList,setNewTeacherList] = useState([]);
    const [editTeacherlogin,setEditTeacherLogin] = useState(null);
  const [openPopup,setOpenPopup]=useState(false);
    function refreshPage() {
      window.location.reload(false); 
    }
=======
const TeacherMangement = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editTeacherId,setEditTeacherId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    firstname:"",
    lastname:"",
    gender:"",
    username:"",
    password:""
  })


  const [firstname,setFirstName]=useState('');
  const [newFirstname,setNewFirstname]=useState('');

  const [lastname,setLastname]=useState();
  const [newLastname,setNewLastname]=useState('');

  const [username,setUsername]=useState('');
  const [newUsername,setNewUsername]=useState('');

  const [newGender,setNewGender]=useState('');
  const [newPassword,setNewPassword]=useState('');

  const [teacherList, setTeacherList]=useState([]);
  const [newTeacherList,setNewTeacherList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }
>>>>>>> 290eba09050be8f8ca10825ee25b9df50eb2b8da

  const {
      TblContainer,
      TblHead
    }=useTable(teacherList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/getTeachers").then((response)=>{
      setTeacherList(response.data)
    })
  },[])

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditTeacherId(val.id_enseignant);

    const formValues={
      firstname:val.prenom,
      lastname:val.nom,
      gender:val.genre,
      username:val.login,
      password:val.mdp     
    }
    setEditFormData(formValues);
  };

  const handleEditChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newData={...editFormData};
    newData[fieldName]=fieldValue;
  }

  const deleteTeacher = (id_enseignant) => {
    Axios.delete(`http://localhost:3000/deleteTeacher/${id_enseignant}`)
    console.log('deleted');
    console.log(id_enseignant);
  };

  const updateTeacherFirstname=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherFirstname",{
        firstname:newFirstname,id_enseignant:id
    });
      console.log(newFirstname);
      console.log(id)
  }

  const updateTeacherLastname=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherLastname",{
      lastname:newLastname,id_enseignant:id
    });
      console.log(newLastname); 
  }

  const updateTeacherGender=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherGender",{
      gender:newGender,id_enseignant:id,
    });
      console.log(newGender);
  }

  const updateTeacherUsername=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherUsername",{
      username:newUsername,id_enseignant:id
    });
      console.log(newUsername);
  }
  const updateTeacherPassword=(id)=>{
    Axios.put("http://localhost:3000/updateTeacherPassword",{
      password:newPassword,id_enseignant:id
    });
      console.log(newPassword);
  }

  const handleCancelClick=()=>{
    setEditTeacherId(null);
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافةالمعلمــين</Button>
        <TblContainer >
            <TblHead/>
<<<<<<< HEAD
            <TableBody>
                {teacherList.map((val)=>{
                    return (
                        /*<TableRow key={NavItem.id_classe}>
                            <TableCell>
                                <button class="ui red basic button" onClick={() => {deleteTeachers(val.login)}}>حذف</button>
                                <button class="ui blue basic button"  >تعديل</button>    
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
                        </TableRow>*/
                        <React.Fragment>  
                          {editTeacherlogin === val.login ?  ( 
                          <EditableRow setNewFirstName={setNewFirstName} val={val} changeFirstName={changeFirstName} updateFirstName={updateFirstName} newTeacherList={newTeacherList} /> 
                          ) : (
                            <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} />
                          )
=======
            <TableBody >
                {teacherList.map((val)=>(
                      <React.Fragment>  
                        {editTeacherId === val.id_enseignant?  ( 
                        <EditableRow 
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewFirstname={setNewFirstname}
                          setNewLastname={setNewLastname}
                          setNewGender={setNewGender} 
                          setNewUsername={setNewUsername}
                          setNewPassword={setNewPassword}
                          val={val} 
                          refreshPage={refreshPage}
                          updateTeacherFirstname={updateTeacherFirstname}
                          updateTeacherLastname={updateTeacherLastname}
                          updateTeacherGender={updateTeacherGender}
                          updateTeacherUsername={updateTeacherUsername}
                          updateTeacherPassword={updateTeacherPassword}
                          newTeacherList={newTeacherList} 
                          handleCancelClick={handleCancelClick}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} 
                            deleteTeacher={deleteTeacher}
                            refreshPage={refreshPage}
                          />
                        )
>>>>>>> 290eba09050be8f8ca10825ee25b9df50eb2b8da
                        }
                      </React.Fragment>
                ))}
            </TableBody>
        </TblContainer>

        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
<<<<<<< HEAD
        
            
            <AddT/>
            <AddT setOpenPopup={setOpenPopup}/> 
      </Popup>
    
=======
            <AddT setOpenPopup={setOpenPopup}/>
        </Popup>
>>>>>>> 290eba09050be8f8ca10825ee25b9df50eb2b8da
    </div>
  );
}

export default TeacherMangement;