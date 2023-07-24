const  validator = require("validator")
const request = require("request")
const fs = require("fs")
const weather = require("./weather")
const geocode = require("./geo")
const yargs = require("yargs")


 const showdet = (country) => {
    geocode(country, (error,data)=>{
    //     console.log("error:", error)
    // console.log("data:", data)
    
    
    weather(data.latitude , data.longtitude 
        , (error,data) =>{
    console.log("error:", error)
    console.log("data:", data)
    
    })
    })
}

// showdet("syria")

// command   node app  country --cName="germany"
yargs.command({
    command:"country",
    describe:"enter country",
    builder:{
        cName:{
            describe:"counrty name",
            demandOption : true,
            type:"string"
        },
    },
    handler:(x)=>{
        showdet(x.cName)
        
    }
})
yargs.parse()