import React from "react";

const ProductsRow = ({ part, index, setDeletePart, refetch }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{part.name}</td>
      <td>{part.price}</td>
      <td>{part.available}</td>
      <td>
        {
          <label
            onClick={() => setDeletePart(part)}
            for="product-delete-confirm-modal"
            className="btn btn-xs btn-error"
          >
            delete
          </label>
        }
      </td>
    </tr>
  );
};

export default ProductsRow;
