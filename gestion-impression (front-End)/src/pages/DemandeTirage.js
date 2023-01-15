import React, { useEffect, useState } from "react";
import "../Views/AddUser.css"
import axios from 'axios';
import blob from "blob";
import { Button, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import { Close } from "@material-ui/icons";
import services from "../services/services";
import swal from "sweetalert";

function DemandeTirage({ details,setOpenModal,modaldata }) {
  const user = JSON.parse(localStorage.getItem('user'));  


  const [selectedFile, setState] = useState(null);
  const [idProf, setIdProf]=useState(user.id)
  const [dateArrival, setdateArrival]=useState()
  const [nombreCopy, setnombreCopy]=useState()
  const [document, setdocument]=useState() 
  const [documentUrl, setdocumentUrl]=useState() 
 const [idMatiere,setidMatiere]=useState()

   const onFileChange = (event) => {
    setState({ selectedFile: event.target.files[0] });
    setdocument(event.target.value)
  }; 
  
  // On file upload (click the upload button)
  const onFileUpload = () => {  
  const fileName = ".pdf";
  const file = new File([blob], fileName);
    console.log(selectedFile);  
    axios.post("", fileName,file);
  };


  const [matiers, setmatiers] = useState([]);
  const [groups, setgroups] = useState([]);

  const getmatiersList = async() => {
    return fetch("http://localhost:9090/api-gateway/matiere-server/api/matieres")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setmatiers(actualData);
      },
      ).catch( () => console.log("error"));
      
  }

const getgroupsList = async() => {
  return fetch("http://localhost:9090/api-gateway/group-server/api/groups")
    .then((response) => response.json())
    .then((actualData) => {
      console.log(actualData);
      setgroups(actualData);
    },
    ).catch( () => console.log("error"));
    
}
useEffect(()=>{
getgroupsList()

},[])

useEffect(()=>{
  getmatiersList()

},[]) 
const handleSubmit = async e => {
    
    e.preventDefault();
    const response1= await services.addFile({
      document
    }) ;
    if (response1 != "") {setdocumentUrl(response1)}
    const response = await services.addTask({
    dateArrival,
    nombreCopy,
    documentUrl,
    idProf,
    idMatiere
   });
      if ('id' in response) {
        setOpenModal(false)
        window.location.href = "/agent"
            } 
      else {
      swal("Failed", response.message, "error");
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
                    onChange={e => setidMatiere(e.target.value)}
                >
                {matiers.map((option) => (
                    <MenuItem key={option.value} value={option.id}>
                    {option.name}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                    fullWidth
                    id="date"
                    label="date d'arrivée"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={e => setdateArrival(e.target.value)}
                 />
                 <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="nombre_copy"
              name="nombre de copie"
              label="nombre de copie"
              type="number"

             onChange={e => setnombreCopy(e.target.value)}
            />
              <Typography> <input type="file" 
              onChange={ onFileChange} 
              setdocumentUrl/> </Typography> 
            <Button  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginTop:"10px",marginBottom:"20px"}}  size="small" onClick={onFileUpload}>
            télécharger
        </Button>

               <div > 
                    <Button onClick={handleSubmit}  style={{backgroundColor:"#F4E1FA",color:'#B04CFE',marginLeft:"120px",marginRight:"50px",width:"200px"}}size="large" >
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
