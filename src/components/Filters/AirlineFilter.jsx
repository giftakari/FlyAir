import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addflight, removeflight } from '../../redux/flight';

/* const AirlineFilter = () => {
    const dispatch = useDispatch();
    const allAirlines = useSelector((state) => state.allFlightsArray.allFlightsArray)
    const selectedAirline = useSelector((state) => state.flight.flightArray)

    const handleChange = (e) => {
        if (e.target.checked) {
            dispatch(addflight(e.target.value));
        } else {
            dispatch(removeflight(e.target.value));
        }
    }

    return (
        <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-xl">Flights Name :</h3>
            <div className="flex flex-col gap-2">
                {allAirlines.map((airline, key) => {
                    return (
                        <div key={key} className="flex gap-3">
                            {selectedAirline.includes(airline) === true ? (
                                <input type="checkbox" value={airline} id={airline + "flight"} checked={true} onChange={(e) => handleChange(e)} />
                            ) : (
                                <input type="checkbox" value={airline} id={airline + "flight"} onChange={(e) => handleChange(e)} />
                            )}
                            <label htmlFor={airline + "flight"}>{airline}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AirlineFilter
 */

const AirlineFilter = () => {
    const dispatch = useDispatch();
    const allAirlines = useSelector((state) => state.allFlightsArray.allFlightsArray);
    const selectedAirline = useSelector((state) => state.flight.flightArray);
  
    const handleChange = (e) => {
      const airlineValue = e.target.value;
      if (e.target.checked) {
        dispatch(addflight(airlineValue));
      } else {
        dispatch(removeflight(airlineValue));
      }
    };
  
    return (
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-xl">Flights Name :</h3>
        <div className="flex flex-col gap-2">
          {allAirlines.map((airline, key) => {
            const isChecked = selectedAirline.includes(airline); // Check if airline is in the selectedAirline array
            return (
              <div key={key} className="flex gap-3">
                <input
                  type="checkbox"
                  value={airline}
                  id={airline + "flight"}
                  checked={isChecked}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor={airline + "flight"}>{airline}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

  export default AirlineFilter;