import React, { useState,} from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./Menu.css";

const AddMenu = () => {
   
  const [shown, setShown] = useState(false);
  const handleOpen = () => setShown(false);
  const handerOpen = () => setShown(true);

  return (
        <div>
          <div className="cancel">
         <Button variant="primary" onClick={handerOpen}>
        Hủy bỏ
      </Button>
         <Modal show={shown} onHide={handleOpen}>
        <Modal.Body>Thêm món ăn không thành công</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handerOpen} href="/manage/menu">
              Thêm lại
          </Button>
          <Button variant="primary" onClick={handleOpen} href="/foods">
            Xem lại thực đơn
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
        </div>
  );
}



export default AddMenu
