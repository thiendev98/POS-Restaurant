import React from "react";
import ReserveForm from "./Reserve_Form";

const Table = ({id, state}) => {
    return (
        <div className="col-sm-6 col-md-5 col-lg-3 item">
            <div className="box">
                <h3 className="name">Bàn số {id}</h3>
                <div className="d-flex justify-content-around align-items-center">
                    <a href="/reservation/new">
                        <button className="btn btn-success" type="button" size="small" onClick={ReserveForm(id)}>
                            Đặt bàn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Table;
