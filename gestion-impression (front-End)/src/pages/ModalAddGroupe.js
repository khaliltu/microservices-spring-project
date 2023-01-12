import { Close, Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Views/AddUser.css"

function ModalAddGroupe({ details,setOpenModal,modaldata }) {
  console.log(details);
  useEffect(() => {
   
  }, [])



 
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
              id="Niveau"
              name="Niveau"
              label="Niveau"
            // onChange={e => setEmail(e.target.value)}
            />
             
             <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="Nombre d'étudiant	"
              name="Nombre d'étudiant	"
              label="Nombre d'étudiant	"
            // onChange={e => setEmail(e.target.value)}
            />
            <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="Specialité"
              name="Specialité"
              label="Specialité"
            // onChange={e => setEmail(e.target.value)}
            />
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
export default ModalAddGroupe;
