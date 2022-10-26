var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET property list
router.get("/", async function(req, res) {
    try {
        let result = await db("SELECT * FROM properties ORDER BY id ASC");
        let properties = result.data;
        res.send(properties);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// GET one property
router.get("/:id", async function(req, res) {
    let propertyId = req.params.id;

    try {
        let result = await db(`SELECT * FROM properties WHERE id = ${propertyId}`);
        if (result.data.length === 0) {
            res.status(404).send({ error: "Property not found" });
        } else {
            res.send(result.data[0]);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// INSERT a new property into the DB
router.post("/", async function(req, res) {
    let property = req.body;
    // OR let {location, availability, numofrooms, numofpeople, rating} = req.body and then in let sql VALUES without the property.

    let sql = `
        INSERT INTO properties (url, title, location, availability, numofrooms, numofpeople, rating, description)
        VALUES
            ("${property.url}", "${property.title}", "${property.location}", "${property.availability}", ${property.numofrooms}, ${property.numofpeople}, ${property.rating}, "${property.description}")
    `;

    try {
        await db(sql);
        let result = await db("SELECT * FROM properties");
        res.status(201).send(result.data);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// DELETE a property from the DB
router.delete("/:id", async function(req, res) {
    let propertyId = req.params.id;
 
    try {

        let result = await db(`SELECT * FROM properties WHERE id = ${propertyId}`);
        if (result.data.length === 0) {
            res.status(404).send({ error: "Property not found" });
        } else {
            await db(`DELETE FROM properties WHERE id = ${propertyId}`);
            let result = await db("SELECT * FROM properties");
            res.send(result.data);
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


module.exports = router;
