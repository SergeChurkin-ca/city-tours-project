import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul class="social ">
        <li>
          <a
            class="tw-ic mr-3 "
            role="button "
            href="https://twitter.com/ChurkinSerge"
            target="_blank"
          >
            <i class="fab fa-lg fa-twitter "></i>
          </a>
        </li>

        <li>
          <a
            class="li-ic mr-3 "
            role="button "
            href="https://www.linkedin.com/in/sergechurkin/"
            target="_blank"
          >
            <i class="fab fa-lg fa-linkedin-in "></i>
          </a>
        </li>

        <li>
          <a
            class="git-ic mr-3 "
            role="button "
            href="https://github.com/sergechurkin-ca"
            target="_blank"
          >
            <i class="fab fa-lg fa-github "></i>
          </a>
        </li>

        <li>
          <a
            class="email-ic mr-3 "
            role="button "
            href="mailto:sergechurkin@gmai.com"
          >
            <i class="far fa-lg fa-envelope "></i>
          </a>
        </li>
      </ul>
      <p class="trademark ">2020 created by serge churkin www.serge-web.com</p>
    </footer>
  );
};

export default Footer;
