
class postProductHuntEntity {
    access_token;
    token_type;
    scope;
    created_at;

    constructor(data) {
        Object.assign(this, data);
    }
}

module.exports = {
    postProductHuntEntity
} 