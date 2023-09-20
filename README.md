# Onbo

Hy Sir I made this website for the assignment I made this in Node Js with the Help of Express I use MongoDb as database 
Steps to Start the app 

For installing the dependencies and node modules 
npm i 

to Start the Api  it starts on port 3000
node ./index

EndPoint 

Post - http://localhost:3000/addclimate You have to given the data in Json Form like {
    "climate" : "cold",
    "area_code" : 1900,
    "temperature" : 34 ,
    "humidity" : 67,
    "chances_of_rain" : 90
}

Get - http://localhost:3000/getalldata You can get all of your registered data 
Get - http://localhost:3000/getdata/areacode YOu have to give areacode to fetch for a particular area 
Get - http://localhost:3000/getdata/climate/areacode You have to give climate then areacode to fetch data 
Post - http://localhost:3000/updatedata to Update the data you have to give the data in Json form Like this {
    "from_climate" : "cold",
    "to_climate" : "hot",
    "area_code" : 1900
}

Post - POST REQUEST 
Get - GET REQUEST 

I hope You understand 
