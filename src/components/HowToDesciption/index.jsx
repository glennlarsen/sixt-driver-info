import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DevicesIcon from "@mui/icons-material/Devices";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function HowToDesciption() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>1</h2>
            <p>
              Login on <strong>Tablet</strong> and <strong>PC</strong>
            </p>
            <DevicesIcon />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>2</h2>
            <p>
              Open the <strong>same form</strong> on Tablet and PC
            </p>
            <OpenInFullIcon />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>3</h2>
            <p>
              Open the <strong>Live Form</strong> on tablet
            </p>
            <PlaylistAddIcon />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>4</h2>
            <p>
              Open the <strong>Answers</strong> on PC
            </p>
            <PlaylistAddCheckIcon />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>5</h2>
            <p>
              <strong>Fill</strong> the Live form and <strong>Submit</strong>.
              Click <strong>Refresh</strong> on the answer Page.
            </p>
            <DoneAllIcon />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-how">
            <h2>6</h2>
            <p>
              <strong>Click to copy</strong> each field. <strong>Delete</strong>{" "}
              driver when done to avoid any GDPR cases.
            </p>
            <ContentCopyIcon />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HowToDesciption;
