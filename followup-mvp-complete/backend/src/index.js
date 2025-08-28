import express from 'express'
const app = express()
app.get('/', (req,res)=>res.json({ok:true, service:"followup-backend"}))
app.listen(10000, ()=>console.log("Running on 10000"))
