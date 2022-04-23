const TableEdit = () => {
  return (
    <>
    <h1 className="m-5">Chỉnh đơn đặt bàn</h1>
    <form>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Khách hàng</p>
              </div>
              <div className="col-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Mã đặt bàn</p>
              </div>
              <div className="col-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Giờ đến</p>
              </div>
              <div className="col-9">
                <input type="datetime-local" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Thời lượng</p>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-1">
                    <p className="text-muted text-end">Giờ</p>
                  </div>
                  <div className="col-3">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Số khách</p>
              </div>
              <div className="col-9" style={{paddingRight: '0'}}>
                <div className="row">
                  <div className="col-3">
                    <p className="text-muted text-end">Người lớn</p>
                  </div>
                  <div className="col-3">
                    <input type="number" className="form-control" /> 
                  </div>
                  <div className="col-3 ">
                    <p className="text-muted text-end">Trẻ em</p>
                  </div>
                  <div className="col-3">
                    <input type="number" className="form-control" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">NV nhận đặt</p>
              </div>
              <div className="col-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Phòng/Bàn</p>
              </div>
              <div className="col-9">
                <input type="text" className="form-control" />
                <a href="#" className="float-end">Xem bàn trống</a>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Ghi chú" />
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 text-end">
          <button type="button" className="btn btn-danger m-1">Hủy đặt</button>
          <button type="button" className="btn btn-primary m-1">Nhận gọi món</button>
          <button type="button" className="btn btn-primary m-1">Nhận bàn</button>
          <button type="button" className="btn btn-primary m-1">Lưu và in</button>
          <button type="button" className="btn btn-primary m-1">Lưu</button>
          <a href="/manage/table">
            <button type="button" className="btn btn-secondary m-1">Bỏ qua</button>
          </a>
        </div>
      </div>
    </form>
    </>
  )
}

export default TableEdit