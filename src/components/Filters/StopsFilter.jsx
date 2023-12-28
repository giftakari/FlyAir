import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addflightNo, removeflightNo } from "../../redux/flightNo";

const StopsFilter = () => {
  const dispatch = useDispatch();
  const selectedNoOfStops = useSelector((state) => state.flightNo.flightNoArray)
  const stops = [0, 1, 2, 3];

  const handleChange = (e) => {
    const noOfStops = +e.target.value;
    if (e.target.checked) {
      dispatch(addflightNo(noOfStops));
    } else {
      dispatch(removeflightNo(noOfStops));
    }
  }

  return (
    <div className="flex flex-col gap-3 flex-1 min-w-[120px]">
      <h3 className="text-xl">No. of Stops :</h3>
      <div className="flex flex-col gap-1">
        {stops.map((noOfStops, key) => (
          <div key={key} className="flex gap-3">
            <input
              type="checkbox"
              id={noOfStops + 'stop'}
              value={noOfStops}
              checked={selectedNoOfStops.includes(noOfStops)}
              onChange={handleChange}
            />
            <label htmlFor={noOfStops + 'stop'}>{noOfStops >= 3 ? '2+' : noOfStops === 0 ? "NonStop" : noOfStops}</label>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StopsFilter;
