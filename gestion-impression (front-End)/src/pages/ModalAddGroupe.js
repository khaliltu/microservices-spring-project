import { Close } from "@material-ui/icons";
import { Button,  IconButton, TextField} from "@mui/material";
import React, { useEffect, useState} from "react";
import swal from "sweetalert";
import services from "../services/services";
import "../Views/AddUser.css"

function ModalAddGroupe({ details,setOpenModal,modaldata }) {
  const [level, setlevel] = useState();
  const [specialite, setspecialite] = useState();
  const [nombreEtudiant, setnombreEtudiant] = useState();

  const handleSubmit = async e => {
    
    e.preventDefault();
    
    const response = await services.addGroupe({
    level,
    specialite,
    nombreEtudiant
    });
    console.log(level,specialite,nombreEtudiant)
    if ('id' in response) {
         setOpenModal(false)
         window.location.href = "/administrateur"
             } 
    else {
      swal("Failed", "!!", "error");
    } 
  }



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
     <form noValidate  onSubmit={handleSubmit} style={{marginRight:"50px",marginLeft:"50px"}}>
            <TextField
              variant="outlined"
              type="number" 	
              fullWidth
              margin="normal"
              id="Niveau"
              name="Niveau"
              label="Niveau"
             onChange={e => setlevel(e.target.value)}
            />
             
             <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="number" 	
              id="Nombre d'étudiant	"
              name="Nombre d'étudiant	"
              label="Nombre d'étudiant	"
             onChange={e => setnombreEtudiant(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
             
              fullWidth
              id="Specialité"
              name="Specialité"
              label="Specialité"
             onChange={e => setspecialite(e.target.value)}
            />
               <div > 
                    <Button onClick={handleSubmit}  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginLeft:"120px",marginRight:"50px",width:"200px"}}size="large" >
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
