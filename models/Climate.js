const mongoose = require("mongoose");

const ClimateScheme = mongoose.Schema({
    ClimateS: {
        type: String,
        required: true,
    },
    AreaCode: {
        type : Number,
        required : true,
    },
    Temparature: {
        type: Number,
        required : true
    },
    Humidity :  {
        type: Number,
        required : true
    },
    ChancesRain : {
        type: Number,
        required : true 
    },
    record : {
        type : Number,
        default : 1 
    }


});
const ClimateS = mongoose.model("ClimateS", ClimateScheme);

module.exports = ClimateS; 