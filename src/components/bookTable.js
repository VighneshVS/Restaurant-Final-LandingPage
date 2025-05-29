import { useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "./bookTable.css";
import "react-datepicker/dist/react-datepicker.css";

const bookTable = () => {
  const [resDate, setResDate] = useState(null);

  const filTime = (time) => {
    const currDate = new Date();
    const selDate = new Date(time);

    return currDate.getTime() < selDate.getTime();
  };

  return (
    <section className="bookTable" id="bookTable">
      <div className="reservation">
        <div className="reserveContainer">
          <h3 className="booktable-h3">Reservations</h3>
          <h1 className="booktable-h1">Book A Table</h1>
          <div className="options">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <DatePicker
              className="dateAndTime"
              selected={resDate}
              onChange={(date) => setResDate(date)}
              dateFormat="MMMM dd, YYYY hh:mm aa"
              showTimeSelect
              minDate={new Date()}
              maxDate={addDays(new Date(), 12)}
              showDisabledMonthNavigation
              filterTime={filTime}
            />
          </div>
        </div>
        <button className="bookTable-btn">Book Table</button>
      </div>
    </section>
  );
export default bookTable;
};
