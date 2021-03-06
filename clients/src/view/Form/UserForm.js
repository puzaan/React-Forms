import React, { useEffect, useState } from "react";
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Button,
    TextField,
    Card,
    CardContent,
    Divider,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import validate from "validate.js";
import Input from "./Input";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px",
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
        },
    },

    btn:{
        margin: '10px',
        
        
    }
}));

const initialFValues = {
    id: 0,
    secondName: "",
    fullName: "",
    email: "",
    gender: "male",
    citizenNo: "",
    birthDate: new Date(),
    fatherName: "",
    grandFatherName: "",
    district: "",
    mobileNo: "",
    phoneNo: "",
    premanentAddress: "",
    currentAddress: "",
    temporaryAddress: "",
    bankName: "",
    bankNo: "",
    beneficaryName: "",
    relationship: "",
    beneficiaryNo: "",
    filledDate: new Date(),
    refferedBy: "",
    form: "",
    photo: "",
    citizenFront: "",
    citizenBack: "",
    vaucher: "",
    owner: "",
    fingerRight: "",
    fingerLeft: "",
};

const UserForm = () => {
    const classes = useStyles();


const validater=()=>{
    let temp ={}
    temp.secondName = values.secondName ? "" : "this field is required"
    temp.fullName = values.fullName ? "" : "this field is required."
    temp.email = values.email ?  "" : "email is not valid"
    temp.mobileNo = values.mobileNo.length > 9 ? "" : "minimum 10 number is required"
    temp.citizenNo = values.citizenNo ? "" : "this field is required"
    temp.fatherName = values.fatherName ? "" : "this field is required"
    temp.grandFatherName = values.grandFatherName ? "" : "this field is required"
    temp.district = values.district ? "" : "this field is required"
    temp.premanentAddress = values.premanentAddress ? "" : "this field is required"
    temp.currentAddress = values.currentAddress ? "" : "this field is required"
    temp.temporaryAddress = values.temporaryAddress ? "" : "this field is required"

    setErrors({
        ...temp
    })
    return Object.values(temp).every(x => x == '')
}


    const [errors , setErrors] = useState({})
    const [values, setValues] = useState(initialFValues);
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const [form , setForm] = useState([])
useEffect(() => {
const featchForms = async () =>{
const res = await axios.get("http://localhost:5000/api/getMultipleFiles")
const data = res.data;

console.log(data)
}
featchForms();
})

    const handleSubmit = e =>{
        e.preventDefault()
        if(validater())
        window.alert('form submited')
    }

    const resetForm = () =>{
        setValues(initialFValues)
        setErrors({})
    }
    return (
        <Card className={classes.root} variant="outlined">
            <form name="password-reset-form"  onSubmit ={handleSubmit}>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">??????????????????????????? ???????????????</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>

                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">???????????? ?????????</Typography>
                                <Input 
                                placeholder="Full name"
                                variant="outlined"
                                
                                name="secondName"
                                onChange={handleChange}
                                type="text"
                                value={values.secondName}
                                error= {errors.secondName}
                                
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">Full Name</Typography>
                                
                                <Input 
                                placeholder="Full name"
                                variant="outlined"
                                
                                name="fullName"
                                
                                onChange={handleChange}
                                type="text"
                                value={values.fullName}
                                error= {errors.fullName}
                                
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">Email</Typography>
                                <Input
                                    placeholder="E-mail"
                                    variant="outlined"
                                    size="medium"
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    error= {errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl component="fieldset">
                                    <Typography variant="body1">???????????????</Typography>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="??????????????? "
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="???????????????"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio />}
                                            label="????????????"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">???????????????????????? ???????????????</Typography>
                                <Input
                                    placeholder="???????????????????????? ???????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="citizenNo"
                                    
                                    onChange={handleChange}
                                    type="number"
                                    value={values.citizenNo}
                                    error= {errors.citizenNo}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <Typography variant="body1">???????????? ????????????</Typography>
                                <Input
                                    id="date"
                                    type="date"
                                    defaultValue={values.birthDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">?????????????????? ?????????</Typography>
                                <Input
                                    placeholder="?????????????????? ?????????"
                                    variant="outlined"
                                    size="medium"
                                    name="fatherName"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.fatherName}
                                    error= {errors.fatherName}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">?????????????????????????????? ?????????</Typography>
                                <Input
                                    placeholder="?????????????????????????????? ?????????"
                                    variant="outlined"
                                    size="medium"
                                    name="grandFatherName"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.grandFatherName}
                                    error= {errors.grandFatherName}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>

                <CardContent>
                    <CardContent>
                        <Typography variant="body1">????????????????????? ???????????????</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">??????????????????</Typography>
                                <Input
                                    placeholder="??????????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="district"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.district}
                                    error= {errors.district}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">?????????????????? ???????????????</Typography>
                                <Input
                                    placeholder="?????????????????? ???????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="mobileNo"
                                    
                                    onChange={handleChange}
                                    type="Number"
                                    value={values.mobileNo}
                                    error= {errors.mobileNo}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">????????? ???????????????</Typography>
                                <Input
                                    placeholder="????????? ???????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="phoneNo"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.phoneNo}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">??????????????? ??????????????????</Typography>
                                <Input
                                    placeholder="??????????????? ??????????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="premanentAddress"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.premanentAddress}
                                    error= {errors.premanentAddress}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">??????????????? ??????????????????</Typography>
                                <Input
                                    placeholder="??????????????? ??????????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="currentAddress"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.currentAddress}
                                    error= {errors.currentAddress}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">????????????????????? ??????????????????</Typography>
                                <Input
                                    placeholder="Enter your temporary address"
                                    variant="outlined"
                                    size="medium"
                                    name="temporaryAddress"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.temporaryAddress}
                                    error= {errors.temporaryAddress}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">???????????? </Typography>
                                <Input
                                    placeholder="Enter the bank name"
                                    variant="outlined"
                                    size="medium"
                                    name="bankName"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.bankName}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">???????????? ??????????????? </Typography>
                                <Input
                                    placeholder="Enter Account number"
                                    variant="outlined"
                                    size="medium"
                                    name="bankNo"
                                    
                                    onChange={handleChange}
                                    type="text"
                                    value={values.bankNo}
                                    
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">???????????????????????? ?????????????????????</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">?????????????????????????????? ?????????</Typography>
                                <Input
                                    placeholder="Enter your benificary name"
                                    variant="outlined"
                                    size="medium"
                                    name="beneficaryName"
                                    
                                    onChange={handleChange}
                                    type="firstName"
                                    value={values.beneficaryName}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">?????????????????????</Typography>
                                <Input
                                    placeholder="Relationship with beneficairy"
                                    variant="outlined"
                                    size="medium"
                                    name="relationship"
                                    
                                    onChange={handleChange}
                                    type="firstName"
                                    value={values.relationship}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">
                                    ?????????????????????????????? ????????????????????? ???????????????
                                </Typography>
                                <Input
                                    placeholder="??????????????? ????????????"
                                    variant="outlined"
                                    size="medium"
                                    name="beneficiaryNo"
                                    
                                    onChange={handleChange}
                                    type="firstName"
                                    value={values.beneficiaryNo}
                                    
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">???????????????????????? ?????????????????????</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                            <Typography variant="body1">??????????????? ????????????</Typography>
                                <Input
                                    id="filledDate"
                                    type="date"
                                    defaultValue={values.filledDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">??????????????? ????????????????????? ?????????</Typography>
                                <Input
                                    placeholder="Relationship with beneficairy"
                                    variant="outlined"
                                    size="medium"
                                    name="refferedBy"
                                    onChange={handleChange}
                                    type="text"
                                    value={values.refferedBy}
                                    
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>

                <CardContent>
                    <CardContent>
                        <Typography variant="body1">??????????????????</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <input
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label for="file"></label>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
                                    <buttons
                    variant='contained'
                    color='primary'
                    size='large'
                    text='submit'
                    />
                <Button
                    size="large"
                    variant="contained"
                    type="submit"
                    color="primary"
                    className= {classes.btn}
                >
                    Send
                </Button>

                <Button
                    size="large"
                    variant="contained"
                    type="submit"
                    color="default"
                    className= {classes.btn}
                    onClick ={resetForm}
                >
                    Reset
                </Button>
            </form>
        </Card>
    );
};

export default UserForm;
