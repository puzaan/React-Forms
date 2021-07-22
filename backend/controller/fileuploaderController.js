"use strict";

import MultipleFile from "../module/multiplefile.js";

const multipleFileUpload = (req, res, next) => {
    const multipleFiles = new MultipleFile({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        citizenshipNo: req.body.citizenshipNo,
        bithOfDate: req.body.bithOfDate,
        fatherName: req.body.fatherName,
        grandFatherName: req.body.grandFatherName,
        district: req.body.district,
        mobileNo: req.body.mobileNo,
        phoneNo: req.body.phoneNo,
        permanentPlace: req.body.permanentPlace,
        currentPlace: req.body.currentPlace,
        temporaeyPlace: req.body.temporaeyPlace,
        bankName: req.body.bankName,
        bankAccount: req.body.bankAccount,
        beneficiaryName: req.body.beneficiaryName,
        beneficiaryRelation: req.body.beneficiaryRelation,
        beneficiaryNo: req.body.beneficiaryNo,
        registerDate: req.body.registerDate,
        referred: req.body.referred,
    });
    if (req.files) {
        multipleFiles.form = req.files.form[0].path;
        multipleFiles.photo = req.files.photo[0].path;
        multipleFiles.citizenFront = req.files.citizenFront[0].path;
        multipleFiles.citizenBack = req.files.citizenBack[0].path;
        multipleFiles.vaucher = req.files.vaucher[0].path;
        multipleFiles.owner = req.files.owner[0].path;
        multipleFiles.fingerPrintRight = req.files.fingerPrintRight[0].path;
        multipleFiles.fingerPrintLeft = req.files.fingerPrintLeft[0].path;
    }
    multipleFiles
        .save()
        .then((response) => {
            res.json({
                response,
            });
        })
        .catch((error) => {
            res.json({
                message: `error occured ${error}`,
            });
        });
};

const getallMultipleFiles = async (req, res, next) => {
    try {
        const files = await MultipleFile.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getallMultipleFilesById = async (req, res, next) => {
    try {
        const files = await MultipleFile.findById(req.params.id);
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deletFilesById = async (req, res) => {
    const files = await MultipleFile.findById(req.params.id);
    if (files) {
        const remove = await files.remove();
        res.status(201);
        res.json({
            message: "File deleted",
        });
    } else {
        res.status(404);
        throw new Error("file didnt found");
    }
};

const updateFilesById = async (req, res) => {
    const forms = await MultipleFile.findById(req.params.id);
    if (forms) {
        forms.name = req.body.name || forms.name;
        forms.email = req.body.email || forms.email;
        forms.gender = req.body.gender || forms.gender;
        forms.citizenshipNo = req.body.citizenshipNo || forms.citizenshipNo;
        forms.bithOfDate = req.body.bithOfDate || forms.bithOfDate;
        forms.fatherName = req.body.fatherName || forms.fatherName;
        forms.grandFatherName = req.body.grandFatherName || forms.grandFatherName;
        forms.mobileNo = req.body.mobileNo || forms.mobileNo;
        forms.phoneNo = req.body.phoneNo || forms.phoneNo;
        forms.permanentPlace = req.body.permanentPlace || forms.permanentPlace;
        forms.currentPlace = req.body.currentPlace || forms.currentPlace;
        forms.temporaeyPlace = req.body.temporaeyPlace || forms.temporaeyPlace;
        forms.bankName = req.body.bankName || forms.bankName;
        forms.bankAccount = req.body.bankAccount || forms.bankAccount;
        forms.beneficiaryName = req.body.beneficiaryName || forms.beneficiaryName;
        forms.beneficiaryRelation =
            req.body.beneficiaryRelation || forms.beneficiaryRelation;
        forms.beneficiaryNo = req.body.beneficiaryNo || forms.beneficiaryNo;
        forms.registerDate = req.body.registerDate || forms.registerDate;
        forms.referred = req.body.referred || forms.referred;
        if (req.files) {
            forms.form = req.files.form[0].path || forms.form ;
            forms.photo = req.files.photo[0].path || forms.photo;
            forms.citizenFront =
                req.files.citizenFront[0].path || forms.citizenFront;
            forms.citizenBack =
                req.files.citizenBack[0].path || forms.citizenBack;
            forms.vaucher =
                req.files.vaucher[0].path || forms.vaucher;
            forms.owner =
                req.files.owner[0].path || forms.owner;
            forms.fingerPrintRight =
                req.files.fingerPrintRight[0].path ||
                forms.fingerPrintRight;
            forms.fingerPrintLeft =
                req.files.fingerPrintLeft[0].path ||
                forms.fingerPrintLeft;
        }

        const updatedForm = await forms.save();
        res.status(201);
        res.json({
            
            message: "File Updated",
        });
    } else {
        res.status(404);
        throw new Error("invalid Data");
    }
};

export {
    multipleFileUpload,
    getallMultipleFiles,
    getallMultipleFilesById,
    deletFilesById,
    updateFilesById,
};
