import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Snackbar } from '@material-ui/core';
import {  Visibility, VisibilityOff } from '@material-ui/icons';
import Button from '@mui/material/Button';
import services from '../services/services';
import { Alert } from '@mui/material';

const useStyles = makeStyles((theme) => ({

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px',
    gap: '32px',
    width: '100%',
    height: "70%",
    backgroundColor: "white",
    
  },


  form: {
    fontSize: '12px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '16px',
    textAlign: 'left',
    color: ' #A79C87',
    width: '100%', top: '7px', padding: '8px 1px',
  },
  input: {
    fontSize: '12px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '16px',
    textAlign: 'left',
    color: ' #A79C87',
    width: '166px', height: '50px', top: '7px', padding: '8px 16px',
  },

  submit: {
    fontStyle: 'Condensed',
    flex: 'none',
    backgroundColor: ' #EC6730',
    color: ' #FFFFFF',
    width: '343px',
    height: '61.73px',
    order: '3',
    fontWeight: '600',
    fontSize: '17px',
    textAlign: 'center',
    letterSpacing: '0.08em',

  },
  label: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    letterSpacing: '0.08em',
    textTranform: 'uppercase',
    color: '#EC6730',
    width: '343px',
    height: '20px', textAlign: 'center',
    lineHeight: '20px', order: '2',
    alignSelf: 'stretch',
  },

  title: {
    lineHeight: '24px',
    fontWeight: '600',
    fontSize: '16px',
    fontStyle: 'Condensed',
    letterSpacing: '0.08em',
    color: '#B04CFE',
    height: '24px',
    textAlign: 'center', alignSelf: 'stretch',
    lettre: '8%',
  },
}));



export default function Login() {
  const classes = useStyles();
  const [mail, setEmail] = useState();
  const [password, setPassword] = useState();


  const [values, setValues] = useState({

    mail: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = async e => {
    
    e.preventDefault();
    try {   const response = await services.loginUser({
      mail,
      password
    });
    console.log(response);
    if ('id' in response) {
          localStorage.setItem('user', JSON.stringify(response));
          window.location.href = "/home"      } }
          catch (err) {
            console.log(err);
            setOpen(true);
        }
     
  }


  const [open, setOpen] = React.useState(false);

  const handleClose = ( reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (

    <Grid
    style={{marginTop:"150px"}}
      container
      spacing={0}
      align="center"
      direction="column"
    >
      <Grid item >
        <Grid item className={classes.paper}>

          <Typography className={classes.title}>
            {'connexion'.toUpperCase()}
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              className={classes.form}
              variant="outlined"
              
              fullWidth
              id="Identifiant"
              name="Identifiant"
              label="Identifiant"
              onChange={e => setEmail(e.target.value)}
            />

            <FormControl variant="outlined" className={classes.form}>
              <InputLabel htmlFor="outlined-adornment-password">mot de passe </InputLabel>
              <OutlinedInput
                variant="outlined"
                label="mot de passe "

                id="outlined"
               
                fullWidth
                type={values.showPassword ? 'text' : 'password'}

                onChange={e => setPassword(e.target.value)}

                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }

              /></FormControl> <br></br><br></br>
              <div> <Button 
              style={{color:'#B04CFE'}}
              //variant="contained" 
              size="large"
              onClick={handleSubmit}>
                 Se connecter
                </Button>
                
                </div>
          </form>
          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  mail ou mot de passe incorrecte
                </Alert>
              </Snackbar>
        </Grid>
      </Grid>
    </Grid>
  );
}