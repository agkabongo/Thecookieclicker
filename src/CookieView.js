import React from 'react';

const CookieView = ({money, onClick}) => {
    return (
        <div className="w-2/6 h-screen flex-column items-center justify-center">
            <h2 className="text-4xl">Click on the Cookie</h2>
            <h3 className="text-3xl pt-5">{money} Cookies</h3>
            <img
                src="https://vignette.wikia.nocookie.net/halo/images/7/70/Cookie.png/revision/latest?cb=20120712170459"
                className="pt-20 px-12"
                onClick={onClick}/>

        </div>
    );
};

export default CookieView;
