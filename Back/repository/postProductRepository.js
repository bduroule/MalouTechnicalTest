var entity =  require("../models/postProductHuntEntity");
const axios = require("axios");

async function postProductRepository() {

    const header = {
        'Authorization': 'basic '+ 'S-wfCpS7eGDJ8gxK-AO1xJa9hbNhfE9Qucwdtx1GlHo'
    }

    const body = JSON.stringify({
        query: `posts(postedBefore: "2022-01-20T23:59:59+0000", postedAfter:"2022-01-20T00:00:00+0000", first:10, after: "MjA=") {
            totalCount
            edges {
                node {
                    name
                    description
                 
                }
                cursor
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
          }`

    })

    let res = await axios.post("https://api.producthunt.com/v2/api/graphql", body, header).then(result => {
        console.log(result);
    }).catch(err => {
        console.log("err == ", err);
    });

    console.log(res.data);
}

module.exports = {
    postProductRepository
}