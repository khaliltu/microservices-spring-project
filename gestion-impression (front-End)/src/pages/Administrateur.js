import { Button, Paper,  Table, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { tableTheme } from "../Views/table-theme";
import ModalAddGroupe from "./ModalAddGroupe";
import ModalAddUser from "./ModalAddUser";
import React from "react";
import {styled} from '@mui/material/styles';
import { TableBody } from "@material-ui/core";
const Administrateur= () => {
    
const StyledTableCell = styled(TableCell)(({}) => ({
    [`&.${tableCellClasses.head}`]: {
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

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
        return fetch("http://localhost:9090/api-gateway/user-server/api/users")
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setUsers(actualData);
          },
          ).catch( () => console.log("error"));
          
      }
    useEffect(()=>{
        getUsersList()
    
    },[])
    useEffect(()=>{
        const user = localStorage.getItem('user');
    console.log(user)
    
    },[])
   
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
                                            <Table size="small" aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>NOM</StyledTableCell>
                                                <StyledTableCell>PRÉNOM</StyledTableCell>
                                                <StyledTableCell>MAIL</StyledTableCell>
                                             
                                            </TableRow>
                                        </TableHead>

                                         <TableBody component={Paper}>
                                            {users && users.map((user) => (
                                                <TableRow key={user.id} >
                                                    <TableCell>{user.lastName}</TableCell>
                                                    <TableCell>{user.name}</TableCell>
                                                    <TableCell>{user.mail}</TableCell>
                                                  
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
            {modalOpen && <ModalAddUser details={modaldata} setOpenModal={setModalOpen} />}
            {modalOpen2 && <ModalAddGroupe details={modaldata2} setOpenModal={setModalOpen2} />}
            <div>

            </div>
        </div>
    );
}
export default Administrateur