import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PerformanceList from "./performanceList";

class PerformancePage extends Component {
  state = {};

  componentDidMount() {
    //const { Perfromances } = this.props;
  }
  render() {
    return (
      <>
        <h3>Performances (total {this.props.performances.length}):</h3>
        {<PerformanceList currrentPerformances={this.props.performances} />}
      </>
    );
  }
}

PerformancePage.propTypes = {
  //loadPerformances: PropTypes.func.isRequired,
  performances: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    performances: [],
  };
}

const mapDispatchToProps = {
  //loadPerformances: performanceActions.loadPerformances,
};

export default connect(mapStateToProps, mapDispatchToProps)(PerformancePage);
