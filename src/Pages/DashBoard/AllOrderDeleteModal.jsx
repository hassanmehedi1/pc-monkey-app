import React from "react";
import { toast } from "react-toastify";

const AllOrderDeleteModal = ({ deleteOrder, refetch, setDeleteOrder }) => {
  const { item, _id } = deleteOrder;

  const handleDelete = (id) => {
    fetch(`https://stark-lake-42381.herokuapp.com/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${item} is deleted successfully`);
          setDeleteOrder(null);
          // refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="all-order-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {item}!
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="all-order-delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrderDeleteModal;
