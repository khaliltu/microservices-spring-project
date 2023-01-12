import React, { useEffect, useState } from "react";
import "../Views/AddUser.css"
import axios from 'axios';
import blob from "blob";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Close } from "@material-ui/icons";

function DemandeTirage({ details,setOpenModal,modaldata }) {
  console.log(details);
  useEffect(() => {
   
  }, [])

  const [selectedFile, setState] = useState(null);
  
   const onFileChange = (event) => {
    setState({ selectedFile: event.target.files[0] });
  
  }; 
  
  // On file upload (click the upload button)
  const onFileUpload = () => {  
  const fileName = ".pdf";
  const file = new File([blob], fileName);
    console.log(selectedFile);  
    axios.post("", fileName,file);
  };



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
                    margin="normal"
                    fullWidth
                    id="matière"
                    name="matière"
                    label="matière"
                    select
                    defaultValue=""
                    helperText="séléctionner la matière"
                >{/* 
                {Roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))} */}
                </TextField>
                <TextField
                    fullWidth
                    id="date"
                    label="date d'arrivée"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                 />
                 <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="nombre_copy"
              name="nombre de copie"
              label="nombre de copie"
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
                    helperText="séléctionner la groupe"
        >{/* 
          {Roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>
        <Typography> <input type="file" onChange={onFileChange} /> </Typography> 
            <Button  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginTop:"10px",marginBottom:"20px"}}  size="small" onClick={onFileUpload}>
            télécharger
        </Button>

               <div > 
                    <Button  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginLeft:"120px",marginRight:"50px",width:"200px"}}size="large" >
                    Envoyer
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
export default DemandeTirage;
