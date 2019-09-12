import React,{Component} from "react";
import HomeNav from "../components/homenav";


class Default extends Component {
   
    render(){
        return(
            <div className="container">
                <HomeNav />
                <div className="row">
                    <div className=" col-10 mx-auto text-center text-uppercase pt-5">
                    <h1 className="text-title" style={{
                        paddingTop:"30px" 
                    }}>Page Not Found</h1>
                        </div>
                    </div>
                
            </div> 
     );        
    }
}
export default Default;