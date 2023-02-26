//entry point
var sequelize=require('./models').sequelize;

const express=require('express');
const app=express();
sequelize.sync();

const port=3000;

app.get('/',(req,res)=>res.send('Hello World!'));

app.listen(port,()=>console.log(port,'번 포트에서 실행되었습니다.'));