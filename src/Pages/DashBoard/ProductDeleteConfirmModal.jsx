import React from "react";
import { toast } from "react-toastify";

const ProductDeleteConfirmModal = ({ deletePart, refetch, setDeletePart }) => {
  const { name, _id } = deletePart;

  const handleDelete = (id) => {
    fetch(`https://pc-monkey-server-production.up.railway.app/parts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} is deleted successfully`);
          setDeletePart(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="product-delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteConfirmModal;
