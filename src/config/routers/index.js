const express = require('express');
const router = express();

//function db();
require('../db/db')();

//Match Schma

const Matches = require('../models/matches');

router.get('/lastGame',async(req,res)=>{

    await Matches.find({},async(err,docs)=>{
        if (err) {
            throw err;
        }
        docs.reverse();
        res.send(docs[0]);
    })
})
router.get('/lastFiftyGame',async(req,res)=>{

    await Matches.find({},async(err,docs)=>{
        if (err) {
            throw err;
        }
        docs.reverse();

        const lastFiftyGames = [];

        for (let i = 0; i < 50; i++) {

            lastFiftyGames.push(docs[i]);

        }

        res.send(lastFiftyGames);
    })

})

router.get('/searchMatch/:id&:date',async(req,res)=>{

    await Matches.find({id: req.params.id},async(err,docs)=>{
        if (err) {
            throw err;
        }
        if (docs.length !== 0) {
            return res.send(docs);

        }
    })

    await Matches.find({"kickoff.label": req.params.id},async(err,docs)=>{
        if (err) {
            throw err;
        }
        console.log(docs);
        if (docs.length !== 0) {
            return res.send(docs);

        }
    })
})

module.exports = router;