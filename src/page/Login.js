import { Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useRef } from 'react';
import { InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../action/authAction';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useFormik } from 'formik';
import * as Yup from "yup";
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyle = makeStyles((thems) => ({
    root: {
        height: '100vh',

    },
    image: {
        backgroundImage: `url(https://source.unsplash.com/random})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    },
    paper: {
        margin: thems.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: thems.spacing(1)
    },
    btnLogin: {
        display: 'block',
        margin: thems.spacing(2, 0, 2, 0)
    }
}))

function Login() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng điền tên tài khoản").min(4, "Tên tài khoản phải có ít nhất 4 ký tự"),
            password: Yup.string().required("Vui lòng điền mật khẩu")
        }),

        onSubmit: (values) => {

            dispatch(login(values.username, values.password)).then(() => {
                navigate("/");
            }).catch((errors) =>
                console.log(errors)
            )
        }
    })


    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();


    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();


    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline></CssBaseline>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h2" variant="h4" >Đăng nhập</Typography>
                    <form className={classes.form} ref={form} >
                        <TextField variant="outlined" label="Tài khoản" fullWidth id="username" name='username' value={formik.values.username}
                            onChange={formik.handleChange} error={formik.errors.username && formik.touched.username ? true : false}
                            helperText={formik.errors.username && formik.touched.username ? formik.errors.username : ''}>
                        </TextField>
                        <FormControl variant="outlined" fullWidth margin='normal' error={formik.errors.password && formik.touched.password ? true : false}>
                            <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                            <OutlinedInput
                                id="password"
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
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />

                            <FormHelperText>{formik.errors.password && formik.touched.password? formik.errors.password: ''}</FormHelperText>
                        </FormControl>

                        {message && (<Alert severity="error">
                            <AlertTitle>Lỗi</AlertTitle>
                            {message}
                        </Alert>)}

                        <Button variant="contained" color="primary" className={classes.btnLogin} fullWidth ref={checkBtn} onClick={formik.handleSubmit}>
                            Đăng nhập
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant="body2">{"Quên mật khẩu?"}</Link>
                        </Grid>
                        <Grid item>
                            <Link href='/signup' variant="body2"> {"Chưa có tài khoản? Đăng ký"}</Link>
                        </Grid>
                    </Grid>
                </div>

            </Grid>
        </Grid>
    )
}

export default Login
