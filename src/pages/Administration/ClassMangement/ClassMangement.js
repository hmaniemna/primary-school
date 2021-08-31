import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
import AddC from './AddC/AddC'
import EditableRow from './EditableRowC';
import ReadOnlyRow from './ReadOnlyRowC';

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
    {id:'year', label:'السنة دراسية'},
    {id:'number', label:'عدد التلاميذ '},
    {id:'name', label:'الاسم'},
    {id:'level', label:'المستوى'},
]

const ClassMangement = () => {
  const classes = useStyles();
  const [id,setID]=useState(''); 
  const [editClassId,setEditClassId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    name:"",
    level:"",
    number:0,
    year:""
  })


  const [name,setName]=useState('');
  const [newName,setNewName]=useState('');

  const [level,setlevel]=useState();
  const [newLevel,setNewLevel]=useState();

  const [number,setNumber]=useState('');
  const [newNumber,setNewNumber]=useState('');

  const [classList, setClassList]=useState([]);
  const [newClassList,setNewClassList]=useState([]);

  const [openPopup,setOpenPopup]=useState(false);

  function refreshPage() {
    window.location.reload(false); 
  }

  const submitAction=()=>{
    setClassList([...classList,{nom:AddC.name,niveau:AddC.level,nb:AddC.number,anneescolaire:AddC.an}])
  }

  const changeName=(e)=>{
    setName(e.target.value)
  }

  /*const changeLevel=(e)=>{
    setlevel(e.target.value)
  }

  const changeNumber=(e)=>{
    setNumber(e.target.value)
  }*/

  const {
      TblContainer,
      TblHead
    }=useTable(classList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/api/get").then((response)=>{
      setClassList(response.data)
    })
  },[])

  const submitClass=()=>{
    Axios.post('http://localhost:3000/api/insert',{
     id:id,name:name,level:level,number:number
    }).then(()=>{

      alert('Succ insert!')
    })
  }

  const handleEditClick = (event,val) => {
    event.preventDefault();
    setEditClassId(val.id_classe);

    const formValues={
      name:val.nom,
      level:val.niveau,
      number:val.nb,
      year:val.anneescolaire     
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

  /*const handelEditFormSubmit = (event,id) => {
    event.preventDefault();

    const editedVal={
      id: editClassId,
      name: editFormData.name,
      level: editFormData.level,
      number:editFormData.number,
      year:editFormData.year
    };

    Axios.put("http://localhost:3000/updateClassname",{
        nom:newName,id_classe:id
    });
      console.log(newName);
      setNewName("");

    const newClassList=[...classList];

    const index = classList.findIndex((classL) => classL.id_classe === editClassId);

    newClassList[index]=editedVal;

    setClassList(newClassList);
    setEditClassId(null);
  };*/

  const deleteClass = (id_classe) => {
    Axios.delete(`http://localhost:3000/api/delete/${id_classe}`)
    console.log('deleted');
    console.log(id_classe);
  };

  const updateName=(id)=>{
    Axios.put("http://localhost:3000/updateClassname",{
        nom:newName,id_classe:id
    });
      console.log(newName);
      setNewName("");
  }

  const handleCancelClick=()=>{
    setEditClassId(null);
  }

  const handleInputChange=(event)=>{
    setEditClassId(event.id_classe)
    setNewName(event.nom);
    setNewNumber(event.nb)
    setNewLevel(event.niveau)
    updateName(editClassId)
  }

  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> {setOpenPopup(true)}}>اضافة الاقسام</Button>
        <TblContainer >
            <TblHead/>
            <TableBody >
                {classList.map((val)=>(
                      <React.Fragment>  
                        {editClassId === val.id_classe?  ( 
                        <EditableRow 
                          editFormData={editFormData}
                          handleEditChange={handleEditClick}
                          setNewName={setNewName} 
                          val={val} 
                          changeName={changeName} 
                          updateName={updateName}
                          newClassList={newClassList} 
                          handleCancelClick={handleCancelClick}
                          handleInputChange={handleInputChange}
                          handleEditChange={handleEditChange}
                        /> 
                        ) : (
                          <ReadOnlyRow val={val}
                            handleEditClick={handleEditClick} 
                            deleteClass={deleteClass}
                            refreshPage={refreshPage}
                          />
                        )
                        }
                      </React.Fragment>
                ))}
            </TableBody>
        </TblContainer>

        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <AddC changeName={changeName} setOpenPopup={setOpenPopup}/>
      </Popup>
    </div>
  );
}

export default ClassMangement;