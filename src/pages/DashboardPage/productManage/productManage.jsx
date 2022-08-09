import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheets} from "./productManageStyle";
import Grid from "@mui/material/Grid";
import {Autocomplete, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import GDSEButton from "../../../component/common/Button/button";
import signUpService from "../../../service/signUpService";
import productManagerService from "../../../service/productManagerService";


class ProductManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allProduct:[],
            formDate: {

                title: "",
                price:"",
                description: "",
                image: "",
                category: ""
            }
        }

    }

    submitProduct = async () => {

        let product = this.state.formData();
        let res = await productManagerService.submitProduct(product);

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

    loadAllProducts = async () => {

        let res = await productManagerService.fetchProduct();

        if (res.status === 200) {
            this.setState({
                allProduct : res.data.data,
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

    loadAllProductsByCategory = async () => {

        let res = await productManagerService.fetchProductByCategories();

        if (res.status === 200) {
            this.setState({
                allProduct : res.data.data,
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

    loadSingleProduct = async () => {
        //let Id = this.state.id
        let res = await productManagerService.fetchSingleProduct(/*Id*/);

        if (res.status === 200) {
            let data = res.data.data
            this.setState({

                formDate: {

                    title: data.title,
                    price:data.price,
                    description: data.description,
                    image: data.image,
                    category: data.category
                },

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

    loadProductsByLimit = async () => {
        //let params = this.state.limit
        let res = await productManagerService.fetchAllProductLimit(/*params*/);

        if (res.status === 200) {
            this.setState({
                allProducts : res.data.data,
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

    updateProduct = async (data) => {


        /*let id = this.state.id;*/
        let res = await productManagerService.putProduct(data.id,data);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            await this.loadAllProducts();
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

        let res = await productManagerService.deleteProduct(data.id);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            await this.loadAllProducts();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount() {
        this.loadAllProducts();
    }


    render() {
        const {classes} = this.props;
        return (

            <Grid className={classes.productContainer}>

                <Typography style={{fontSize: '34px', fontWeight: 'unset', marginTop: '3vh', marginLeft: '2vw'}}>
                    Product Manage
                </Typography>


                <Grid style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: "column",
                    width: '50vw',
                    height: '9vh',
                    marginLeft: '24vw',
                    justifyContent: 'space-between',
                    marginTop: '6vh'
                }}>

                    <Grid style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextField id="outlined-basic" style={{width: '23vw'}} size='small' label="Title"
                                   variant="outlined"/>
                        <TextField id="outlined-basic" style={{width: '23vw'}} size='small' label="Price"
                                   variant="outlined"/>
                    </Grid>
                </Grid>


                <Grid style={{marginTop: '1vh', marginLeft: '23.5vw'}}>
                    <Autocomplete size='small' style={{width: '23vw'}}

                                  onChange={(e, value, r) => {
                                      let formData = this.state.formData

                                      formData.vehicleType = value.type
                                      this.setState({formData})

                                  }}
                                  getOptionLabel={
                                      (option) => option.type
                                  }
                                  id="controllable-states"

                        /* value={this.state.formData.freeMileAge.dailyMileage}

                         options={this.state.vehicleTypes}*/
                                  sx={{m: 1, width: '35ch'}}
                                  renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}
                    />
                </Grid>

                <Grid>

                    <Card style={{
                        width: '23vw',
                        marginTop: '-5vh',
                        height: "20vh",
                        marginLeft: '51vw',
                        backgroundColor: "#eeeff1"
                    }}>
                        <CardContent>
                            <Typography>Description</Typography>

                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                        </CardActions>
                    </Card>


                </Grid>

                <Grid>
                    <div  style={{
                        marginLeft:"24vw",
                        marginTop:"15vh",
                        height: '20vh',
                        border: '1px solid black',
                        //backgroundImage:"url(" +this.state.frontView+ ")",
                        backgroundSize: 'cover',
                        width : '20vh',
                        backgroundColor : 'white',

                    }}/>
                </Grid>

                <Grid>
                    <div><input

                        style={{display: 'none'}}
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file01"
                        multiple
                        type="file"
                        onChange={(e) => {
                            this.setState({
                                frontImage: e.target.files[0],
                                frontView : URL.createObjectURL(e.target.files[0])
                            })
                        }}
                    />
                        <label htmlFor="contained-button-file01">
                            <Button style={{marginLeft:"36vw",marginTop:'-6vh'}} variant="outlined" color="primary" size="medium" component="span">
                                Choose Image
                            </Button>
                        </label>

                    </div>
                </Grid>

                <Grid style={{width:'11vw',height:'4.5vh',display:'flex',justifyContent:'space-between',marginLeft:'63vw',marginTop:"-6.5vh"}}>

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


        )
    }
}

export default withStyles(styleSheets)(ProductManage)