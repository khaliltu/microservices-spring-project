import { Close, Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Views/AddUser.css"

function ModalAddUser({ details,setOpenModal,modaldata }) {
  console.log(details);

  const Roles = [
    {
      value: '1',
      label: 'ADMIN',
    },
    {
        value: '2',
        label: 'AGENT',
      },
      {
        value: '3',
        label: 'PROFESSOR',
      },];
  

  useEffect(() => {
   
  }, [])


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = useState({

    mail: '',
    password: '',
    showPassword: false,
  });


/* 
  const menuValide =async ()=> {
    const response = await menusServices.validMenu({
      menu_id
    });
    console.log(response.data);
    if ('message' in response) {
         console.log("aa")

    } else {
      console.log("cc")

    }
  }
 */

    return (
      <div className="modal display-block" style={{overflowY: "auto"}}
      onClick={() =>
         setOpenModal(false)}>
      <div className="block-m1"  onClick={e => {
          e.stopPropagation();}} >

          <IconButton onClick={() => setOpenModal(false)}
      sx={{
       marginLeft:'700px',
       color: (theme) => theme.palette.grey[500],
   }}>
      <Close />
     </IconButton>
     <form noValidate /* onSubmit={handleSubmit} */ style={{marginRight:"50px",marginLeft:"50px"}}>
            <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="Nom"
              name="Nom"
              label="Nom"
            // onChange={e => setEmail(e.target.value)}
            />
             
             <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="Prénom"
              name="Prénom"
              label="Prénom"
            // onChange={e => setEmail(e.target.value)}
            />
            <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="Mail"
              name="Mail"
              label="Mail"
            // onChange={e => setEmail(e.target.value)}
            />
                    <TextField
                    margin="normal"
                    fullWidth
                    id="role"
                    name="role"
                    label="role"
                    select
                    defaultValue=""
                    helperText="Please select your role"
        >
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                 <FormControl variant="outlined" fullWidth>
                    <InputLabel  htmlFor="outlined-adornment-password">mot de passe </InputLabel>
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
                        }/>
                </FormControl> <br></br><br></br>
               <div > 
                    <Button  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginLeft:"120px",marginRight:"50px",width:"200px"}}size="large" >
                    Ajouter
                    </Button>
                    <Button style={{backgroundColor:"#F4E1FA",color:'#B04CFE',width:"200px"}}size="large" 
                    onClick={() =>
                        setOpenModal(false)}>
                    Annuler
                    </Button>
                </div>
          </form>
    

        </div>
      </div>

    );
}
export default ModalAddUser;
