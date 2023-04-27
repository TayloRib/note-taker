const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require("fs");

router.get("/",(req,res)=>{
    fs.readFile("./db/notes.json","utf-8",(err,data)=>{
        if(err){
            return res.status(500).json({msg:"error reading db"})
        } else {
            const dataArr = JSON.parse(data);
            return res.json(dataArr)
        }
    })
})

router.post('/', (req,res)=>{
    fs.readFile("./db/notes.json","utf-8",(err,data)=>{
        if(err){
            return res.status(500).json({msg:"error reading db"})
        } else {
            const dataArr = JSON.parse(data);
            const newNote = {
                title:req.body.title,
                text:req.body.text,
            }
            dataArr.push(newNote)
           fs.writeFile("./db/notes.json",JSON.stringify(dataArr,null,4),(err)=>{
            if(err){
                return res.status(500).json({msg:"error writing db"})
            } else {
                return res.json(newNote)
            }
           })
        }
    })
})

module.exports = router;