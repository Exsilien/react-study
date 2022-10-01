import React from 'react';
import Preloader from '../../assets/loading.svg';
const Loader = () => {
    return (
        <div>
            <div className="loader">
                <img src={Preloader} alt="loader"/>
            </div>
        </div>
    );
};

export default Loader;