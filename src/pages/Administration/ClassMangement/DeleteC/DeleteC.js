import React from 'react';
import { Container} from 'react-bootstrap';
import { CssBaseline } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const DeleteC=()=>{
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
            <Typography component="h1" variant="body">
                Delete  
            </Typography>
            </div>
        </Container>
    )
};

export default DeleteC;