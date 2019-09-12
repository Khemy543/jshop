import React,{Component} from 'react';


export default class EmptyCart extends Component{
    render(){
        return(
            <section>
               <h1 className="text-title" style={{
                                fontWeight:"bold",
                                paddingTop:"100px",
                                textAlign:"center"
                            }}>Your cart is currently empty</h1>
                </section>
        )
    }
}