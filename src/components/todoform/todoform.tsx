import React from 'react'
import { Button, Container, FormControl, TextField } from '@mui/material';
const Todoform: React.FC = () => {
    return (
       <Container maxWidth="sm">
           <form>
               <FormControl fullWidth={true}>
                   <TextField label="Add a ToDo" required={true}/>
                   <Button color="primary" type="submit" variant="contained" style={{ marginTop: 10, padding: "10 10 10"}}>
                       Add
                   </Button>
               </FormControl>
           </form>
       </Container>
    )
}

export default Todoform;

