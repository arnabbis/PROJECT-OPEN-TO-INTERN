const express = require('express');
const { Router } = require('express');
const collageController = require('../Controller/collageController')
const internController = require('../Controller/internController')
const router = express.Router();

const collegeModel = require('../Models/collegeModel')

// ### POST /functionup/colleges:
router.post("/colleges", collageController.Collage) // CREATE COLLAGES

// ### POST /functionup/interns:
router.post('/interns', internController.Intern)    // CREATE INTERNS

// ### POST /functionup/interns:
router.get('/collegeDetail', internController.getDetail)   // GET DETAILS OF THE INTERNS STUDYING IN THE SPECIFIC COLLAGE




module.exports = router;