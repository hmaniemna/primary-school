import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
<<<<<<< HEAD
const EditableRow = ({newFirstname,refreshPage,setEditFirstname,val,updateTeacherFirstname,updateTeacherLastname,updateTeacherGender, updateTeacherUsername, updateTeacherPassword,setNewPassword,setNewFirstname,setNewUsername,setNewLastname,setNewGender,editFormData,handleCancelClick}) => {
=======
const EditableRow = ({refreshPage,val,updateTeacherFirstname,updateTeacherLastname,updateTeacherGender, updateTeacherUsername, updateTeacherPassword,setNewPassword,setNewFirstname,setNewUsername,setNewLastname,setNewGender,editFormData,handleCancelClick}) => {
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
        return (
                <TableRow key={NavItem.id_enseignant}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
<<<<<<< HEAD
                                    onClick={()=>{ if (setEditFirstname)
                                        updateTeacherFirstname(val.id_enseignant);
                                        updateTeacherGender(val.id_enseignant)
                                        updateTeacherLastname(val.id_enseignant)
                                         updateTeacherUsername(val.id_enseignant)
                                         updateTeacherPassword(val.id_enseignant)
                                         //refreshPage()
=======
                                    onClick={()=>{
                                        updateTeacherFirstname(val.id_enseignant)
                                        updateTeacherGender(val.id_enseignant)
                                        updateTeacherLastname(val.id_enseignant)
                                        updateTeacherUsername(val.id_enseignant)
                                        updateTeacherPassword(val.id_enseignant)
                                        
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
                                    }}>
                                        تحديث
                                </button>  
                                <button 
                                    class="ui red basic button"
                                    onClick={handleCancelClick}
                                >
                                        إلغاء   
                                </button>  
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="gender"
                                label=' الجنس'
                                name="gender"
                                autoComplete="gender"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.gender}
                                onChange={(e)=>{
                                        setNewGender(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label='كلمة العبور'
                                name="password"
                                autoComplete="password"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.password}
                                onChange={(e)=>{
                                        setNewPassword(e.target.value)    
                                }}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label='إسم المستخدم'
                                name="username"
                                autoComplete="username"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.username}
                                onChange={(e)=>{
                                    setNewUsername(e.target.value)    
                                }}
                            />    
                        </TableCell> 
                        <TableCell>
                            <TextField
                                className=""
                                margin="normal"
                                required
                                fullWidth
                                name="lastname"
                                label='اللقب'
                                type="lastname"
                                id="lastname"
                                autoComplete="lastname"
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.lastname}
                                onChange={(e)=>{
<<<<<<< HEAD
                    
                                    setNewLastname(e.target.value);
                                    
=======
                                    setNewLastname(e.target.value)    
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
                                }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="firstname"
                                label='الاسم'
                                name="firstname"
                                autoComplete="firstname"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.firstname}
<<<<<<< HEAD
                                onChange={(e)=>{ 
                                    if(e.target.value.length>0){
                                        setEditFirstname(true);
                                        setNewFirstname(e.target.value);}
=======
                                onChange={(e)=>{
                                    setNewFirstname(e.target.value)    
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
                                }}
                            />
                        </TableCell> 
                            

                </TableRow>
        );
};

export default EditableRow;