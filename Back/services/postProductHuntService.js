const repository = require("../repository/getPostProductHuntTokenRepository")
const entity =  require("../models/postProductHuntEntity");

function postProductHuntService() {

    entity.postProductHuntService = repository.getPostProductHuntTokenRepository();
    console.log("service :: ", entity.postProductHuntService);
    return entity;
}

module.exports = {
    postProductHuntService
}