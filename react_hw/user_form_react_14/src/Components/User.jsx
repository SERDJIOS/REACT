import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

export default function User() {
  const name = useSelector((state) => state.name);
  const status = useSelector((state) => state.status);

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="h6">User Information</Typography>
        <Typography>Name: {name}</Typography>
        <Typography>Status: {status}</Typography>
      </CardContent>
    </Card>
  );
}
    