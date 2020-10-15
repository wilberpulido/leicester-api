const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchesSchema = new Schema({
    id: Number,
    kickoff:{
        label: Date,
    },
    gameweek: {
        id:Number,
        gameweek: Number,
        compSeason: {
            label: String,
            competition:{
                abbreviation: String,
                description: String,
                level: String,
                source: String,
                id: Number,
                altIds: {
                    opta: String
                }
            },
            id: Number,
        },
    },
    teams:[
        {
            team: {
                name: String,
                club: {
                    name: String,
                    shortName:String,
                    abbr: String,
                    id: Number,
                },
                teamType: String,
                shortName: String,
                id: Number,
                altIds: {opta:String}
            },
            score: Number,
        },
        {
            team: {
                name: String,
                club: {
                    name: String,
                    shortName:String,
                    abbr: String,
                    id: Number,
                },
                teamType: String,
                shortName: String,
                id: Number,
                altIds: {opta:String}
            },
            score: Number,
        }
    ],

},
{
    strictQuery: true
})

module.exports = mongoose.model('matches',MatchesSchema);