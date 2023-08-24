import React, { useState } from "react";
import USAMap from "react-usa-map";
import './Map.css'

const Map = () => { 
  const stateData = {
    "Washington": "Born and raised in Seattle. ",
    "Oregon": "Frequently driven thruough and a festive new years celebration in 2019-2020.",
    'California': 'I oved to Claremont CA to attend Pitzer College.  While I studied Physics the interdicuplinary nature of the school engaged my desire to talk pholosophy and politics with friends',
  
  }

  const [description, setDescriptoin] = useState("Click around to see what I've been up to and where!")
  // Mandatory
  const mapHandler = (event) => {
    console.log(event.target.dataset.name)
    // alert(event.target.dataset.name);
  };

  const statesCustomConfig = () => {
    return {
      "CO": {
        fill: "#A08B59",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "WA": {
        fill: "#A08B59"
      },
      "CA": {
        fill: "#A08B59"
      },
      "ID": {
        fill: "#A08B59"
      },
      "GA": {
        fill: "#A08B59"
      },
      "UT": {
        fill: "#A08B59"
      },
    };
  };


  return (
    <div className="mapContainer">
      <USAMap 
        onClick={mapHandler} 
        width={'80vw'}
        height={'auto'}
        title='Lindsays Map'
        defaultFill='#D2A1A8'
        customize={statesCustomConfig()}
        />
      <div className="mapDescription">
        {description}
      </div>
    </div>
  )
}

export default Map;
/* 
Blueish:  3D6670
pinky: D2A1A8
lightGreen: A08B59
brownGreen: 8E7651
lightBlue/lialac: 9197AF
*/