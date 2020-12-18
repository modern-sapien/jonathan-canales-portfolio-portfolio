import React from 'react';

const FooterIcon = (props) => {
    return (
        <>
            {props.FooterInfo.map((info) => (
               <div className="col-3">
                <a href={info.href}>
                    <img className="fixed-image" src={info.img} alt={info.alt}/>
                </a>
                


               </div>
               
               
            ))}
        </>
    );
};

export default FooterIcon;