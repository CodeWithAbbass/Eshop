import "../../../Css/Admin/DOrder.css";

const DAddOrder = () => {
  return (
    <div className="AddOrder">
      <div className="AddOrder_Container">
        <div className="DAddOrder_Heading px-2 bg-white mb-4 d-flex align-items-center justify-content-between">
          <button
            onClick={(e) => handleSubmit(e)}
            className={`btn DAdmin_Hero_Btn FS_14`}
          >
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DAddOrder;
