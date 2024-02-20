import "./PlanBody.css";

import  { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Plan() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);


    return (
        <div className="container">

            <div id="DateRow">
                <label htmlFor="endDate" id="lblDate1">SELECT START DATE</label>
  
                    <div id="calander">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        startDate={startDate}
                        minDate={new Date()}
                        selectsStart
                        placeholderText="Starting Date"
                    />
                    </div>
               
                 <label htmlFor="endDate" id="lblDate2">SELECT END DATE</label>
                
                 <div id="calander">
                    <DatePicker
                        selected={endDate}
                        onChange={(date: any) => setEndDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        selectsEnd
                        placeholderText="End Date"
                    />
                    </div>

            </div>

            <br /><br />

            <div>
                <table className="table table-striped table-hover">
                    {"TRIP SHEDULE"}
                    <tbody>
                        <tr>
                            <th scope="userId">User Id</th>
                            <th scope="userName">User Name</th>
                            <th scope="plan">Plan</th>
                            <th scope="option">Option</th>

                        </tr>
                        <tr>
                            <td> Data 1</td>
                            <td> Data 2</td>
                            <td> Data 3</td>
                            <td>

                                <button type="button" className="btn btn-danger">Remove</button>

                            </td>

                        </tr>

                        <tr>
                            <td> Data 1</td>
                            <td> Data 2</td>
                            <td> Data 3</td>
                            <td>

                                <button type="button" className="btn btn-danger">Remove</button>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="ButtonRow">
                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-success">Confirm</button>
            </div>
        </div>
    );
}

export default Plan;