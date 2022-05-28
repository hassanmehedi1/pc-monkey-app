import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ProductDeleteConfirmModal from "./ProductDeleteConfirmModal";
import ProductsRow from "./ProductsRow";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [deletePart, setDeletePart] = useState(null);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch(`http://localhost:5000/parts`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <ProductsRow
                key={index}
                part={part}
                index={index}
                setDeletePart={setDeletePart}
                refetch={refetch}
              ></ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletePart && (
        <ProductDeleteConfirmModal
          deletePart={deletePart}
          refetch={refetch}
          setDeletePart={setDeletePart}
        ></ProductDeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
