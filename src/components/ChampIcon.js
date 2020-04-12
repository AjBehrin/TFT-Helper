import React from 'react';

const champIcons = ['airicon.png', 'fireicon.png', 'watericon.png', 'earthicon.png'];

let keyCount = 0;

let hide = {
    hideChamp: ""
}

const PickedChamps = (props) => {

}

const BuildChamps = (props) => {
    
    let champArray = [];

    const handleChampClick = () => {
        hide.hideChamp = "hidden"
    }

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 10; j++) {
            champArray.push(<li key={keyCount} style={hide}><img src={`images/${props.champs[i]}`} onClick={handleChampClick} alt="" className="flex-champ" /></li>);
            keyCount++;
        }
    }

    return champArray;
}

function ChampIcon() {
       
    return (
        <BuildChamps champs={champIcons} />
    );
}

export default ChampIcon;