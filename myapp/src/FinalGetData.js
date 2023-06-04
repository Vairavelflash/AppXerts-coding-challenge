import React, { useState } from 'react';
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FinalGetData = () => {
    const [id, setID] = useState()
  const [Lists, setLists] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted value:', id);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1Njk0NjcyLCJleHAiOjE2ODU3MTI2NzIsImlhdCI6MTY4NTY5NDY3Mn0.qo-NiCWpv0ZMj7NmLyw7nYx1VeT2ontWchrnmWdRGK0'
   
    try {
      const response = await fetch(`http://localhost:4000/get/${id}`);
      const jsonData = await response.json();
      setLists(jsonData.Data)
      console.log(jsonData.Data)
      // funtext(Lists)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };



  return (
    <div>
       <br/>
     <br/>
    
  <form onSubmit={handleSubmit}>
      {/* <input type="text" onChange={handleChange} placeholder='Enter 1,2'/> */}
      <TextField id="outlined-basic" label="Enter number" variant="outlined"  type='text' onChange={handleChange} />
      <Button variant="contained" color="success" type="submit">
      Submit
      </Button>
      {/* <button type="submit">submit</button> */}
    </form>
   
    {loading ? (
        <p>Loading...</p>
      ) : (
     
   
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>OrgId</TableCell>
            <TableCell align="right">ClientId</TableCell>
            <TableCell align="right">ClientName</TableCell>
            <TableCell align="right">AddressLine1</TableCell>
            <TableCell align="right">AddressLine2</TableCell>
            <TableCell align="right">AddressLine3</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">PostalCode</TableCell>
            <TableCell align="right">MobileNo</TableCell>
            <TableCell align="right">FaxNo</TableCell>
            <TableCell align="right">EmailId</TableCell>
            <TableCell align="right">PaymentTerm</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">TaxCode</TableCell>
            <TableCell align="right">TaxType</TableCell>
            <TableCell align="right">TaxPerc</TableCell>
            <TableCell align="right">ContactPerson</TableCell>
            <TableCell align="right">ContactNo</TableCell>
            <TableCell align="right">IsActive</TableCell>
            <TableCell align="right">CreatedBy</TableCell>
            <TableCell align="right">CreatedOn</TableCell>
            <TableCell align="right">ChangedBy</TableCell>
            <TableCell align="right">ChangedOn</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">ClientSocialMediaList</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Lists.map((item) => (
            <TableRow
              key={item.OrgId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.OrgId}
              </TableCell>
              <TableCell align="right">{item.ClientId}</TableCell>
              <TableCell align="right">{item.ClientName}</TableCell>
              <TableCell align="right">{item.AddressLine1}</TableCell>
              <TableCell align="right">{item.AddressLine2}</TableCell>
              <TableCell align="right">{item.AddressLine3}</TableCell>
              <TableCell align="right">{item.Country}</TableCell>
              <TableCell align="right">{item.PostalCode}</TableCell>
              <TableCell align="right">{item.MobileNo}</TableCell>
              <TableCell align="right">{item.FaxNo}</TableCell>
              <TableCell align="right">{item.EmailId}</TableCell>
              <TableCell align="right">{item.PaymentTerm}</TableCell>
              <TableCell align="right">{item.Currency}</TableCell>
              <TableCell align="right">{item.TaxCode}</TableCell>
              <TableCell align="right">{item.TaxType}</TableCell>
              <TableCell align="right">{item.TaxPerc}</TableCell>
              <TableCell align="right">{item.ContactPerson}</TableCell>
              <TableCell align="right">{item.ContactNo}</TableCell>
              <TableCell align="right">{item.IsActive ? 'True' : 'False'}</TableCell>
              <TableCell align="right">{item.CreatedBy}</TableCell>
              <TableCell align="right">{item.CreatedOn}</TableCell>
              <TableCell align="right">{item.ChangedBy}</TableCell>
              <TableCell align="right">{item.ChangedOn}</TableCell>
              <TableCell align="right">{item.Password}</TableCell>
              <TableCell align="right">{item.ClientSocialMediaList}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      )}
   

    </div>
  );
};



export default FinalGetData;