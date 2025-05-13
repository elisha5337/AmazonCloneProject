import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/product/ProductCard";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat"; // Fixed import name
import { Link } from "react-router"; // Changed to 'react-router-dom'
import classes from "./Cart.module.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import{Type} from "../../util/Action.type"
function Cart() {
   const [{ basket, user }, dispatch] = useContext(DataContext);

  // Calculate the total amount (assuming each item has a price property)
  const totalAmount = basket.reduce((total, item) => total + item.price*item.amount, 0);
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,id
    })
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello {user?.name || "Guest"}</h2> 
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops! No items in your cart.</p>
            ) : (
              basket?.map((item, i) => {
                return <section className={classes.cart_product}>
                <ProductCard 
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                 />
                <div className={classes.btn_container}>
                  <button title="Add amount" className={classes.btn} onClick={()=>increment(item)}>
                    <MdKeyboardArrowUp size={30}/></button>
                  <span>{item.amount}</span>
                  <button title="decrease amount" className={classes.btn} onClick={()=>decrement(item.id)}>
                    <MdKeyboardArrowDown size={30}/>
                  </button>
                </div>
                </section>
})
            )
          }
        </div>
        <div>
          <div className={classes.total}>
            <p>total ({basket.length} items)</p>
            <CurrencyFormat amount={totalAmount} /> {/* Use calculated total */}
            <small>This order contains a gift</small>
            <span>
              <Link to="/payments">Checkout</Link>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
