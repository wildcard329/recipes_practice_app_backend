const db = require('../database/db-config.js');

module.exports = {
    get,
    getById,
    add,
    update,
    remove
};

function get() {
    return db('recipes');
}

function getById(id) {
    return db('recipes').where({id}).first();
}

function add(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then((id => {
            return getById(id);
        }));
};

function update(changes, id) {
    return db('recipes')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db('recipes')
        .where({id})
        .del();
};
