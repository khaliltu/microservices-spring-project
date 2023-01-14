import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { tableTheme } from "../Views/table-theme";
import DemandeTirage from "./DemandeTirage";
import ModalAddMatiere from "./ModaleAddMatiere";
import React from "react"
const Enseignant= () => {
    const user = localStorage.getItem('user');
    console.log(user)
  
    const [modalOpen, setModalOpen] = useState(false);
    const [modaldata, setmodaldata] = useState([]);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modaldata2, setmodaldata2] = useState([]);
    const [matieres, setmatieres] = useState([]);

    const showModal = (record) => {
        setmodaldata(record);
        setModalOpen(true);
      };
      const showModal2 = (record) => {
        setmodaldata2(record);
        setModalOpen2(true);
      };
      const getMatieresList = () => {
        return fetch("http://localhost:9090/api-gateway/matiere-server/api/matieres")
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setmatieres(actualData);
          },
          ).catch( () => console.log("error"));
          
      }
    useEffect(()=>{
        getMatieresList()
    
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="card py-lg-3">
                    
                    <hr/>
                    <div> 
                    <Button 
                    style={{backgroundColor: '#B04CFE',color:'#FFFFFF',marginLeft:'30px',marginRight:'30px'}}
                    size="large"
                    onClick={() => showModal()}
                    >
                         ajouter matière 
                   
                    </Button>
                    <Button 
                    style={{backgroundColor: '#B04CFE',color:'#FFFFFF'}}
                    size="large"
                    onClick={() => showModal2()}
                    >
                     envoyer une demande de tirage 
                    </Button>
                </div>  <hr/>
                    <div className="row">
                        <Paper elevation={0}>
                            <ThemeProvider theme={tableTheme}>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table style={{paddingBottom: 50}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>MATIÈRE</TableCell>
                                                <TableCell>ACTIONS</TableCell>
                                           
                                             
                                            </TableRow>
                                        </TableHead>

                                        <TableBody component={Paper}>
                                            {matieres && matieres .map((matiere) => (
                                                <TableRow key={matiere.id}  >
                                                    <TableCell>{matiere.name}</TableCell>
                                                    <TableCell></TableCell>
                                           </TableRow>
                                            ))}

                                        </TableBody> 
                                      
                                    </Table>
                                </TableContainer>
                            </ThemeProvider>
                        </Paper>
                    </div>
                </div>
            </div>

            {modalOpen && <ModalAddMatiere details={modaldata} setOpenModal={setModalOpen} />}
            {modalOpen2 && <DemandeTirage  details={modaldata2} setOpenModal={setModalOpen2} />}

            <div>

            </div>
        </div>
    );
}
export default Enseignant