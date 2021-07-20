'use strict';
import express from "express"
import upload from '../middlewares/filehelper.js'
import{ multipleFileUpload,getallMultipleFiles, getallMultipleFilesById, deletFilesById, updateFilesById} from '../controller/fileuploaderController.js'
const router = express.Router();



router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getMultipleFiles', getallMultipleFiles);
router.get('/getMultipleFilesById/:id', getallMultipleFilesById);
router.post('/deletFilesById/:id', deletFilesById);
router.put('/updateFilesById/:id', updateFilesById);


export default router
