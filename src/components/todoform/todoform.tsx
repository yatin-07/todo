import React, {useState} from 'react'
import { Button, Container, FormControl, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

const Todoform: React.FC = ({ addTodos }) => {
        const [text, setText] = useState("");
        const handleSubmit = (e: { preventDefault: () => void; }) => {

          e.preventDefault();
          setText("");
          addTodos(text);
        };
    return (
    
    <div>
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="I will do this"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            required={true}
            value={text}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: 5 }
            
        }
          >
            <Add />
            Add
          </Button>
        </FormControl>
      </form>
    </Container>
  </div>
    )
}

export default Todoform;