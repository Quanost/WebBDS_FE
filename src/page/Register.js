import { Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiAlert from '@material-ui/lab/Alert';

import OutlinedInput from '@material-ui/core/OutlinedInput'
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';


import { useFormik } from "formik";
import * as Yup from "yup";
import authService from '../services/authService';


const useStyle = makeStyles((thems) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: thems.spacing(8, 4),
    },
    form: {
        width: '100%',
        marginTop: thems.spacing(3),
    },
    margin: {
        margin: thems.spacing(1)
    },
    textField: {
        width: '25ch',
    },
    submit: {
        marginTop: "1.5%"
    },
    backdrop: {
        zIndex: thems.zIndex.drawer + 1,
        color: '#fff',
    },
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Register() {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            username: "",
            password: "",
            repeatPassword: "",
            email: "",
            phone: ""
        },
        validationSchema: Yup.object().shape({

            firstName: Yup.string()
                .required("Vui lòng điền Họ"),
            lastName: Yup.string()
                .required("Vui lòng điền Tên"),
            gender: Yup.string()
                .required("Vui lòng chọn Giới tính"),
            username: Yup.string()
                .required("Vui lòng điền Tài khoản").min(4, "Tên tài khoản phải có ít nhất 4 ký tự"),
            password: Yup.string()
                .required("Vui lòng điền mật khẩu")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
                ),
            repeatPassword: Yup.string()
                .required("Vui lòng điền lại mật khẩu")
                .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
            email: Yup.string()
                .required("Vui lòng điền email")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Vui lòng điền email hợp lệ. Ví dụ example@gmail.com"
                ),
            phone: Yup.string()
                .required("Vui lòng điền số điện thoại")
                .matches(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    "Vui lòng điền số điện thoại hợp lệ. Ví dụ 0372253668"
                ),

        }),
        onSubmit: async (values) => {

            try {
                setOpenLoading(true);
                const { data: res } = await authService.register(values);
                setMsg(res.message);
                setError("");
                setOpenLoading(false);
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                    setMsg("");
                    setOpenLoading(false);
                }
            }

        }
    });

    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [openLoading, setOpenLoading] = useState(false);




    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={false} sx={8} md={7} className={classes.image}></Grid>
                <Grid item xs={12} sx={4} md={5} component={Paper}>
                    <div className={classes.paper}>
                        <Typography component='h2' variant='h5'>Đăng ký</Typography>
                        <form >
                            <Grid container spacing={2} margin='normal'>
                                <Grid item xs={12} sm={6} >
                                    <TextField autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        error={formik.errors.firstName && formik.touched.firstName ? true : false}
                                        fullWidth
                                        id="firstName"
                                        label="Họ"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName: ''}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="lname"
                                        name="lastName"
                                        variant="outlined"

                                        fullWidth
                                        id="lastName"
                                        label="Tên"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName: ''}
                                        error={formik.errors.lastName && formik.touched.lastName? true : false}
                                    >

                                    </TextField>
                                </Grid>
                            </Grid>
                            <FormControl variant="outlined" margin="normal" error={formik.errors.gender && formik.touched.gender ? true : false} fullWidth>
                                <InputLabel>Giới tính</InputLabel>
                                <Select
                                    native
                                    label="Gender"
                                    id='outlined-age-native-simple'
                                    name='gender'
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}

                                >
                                    <option aria-label="None" value="" />
                                    <option >Nam</option>
                                    <option >Nữ</option>
                                    <option >Khác</option>
                                </Select>
                                <FormHelperText>{formik.errors.gender && formik.touched.gender ? formik.errors.gender: ''}</FormHelperText>
                            </FormControl>
                            <TextField variant='outlined' label='Tài khoản' fullWidth margin='normal' onChange={formik.handleChange} value={formik.values.username}
                                helperText={formik.errors.username && formik.touched.username ? formik.errors.username : ''}
                                error={formik.errors.username && formik.touched.username ? true : false} name='username' ></TextField>
                            <FormControl variant="outlined" fullWidth error={formik.errors.password && formik.touched.password ? true : false} margin='normal'>
                                <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                onClick={() => setShowPassword(current => !current)}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={80}
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}

                                />
                                <FormHelperText>{formik.errors.password && formik.touched.password ? formik.errors.password: ''}</FormHelperText>
                            </FormControl>
                            <FormControl variant="outlined" fullWidth margin='normal' error={formik.errors.repeatPassword && formik.touched.repeatPassword ? true : false} >
                                <InputLabel htmlFor="repeat-password">Nhập lại mật khẩu</InputLabel>
                                <OutlinedInput
                                    id="repeat-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                onClick={() => setShowPassword(current => !current)}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={135}
                                    name='repeatPassword'
                                    value={formik.values.repeatPassword}
                                    onChange={formik.handleChange}
                                />
                                <FormHelperText>{formik.errors.repeatPassword && formik.touched.repeatPassword ? formik.errors.repeatPassword : ''}</FormHelperText>
                            </FormControl>
                            <TextField type='email' variant='outlined' label='Email' fullWidth margin='normal' onChange={formik.handleChange} name='email' value={formik.values.email}
                                helperText={formik.errors.email && formik.touched.email ? formik.errors.email: ''}
                                error={formik.errors.email && formik.touched.email ? true : false}></TextField>
                            <TextField variant='outlined' label='Số điện thoại' fullWidth margin='normal' name='phone' value={formik.values.phone} onChange={formik.handleChange}
                                helperText={formik.errors.phone && formik.touched.phone ? formik.errors.phone: ''}
                                error={formik.errors.phone && formik.touched.phone ? true : false}></TextField>


                            {msg && <Alert severity='success' >{msg}</Alert>}
                            {error && <Alert severity='error' >{error}</Alert>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={formik.handleSubmit}
                            >
                                Đăng ký
                            </Button>

                            <Grid container margin="normal">
                                <Grid item >
                                    <Link href="/signin" variant="body2">
                                        {"Đã có tài khoản? Đăng nhập"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>

                </Grid>
            </Grid>

            <Backdrop className={classes.backdrop} open={openLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Register
