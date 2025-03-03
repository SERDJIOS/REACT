import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/actions';

import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

export default function UserForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(name, status));
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Edit User Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
