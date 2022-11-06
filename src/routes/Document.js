const express = require('express')
const { body } = require('express-validator')
const DocsController = require('../controllers/Document')

const router = express.Router()

router.post('/addDocs', DocsController.createDocs)
router.get('/showDocs', DocsController.showDocs)
router.get('/showDocswhere', DocsController.showDocswhere)
router.get('/showDocById/:id', DocsController.showDocsById)
router.put('/editDocs/:id', DocsController.editDocs)
router.patch('/editDocs/:id', DocsController.patchDocs)
router.delete('/deleteDocs/:id', DocsController.deleteDocs)

module.exports = router