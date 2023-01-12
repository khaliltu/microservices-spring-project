import { Close, Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Views/AddUser.css"

function ModalAddMatiere({ details,setOpenModal,modaldata }) {
  console.log(details);
  useEffect(() => {
   
  }, [])

 

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
              id="name"
              name="name"
              label="name"
            // onChange={e => setEmail(e.target.value)}
            />
             <TextField
                    margin="normal"
                    fullWidth
                    id="Groupe"
                    name="Groupe"
                    label="Groupe"
                    select
                    defaultValue=""
                    helperText="Please select your role"
        >{/* 
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>
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
export default ModalAddMatiere;
