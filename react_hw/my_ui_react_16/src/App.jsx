import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function App() {
 
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

   
      <Container>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать  Material UI!
        </Typography>

      
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          OPEN
        </Button>
      </Container>

     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DIALOG UNSERE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Здесь можно разместить любой контент
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
