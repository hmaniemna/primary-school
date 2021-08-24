import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import useTable from '../../../components/useTable';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
import Popup from '../../../components/Popup';
import AddC from './AddC/AddC'


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
  const [classList, setClassList]=useState([]);
  const [openPopup,setOpenPopup]=useState(false);

  const submitAction=()=>{
    setClassList([...classList,{nom:AddC.name,niveau:AddC.level,nb:AddC.number,anneescolaire:AddC.an}])
  }

  const {
      TblContainer,
      TblHead
    }=useTable(classList,headCells);

  useEffect(()=>{
    Axios.get("http://localhost:3000/api/get").then((response)=>{
      setClassList(response.data)
    })
  },[])
  return (
    <div>
        <Button class="ui right floated blue basic button" onClick={()=> setOpenPopup(true)}>اضافة الاقسام</Button>
        <TblContainer>
            <TblHead/>
            <TableBody>
                {classList.map((val)=>{
                    return (
                        <TableRow key={NavItem.id_classe}>
                            <TableCell>
                                <button class="ui red basic button">حذف</button>
                                <button class="ui blue basic button">تعديل</button>    
                            </TableCell>    
                            <TableCell>{val.anneescolaire}</TableCell>
                            <TableCell>{val.nb}</TableCell>                   
                            <TableCell>{val.nom}</TableCell>
                            <TableCell>{val.niveau}</TableCell>      
                        </TableRow>
                    )
                })}
            </TableBody>
        </TblContainer>

        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <AddC setOpenPopup={setOpenPopup}/>
      </Popup>
    </div>
  );
}

export default ClassMangement;