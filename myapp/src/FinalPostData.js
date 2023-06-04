import React, { useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';

const FinalPostData = () =>{
    const [clientdata,setClientdata] = useState({
        ClientName: "",
        AddressLine1: "",
        AddressLine2: "",
        AddressLine3: "",
        Country: "",
        PostalCode: "",
        MobileNo: "",
        FaxNo: "",
        EmailId: "",
        PaymentTerm: "",
        Currency: "",
        TaxCode: "",
        TaxType: "",
        TaxPerc: "",
        ContactPerson: "",
        ContactNo: "",
        IsActive: "",
        CreatedBy: "",
        CreatedOn: "",
        ChangedBy: "",
        ChangedOn: "",
        ClientSocialMediaList:[]});
    const [smlist,setSMList] = useState({
        OrgId: 5,
        ClientId: "",
        SlNo: 0,
        SocialMediaId: "",
        SocialMediaName: "",
        SocialMediaLink: "",
        UserName: "",
        CreatedBy: "",
        CreatedOn: ""
      });

const [OrgId,setOrgId] = useState('');
const [ClientId,setClientId] = useState('');
const [Password,setPassword] = useState('');
const [IsActive,setIsActive] = useState('');

const handleSubmit =  (e) =>{
    e.preventDefault();
    // let obj ={
        
    //         "OrgId": OrgId,
    //         "ClientId": ClientId,
    //         "ClientName":ClientName ,
    //         "AddressLine1": AddressLine1,
    //         "AddressLine2": AddressLine2,
    //         "AddressLine3": AddressLine3,
    //         "Country": Country,
    //         "PostalCode": PostalCode,
    //         "MobileNo": MobileNo,
    //         "FaxNo": FaxNo,
    //         "EmailId": EmailId,
    //         "PaymentTerm": PaymentTerm,
    //         "Currency": Currency,
    //         "TaxCode": TaxCode,
    //         "TaxType": TaxType,
    //         "TaxPerc": TaxPerc,
    //         "ContactPerson": ContactPerson,
    //         "ContactNo": ContactNo,
    //         "IsActive": IsActive,
    //         "CreatedBy": CreatedBy,
    //         "CreatedOn": "2023-06-03T10:42:45.976Z",
    //         "ChangedBy": ChangedBy,
    //         "ChangedOn": "2023-06-03T10:42:45.976Z",
    //         "Password": Password,
    //         "ClientSocialMediaList": [
    //           {
    //             "OrgId": OrgId,
    //             "ClientId":ClientId,
    //             "SlNo": SlNo,
    //             "SocialMediaId": SocialMediaId,
    //             "SocialMediaName": SocialMediaName,
    //             "SocialMediaLink": SocialMediaLink,
    //             "UserName": UserName,
    //             "Password": Password,
    //             "CreatedBy": CreatedBy,
    //             "CreatedOn": "2023-06-03T10:42:45.977Z"
    //           }
    //         ]
    //       }
    // new Date().toISOString()
    // console.log(obj)


Object.assign(clientdata,{OrgId:OrgId},{ClientId:ClientId},{IsActive:IsActive},{Password:Password},{CreatedOn:new Date().toISOString()},{ChangedOn:new Date().toISOString()})
Object.assign(smlist,{Password:Password},{CreatedOn:new Date().toISOString()});
clientdata.ClientSocialMediaList.push(smlist);

axios.post("http://localhost:4000/post", clientdata).then((response) => {
    console.log(response.status, response.data);
  });
  clientdata.ClientSocialMediaList = [];
}

const handleChange = (e) => {
    const value = e.target.value;
    setClientdata({
      ...clientdata,
      [e.target.name]: value
    });
  };

  const handleChange2 = (e) => {
    const value = e.target.value;
    setSMList({
      ...smlist,
      [e.target.name]: value
    });
  };

    return(
<div>
    <form onSubmit={handleSubmit}>
   
      <p>OrgId :</p>  <input type="text" value={OrgId} name='OrgId' onChange={(e) => {setOrgId(e.target.value)}}/><br/>
      <p>ClientId :</p> <input type="text" value={ClientId} name='ClientId' onChange={(e) => {setClientId(e.target.value)}}/><br/>
       <p>ClientName :</p> <input type="text" name='ClientName' value={setClientdata.ClientName}
            onChange={handleChange}/><br/>
       <p>AddressLine1 :</p> <input type="text" name='AddressLine1' value={setClientdata.AddressLine1}
            onChange={handleChange}/><br/>
      
       <p>AddressLine2 :</p> <input type="text"  name='AddressLine2'value={setClientdata.AddressLine2}
            onChange={handleChange}/><br/>
       <p>AddressLine3 :</p> <input type="text"  name='AddressLine3' value={setClientdata.AddressLine3}
            onChange={handleChange}/><br/>
       <p>Country :</p> <input type="text"  name='Country' value={setClientdata.Country}
            onChange={handleChange}/><br/>
       <p>PostalCode :</p> <input type="text"  name='PostalCode' value={setClientdata.PostalCode}
            onChange={handleChange}/><br/>
       <p>MobileNo :</p> <input type="text"  name='MobileNo' value={setClientdata.MobileNo}
            onChange={handleChange}/><br/>
       <p>FaxNo :</p> <input type="text"  name='FaxNo' value={setClientdata.FaxNo}
            onChange={handleChange}/><br/>
       <p>EmailId :</p> <input type="text"  name='EmailId' value={setClientdata.EmailId}
            onChange={handleChange}/><br/>
       <p>PaymentTerm :</p> <input type="text"  name='PaymentTerm' value={setClientdata.PaymentTerm}
            onChange={handleChange}/><br/>
       <p>Currency :</p> <input type="text"  name='Currency' value={setClientdata.Currency}
            onChange={handleChange}/><br/>
       <p>TaxCode :</p> <input type="text"  name='TaxCode' value={setClientdata.TaxCode}
            onChange={handleChange}/><br/>
       <p>TaxType :</p> <input type="text"  name='TaxType' value={setClientdata.TaxType}
            onChange={handleChange}/><br/>
       <p>TaxPerc :</p> <input type="text"  name='TaxPerc' value={setClientdata.TaxPerc}
            onChange={handleChange}/><br/>
       <p>ContactPerson :</p> <input type="text"  name='ContactPerson' value={setClientdata.ContactPerson}
            onChange={handleChange}/><br/>
       <p>ContactNo :</p> <input type="text"  name='ContactNo' value={setClientdata.ContactNo}
            onChange={handleChange}/><br/>
      
       <p>IsActive :</p> <input  type="checkbox"  checked={IsActive} onChange={(e) => {setIsActive(e.target.checked)}}/><br/>
      
       <p>CreatedBy :</p> <input type="text"  name='CreatedBy' value={setClientdata.CreatedBy}
            onChange={handleChange}/><br/>
       <p>ChangedBy :</p> <input type="text"  name='ChangedBy' value={setClientdata.ChangedBy}
            onChange={handleChange}/><br/>
       <p>Password :</p> <input type="text"  name='Password' value={Password}
           onChange={(e) => {setPassword(e.target.value)}}/><br/>
       <p>SlNo :</p> <input type="text"  name='SlNo' value={setSMList.SlNo}
            onChange={handleChange2}/><br/>
       <p>SocialMediaId :</p> <input type="text"  name='SocialMediaId' value={setSMList.SocialMediaId}
            onChange={handleChange2}/><br/>
       <p>SocialMediaName :</p> <input type="text"  name='SocialMediaName' value={setSMList.SocialMediaName}
            onChange={handleChange2}/><br/>
       <p>SocialMediaLink :</p> <input type="text"  name='SocialMediaLink' value={setSMList.SocialMediaLink}
            onChange={handleChange2}/><br/>
       <p>UserName :</p> <input type="text"  name='UserName' value={setSMList.UserName}
            onChange={handleChange2}/><br/>
      


     {/* <button type="submit">Submit</button> */}

     <Button variant="outlined" color="error" type="submit">
  Submit
</Button>

    </form>
</div>
    )
}

export default FinalPostData;