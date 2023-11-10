import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PerformanceList from "./performanceList";
import * as PerformanceActions from "../Redux/Actions/performanceAction";

class PerformancePage extends Component {
  state = {};

  componentDidMount() {
    const { performances, loadPerformances } = this.props;
    if (performances.length === 0) {
      loadPerformances().catch((err) => {
        console.log("Error loading performances: " + err);
      });
    }
  }
  render() {
    return (
      <>
        {this.props.loading ? (
          <h4>loading....</h4>
        ) : (
          <>
            <h3>Performances (total {this.props.performances.length}):</h3>
            {<PerformanceList currrentPerformances={this.props.performances} />}
          </>
        )}
      </>
    );
  }
}

PerformancePage.propTypes = {
  loadPerformances: PropTypes.func.isRequired,
  performances: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    performances: state.performances,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadPerformances: PerformanceActions.loadPerformances,
};

export default connect(mapStateToProps, mapDispatchToProps)(PerformancePage);
