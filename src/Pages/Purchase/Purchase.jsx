import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Purchase = () => {
  const { purchaseId } = useParams();

  const [parts, setParts] = useState({});

  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/parts/${purchaseId}`;
      try {
        const { data } = await axios.get(url);
        setParts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [purchaseId, parts]);
  return (
    <div>
      <div className="card rounded-xl w-96 bg-base-100 shadow-xl mb-4 mx-auto">
        <figure>
          <img className="w-50 mx-auto" src={parts.img} alt="parts" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-xl font-bold">{parts.name}</h2>
          <h4 className="font-semibold">Price: ${parts.price}</h4>
          <h5 className="font-semibold">
            Min-Order-Quantity: {parts.minOrder}
          </h5>
          <h6 className="font-semibold">
            Available-Quantity: {parts.available}
          </h6>
          <p>{parts.description}</p>
        </div>
      </div>
      <div className="flex flex-col w-50 mx-auto"></div>
    </div>
  );
};

export default Purchase;
