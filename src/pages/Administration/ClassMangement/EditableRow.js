import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TableBody, TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const EditableRow = ({handleInputChange,val,changeName,updateName,setNewName,editFormData,handelEditChange,handleCancelClick,handelEditFormSubmit}) => {
        return (
                <TableRow key={NavItem.id_classe}>
                        <TableCell>
                                <button type="submit" class="ui blue basic button"  
                                    onClick={()=>{
                                        updateName(val.id_classe)
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
                                id="year"
                                label="السنة دراسية	"
                                name="year"
                                autoComplete="year"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.year}
                                onChange={()=>{}}
                            /> 
                        </TableCell>
                        <TableCell>
                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="عدد التلاميذ"
                                name="number"
                                autoComplete="number"
                                autoFocus
                                InputLabelProps={{style: {fontFamily:'Tajawal'}}}
                                inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
                                defaultValue={editFormData.number}
                                onChange={handelEditChange}
                            />    
                        </TableCell> 
                        <TableCell>
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
                                defaultValue={editFormData.name}
                                onChange={(e)=>{
                                    setNewName(e.target.value)
                                    changeName(e)
                                }}
                            />
                        </TableCell>
                        <TableCell>
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
                                defaultValue={editFormData.level}
                                onChange={(e)=>{
                                    setNewName(e.target.value)
                                }}
                            />
                        </TableCell> 
                            

                </TableRow>
        );
};

export default EditableRow;