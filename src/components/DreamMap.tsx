import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StoreState } from '../communication/redux/store';

import { useGoogleMaps } from "react-hook-google-maps";

const DreamMap = React.memo(() => {
    const { ref } = useGoogleMaps(
        "AIzaSyB8DgJPuzsGqFaL1W7_vljyNrqK-W7RVck",
        // NOTE: You should always set initial 'center' and 'zoom' values
        // even if you plan to change them later
        {
          center: { lat: 0, lng: 0 },
          zoom: 3,
        },
      );
    return (
        <div className="map">
            <div ref={ref} className="detail"/>
        </div>)
});

const mapStateToProps = ({ heroListReducer }: StoreState) => ({
    heroList: heroListReducer.list,
    loading: heroListReducer.loading,
});

export default withRouter(connect(mapStateToProps)(DreamMap));