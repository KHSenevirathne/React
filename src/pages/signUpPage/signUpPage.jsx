import {Component} from "react";
import Grid from "@mui/material/Grid";
import {TextField, Typography} from "@mui/material";
import GDSEButton from "../../component/common/Button/button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import GDSESnackBar from "../../component/common/SnackBar";
import {ValidatorForm} from "react-material-ui-form-validator";
import signUpService from "../../service/signUpService";


function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]


class SignUpPage extends Component {
    constructor(props) {
        super(props);



        this.state = {
            allUsers:[],



            userData: {
                email: "",
                username: "",
                password: "",

                name: {
                    firstname: "",
                    lastname: "",
                },

                address: {
                    city: "",
                    street: "",
                    number: "",
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: ""
                    }
                },
                phone: "",

            },

            alert: false,
            message: '',
            severity: '',
        }

    }


    submitUser = async () => {

        let userCustomer = this.state.userData;
        let res = await signUpService.postUserCustomer(userCustomer);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
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

    loadAllUsers = async () => {

        let res = await signUpService.fetchCustomers();

        if (res.status === 200) {
            this.setState({
                allUsers : res.data.data,
                alert: true,
                message: res.data.message,
                severity: 'success'
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

    loadSingleUser = async () => {
        //let cusId = this.state.id
        let res = await signUpService.fetchSingleCustomer(/*cusId*/);

        if (res.status === 200) {
            let data = res.data.data
            this.setState({

                userData: {
                    email: data.email,
                    username: data.username,
                    password: data.password,

                    name: {
                        firstname: data.name.firstname,
                        lastname: data.name.lastname,
                    },

                    address: {
                        city: data.address.city,
                        street: data.address.street,
                        number: data.address.number,
                        zipcode: data.address.zipcode,
                        geolocation: {
                            lat: data.geolocation.lat,
                            long: data.geolocation.long
                        }
                    },
                    phone: "data.phone",

                },

                allUsers : res.data.data,
                alert: true,
                message: res.data.message,
                severity: 'success'
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

    loadUsersByLimit = async () => {
        //let params = this.state.limit
        let res = await signUpService.fetchAllCustomersLimit(/*params*/);

        if (res.status === 200) {
            this.setState({
                allUsers : res.data.data,
                alert: true,
                message: res.data.message,
                severity: 'success'
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

    updateUser = async (data) => {


        /*let id = this.state.id;*/
        let res = await signUpService.postUserCustomer(data.id,data);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            await this.loadAllUsers();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    deleteUser = async (data) => {

        /*let id = this.state.id;*/

        let res = await signUpService.postUserCustomer(data.id);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            await this.loadAllUsers();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount() {
        this.loadAllUsers();
    }

    render() {
        const {classes} = this.props;


        return (
            <>

                <Grid>

                    <Typography style={{fontSize: '34px', fontWeight: 'unset', marginTop: '3vh', marginLeft: '2vw'}}>
                        User Registration
                    </Typography>


                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>

                        {/*-----------------Customer Info-------------------------------*/}
                        <Grid style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "column",
                            flexWrap: 'wrap',
                            width: "86vw",
                            backgroundColor: '#eeeff1',
                            height: "25vh",
                            marginLeft: '2vw',
                            marginTop: '4vh'
                        }}>

                            <Grid margin='1vh'
                                  style={{display: "flex", justifyContent: "space-around", flexDirection: "row"}}>
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="First Name"
                                           variant="outlined"

                                           value={this.state.userData.name.firstname}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.name.firstname = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Last Name"
                                           variant="outlined"

                                           value={this.state.userData.name.lastname}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.name.lastname = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}


                                />

                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="E-mail"
                                           variant="outlined"

                                           value={this.state.userData.email}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.email = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}


                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="User Name"
                                           variant="outlined"

                                           value={this.state.userData.username}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.username = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}


                                />

                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Password"
                                           variant="outlined"

                                           value={this.state.userData.password}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.password = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}
                                />
                            </Grid>

                            <Grid margin='1vh'
                                  style={{display: "flex", justifyContent: "space-around", flexDirection: "row"}}>

                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="City"
                                           variant="outlined"

                                           value={this.state.userData.address.city}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.city = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Street"
                                           variant="outlined"

                                           value={this.state.userData.address.street}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.street = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Street No"
                                           variant="outlined"
                                           value={this.state.userData.address.number}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.number = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}


                                />

                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Zip Code"
                                           variant="outlined"

                                           value={this.state.userData.address.zipcode}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.zipcode = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Lat Value"
                                           variant="outlined"

                                           value={this.state.userData.address.geolocation.lat}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.geolocation.lat = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />

                            </Grid>


                            <Grid margin='1vh' style={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                width: '34vw'
                            }}>
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Log Value"
                                           variant="outlined"

                                           value={this.state.userData.address.geolocation.long}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.address.geolocation.long = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Mobile No"
                                           variant="outlined"

                                           value={this.state.userData.phone}
                                           onChange={(e) => {
                                               let userData = this.state.userData
                                               userData.phone = e.target.value
                                               this.setState({userData})
                                           }}
                                           validators={['required']}

                                />
                            </Grid>


                            <Grid style={{
                                width: '11vw',
                                height: '4.5vh',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginLeft: '73.5vw'
                            }}>

                                <GDSEButton color='success' variant="contained" sx={{m: 0.5, mt: 4}}
                                            style={{color: "white", width: '5vw'}} type={'submit'}>
                                    Save
                                </GDSEButton>

                                <GDSEButton color='error' variant="contained" sx={{m: 0.5, mt: 4}}
                                            style={{color: "white", width: '5vw'}} type={'submit'}>
                                    Cancel
                                </GDSEButton>
                            </Grid>

                        </Grid>

                    </ValidatorForm>

                    <Grid style={{marginLeft: '81vw', marginTop: '-75vh'}}>
                        <Grid width='100%'>
                            <div style={{height: 400, width: '105%', marginTop: '90vh', marginLeft: '-79vw'}}>
                                <TableContainer component={Paper}
                                                style={{height: '45vh', width: '81vw', backgroundColor: '#eeeff1'}}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">First Name</TableCell>
                                                <TableCell align="left">Last Name</TableCell>
                                                <TableCell align="left">E-mail</TableCell>
                                                <TableCell align="left">User Name</TableCell>
                                                <TableCell align="left">Password</TableCell>
                                                <TableCell align="left">City</TableCell>
                                                <TableCell align="left">Street</TableCell>
                                                <TableCell align="left">Street No</TableCell>
                                                <TableCell align="left">Zip Code</TableCell>
                                                <TableCell align="left">Last Value</TableCell>
                                                <TableCell align="left">Log Value</TableCell>
                                                <TableCell align="left">Mobile No</TableCell>
                                                <TableCell align="left">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                this.state.userData.map((row) => (
                                                    <TableRow>
                                                        <TableCell align="left">{row.firstname}</TableCell>
                                                        <TableCell align="left">{row.lastname}</TableCell>
                                                        <TableCell align="left">{row.email}</TableCell>
                                                        <TableCell align="left">{row.username}</TableCell>
                                                        <TableCell align="left">{row.password}</TableCell>
                                                        <TableCell align="left">{row.city}</TableCell>
                                                        <TableCell align="left">{row.street}</TableCell>
                                                        <TableCell align="left">{row.number}</TableCell>
                                                        <TableCell align="left">{row.zipcode}</TableCell>
                                                        <TableCell align="left">{row.lat}</TableCell>
                                                        <TableCell align="left">{row.long}</TableCell>
                                                        <TableCell align="left">{row.phone}</TableCell>
                                                        <TableCell align="left">
                                                            <Tooltip title="Edit">
                                                                <IconButton
                                                                    onClick={() => {
                                                                        this.updateUser(row);
                                                                    }}
                                                                >
                                                                    <EditIcon color="primary"/>
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title="Delete">
                                                                <IconButton
                                                                     onClick={() => {
                                                                         this.deleteUser(row.id)
                                                                     }}
                                                                >
                                                                    <DeleteIcon color="error"/>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>

                    </Grid>

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

export default (SignUpPage)