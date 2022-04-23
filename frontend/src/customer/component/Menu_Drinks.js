import Item from "./Item";
import "../css/box.css"
import axios from "axios";
import React, { useState, useEffect } from "react";

const Menu = ({name, desc, price, addItem}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("/api/food?type=2")
        .then((res) => setData(res.data));
    }, [])

    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    {
                        data.map((data, index) => (
                            <Item 
                                item_id={data.id}
                                name= {data.name}
                                desc= {data.info}
                                img = {"http://127.0.0.1:8000"+data.image}
                                price= {data.price}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;
