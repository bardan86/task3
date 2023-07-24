const request = require("request")

const geocode = (address , callback ) =>{
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYmFyZGFuIiwiYSI6ImNsaGlwMmN1czBhNDYzZ216eXdxajVuM2gifQ.90Trc0foBU4ETKInnTwz6Q"


request ({url:geocodeUrl , json:true} , (error ,res) =>{
    if(error){
        callback ("unable to connect geo service" , undefined)
        // console.log("unable to connect geo service") // low level error
    }else if(res.body.message){
        callback (res.body.message , undefined)
        // console.log(res.body.message)
    }else if(res.body.features.length == 0){
        callback("unable to find location" , undefined)
        // console.log("unable to find location") 
    }else {
       callback(undefined,{
        latitude : res.body.features[0].center[0],
        longtitude : res.body.features[0].center[1]
         })
    }
})
}
module.exports= geocode
// 
// [
//   {
//     type: "FeatureCollection",
//     query: ["los", "angeles"],
//     features: [
//       {
//         id: "place.192407788",
//         type: "Feature",
//         place_type: ["place"],
//         relevance: 1,
//         properties: { mapbox_id: "dXJuOm1ieHBsYzpDM2ZvN0E", wikidata: "Q65" },
//         text: "Los Angeles",
//         place_name: "Los Angeles, California, United States",
//         bbox: [-118.52144, 33.899991, -118.126728, 34.161439],
//         center: [-118.242766, 34.053691],
//         geometry: { type: "Point", coordinates: [-118.242766, 34.053691] },
//         context: [
//           {
//             id: "district.14051052",
//             mapbox_id: "dXJuOm1ieHBsYzoxbWJz",
//             wikidata: "Q104994",
//             text: "Los Angeles County",
//           },
//           {
//             id: "region.419052",
//             mapbox_id: "dXJuOm1ieHBsYzpCbVRz",
//             wikidata: "Q99",
//             short_code: "US-CA",
//             text: "California",
//           },
//           {
//             id: "country.8940",
//             mapbox_id: "dXJuOm1ieHBsYzpJdXc",
//             wikidata: "Q30",
//             short_code: "us",
//             text: "United States",
//           },
//         ],
//       },
//       {
//         id: "place.1255471",
//         type: "Feature",
//         place_type: ["place"],
//         relevance: 1,
//         properties: { mapbox_id: "dXJuOm1ieHBsYzpFeWd2", wikidata: "Q16910" },
//         text: "Los Ángeles",
//         place_name: "Los Ángeles, Biobío, Chile",
//         bbox: [-72.68248, -37.663862, -72.041277, -37.178368],
//         center: [-72.351686, -37.470745],
//         geometry: { type: "Point", coordinates: [-72.351686, -37.470745] },
//         context: [
//           {
//             id: "region.74799",
//             mapbox_id: "dXJuOm1ieHBsYzpBU1F2",
//             wikidata: "Q2170",
//             short_code: "CL-BI",
//             text: "Biobío",
//           },
//           {
//             id: "country.8751",
//             mapbox_id: "dXJuOm1ieHBsYzpJaTg",
//             wikidata: "Q298",
//             short_code: "cl",
//             text: "Chile",
//           },
//         ],
//       },
//       {
//         id: "poi.300647807514",
//         type: "Feature",
//         place_type: ["poi"],
//         relevance: 1,
//         properties: {
//           foursquare: "439ec330f964a520102c1fe3",
//           wikidata: "Q8731",
//           landmark: true,
//           address: "1 World Way",
//           category: "airport",
//           maki: "airport",
//         },
//         text: "Los Angeles International Airport (LAX)",
//         place_name:
//           "Los Angeles International Airport (LAX), 1 World Way, Los Angeles, California 90045, United States",
//         center: [-118.406829, 33.942912],
//         geometry: { coordinates: [-118.406829, 33.942912], type: "Point" },
//         context: [
//           {
//             id: "neighborhood.699550956",
//             mapbox_id: "dXJuOm1ieHBsYzpLYkpNN0E",
//             wikidata: "Q4272085",
//             text: "Westchester",
//           },
//           {
//             id: "postcode.300388076",
//             mapbox_id: "dXJuOm1ieHBsYzpFZWVPN0E",
//             text: "90045",
//           },
//           {
//             id: "place.192407788",
//             mapbox_id: "dXJuOm1ieHBsYzpDM2ZvN0E",
//             wikidata: "Q65",
//             text: "Los Angeles",
//           },
//           {
//             id: "district.14051052",
//             mapbox_id: "dXJuOm1ieHBsYzoxbWJz",
//             wikidata: "Q104994",
//             text: "Los Angeles County",
//           },
//           {
//             id: "region.419052",
//             mapbox_id: "dXJuOm1ieHBsYzpCbVRz",
//             wikidata: "Q99",
//             short_code: "US-CA",
//             text: "California",
//           },
//           {
//             id: "country.8940",
//             mapbox_id: "dXJuOm1ieHBsYzpJdXc",
//             wikidata: "Q30",
//             short_code: "us",
//             text: "United States",
//           },
//         ],
//       },
//       {
//         id: "neighborhood.7138374",
//         type: "Feature",
//         place_type: ["neighborhood"],
//         relevance: 1,
//         properties: { mapbox_id: "dXJuOm1ieHBsYzpiT3hH", wikidata: "Q390462" },
//         text: "Los Ángeles",
//         place_name: "Los Ángeles, Madrid, Madrid, Spain",
//         bbox: [-3.7070592, 40.3456003, -3.6929746, 40.3645282],
//         center: [-3.699639, 40.356222],
//         geometry: { type: "Point", coordinates: [-3.699639, 40.356222] },
//         context: [
//           {
//             id: "postcode.46108230",
//             mapbox_id: "dXJuOm1ieHBsYzpBcitPUmc",
//             text: "28041",
//           },
//           {
//             id: "locality.403810886",
//             mapbox_id: "dXJuOm1ieHBsYzpHQkdxUmc",
//             wikidata: "Q919536",
//             text: "Villaverde",
//           },
//           {
//             id: "place.34564166",
//             mapbox_id: "dXJuOm1ieHBsYzpBZzlvUmc",
//             wikidata: "Q2807",
//             text: "Madrid",
//           },
//           {
//             id: "region.17478",
//             mapbox_id: "dXJuOm1ieHBsYzpSRVk",
//             wikidata: "Q24004405",
//             short_code: "ES-M",
//             text: "Madrid",
//           },
//           {
//             id: "country.8774",
//             mapbox_id: "dXJuOm1ieHBsYzpJa1k",
//             wikidata: "Q29",
//             short_code: "es",
//             text: "Spain",
//           },
//         ],
//       },
//       {
//         id: "poi.1108101583694",
//         type: "Feature",
//         place_type: ["poi"],
//         relevance: 1,
//         properties: {
//           foursquare: "40a6af00f964a52027f31ee3",
//           landmark: true,
//           address: "5905 Wilshire Blvd",
//           category:
//             "art museum, art, museum, painting, art gallery, art galleries, galleries, gallery, museum, tourism",
//         },
//         text: "Los Angeles County Museum of Art (LACMA)",
//         place_name:
//           "Los Angeles County Museum of Art (LACMA), 5905 Wilshire Blvd, Los Angeles, California 90036, United States",
//         center: [-118.359204, 34.063476],
//         geometry: { coordinates: [-118.359204, 34.063476], type: "Point" },
//         context: [
//           {
//             id: "neighborhood.411020524",
//             mapbox_id: "dXJuOm1ieHBsYzpHSCtzN0E",
//             wikidata: "Q3315812",
//             text: "Miracle Mile",
//           },
//           {
//             id: "postcode.300314348",
//             mapbox_id: "dXJuOm1ieHBsYzpFZVp1N0E",
//             text: "90036",
//           },
//           {
//             id: "place.192407788",
//             mapbox_id: "dXJuOm1ieHBsYzpDM2ZvN0E",
//             wikidata: "Q65",
//             text: "Los Angeles",
//           },
//           {
//             id: "district.14051052",
//             mapbox_id: "dXJuOm1ieHBsYzoxbWJz",
//             wikidata: "Q104994",
//             text: "Los Angeles County",
//           },
//           {
//             id: "region.419052",
//             mapbox_id: "dXJuOm1ieHBsYzpCbVRz",
//             wikidata: "Q99",
//             short_code: "US-CA",
//             text: "California",
//           },
//           {
//             id: "country.8940",
//             mapbox_id: "dXJuOm1ieHBsYzpJdXc",
//             wikidata: "Q30",
//             short_code: "us",
//             text: "United States",
//           },
//         ],
//       },
//     ],
//     attribution:
//       "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare.",
//   },
// ];
