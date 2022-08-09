import {Component} from "react";
import Grid from "@mui/material/Grid";
import {withStyles} from "@mui/styles";
import GDSEButton from "../../../component/common/Button/button";
import {Typography} from "@mui/material";
import ResponsiveAppBar from "../../../component/common/appBar/appBarIndex";



class DashBoardPage extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return(

            <Grid style={{width:"100vw",height:'100vh',backgroundColor:'#c1c2e8'}}>

                <ResponsiveAppBar/>


                <Grid style={{display:"flex",justifyContent:"space-between",flexDirection:"row",width:'80vw',marginTop:"20vh",marginLeft:"10vw"}}>

                    <Grid style={{backgroundColor:"#08092b",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>

                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#080b59",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Product</Typography>
                            </Grid>
                        </Grid>


                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>60</Typography>
                        </Grid>


                    </Grid>

                    <Grid style={{backgroundColor:"#08092b",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#080b59",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Cart</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>40</Typography>
                        </Grid>
                    </Grid>



                    <Grid style={{backgroundColor:"#08092b",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#080b59",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Users</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>60</Typography>
                        </Grid>
                    </Grid>

                </Grid>





            </Grid>

        )
    }
}
export default DashBoardPage