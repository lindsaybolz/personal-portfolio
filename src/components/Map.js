import React, { useState } from "react";
import USAMap from "react-usa-map";
import './Map.css';
import stateData from '../resources/stateData.json';

const Map = () => { 
    const [description, setDescription] = useState("Click around to see what I've been up to and where!")
    const [image, setImage] = useState("")

    // Mandatory
    const mapHandler = (event) => {
        // console.log(event.target.dataset.name)
        let fullName = stateData[event.target.dataset.name]['fullName']
        let message = stateData[event.target.dataset.name]['message']
        setDescription(`${fullName}: ${message}`)
        if (stateData[event.target.dataset.name]['photo']) {
            let photoPath = stateData[event.target.dataset.name]['photo']
            setImage(
                <div>
                    <img 
                        className='statePhoto'
                        src={require(`${photoPath}`)}
                        alt={`Lindsay in ${stateData[event.target.dataset.name]['fullName']}`}
                        />
                </div>
            );
        } else {
            setImage("")
        }
        const adventuresElement = document.getElementById('adventures');
        if (adventuresElement) {
            adventuresElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const statesCustomConfig = () => {
        return stateData;
    };


    return (
        <div className="mapContainer" id='adventures'>
            <USAMap 
                className='usaMap'
                id='usaMap'
                onClick={mapHandler} 
                width={'80vw'}
                height={'auto'}
                title='Lindsays Map'
                defaultFill='#D2A1A8'
                customize={statesCustomConfig()}
                />
            <div className="mapKey">
                <div className="item">
                Big Hitters &nbsp;
                    <div className="bigHitters">.&nbsp;&nbsp;&nbsp;</div>

                </div>
                <div className="item">
                    Something fun &nbsp;
                    <div className="somethingFun">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className="stateDetails" id="stateDetails">
                {description}
                {image}
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