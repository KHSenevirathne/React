import {Component} from "react";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import {styleSheet} from "./styleSheet";
import GDESButton from '../../component/common/Button/button'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import loginCover from "../../assets/img/loginCover.jpg";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {ValidatorForm} from "react-material-ui-form-validator";
import signInService from "../../service/loginService";
import GDSESnackBar from "../../component/common/SnackBar";


class SignInPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            showPassword: false,

            loginUser: {

                username: "",
                password: "",

            },

            alert: false,
            message: '',
            severity: '',

        }

    }


    loginUsers = async () => {

        let userCustomer = this.state.loginUser;
        let res = await signInService.postUser(userCustomer);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
                link: '/dashboardPage',
            });
            //this.clearFields();
            //await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };


    render() {
        const {classes} = this.props;


        return (

            <>

                <Grid className={classes.container} style={{
                    backgroundImage: `url(${loginCover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>


                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.loginUsers}>

                        <Grid className={classes.loginContainer}>

                            <Grid style={{width: '65px', height: "0px"}}>
                                <AccountCircleIcon
                                    style={{fontSize: '110px', paddingLeft: '7.5vw', color: 'black', opacity: "90%"}}/>
                            </Grid>

                            <Grid container className={classes.loginForm}>


                                <Grid item lg={12} md={12} sm={6} xm={6}>
                                    <TextField id="outlined-basic" style={{width: '87%'}} label="User name"
                                               variant="outlined"

                                               value={this.state.loginUser.username}
                                               onChange={(e) => {
                                                   let loginUser = this.state.loginUser
                                                   loginUser.username = e.target.value
                                                   this.setState(loginUser)
                                               }}
                                               validators={['required']}
                                    />
                                </Grid>

                                <Grid item lg={12} md={12} sm={6} xm={6}>
                                    <FormControl variant="outlined" fullWidth={true} style={{width: '87%'}}>
                                        <InputLabel htmlFor="outlined-adornment-password"
                                                    color={'success'}>Password</InputLabel>
                                        <OutlinedInput
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={(e) => {
                                                            let showPassword = this.state.showPassword
                                                            showPassword = !showPassword
                                                            this.setState(showPassword)
                                                        }}
                                                        onMouseDown={(event) => {
                                                            event.preventDefault();
                                                        }}
                                                        edge="end"
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }

                                            label="Password"

                                             value={this.state.loginUser.password}
                                             onChange={(e) => {
                                                 let loginUser = this.state.loginUser
                                                 loginUser.password = e.target.value
                                                 this.setState(loginUser)
                                             }}
                                            validators={['required']}
                                            color={'success'}

                                        />
                                    </FormControl>
                                </Grid>

                            </Grid>


                            <Grid className={classes.btn_container} paddingLeft='2.5vw' paddingTop='4vh'>
                                <GDESButton type='submit' href={this.state.link} label="Login" style={{
                                    backgroundColor: '#040404',
                                    color: 'white',
                                    fontWeight: 'semi',
                                    height: '6vh',
                                    width: '17vw',
                                    fontSize: '15px',
                                    opacity: '95%'
                                }}/>
                            </Grid>

                            <Typography style={{marginTop: '2vh', fontSize: '15px', marginLeft: '2.5vw'}}>
                                Create new user account? <Link to='/signUpPage'>click here</Link>
                            </Typography>

                        </Grid>

                    </ValidatorForm>

                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </>

        )
    }
}

export default withStyles(styleSheet)(SignInPage)

