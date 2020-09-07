import React from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

export default function Switcher({ setDisplayToggle, displayToggle }) {
  const handleChange = (event) => {
    setDisplayToggle({
      ...displayToggle,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid
        item
        style={{ fontSize: "1rem", color: "#d0d0d0", fontFamily: "Kumbh Sans" }}
      >
        Button View
      </Grid>
      <Grid item>
        <Switch
          checked={displayToggle.checked}
          onChange={handleChange}
          name="checked"
          color="default"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Grid>
      <Grid
        item
        style={{ fontSize: "1rem", color: "#d0d0d0", fontFamily: "Kumbh Sans" }}
      >
        Poster View
      </Grid>
    </Grid>
  );
}
