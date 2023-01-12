import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { tableTheme } from "../Views/table-theme";
import ModalAddGroupe from "./ModalAddGroupe";
import ModalAddUser from "./ModalAddUser";

const Administrateur= () => {
    const [users, setUsers] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modaldata, setmodaldata] = useState([]);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modaldata2, setmodaldata2] = useState([]);
    const showModal = (record) => {
        setmodaldata(record);
        setModalOpen(true);
      };
      const showModal2 = (record) => {
        setmodaldata2(record);
        setModalOpen2(true);
      };
      const getUsersList = () => {
        return fetch("http://localhost:9090/api-gateway/matiere-server/api/matieres" ,  
        { headers: {
          'content-type': 'application/json'
        
        }})
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setUsers(actualData.data);
          },
          );
          
      }
    useEffect(()=>{
        getUsersList()
    
    },[users])

    return(
        <div className="container">
            <div className="row">
                <div className="card py-lg-3">
                <hr/>
                    <h2>LES UTILISATEURS</h2>
                    <hr/>
                    <div> 
                    <Button 
                    style={{backgroundColor: '#B04CFE',color:'#FFFFFF',marginLeft:'30px',marginRight:'30px'}}
                    size="large"
                    onClick={() => showModal()}
                    >
                        ajouter utilisateur
                   
                    </Button>
                    <Button 
                    style={{backgroundColor: '#B04CFE',color:'#FFFFFF'}}
                    size="large"
                    onClick={() => showModal2()}
                    >
                      ajouter groupe 
                    </Button>
                </div> <hr/>
                    <div className="row">
                        
                        <Paper elevation={0}>
                            <ThemeProvider theme={tableTheme}>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table style={{paddingBottom: 50}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>NOM</TableCell>
                                                <TableCell>PRÉNOM</TableCell>
                                                <TableCell>MAIL</TableCell>
                                             
                                            </TableRow>
                                        </TableHead>

                                        {/* <TableBody component={Paper}>
                                            {users.map((user) => (
                                                <TableRow key={menu.id} >
                                                    <TableCell>{users.name}</TableCell>
                                                    <TableCell>{users.lastName}</TableCell>
                                                    <TableCell>{users.mail}</TableCell>
                                                  
                                                </TableRow>
                                            ))}

                                        </TableBody> */}
                                      
                                    </Table>
                                </TableContainer>
                            </ThemeProvider>
                        </Paper>
                    </div>
                </div>
            </div>
            {modalOpen && <ModalAddUser details={modaldata} setOpenModal={setModalOpen} />}
            {modalOpen2 && <ModalAddGroupe details={modaldata2} setOpenModal={setModalOpen2} />}
            <div>

            </div>
        </div>
    );
}
export default Administrateur