import Table from "./Table";
import "../css/box.css"
import axios from "axios";
import React, { useState, useEffect } from "react";

const Menu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("/api/table")
        .then((res) => setData(res.data));
    }, [])
    
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Đặt bàn</h2>
                    <p className="text-center">Vui lòng chọn bàn cần đặt</p>
                </div>
                <div className="row justify-content-center features">
                    {
                        data.map((data, index) => (
                            <Table
                                id={data.id}
                                state={data.status}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;
