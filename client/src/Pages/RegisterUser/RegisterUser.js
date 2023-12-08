import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';

import { AccountCircle, Lock, Mail, Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../JS/actions/user';
import { useNavigate } from 'react-router-dom';
import './RegisterUser.css';
import End from '../../Components/Footer/End';
import Cards from '../../Components/Cards/Cards';
import { Avatar } from '@mui/material/Avatar';

const RegisterUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const loadUser = useSelector((state) => state.userReducer.loadUser);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser, navigate));
  };

  return (
        <div className="login-container">
        <Container component="main" maxWidth="xs">
          <div className="paper">
              <Typography  sx={{ textAlign: 'center' }}    component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="firstName"
                    onChange={handleChange}
                    fullWidth
                    label="First Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    onChange={handleChange}
                    fullWidth
                    label="Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    onChange={handleChange}
                    fullWidth
                    label="Email"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    onChange={handleChange}
                    fullWidth
                    label="Password"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error" 
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegister}
                disabled={loadUser}
              >
                {loadUser ? <CircularProgress size={24} /> : 'REGISTER'}
              </Button>
            </Box>
          </div>
        </Container>
        <div className='card'>
        <Cards/>

        </div>
<div className='end'>
<End/>
</div>

      </div>
    
);
};

export default RegisterUser;
