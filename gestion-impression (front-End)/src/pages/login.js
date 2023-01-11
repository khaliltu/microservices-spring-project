import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput } from '@material-ui/core';
import {  Visibility, VisibilityOff } from '@material-ui/icons';
import Button from '@mui/material/Button';

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

//creer un nouveau fichier dans un package Service qui contient les appels de ws

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const [values, setValues] = useState({

    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  //creer un nouveau fichier dans un package 'Services' qui contient les appels de ws
  const handleSubmit = async e => {
    localStorage.setItem('access_token', 'test');
     window.location.href = "/home" 
    e.preventDefault();
   /*  const response = await auth.loginUser({
      email,
      password
    });
    console.log(response.data);
    if ('access_token' in response) {

          localStorage.setItem('access_token', response['access_token']);
          window.location.href = "/dashboard";

    } else {
      swal("Failed", response.message, "error");
    } */
  }



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
              margin="normal"
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
                margin="normal"
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
        </Grid>
      </Grid>
    </Grid>
  );
}
