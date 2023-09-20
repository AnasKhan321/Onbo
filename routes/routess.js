const express = require('express');
const router = express.Router();
const Mclimate = require('../models/Climate')

// Assumed temparature for weather temparature delta 
let assumed = {
    cold: 10,
    hot: 35,
    humid: 32,
    rainy: 25
}


//  Add Climate You can add Climate in this route 
router.post('/addclimate', async (req, res) => {
    const { climate, area_code, temperature, humidity, chances_of_rain } = await req.body;
    console.log(req.body)
    const newClimate = await Mclimate.create({
        ClimateS: climate,
        AreaCode: area_code,
        Temparature: temperature,
        Humidity: humidity,
        ChancesRain: chances_of_rain
    })
    res.json({ 'id ': newClimate.id, success: true })
})

// Get all Saved Data 
router.get('/getalldata', async (req, res) => {
    let alldata = await Mclimate.find();
    res.json(alldata)
})


//  Get data with Particular AreaCode 
router.get('/getdata/:areacode', async (req, res) => {
    const data = await Mclimate.findOne({ AreaCode: req.params.areacode })
    if (data) {
        res.json(data)
    }
    else {
        res.json({ error: "Data not found " })
    }
})

// Get data with Particular area and Climate 
router.get('/getdata/:climate/:area', async (req, res) => {
    const data = await Mclimate.findOne({ ClimateS: req.params.climate, AreaCode: req.params.area })
    if (data) {
        res.json(data)
    }
    else {
        res.json({ error: "Data not found " })
    }
})

// Update the Data with this data 
router.post('/updatedata', async (req, res) => {
    const { from_climate, to_climate, area_code } = await req.body;
    console.log(assumed[to_climate])
    if (from_climate == to_climate) {
        return res.json({ error: "Climate should be different " })
    }
    else {
        const data = await Mclimate.findOneAndUpdate({ AreaCode: area_code, ClimateS: from_climate }, { ClimateS: to_climate, $inc: { record: 1 } })
        const updatedata = {
            "climate_delta": `${from_climate}-> ${to_climate} `,
            "temperature_delta": (assumed[to_climate] - assumed[from_climate]) / data.record,
            "humidity_delta": data.Humidity,
            "rain_chances_delta": data.ChancesRain,
            "climate_change_index": ((data.Temparature * data.Humidity) / data.ChancesRain)
        }
        return res.json(updatedata)
    }

})

module.exports = router; 
