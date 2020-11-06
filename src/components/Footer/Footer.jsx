import React from 'react';
import EmailIcon from "./Icons/email.png"
import GitHubIcon from "./Icons/GitHub-Mark.png"
import LinkedinIcon from "./Icons/linkedin.png"
import PhoneIcon from "./Icons/phone.png"
import FooterIcon from "../FooterIcon/FooterIcon"


const FooterInfo= [
    {
        href: "mailto: joncanales2@gmail.com",
        img: EmailIcon,
        alt: "an email icon that allows you send an email"
    },
    {
        href: "https://github.com/modern-sapien",
        img: GitHubIcon,
        alt: "an email icon that allows you send an email"
    },
    {
        href: "https://www.linkedin.com/in/modern-sapien/",
        img: LinkedinIcon,
        alt: "an email icon that allows you send an email"
    },
    {
        href: "tel:7703547838",
        img: PhoneIcon,
        alt: "a phone icon that lets you call me to collaborate"
    },
    
]
const Footer = () => {
    return (
        <div className="footer row">
            <FooterIcon FooterInfo={FooterInfo} />
        </div>
    );
};

export default Footer;