const cron = require('node-cron');
const axios = require('axios');

const Matches = require('../models/matches');

async function fillDb(){
    
    for (let i = 40; i > -1 ; i--) {
        
        const resultRequest = await axios.get(`https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&comps=1,4,5,2,210&compSeasons=&homeTeams=&page=${i}&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false`)
        .catch(err=> console.log(err))
        
        for (let j = 99; j > -1; j--) {
            let validate = true;
            
            let match =  resultRequest.data.content[j];
            
            if(typeof match === 'undefined'){
                validate = false;
            }

            if (validate) {
                let datewithHour = match.kickoff.label;

                const date = datewithHour.split(',');
                console.log(date[0]);
                
                const dateFormat = new Date(date[0]);
                
                match.kickoff.label = dateFormat;
                console.log(dateFormat);

                const matchModel = new Matches(match);
                
                Matches.find({id:matchModel.id},async(err,docs)=>{
                    if(docs.length === 0 ){
                        await matchModel.save();

                    }
                })
            }
        }
    }

}

function db(){

    fillDb();

    cron.schedule('0 0 * * *',async()=>{
        await fillDb();

    })
}
        
module.exports = db;