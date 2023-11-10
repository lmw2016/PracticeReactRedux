import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PerformanceList extends Component {
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Fly date</th>
              <th>Fly Number</th>
              <th>Mkt Carrier</th>
              <th>Origin City</th>
              <th>Dest City</th>
              <th>Cancellation Reason (if any)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currrentPerformances.map((perf, index) => (
              <tr key={index + 1}>
                <th>{index + 1}</th>
                <th>{new Date(perf.flyDate).toLocaleString()}</th>
                <th>
                  {
                    <Link to={"/performance/" + perf.mktCarrierFlyNum}>
                      {perf.mktCarrierFlyNum}
                    </Link>
                  }
                </th>
                <th>{perf.mktCarrier}</th>
                <th>{perf.originCity}</th>
                <th>{perf.destCityName}</th>
                <th style={{ paddingLeft: "60px" }}>{perf.cancelDesc}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

PerformanceList.propTypes = {
  currrentPerformances: PropTypes.array.isRequired,
};

export default PerformanceList;
