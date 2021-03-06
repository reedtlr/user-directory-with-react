import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function UserTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Directory</TableCell>
            <TableCell align="right" onClick={props.handleSortFirst} >First Name <SortIcon /> </TableCell>
            <TableCell align="right" onClick={props.handleSortLast} >Last Name <SortIcon /> </TableCell>
            <TableCell align="right" onClick={props.handleSortEmail}>Email <SortIcon /> </TableCell>
            <TableCell align="right" onClick={props.handleSortPhone}>Phone <SortIcon /> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableOfUsers.filter((user) => user.name.first.includes(props.search) || 
          user.name.last.includes(props.search) || user.email.includes(props.search) || 
          user.cell.includes(props.search)).map((row) => (
            <TableRow key={row.email}>
              <TableCell component="th" scope="row">
                <img src={row.picture.thumbnail} alt={row.name.last} />
              </TableCell>
              <TableCell align="right">{row.name.first}</TableCell>
              <TableCell align="right">{row.name.last}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.cell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
