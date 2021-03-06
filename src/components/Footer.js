import React from "react";
import { Layout } from "antd";
const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <ul className="Footer_list">
        <li>
          <a
            href="https://halocom.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Halocom
          </a>
        </li>
        <li>•</li>
        <li>
          <a
            href="https://hn.algolia.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Documentation
          </a>
        </li>
      </ul>
    </Layout.Footer>
  );
};

export default Footer;
