import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

const Shoes = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const shoesData = useSelector((e) => e.shoes);
  const isLoading = useSelector((e) => e.isLoading);
  const isError = useSelector((e) => e.isError);
  //console.log("data", shoesData);

  const getShoes = () => {
    dispatch(getShoesRequest());
    axios
      .get("http://localhost:8080/shoes")
      .then((r) => dispatch(getShoesSuccess(r.data)))
      .catch((e) => dispatch(getShoesFailure(e)));
  };

  useEffect(() => {
    getShoes();
  }, []);
  return (
    <div className="grid">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      {shoesData.map((e, i) => (
        <div key={e.id} className="cart">
          <div>
            <img src={e.image} alt="" className="p-img" />
            <h3>{e.name}</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>InCart: {count}</p>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    width: "10px",
                  }}
                  onClick={() => setCount(count >= 0 ? count + 1 : count * 0)}
                >
                  +
                </p>
                <p
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    width: "10px",
                  }}
                  onClick={() => setCount(count >= 1 ? count - 1 : 0)}
                >
                  -
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
