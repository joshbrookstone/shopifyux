import React from "react";

import "./Socials.css";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

export default function Socials() {
  return (
    <div className={"socials"}>
      <TwitterShareButton
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
        }
        title={"your-shoppies-list"}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
        }
        title={"your-shoppies-list"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton
        url={
          "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
        }
        title={"your-shoppies-list"}
        className="Demo__some-network__share-button"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
