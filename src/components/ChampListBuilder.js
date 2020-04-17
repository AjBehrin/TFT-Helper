import React from 'react';

const ChampListBuilder = (props) => {

    let keyCount = 0;

    function loopChamps() {

        let champArray = [];
            
        for (let i = 0; i < 4; i++) {

            for (let j = 0; j < 10; j++) {
                champArray.push(<li key={keyCount}><img src={`images/${props.champSource[i]}`} onClick={props.handleChampClick} alt="" className="flex-champ" /></li>);
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

/* 
cArray = <li key={keyCount}><img src={`images/${item}`} onClick={props.handleChampClick} alt="" className="flex-champ" /></li>
                    keyCount++;
*/