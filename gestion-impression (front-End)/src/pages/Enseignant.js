import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { tableTheme } from "../Views/table-theme";
import DemandeTirage from "./DemandeTirage";
import ModalAddMatiere from "./ModaleAddMatiere";

const Enseignant= () => {
    
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

    return(
        <div className="container">
            <div className="row">
                <div className="card py-lg-3">
                    <h2></h2>
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
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                             
                                            </TableRow>
                                        </TableHead>

                                        {/* <TableBody component={Paper}>
                                            {menus.map((menu) => (
                                                <TableRow
                                                    key={menu.id}
                                                    onClick={() => showModal(menu)}>
                                                    <TableCell>{menu.name}</TableCell>
                                                    <TableCell>{menu.nom}</TableCell>
                                                    <TableCell>{menu.prenom}</TableCell>
                                                    <TableCell>{formatDate(menu.created_at)}</TableCell>
                                                    {
                                                        statusControls.map((x) => {
                                                            if (x.menuStatus === menu.status_dev) {
                                                                return (
                                                                    <TableCell
                                                                        style={{color: x.menuColor}}>{x.menuLabel}</TableCell>
                                                                )
                                                            }
                                                        })
                                                    }
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

            {modalOpen && <ModalAddMatiere details={modaldata} setOpenModal={setModalOpen} />}
            {modalOpen2 && <DemandeTirage  details={modaldata2} setOpenModal={setModalOpen2} />}

            <div>

            </div>
        </div>
    );
}
export default Enseignant