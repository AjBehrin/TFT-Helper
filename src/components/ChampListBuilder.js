import React from 'react';

const ChampListBuilder = (props) => {

    const liStyles = {
        padding: "10px"
    }

    let keyCount = 0;

    function loopChamps() {

        let champArray = [];
            
        for (let i = 0; i < props.champLength; i++) {

            for (let j = 0; j < 10; j++) {
                champArray.push(<li key={keyCount} style={liStyles}><img onClick={props.handleChampClick} src={`images/${props.champSource[i]}`} alt="" className="flex-champ" /></li>);
                keyCount++;
            }

        } 
            
        console.log(keyCount);
        return champArray;
    }

    return (
        loopChamps()
    );

}

export default ChampListBuilder;
