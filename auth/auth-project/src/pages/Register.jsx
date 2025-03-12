import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, resetState } from '../features/auth/authSlice'

export default function Register() {
  const { isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      return
    }
    dispatch(register({ email: formData.email, password: formData.password }))
  }

  useEffect(() => {
    return () => {
      dispatch(resetState())
    }
  }, [dispatch])

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <TextField
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button disabled={isLoading} type='submit'>
          Register
        </Button>
      </form>
      {isError && <Typography>{message}</Typography>}
      {isSuccess && <Typography>Registration Successful</Typography>}
    </Box>
  )
}
