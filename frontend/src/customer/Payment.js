import React, {useState, useEffect} from 'react';
import "./css/Payment.css";
import axios from 'axios';

export class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        fullname: '',
        email:  '',
        tele: '',
        formality: '',
        address: '',
        cardNo: '',
        nameOnCard: '',
        expiryDate: '',
        CVC: '',
        total: this.props.location.state.total, 
        foodlist: this.props.location.state.fList,
        orderID: 0
      }
      // this.updateState = this.updateState.bind(this) 
    }
    
    // updateState(newValue) {
    //   this.setState({
    //     ...this.state, orderID: newValue
    //   })
    // }
    
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    
    handleSubmit = event => {
      let order = 0
      event.preventDefault()
      const { fullname, tele, email, formality, address, cardNo, nameOnCard, expiryDate, CVC, total, foodlist, orderID} = this.state
      axios.post(`/api/order`, {
          c_name: this.state.fullname,
          c_tele: this.state.tele,
          c_email: this.state.email,
          formality: this.state.formality,
          c_address: this.state.address,
          total: this.state.total,
          status: 'D',
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
      
      setTimeout(() => {
        axios.get(`/api/order2`)
      .then(res => {
        res.data.map(order =>{ const {id, c_name, c_tele, c_email, formality, c_address, total, time, status} = order
        this.state.foodlist.forEach(function(item) {
          axios.post(`/api/food_order`, { 
            order_id: id,
            food_id: item.item_id,
            quantity: item.qty
           })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
        })
        });
      });
      }, 500);
      // axios.post(`/api/food_order`, { 
      //   order_id: 73,
      //   food_id: this.state.foodlist[0].item_id,
      //   quantity: this.state.foodlist[0].qty
      //  })
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // });
      
      
      
      // let bodyFormData = new FormData();
      // this.props.location.state.fList.forEach((item) => {
      //   bodyFormData.append(order_id, 73)
      //   bodyFormData.append(food_id, item["item_id"])
      //   bodyFormData.append(quantity, item["qty"])
      //   console.log(bodyFormData)
      //   axios.post(`/api/food_order`, bodyFormData, { 'content-type': 'multipart/form-data' })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   });
      // });
      
      
      
      // alert(`Chi tiết đơn hàng: \n 
      //        Họ và tên: ${fullname} \n
      //        Sdt: ${tele} \n
      //        Email: ${email} \n 
      //        Hình thức đặt hàng: ${formality} \n
      //        Địa chỉ: ${address} \n
      //        Số thẻ: ${cardNo} \n
      //        Tên thẻ: ${nameOnCard} \n
      //        Ngày hết hạn: ${expiryDate} \n
      //        Mã CVC: ${CVC}`)
      this.props.history.push('/home');
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-end" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }

  step1button(){
    let currentStep = this.state.currentStep;
    if(currentStep < 2){
      return (
        <div className = "stepnumber doing">1</div>      
      )
    }
    return (
      <div className = "stepnumber doing">✓</div>
    )
  }

  line1_2(){
    let currentStep = this.state.currentStep;
    if(currentStep > 1){
      return (
        <div className = "line completed"></div>      
      )
    }
    return (
      <div className = "line"></div>
    )
  }

  step2button(){
    let currentStep = this.state.currentStep;
    if(currentStep === 2){
      return (
        <div className = "stepnumber doing">2</div>      
      )
    } else if (currentStep === 3) {
      return (
        <div className = "stepnumber completed">✓</div>
      )
    } else if (currentStep === 1) {
      return (
        <div className = "stepnumber">2</div>
      )
    }
  }

  line2_3(){
    let currentStep = this.state.currentStep;
    if(currentStep > 2){
      return (
        <div className = "line completed"></div>      
      )
    }
    return (
      <div className = "line"></div>
    )
  }

  step3button(){
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <div className = "stepnumber doing">3</div>      
      )
    } else if (currentStep < 3) {
      return (
        <div className = "stepnumber">3</div>
      )
    } else {
      return (
        <div className = "stepnumber completed">✓</div>
      )
    } 
  }
    
    render() {    
      return (
        <React.Fragment>
            <div className = "fragment">
                <div className = "orderform">
                    <form onSubmit={this.handleSubmit}>
                    {/* 
                    render the form steps and pass required props in
                    */}
                    <div className = "title">
                      {this.step1button()}
                      {this.line1_2()}
                      {this.step2button()}
                      {this.line2_3()}
                      {this.step3button()}
                    </div>
                    <Step1 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        fullname={this.state.fullname}
                        tele={this.state.tele}
                        email={this.state.email}
                        formality={this.state.formality}
                        address={this.state.address}
                    />
                    <Step2 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        cardNo={this.state.cardNo}
                        nameOnCard={this.state.nameOnCard}
                        expiryDate={this.state.expiryDate}
                        CVC={this.state.CVC}
                    />
                    <Step3 
                        currentStep={this.state.currentStep} 
                    />
                    <div className = "button">
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
      );
    }
  };

  
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="fullname">Họ và tên</label>
        <input
          className="form-control"
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Trần Văn A"
          value={props.fullname}
          onChange={props.handleChange}
          />
        <label htmlFor="tele">Số điện thoại</label>
        <input
          className="form-control"
          id="tele"
          name="tele"
          type="text"
          placeholder="0XXXXXXXXX"
          value={props.tele}
          onChange={props.handleChange}
          />
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Atran@gmail.com"
          value={props.email}
          onChange={props.handleChange}
          />
        <div>
          <label htmlFor="formality">Hình thức đặt món</label>
          <div className="ratio-control">
          <input 
            id="formality"
            type="radio" 
            value="E" 
            name="formality" 
            onChange={props.handleChange}/> Ăn tại chỗ
          </div>
          <div className="ratio-control">
          <input 
            id="formality"
            type="radio" 
            value="T" 
            name="formality" 
            onChange={props.handleChange}/> Mang đi
          </div>
        </div>
        <label htmlFor="address">Địa chỉ</label>
        <input
          className="form-control"
          id="address"
          name="address"
          type="text"
          placeholder="48 đường số 19, phường Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM"
          value={props.address}
          onChange={props.handleChange}
          />        
      </div>
    );
  }

  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="cardNo">Số thẻ</label>
        <input
          className="form-control"
          id="cardNo"
          name="cardNo"
          type="text"
          placeholder="4444-4444-4444-4444"
          value={props.cardNo}
          onChange={props.handleChange}
          />
        <label htmlFor="nameOnCard">Tên thẻ</label>
        <input
          className="form-control"
          id="nameOnCard"
          name="nameOnCard"
          type="text"
          placeholder="TRAN VAN A"
          value={props.nameOnCard}
          onChange={props.handleChange}
          />
        <label htmlFor="expiryDate">Ngày hết hạn</label>
        <input
          className="form-control"
          id="expiryDate"
          name="expiryDate"
          type="text"
          placeholder="19/05"
          value={props.expiryDate}
          onChange={props.handleChange}
          />
        <label htmlFor="CVC">Mã CVC</label>
        <input
          className="form-control"
          id="CVC"
          name="CVC"
          type="text"
          placeholder="Nhập CVC"
          value={props.CVC}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
        <h3 style={{textAlign: 'center'}}>Xác thực thanh toán!</h3>
        <p style={{textAlign: 'center'}}>
          Cảm ơn đơn hàng của bạn! Chúc bạn ngon miệng! Hóa đơn sẽ được gửi vào email của bạn!
        </p>
        <button className="btn btn-success float-end">Xác nhận</button>
      </React.Fragment>
    );
  }

  

  