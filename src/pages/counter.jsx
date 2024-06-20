import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";


const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();
  //    console.log  (store)
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center w-full">
      <div className="d-flex gap-4 align-items-center">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span className="fs-1">{count} </span>

        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          {" "}
          Arttır{" "}
        </button>

        <button
          onClick={() => dispatch(setCount(0))}
          className="btn btn-secondary"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Counter;
