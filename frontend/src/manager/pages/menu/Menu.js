import React, { Component } from "react";
import axios from "axios";
import "./Menu.css";
import AddMenu from "./AddMenu.js";
class Menu extends Component {
  state = {
    name: "",
    info: "",
    qty_day: 0,
    image: null,
    category_id: 1,
    price: 0,
    cost: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("name", this.state.name);
    form_data.append("info", this.state.info);
    form_data.append("qty_day", this.state.qty_day);
    form_data.append("image", this.state.image);
    form_data.append("category_id", this.state.category_id);
    form_data.append("price", this.state.price);
    form_data.append("cost", this.state.cost);
    let url = "http://127.0.0.1:8000/api/food";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1 className="fw-bold p-3"> Thêm món </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="Menu_1">
            <div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-9">
                    <form>
                      <div className="input-group">
                        <span className="input-group-text"> Tên món </span>
                        <input
                          id="name"
                          name="name"
                          className="form-control"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </form>
                    <br />
                    <form>
                      <div className="input-group">
                        <span className="input-group-text"> Mã món </span>
                        <input
                          type="number"
                          min={1}
                          className="form-control"
                          name="id"
                          value={this.state.id}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </form>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <form>
                          <div className="input-group">
                            <span className="input-group-text">
                              {" "}
                              Phân loại{" "}
                            </span>
                            <input
                              type="number"
                              min={1}
                              max={2}
                              id="category_id"
                              name="category_id"
                              className="form-control"
                              value={this.state.category_id}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </form>
                        <br />
                      </div>
                      <div className="col-sm-6">
                        <form>
                          <div className="input-group">
                            <span className="input-group-text"> Số lượng </span>
                            <input
                              name="qty_day"
                              id="qty_day"
                              min={1}
                              type="number"
                              className="form-control"
                              value={this.state.qty_day}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </form>
                      </div>
                      <br />
                      <form>
                        <div className="input-group">
                          <span className="input-group-text"> Mô tả </span>
                          <input
                            name="info"
                            id="info"
                            type="text"
                            className="form-control"
                            value={this.state.info}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <br />
                      </form>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-6">
                            <form>
                              <div className="input-group">
                                <span className="input-group-text">
                                  {" "}
                                  Giá vốn{" "}
                                </span>
                                <input
                                  type="number"
                                  id="cost"
                                  min={1000}
                                  step={1000}
                                  className="form-control"
                                  name="cost"
                                  value={this.state.cost}
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </form>
                            <br />
                          </div>
                          <div className="col-sm-6">
                            <form>
                              <div className="input-group">
                                <span className="input-group-text">
                                  {" "}
                                  Giá bán{" "}
                                </span>
                                <input
                                  id="price"
                                  type="number"
                                  min={0}
                                  step={1000}
                                  className="form-control"
                                  value={this.state.price}
                                  name="price"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="col-sm-3">
                    <div className="menu_image">
                      <input
                        type="file"
                        id="image"
                        onChange={this.handleImageChange}
                        required
                      />
                      <img
                        src={
                          this.state.image
                            ? URL.createObjectURL(this.state.image)
                            : ""
                        }
                        style={{ display: this.state.image ? "block" : "none" }}
                        alt={this.state.image}
                        width="191px"
                        height="161px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <div className="type_button">
                  <button className="btn btn-primary" type="submit">
                    Thêm vào
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                {" "}
                <AddMenu />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Menu;
