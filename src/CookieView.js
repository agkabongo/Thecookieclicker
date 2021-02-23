import React from 'react';

const CookieView = ({
    money,
    onClick
}) => {
    return (
        <div class="bg-blue-300 w-2/6 h-screen">
            Click on the Cookie
            <div>
                Your money : ${money}
            </div>
            <img src="https://vignette.wikia.nocookie.net/halo/images/7/70/Cookie.png/revision/latest?cb=20120712170459" className="cookiePic px-5 py-10" onClick={onClick}/>
            
           
        </div>
    );
};

export default CookieView;
