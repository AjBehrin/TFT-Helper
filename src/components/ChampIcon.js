import React, {useState, useEffect} from 'react';
import ChampListBuilder from './ChampListBuilder';



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
        <>
            { champShow ? 
            <ChampListBuilder 
                champSource={champIcons} 
                champKey={keyCount} 
                handleClick={handleChampClick} />
                : null 
            }
        </>
        
    );

}

export default ChampIcon;