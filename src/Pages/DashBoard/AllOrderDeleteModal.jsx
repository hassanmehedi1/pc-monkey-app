import React from "react";
import { toast } from "react-toastify";

const AllOrderDeleteModal = ({ deleteOrder, refetch, setDeleteOrder }) => {
  const { item, _id } = deleteOrder;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
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
        class="modal-toggle"
      />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {item}!
          </h3>
          <p class="py-4">
            If you dont like this product,We have other good options in our
            site.
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="all-order-delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrderDeleteModal;
