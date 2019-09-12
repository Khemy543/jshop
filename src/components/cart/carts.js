import React,{Component} from "react";
import HomeNav from "../homenav";
import CartColumns from "./cartColumns";
import EmptyCart from './emptycart';
import {ProductConsumer} from '../../context';
import CartList from './cartlist';
import CartTotal from './cartTotal';


class Cart extends Component {
    render(){
        return(
            <div>
               <HomeNav />
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} =value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                     <h1 className="text-title" style={{
                                fontWeight:"bold",
                                paddingTop:"100px",
                                textAlign:"center"
                            }}>Your Cart</h1>
                            <CartColumns />
                            <CartList value={value}/>
                            <CartTotal value={value}/>

                                    </React.Fragment>
                            );
                        }else{
                            return <EmptyCart />;
                        }
                    }
                    
                    }
               
                            
                </ProductConsumer>
                </section>
                
                </div>
     );        
    }
}
export default Cart;