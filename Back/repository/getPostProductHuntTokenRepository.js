var entity =  require("../models/postProductHuntEntity");
const axios = require("axios");
const https = require('https');

async function getPostProductHuntTokenRepository() {

    let post 

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'api.producthunt.com'
    }

    const body = JSON.stringify({
        client_id: 'R0DdKvYpbTeUsolPa3S_DtaNiH6VEGNE3u4sG3AynHw',
        client_secret: 'HSpAXtf17xzqz7UZqPgK7X8D08N-c-a5_wzUiOTyp5g',
        grant_type: 'client_credentials'
    })

    let res = await axios.post("https://api.producthunt.com/v2/oauth/token", body, header).then(result => {
        console.log(result);
    }).catch(err => {
       console.log("err == ", err);
    });

  //  console.log(res.data);

    // const data = new TextEncoder().encode(
    //     JSON.stringify({
    //     client_id: 'R0DdKvYpbTeUsolPa3S_DtaNiH6VEGNE3u4sG3AynHw',
    //     client_secret: 'HSpAXtf17xzqz7UZqPgK7X8D08N-c-a5_wzUiOTyp5g',
    //     grant_type: 'client_credentials'
    //     })
    // )
    
    
    // const options = {
    //     hostname: 'api.producthunt.com',
    //     port: 443,
    //     path: '/v2/oauth/token',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Content-Length': data.length
    //     }
    // }
    
    // const req = await https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`)

    //     console.log(res)
        
    //     res.on('data', d => {

    //         post = new entity.postProductHuntEntity(JSON.parse(d));

    //         console.log("test post  :: ", post);
    //     })
    // })
    
    // req.on('error', error => {
    //     console.error(error)
    // })
    

    // console.log("after :: ", post);
    // req.write(data)
    // req.end()

    // return post;
}

module.exports = {
    getPostProductHuntTokenRepository
}