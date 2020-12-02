
exports.up = function(knex) {
  return(knex.schema
    .createTable('recipes', recipes => {
        recipes.increments('id')
        recipes.string('recipe_name').notNullable()
        recipes.string('recipe_ingredients').notNullable()
        recipes.string('recipe_instructions').notNullable();
    }));
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExist('recipes')
    );
};
