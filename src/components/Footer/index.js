import React from "react";

// Image imports
import footer_art from "../../assets/images/footer_art.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div>
          <h3>By Nash Vail</h3>
          <ul className="footer__left__links">
            <li>
              <a href="http://twitter.com/nashvail">
                <h4>Tweet a Feedback</h4>
              </a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/6WOkNZ4l3">
                <h4>Support</h4>
              </a>
            </li>
            <li>
              <a href="https://github.com/nashvail/loving-recursion">
                <h4>Contribute</h4>
              </a>
            </li>
          </ul>
        </div>
        <h4>License: <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="__blank">CC BY-NC-SA</a></h4>
      </div>
      <div className="footer__right">
        <img src={footer_art} alt="Footer art image" />
      </div>
    </footer>
  );
}

export default Footer;