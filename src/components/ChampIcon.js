import React, { useState } from 'react';
import ChampListBuilder from './ChampListBuilder';

const ChampIcon = () => {

    //Adding state / hooks
    const [champShow, setChampShow] = useState(true);

    //Local variables
    const champIcons = ['earthicon.png', 'airicon.png', 'fireicon.png', 'watericon.png'];
    let keyCount = 0;

    function handleChampClick(e) {
        e.preventDefault();
        setChampShow(false);
    }

    return (
        <>
            { champShow ? 
            <ChampListBuilder 
                champSource={champIcons} 
                champKey={keyCount} 
                handleClick={handleChampClick} 
                champLength={champIcons.length} />
                : null 
            }
            <button onClick={() => setChampShow(false)}>
                Bye
            </button>
            <button onClick={() => setChampShow(true)}>
                Hi
            </button>
        </>
    );

}

export default ChampIcon;