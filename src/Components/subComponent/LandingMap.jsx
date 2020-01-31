import React, { useState, useEffect} from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import GoogleMapReact from 'google-map-react';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const handleApiLoaded = (map, maps) => {
//     // use map and maps objects
//   };
//<div style={{ height: '100vh', width: '100%' }}>
        // <GoogleMapReact
        // bootstrapURLKeys='AIzaSyB4gdWticvZ2lQA2N3RUElzsOe-5ooNp3M'
        // defaultCenter={{'lat':41.6032,'lng':-73.0877}}
        // defaultZoom={7}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        // >
        // <AnyReactComponent
        // lat={41.6032}
        // lng={-73.0877}
        // text="My Marker"
        // onClick={()=>{console.log('click')}}
        // />
        // </GoogleMapReact>
        // </div></div>


// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
// <GoogleMap
//     defaultZoom={9}
//     defaultCenter={{ lat: 41.6032, lng: -73.0877 }}
// >
//     <Marker
//     position={{ lat: 41.4198317, lng: -72.8920829 }}
//     />
//     <Marker
//     position={{ lat: 41.4154875, lng: -72.9147582 }}
//     />
// </GoogleMap>
// ));

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 41.6032, lng: -73.0877 }}
    >
      { <Marker position={{ lat: 41.4198317, lng: -72.8920829 }} onClick={props.onMarkerClick} />}

    {/* <Marker
    position={{ lat: 41.4198317, lng: -72.8920829 }}
    />
    <Marker
    position={{ lat: 41.4154875, lng: -72.9147582 }}
    /> */}

    </GoogleMap>
  )



const LandingMap = (props) => {
    const [state,handleClick] = useState({sensor: {}});
    
    const handleMarkerClick = (marker) => {
        console.log("CLICK")
        handleClick({ sensor: {marker} })
    }
    return (
        // <MapWithAMarker
        // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4gdWticvZ2lQA2N3RUElzsOe-5ooNp3M&v=3.exp&libraries=geometry,drawing,places"
        // loadingElement={<div style={{ height: `100%` }} />}
        // containerElement={<div style={{ height: `400px` }} />}
        // mapElement={<div style={{ height: `100%` }} />}
        // onMarkerClick={handleMarkerClick}
        // />

        <MyMapComponent
        isMarkerShown={state.isMarkerShown}
        onMarkerClick={handleMarkerClick}
      />
    )
}

export default LandingMap;