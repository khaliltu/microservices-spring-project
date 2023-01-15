import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { tableTheme } from "../Views/table-theme";
import DemandeTirage from "./DemandeTirage";
import ModalAddMatiere from "./ModaleAddMatiere";
import React from "react"
const Enseignant= () => {
    const user = JSON.parse(localStorage.getItem('user'));  
    const [modalOpen, setModalOpen] = useState(false);
    const [modaldata, setmodaldata] = useState([]);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modaldata2, setmodaldata2] = useState([]);
    const [tasks, settasks] = useState([]);

    const showModal = (record) => {
        setmodaldata(record);
        setModalOpen(true);
      };
      const showModal2 = (record) => {
        setmodaldata2(record);
        setModalOpen2(true);
      };
      const gettasksList = () => {
        return fetch("http://localhost:9090/api-gateway/task-server/api/tasks/profs/"+user.id)
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            settasks(actualData);
          },
          ).catch( () => console.log("error"));
          
      }
    useEffect(()=>{
        gettasksList()
    
    },[])
    const formatDate = (date) => {
        const d = new Date(date);
        return (
          ('0' + d.getDate()).slice(-2) +
          '/' +
          ('0' + (d.getMonth() + 1)).slice(-2) +
          '/' +
          d.getFullYear() 
        );
      }; 
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
                                                <TableCell>Nom du fichier</TableCell>
                                                <TableCell>Nombre de copie</TableCell>
                                                <TableCell>Date de depot</TableCell>
                                                <TableCell>état</TableCell>
                                           
                                             
                                            </TableRow>
                                        </TableHead>

                                        <TableBody component={Paper}>
                                            {tasks && tasks.map((task) => (
                                                <TableRow key={task.id}  >
                                                    <TableCell>{task.id}</TableCell>
                                                    <TableCell>{task.nombreCopy}</TableCell>
                                                    <TableCell>{formatDate(task.dateArrival)}</TableCell>
                                                  <TableCell>  {(task.state).toString() === "false"? "en cours": "imprimé " } </TableCell>
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