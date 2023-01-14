import { Close} from "@material-ui/icons";
import { Button, IconButton , MenuItem, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import services from "../services/services";
import "../Views/AddUser.css"

function ModalAddMatiere({ details,setOpenModal,modaldata }) {
  const user = localStorage.getItem('user');
  console.log(user)

  const [groups, setgroups] = useState([]);

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

const [name, setname] = useState();
const [idGroup, setidGroup] = useState();
const [idPRof, setididPRof] = useState();
const handleSubmit = async e => {
  
  e.preventDefault();
  
  const response = await services.addMatiere({
    name,
    idGroup,
    idPRof
  });
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
     <form noValidate /* onSubmit={handleSubmit} */ style={{marginRight:"50px",marginLeft:"50px"}}>
            <TextField
              //className={classes.form}
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              name="name"
              label="name"
             onChange={e => setname(e.target.value)}
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
                    onChange={e => setidGroup(e.target.value)}
        >
          {groups && groups.map((option) => (
            <MenuItem key={option.value} value={option.id}>
              {option.level}
            </MenuItem>
          ))} 
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
