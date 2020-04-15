import React, {useState, useEffect} from 'react';
import { ChampListBuilder as Builder } from './ChampListBuilder';



const ChampIcon = () => {

    //Adding state / hooks
    const [champShow, setChampShow] = useState(true);

    //Local variables
    const champIcons = ['airicon.png', 'fireicon.png', 'watericon.png', 'earthicon.png'];
    let keyCount = 0;

    function handleChampClick() {
        setChampShow(false);
    }

    return (
        <ul>
            { champShow ? 
            <Builder 
                champSource={champIcons[0]} 
                champKey={keyCount} 
                handleClick={handleChampClick} />
                : null 
            }
        </ul>
    );

}

export default ChampIcon;