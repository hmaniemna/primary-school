import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRow = ({val,changeFirstName,updateFirstName,setNewFirstName}) => {
    return (
        <TableRow key={NavItem.id_classe}>
                <TableCell><TextField 
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="password"
            label="تعديل الـجنس"
            name="password"
            autoComplete="password"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}
} 
              onChange={(e)=>{setNewFirstName(e.target.value)}}
          /></TableCell> 
        <TableCell><TextField 
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="تعديل كلمة العبور"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
           
          /></TableCell> 
                    <TableCell><TextField
            className=""
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="lastname"
            label="تعديل إسم المستخدم"
            type="lastname"
            id="lastname"
            autoComplete="lastname"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            /></TableCell>
                    <TableCell>
                    <TextField
            className=""
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="username"
            label="تعديل اللقب "
            type="username"
            id="username"
            autoComplete="username"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
         />
 </TableCell> 
                    <TableCell><TextField
            className=""
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="firstname"
            label="تعديل الإسم"
            type="firstname"
            id="firstname"
            autoComplete="current-password"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{setNewFirstName(e.target.value)}}
          /></TableCell>
    <TableCell><button type="submit" class="ui blue basic button"  
                            onClick={()=>updateFirstName(val.login)}>
                                    تحديث
                                    </button>    </TableCell>    

                    </TableRow>
      

    );
};

export default EditableRow;