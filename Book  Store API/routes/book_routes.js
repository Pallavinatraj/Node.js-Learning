const express = require('express');
const router = express.Router();
const {getOneData, getAlldata, updateData, createData, deleteData} = require('../controllers/book_routesControllers')

// router.use(express.json());

router.get("/all", getAlldata);
router.get("/all/:id", getOneData);
router.post("/create", createData);
router.put('/update/:id', updateData);
router.delete('/delete/:id', deleteData);

module.export = router;

