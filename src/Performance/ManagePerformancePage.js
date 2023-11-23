import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadPerformances } from "../Redux/Actions/performanceAction";
import { Link } from "react-router-dom";

const ManagePerformancePage = ({
  performances,
  loadPerformances,
  ...props
}) => {
  const [performance, setPerformance] = useState({ ...props.performance });

  useEffect(() => {
    if (performances.length === 0) {
      loadPerformances().catch((error) => {
        throw error;
      });
    } else {
      setPerformance({ ...props.performance });
    }
  }, [props.performance]);

  return (
    <>
      <h3>Performance Detail</h3>
      {performance.mktCarrierFlyNum}
      {" | "}
      {new Date(performance.flyDate).toLocaleString()}
      {" | "}
      {performance.originCity}
      {" | "}
      {performance.destCityName}
      <br />
      <br />
      <Link to={"/perfomances"}>Go Back</Link>
    </>
  );
};

ManagePerformancePage.propTypes = {
  loadPerformances: PropTypes.func.isRequired,
  performance: PropTypes.object.isRequired,
  performances: PropTypes.array.isRequired,
};

const newPerformance = {};

function mapStateToProps(state, ownProps) {
  const mktCarrierFlyNum = ownProps.match.params.mktCarrierFlyNum;
  const performance = mktCarrierFlyNum
    ? state.performances.find((p) => p.mktCarrierFlyNum === mktCarrierFlyNum) ||
      newPerformance
    : newPerformance;
  return {
    performance,
    performances: state.performances,
  };
}

const mapDispatchToProps = {
  loadPerformances,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePerformancePage);
