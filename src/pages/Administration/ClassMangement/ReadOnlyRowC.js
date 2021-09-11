import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
const ReadOnlyRow = ({val,handleEditClick,updateName,deleteClass,refreshPage}) => 
{
    return(
        <TableRow key={NavItem.id_classe}>
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
                        deleteClass(val.id_classe)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.anneescolaire}</TableCell> 
            <TableCell>{val.nb}</TableCell>
            <TableCell>{val.nom}</TableCell> 
            <TableCell>{val.niveau}</TableCell>
            
        </TableRow>
    );
};


export default ReadOnlyRow;