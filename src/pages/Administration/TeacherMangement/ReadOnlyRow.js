import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const ReadOnlyRow = ({val,handleEditClick,deleteTeacher,refreshPage}) => 
{
    return(
        <TableRow key={NavItem.id_enseignant}>
            <TableCell>
                <button type="button" class="ui blue basic button"  
                    onClick={(event)=>{
                        handleEditClick(event,val)
                    }}
                >
                    تعديل
                </button> 
                <button class="ui red basic button"
                    onClick={()=>{
                        deleteTeacher(val.id_enseignant)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.genre}</TableCell> 
            <TableCell>{val.mdp}</TableCell>
            <TableCell>{val.login}</TableCell> 
            <TableCell>{val.nom}</TableCell>
            <TableCell>{val.prenom}</TableCell>
            
        </TableRow>
    );
};


export default ReadOnlyRow;