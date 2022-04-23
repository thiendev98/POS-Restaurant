import React, {useState} from 'react';
import "./css/Cart.css";
import {Link} from 'react-router-dom';

const ProductList = [];

const Cart = () => {
    const productData = ProductList;

    const [products, SetProducts] = useState(productData);

    // -----Increment Event------
    const increaseQuantity = (i) => {
        SetProducts((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    return {
                        ...data,
                        qty: data.qty + 1
                    };
                }
                return data;
            })
        );
    };

    // -----Decrement Event------
    const decreaseQuantity = (i) => {
        SetProducts((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    if (data.qty > 1) {
                        return { ...data, qty: data.qty - 1 };
                    } else {
                        return data;
                    }
                }
                return data;
            })
        );
    };

    

    // -----Remove Event------
    const removeFromCart = (i) => {
        if (window.confirm("Are you sure you want to remove into your cart?")) {
            SetProducts(prevCart =>
                prevCart.filter((item, o) => {
                    return i !== o;
                })
            );
           
        } else {
            // alert('No');
        }
    };


    // -empty-cart--------
    const emptycart = () => {
        if (window.confirm("Remove all items into your cart?")) {
            SetProducts([]);
        } else {
            // alert('No');
        }
    }

    // ------Total Product Incart and Total Price of cart
    const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
    const cartTotalAmount = products.reduce((acc, data) => acc + data.price * data.qty, 0);

    return(
        
       <div className="row justify-content-center m-0">
            <div className="col-md-8 mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-light p-3">
                        <div className="card-header-flex">
                            <h5 className="text-black m-0">Giỏ hàng</h5>
                            {
                                products.length > 0 ? <button className="btn btn-danger mt-0 btn-sm" onClick={() => emptycart()}><i className="fa fa-trash-alt mr-2"></i><span>Xóa tất cả</span></button> : ''}
                        </div>
                    </div>
                    <div className="card-body p-0">
                        {
                            products.length === 0 ? <table className="table cart-table mb-0">
                                <tbody>
                                    <tr>
                                        <td colSpan="6">
                                            <div className="cart-empty">
                                                <i className="fa fa-shopping-cart"></i>
                                                <p>Giỏ hàng trống</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> :
                                <table className="table cart-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Hủy</th>
                                            <th>Món ăn</th>
                                            <th>Tên món ăn</th>
                                            <th>Giá cả</th>
                                            <th>Số lượng</th>
                                            <th className="text-right"><span id="amount" className="amount">Total</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((data, index) => {
                                                const { id, image, name, price, qty } = data;
                                                return (
                                                    <tr key={index}>
                                                        <td><button className="prdct-delete" onClick={() => removeFromCart(index)}><i className="fa fa-trash-alt"></i></button></td>
                                                        <td><div className="product-img"><img src={image} alt="" /></div></td>
                                                        <td><div className="product-name"><p>{name}</p></div></td>
                                                        <td>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</td>
                                                        <td>
                                                            <div className="prdct-qty-container">
                                                                <button className="prdct-qty-btn" type="button" onClick={() => decreaseQuantity(index)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                <input type="text" name="qty" className="qty-input-box" value={qty} disabled />
                                                                <button className="prdct-qty-btn" type="button" onClick={() => increaseQuantity(index)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-right">{String(qty * price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="2">
                                                <Link to = {{pathname: "/payment", 
                                                    state: {
                                                        total: cartTotalAmount,
                                                        fList: products}}}>
                                                    <button className="btn btn-success mt-0 btn-sm" style={{height:"50px"}}>
                                                        <h6>THANH TOÁN</h6>
                                                    </button>
                                                </Link>
                                            </th>
                                            <th>&nbsp;</th>
                                            <th>Số lượng<span className="ml-2 mr-2">:</span><span className="text-danger">{cartTotalQty}</span></th>
                                            <th className="text-right">Tổng giá<span className="ml-2 mr-2">:</span><span className="text-danger">{String(cartTotalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</span></th>
                                        </tr>
                                    </tfoot>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
       
    );
}
export default Cart;
export {ProductList};