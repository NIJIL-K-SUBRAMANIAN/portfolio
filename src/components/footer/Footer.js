import React,{Component} from "react";

class Footer extends Component{
    // constructor(){
    //     super();
        
    // }

    render(){
        return(
            <div className="container " style={{}}>
                <div className="row  " > 
                 
                <div className=" col-md-12 text-white d-flex justify-content-center align-items-center" style={{backgroundColor:"black",height:"3rem"}}>
                    copyrights all reserved @ <span>TMDB</span></div></div>

            </div>
        )
    }
}

export default Footer