import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-color">
      <div className="footer-left">
        <a href="#">
          <img src="./logo.png" alt="" />
          <p>
            Mh |&nbsp;<span className="text-[#20865c]">Developer</span>
          </p>
        </a>
      </div>
      <div className="footer-mid">
        <p>
          Designed by <span className="text-[#20865c]">Mh</span> 2023 &copy;
        </p>
      </div>
      <div className="footer-right">
        <p>Thanks Cisco and cmzw for 3D-Models.</p> &nbsp;
        <a
          target="_blank"
          href="https://sketchfab.com/3d-models/cyberpunk-desk-8bc4ca48b2e244ff8b5ba714a2ec1963"
        >
          Click here to visit!
        </a>
        <br />
        &nbsp;
        <a
          target="_blank"
          href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
        >
          Click here to visit!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
