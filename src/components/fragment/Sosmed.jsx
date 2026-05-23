import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import PropTypes from 'prop-types';

const Sosmed = ({ className = "" }) => {
  Sosmed.propTypes = {
    className: PropTypes.string,
  };
  const socialLinks = [
    {
      title: "Github",
      link: "https://github.com/aftlah",
      icon: <FaGithub size={24} />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/aftlah_/",
      icon: <FaInstagram size={24} />,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/altaf-fattah-amanullah-10b852266/",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_14px_rgba(0,255,255,0.35)]"
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Sosmed;
