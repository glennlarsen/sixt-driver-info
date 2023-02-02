import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import ModalLayout from "../ModalLayout";

function AnswersSettingsModal({ open, handleClose, settings, setSettings }) {
  const handleChange = (event) => {
   setSettings(event.target.checked);
  }

  console.log(settings);

  return (
    <ModalLayout open={open} handleClose={handleClose}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Show big or small letters
      </Typography>
      <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
          <FormControlLabel
            sx={{ marginLeft: "0" }}
            control={
              <>
              <Typography>Big letters</Typography>
                <Switch
                  checked={settings}
                  onChange={handleChange}
                  name="upperCase"
                />
                <Typography>Small letters</Typography>
                </>
            }
          />
           </Stack>
      </FormGroup>
      <button className="btn-close" onClick={handleClose}>
        Close
      </button>
    </ModalLayout>
  );
}

export default AnswersSettingsModal;
