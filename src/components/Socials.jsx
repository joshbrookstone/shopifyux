import React from "react";
import "./Socials.css";
import Grid from "@material-ui/core/Grid";
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
    <Grid
      container
      className={"socials"}
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <TwitterShareButton
          url={
            "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
          }
          title={"your-shoppies-list"}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Grid>
      <Grid item>
        <FacebookShareButton
          url={
            "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
          }
          title={"your-shoppies-list"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Grid>
      <Grid item>
        <RedditShareButton
          url={
            "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuscuq79DrAhWJvp4KHX1CBXoQPAgI"
          }
          title={"your-shoppies-list"}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
      </Grid>
    </Grid>
  );
}
