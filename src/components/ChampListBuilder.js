import React from 'react';

const ChampListBuilder = (props) => {

    let keyCount = 0;

    return (
        <li key={keyCount}>
            <img src={props.champSource} onClick={props.handleChampClick} alt="" className="flex-champ" />
        </li>
    );

    

}

export default ChampListBuilder;