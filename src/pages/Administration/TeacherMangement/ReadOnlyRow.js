import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const ReadOnlyRow = ({val,handleEditClick,updateFirstName}) => 
{
    return(
        <TableRow key={NavItem.id_classe}>
            <TableCell>{val.genre}</TableCell> 
            <TableCell>{val.mdp}</TableCell>
            <TableCell>{val.login}</TableCell>
            <TableCell>{val.nom}</TableCell> 
            <TableCell>{val.prenom}</TableCell>
            <TableCell>
                <button class="ui blue basic button"  
                    onClick={(event)=>handleEditClick(event,val)}
                >
                    تعديل
                </button> 
            </TableCell>    
        </TableRow>
    );
};


export default ReadOnlyRow