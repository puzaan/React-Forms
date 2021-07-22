import React from "react";
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

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px",
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const schema = {
    email: {
        presence: { allowEmpty: false, message: "is required" },
        email: true,
        length: {
            maximum: 300,
        },
    },
    NepaliName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 120,
        },
    },
    fullName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 120,
        },
    },
    fatherName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 120,
        },
    },
    grandFatherName: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            maximum: 120,
        },
    },
    citizenNo: {
        presence: { allowEmpty: false, message: "is required" },
        length: {
            minimum: 5,
        },
    },
};

const FormFields = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("महिला");

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });
    React.useEffect(() => {
        const errors = validate(formState.values, schema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    const handleChange = (event) => {
        event.persist();

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(event.target.value);

        if (formState.isValid) {
            window.location.replace("/");
        }

        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <Card className={classes.root} variant="outlined">
            <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">व्यक्तिगत विवरण</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>

                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">पुरा नाम</Typography>
                                <TextField
                                    placeholder="Full Name"
                                    variant="outlined"
                                    size="medium"
                                    name="NepaliName"
                                    fullWidth
                                    helperText={
                                        hasError("NepaliName")
                                            ? formState.errors.NepaliName[0]
                                            : null
                                    }
                                    error={hasError("NepaliName")}
                                    onChange={handleChange}
                                    type="NepaliName"
                                    value={formState.values.NepaliName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">Full Name</Typography>
                                <TextField
                                    placeholder="Full name"
                                    variant="outlined"
                                    size="medium"
                                    name="fullName"
                                    fullWidth
                                    helperText={
                                        hasError("fullName") ? formState.errors.fullName[0] : null
                                    }
                                    error={hasError("fullName")}
                                    onChange={handleChange}
                                    type="fullName"
                                    value={formState.values.fullName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">Email</Typography>
                                <TextField
                                    placeholder="E-mail"
                                    variant="outlined"
                                    size="medium"
                                    name="email"
                                    fullWidth
                                    helperText={
                                        hasError("email") ? formState.errors.email[0] : null
                                    }
                                    error={hasError("email")}
                                    onChange={handleChange}
                                    type="email"
                                    value={formState.values.email || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl component="fieldset">
                                    <Typography variant="body1">लिङ्ग</Typography>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        name="gender1"
                                        value={value}
                                        onChange={handleChangeRadio}
                                    >
                                        <FormControlLabel
                                            value="महिला"
                                            control={<Radio />}
                                            label="महिला "
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="पुरुष"
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio />}
                                            label="अन्य"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">नागरिकता नम्बर</Typography>
                                <TextField
                                    placeholder="नागरिकता नम्बर"
                                    variant="outlined"
                                    size="medium"
                                    name="citizenNo"
                                    fullWidth
                                    helperText={
                                        hasError("citizenNo") ? formState.errors.citizenNo[0] : null
                                    }
                                    error={hasError("citizenNo")}
                                    onChange={handleChange}
                                    type="number"
                                    value={formState.values.citizenNo || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    id="date"
                                    label="जन्म मिति"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">बुवाको नाम</Typography>
                                <TextField
                                    placeholder="बुवाको नाम"
                                    variant="outlined"
                                    size="medium"
                                    name="fatherName"
                                    fullWidth
                                    helperText={
                                        hasError("fatherName")
                                            ? formState.errors.fatherName[0]
                                            : null
                                    }
                                    error={hasError("fatherName")}
                                    onChange={handleChange}
                                    type="fatherName"
                                    value={formState.values.fatherName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">हजुरबुवाको नाम</Typography>
                                <TextField
                                    placeholder="हजुरबुवाको नाम"
                                    variant="outlined"
                                    size="medium"
                                    name="grandFatherName"
                                    fullWidth
                                    helperText={
                                        hasError("grandFatherName")
                                            ? formState.errors.grandFatherName[0]
                                            : null
                                    }
                                    error={hasError("grandFatherName")}
                                    onChange={handleChange}
                                    type="grandFatherName"
                                    value={formState.values.grandFatherName || ""}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
               
               
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">सम्पर्क विवरण</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">जिल्ला</Typography>
                                <TextField
                                    placeholder="जिल्ला"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    fullWidth
                                    helperText={
                                        hasError("firstName") ? formState.errors.firstName[0] : null
                                    }
                                    error={hasError("firstName")}
                                    onChange={handleChange}
                                    type="firstName"
                                    value={formState.values.firstName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">मोबाइल नम्बर</Typography>
                                <TextField
                                    placeholder="मोबाइल नम्बर"
                                    variant="outlined"
                                    size="medium"
                                    name="lastName"
                                    fullWidth
                                    helperText={
                                        hasError("lastName") ? formState.errors.lastName[0] : null
                                    }
                                    error={hasError("lastName")}
                                    onChange={handleChange}
                                    type="lastName"
                                    value={formState.values.lastName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">फोन नम्बर</Typography>
                                <TextField
                                    placeholder="फोन नम्बर"
                                    variant="outlined"
                                    size="medium"
                                    name="email"
                                    fullWidth
                                    helperText={
                                        hasError("email") ? formState.errors.email[0] : null
                                    }
                                    error={hasError("email")}
                                    onChange={handleChange}
                                    type="email"
                                    value={formState.values.email || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">स्थाई ठेगाना</Typography>
                                <TextField
                                    placeholder="स्थाई ठेगाना"
                                    variant="outlined"
                                    size="medium"
                                    name="password"
                                    fullWidth
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    error={hasError("password")}
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">हालको ठेगाना</Typography>
                                <TextField
                                    placeholder="हालको ठेगाना"
                                    variant="outlined"
                                    size="medium"
                                    name="password"
                                    fullWidth
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    error={hasError("password")}
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">अस्थायी ठेगाना</Typography>
                                <TextField
                                    placeholder="Enter your temporary address"
                                    variant="outlined"
                                    size="medium"
                                    name="password"
                                    fullWidth
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    error={hasError("password")}
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">बैंक </Typography>
                                <TextField
                                    placeholder="Enter the bank name"
                                    variant="outlined"
                                    size="medium"
                                    name="password"
                                    fullWidth
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    error={hasError("password")}
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">खाता नम्बर </Typography>
                                <TextField
                                    placeholder="Enter Account number"
                                    variant="outlined"
                                    size="medium"
                                    name="password"
                                    fullWidth
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    error={hasError("password")}
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ""}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">लाभकर्ता जानकारी</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">लाभार्थीको नाम</Typography>
                                <TextField
                                    placeholder="Enter your benificary name"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    fullWidth
                                    helperText={
                                        hasError("firstName") ? formState.errors.firstName[0] : null
                                    }
                                    error={hasError("firstName")}
                                    onChange={handleChange}
                                    type="firstName"
                                    value={formState.values.firstName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">सम्बन्ध</Typography>
                                <TextField
                                    placeholder="Relationship with beneficairy"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    fullWidth
                                    helperText={
                                        hasError("firstName") ? formState.errors.firstName[0] : null
                                    }
                                    error={hasError("firstName")}
                                    onChange={handleChange}
                                    type="firstName"
                                    value={formState.values.firstName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">
                                    लाभार्थीको सम्पर्क नम्बर
                                </Typography>
                                <TextField
                                    placeholder="दर्ता मिति"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    fullWidth
                                    helperText={
                                        hasError("firstName") ? formState.errors.firstName[0] : null
                                    }
                                    error={hasError("firstName")}
                                    onChange={handleChange}
                                    type="firstName"
                                    value={formState.values.firstName || ""}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>
                <CardContent>
                    <CardContent>
                        <Typography variant="body1">आधिकारिक जानकारी</Typography>
                        <Divider />
                        <Divider />
                        <Divider />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    id="date"
                                    label="जन्म मिति"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="body1">रेफेर गर्नेको नाम</Typography>
                                <TextField
                                    placeholder="Relationship with beneficairy"
                                    variant="outlined"
                                    size="medium"
                                    name="firstName"
                                    fullWidth
                                    helperText={
                                        hasError("firstName") ? formState.errors.firstName[0] : null
                                    }
                                    error={hasError("firstName")}
                                    onChange={handleChange}
                                    type="firstName"
                                    value={formState.values.firstName || ""}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardContent>

                <CardContent>
                    <CardContent>
                        <Typography variant="body1">कागजात</Typography>
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

                <Button
                    size="large"
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    Send
                </Button>
            </form>
        </Card>
    
    
    );
};

export default FormFields;
