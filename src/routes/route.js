const express = require('express');
const { Router } = require('express');
const collageController = require('../Controller/collageController')
const internController = require('../Controller/internController')
const router = express.Router();

const collegeModel = require('../Modle/collegeModel')

router.post("/colleges", collageController.Collage) 

router.post('/interns', internController.createIntern)

router.get('/collegeDetails', internController.getDetails)




module.exports = router;