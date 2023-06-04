const express = require('express')
const axios = require('axios')
const cors = require('cors');
const app = express()
app.use(express.json())

app.use(cors());
app.get('/',(req,res) =>{
    res.send('res from server')
})

app.get('/get/:id',async (req,res) =>{
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1ODUyOTk2LCJleHAiOjE2ODU4NzA5OTYsImlhdCI6MTY4NTg1Mjk5Nn0.illx_Lq3vHaabhmia6opHkRVkKt3lsAchPqzK4T0Gms'

        let id = req.params.id;
        const data = await axios.get(`https://sleepy-leakey.154-26-130-251.plesk.page/api/ClientMaster/GetAll?OrganizationId=${id}`,{ headers: {"Authorization" : `Bearer ${token}`}});
        // const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data.data);
         return res.json(data.data)
      } catch (error) {
        console.error(error);
      }
      return res.send('Data not available')
})

app.post('/post',async (req,res) =>{  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1ODUyOTk2LCJleHAiOjE2ODU4NzA5OTYsImlhdCI6MTY4NTg1Mjk5Nn0.illx_Lq3vHaabhmia6opHkRVkKt3lsAchPqzK4T0Gms'
        let data = req.body
    await axios.post ('https://sleepy-leakey.154-26-130-251.plesk.page/api/ClientMaster/Create',data,{ headers: {"Authorization" : `Bearer ${token}` ,'Content-Type': 'application/json',}}).then((response) => {
        console.log(response.status);
      });

      res.send('Data Inserted successfully')
})


app.listen(4000,() =>{
    console.log('server is running on port 4000')
})