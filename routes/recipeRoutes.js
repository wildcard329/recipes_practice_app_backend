const router = require('express').Router();

const Recipes = require('../controller/recipeController.js');

router.get('/', (req, res) => {
    Recipes.get()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Recipes.getById(id)
        .then(recipe => {
            if (recipe) {
                res.json(recipe);
            } else {
                res.status(404).json({ msg: `Could not find recipe with id ${id}` });
            };
        }) 
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.post('/', (req, res) => {
    const recipeData = req.body;

    Recipes.add(recipeData)
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;

    Recipes.getById(id)
        .then(recipe => {
            if (recipe) {
                Recipes.update(changes, id)
                    .then(updatedRecipe => {
                        res.json(updatedRecipe);
                    });
            } else {
                res.status(404).json({ msg: `Could not find recipe with id ${id}` });
            };
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Recipes.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ msg: `Could not find recipe with id ${id}` });
            };
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

module.exports = router
