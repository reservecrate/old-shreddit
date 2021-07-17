import React from 'react';

const Banner = ({title, number, hdwmy, author, textContent}) => {
    return (
        <img id='banner' onClick={() => window.location.reload()} src='https://data2.origin.com/asset/content/dam/originx/web/app/games/apex/apex/F2P/season-9/APEXLS9_ORIGIN_GDP_BG_4800x1200_en_WW.jpg/52ec9e0c-8af6-4b27-8e84-3547ae2ea5dd/original.jpg' alt='Apex Legends - Season 9: Legacy'/>
    );
}

export default Banner;