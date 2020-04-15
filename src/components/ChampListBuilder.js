import React from 'react';

const ChampListBuilder = (props) => {

    let keyCount = 0;

    function loopChamps() {
            
        let champArray = props.champSource.map((item, index, array) => {

            for (let i = 0; i < 4; i++) {

                for (let j = 0; j < 10; j++) {
                    array = <li key={keyCount}><img src={`images/${props.champSource[index]}`} onClick={props.handleChampClick} alt="" className="flex-champ" /></li>
                    keyCount++;
                }

            }

            return array;
        });
            
        console.log(keyCount);
        return champArray;
    }

    return (
        loopChamps()
    );

    

}

export default ChampListBuilder;