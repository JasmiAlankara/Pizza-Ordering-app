import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Footer.css";

function Footer() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <button className="icon-button" onClick={() => openLink("https://www.instagram.com/jasmi_alankarage/?hl=en")}>
          <InstagramIcon />
        </button>
        <button className="icon-button" onClick={() => openLink("YOUR_TWITTER_URL")}> 
          <TwitterIcon />
        </button>
        <button className="icon-button" onClick={() => openLink("https://www.facebook.com/profile.php?id=100090868064528&mibextid=ZbWKwL")}>
          <FacebookIcon />
        </button>
        <button className="icon-button" onClick={() => openLink("https://www.linkedin.com/in/alankarage-jasmi-pavithra-b11099251/")}>
          <LinkedInIcon />
        </button>
      </div>
      <p> &copy; 2025 Jasmizpizza.com</p>
    </div>
  );
}

export default Footer;