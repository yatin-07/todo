import { Check, Delete } from '@mui/icons-material';
import { Card, CardContent, Container, IconButton, Typography } from '@mui/material';
import React from 'react';

const Todo: React.FC = () => {
  return (
    <div>
      <Container>
        <Card variant="outlined" style={{ marginTop: 35, background: 'lightgray' }}>
          <CardContent>
              <Typography variant="h5" component="h2">
                <IconButton>
                    <Check style={{color: "green"}}/>
                </IconButton>
                <IconButton style={{ float: "right"}}>
                    <Delete style={{color: "red"}}/>
                </IconButton>
              </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
