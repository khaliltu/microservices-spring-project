import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { tableTheme } from "../Views/table-theme";
import React, { useEffect, useState } from "react";
import { Button, TableBody } from "@material-ui/core";
const Agent= () => {
    const [tasks, settasks] = useState([]);

    const gettasksList = () => {
        return fetch("http://localhost:9090/api-gateway/task-server/api/tasks")
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            settasks(actualData);
          },
          ).catch( () => console.log("error"));
          
      }
      const changeState= ()=>{
        
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
                    <h2>LES TÂCHES</h2>
                    <hr/>
                    <div className="row">
                        <Paper elevation={0}>
                            <ThemeProvider theme={tableTheme}>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table style={{paddingBottom: 50}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Document</TableCell>
                                                <TableCell>Nombre de copie</TableCell>
                                                <TableCell>Date de dépôt </TableCell>
                                                <TableCell>Date d'arrivée </TableCell>
                                                <TableCell>Etat</TableCell>
                                             
                                            </TableRow>
                                        </TableHead>

                                         <TableBody component={Paper}>
                                         {tasks && tasks.map((task) => (
                                                <TableRow key={task.id}  >
                                                    <TableCell>{task.id}</TableCell>
                                                    <TableCell>{task.nombreCopy}</TableCell>
                                                    <TableCell>{formatDate(task.dateDepot)}</TableCell>
                                                    <TableCell>{formatDate(task.dateArrival)}</TableCell>
                                                  <TableCell>  {(task.state).toString() === "false"? "en cours": "imprimé " } <Button onClick={changeState()}>imprimer</Button></TableCell>
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


            <div>

            </div>
        </div>
    );
}
export default Agent