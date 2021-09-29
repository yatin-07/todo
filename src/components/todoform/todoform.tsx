import React, { useRef } from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { connect } from 'react-redux';
import { Check, Delete } from '@mui/icons-material';
import { Card, CardContent, Container, IconButton, Typography } from '@mui/material';
import { deleteTodo, markComplete, markIncomplete } from '../../redux/action';
import AppPropType from '../../redux/types/proptypes';
import storeType from '../../redux/types/storeType';
const Todo: React.FC<AppPropType> = ({ complete, incomplete, deleteTodo, markComplete, markIncomplete }) => {
  const input = useRef<HTMLInputElement>(null);

  const renderList = (type: 'Complete' | 'Incomplete') => {
    console.log(incomplete);
    const loop = type === 'Complete' ? complete : incomplete;
    return (
      <Container>
        <h1>{type}</h1>
        {loop.map((todo, index) => {
          console.log('todo', todo);
          return (
            <>
              <Card variant="outlined" style={{ marginTop: 35 }}>
                <CardContent key={index}>
                  <IconButton
                    onClick={() => {
                      type === 'Complete' ? markIncomplete(todo) : markComplete(todo);
                    }}
                  >
                    <Check style={{ color: 'green' }} />
                  </IconButton>
                  <Typography variant="h5" component="h2" style={{ display: 'inline', marginLeft: 20 }}>
                    {todo}
                  </Typography>
                  <IconButton style={{ float: 'right' }} onClick={() => deleteTodo(todo)}>
                    <Delete style={{ color: 'red' }} />
                  </IconButton>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Container>
    );
  };

  const addTodo = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = '';

      markIncomplete(val);
    }
  };
  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: 20}}>
        <FormControl fullWidth={true}>
          <TextField label="I will do this" inputRef={input} required={true} />
          <Button
            variant="contained"
            color="primary"
            //type="submit"
            style={{ marginTop: 5 }}
            onClick={() => addTodo()}
          >
            <Add />
            Add
          </Button>
        </FormControl>

        {renderList('Incomplete')}
        {renderList('Complete')}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    complete: state.complete,
    incomplete: state.incomplete,
  };
};

export default connect(mapStateToProps, {
  deleteTodo,
  markComplete,
  markIncomplete,
})(Todo);
