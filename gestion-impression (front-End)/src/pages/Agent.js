import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { tableTheme } from "../Views/table-theme";

const Agent= () => {
    


    return(
        <div className="container">
            <div className="row">
                <div className="card py-lg-3">
                <hr/>
                    <h2>LES TÂCHES</h2>
                    <hr/>
                    <div className="row">
                        <Paper elevation={0}>
                            <ThemeProvider theme={tableTheme}>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table style={{paddingBottom: 50}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>ENSEIGNGANT</TableCell>
                                                <TableCell>DOCUMENT</TableCell>
                                                <TableCell>NOMBRE DE COPIE</TableCell>
                                                <TableCell>DATE</TableCell>
                                                <TableCell>ACTIONS</TableCell>
                                             
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


            <div>

            </div>
        </div>
    );
}
export default Agent