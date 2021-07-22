"use strict";
import express from "express";
import upload from "../middlewares/upload.js";
import {
    multipleFileUpload,
    getallMultipleFiles,
    getallMultipleFilesById,
    deletFilesById,
    updateFilesById,
} from "../controller/fileuploaderController.js";
const router = express.Router();

router.post(
    "/multipleFiles",
    upload.fields([
        { name: "form" },
        { name: "photo" },
        { name: "citizenFront" },
        { name: "citizenBack" },
        { name: "vaucher" },
        { name: "owner" },
        { name: "fingerPrintRight" },
        { name: "fingerPrintLeft" },
    ]),
    multipleFileUpload
);
router.get("/getMultipleFiles", getallMultipleFiles);
router.get("/getMultipleFilesById/:id", getallMultipleFilesById);
router.post("/deletFilesById/:id", deletFilesById);
router.put("/updateFilesById/:id",upload.fields([
    { name: "form" },
    { name: "photo" },
    { name: "citizenFront" },
    { name: "citizenBack" },
    { name: "vaucher" },
    { name: "owner" },
    { name: "fingerPrintRight" },
    { name: "fingerPrintLeft" },
]), updateFilesById);

export default router;
