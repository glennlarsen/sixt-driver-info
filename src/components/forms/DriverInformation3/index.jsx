import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSpring, animated } from "@react-spring/web";

import schema from "constants/schema";
import SendDriverInfo3 from "utils/SendDriverInfo3";
import AlertMessage from "components/AlertMessage";
import PhoneInput from "components/common/PhoneInput";
import CountryInput from "components/common/CountryInput";
import StreetInput from "components/common/StreetInput";
import PostalInput from "components/common/PostalInput";
import CityInput from "components/common/CityInput";
import EmailInput from "components/common/EmailInput";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";
import ScrollTo from "components/common/ScrollTo";
import Header from "components/Header";
import SettingsButton from "components/common/SettingsButton";
import SettingsModal from "components/common/SettingsModal";
import { useOnlineStatus } from "utils/useOnlineStatus";
import useLocalStorage from "utils/UseLocalStorage";

function DriverInformation3({ title, confirmation }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [defaultCallingCode, setDefaultCallingCode] = useState("NO");
  const [lang, setLang] = useContext(LangContext);
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [settings, setSettings] = useState({
    address: true,
    tel: true,
    email: true,
  });
  const [disableButton, setDisableButton] = useLocalStorage(
    "submitDisabled",
    true
  );
  const onlineStatus = useOnlineStatus();

  const {
    register,
    unregister,
    handleSubmit,
    trigger,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onReset = () => {
    reset();
    unregister();
    setDefaultCallingCode("NO");
    setValue("tel", "");
  };

  // Function that will run when form is submitted
  async function onSubmit(data) {
    setLoading(true);
    const send = await SendDriverInfo3(data);
    if (send.success) {
      setTimeout(() => {
        setLoading(false);
        setLang("en");
        localStorage.setItem("lang", "en");
        document.documentElement.setAttribute("lang", "en");
      }, 5000);
      setSubmitted(true);
      reset();
      setDefaultCallingCode("NO");
      setSettings({ address: true, tel: true, email: true });
    } else {
      setLoading(false);
      setSubmitted(false);
      setError(true);
    }
  }

  const slide = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    reset: true,
    config: { duration: 400 },
  });

  const opacity = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    reset: true,
    config: { duration: 900 },
  });

  const handleSettings = () => {
    trigger();
    openModal();
  };

  if (loading && submitted) {
    return (
      <animated.div style={slide}>
        <div className="loaderContainer form-complete">
          <animated.div style={opacity}>
            <DoneIcon sx={{ fontSize: 100, color: "#FF5F00" }} />
          </animated.div>
          {confirmation}
        </div>
      </animated.div>
    );
  }

  if (error) {
    return (
      <AlertMessage
        variant="error"
        title="Error"
        message="An error occured, Please try again later"
      />
    );
  }

  if (!onlineStatus) {
    return (
      <AlertMessage
        variant="error"
        title="Offline"
        message="Your device is Offline, Please connect to the internet to continue."
      />
    );
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SettingsButton handleSettings={handleSettings} />
      <SettingsModal
        open={open}
        handleClose={closeModal}
        settings={settings}
        setSettings={setSettings}
        disableButton={disableButton}
        setDisableButton={setDisableButton}
        unregister={unregister}
        errors={errors}
      />
      <Header title={title} margin={0} />
      <span style={{ textAlign: "center" }}>
        {!settings.address && !settings.tel && !settings.email
          ? "Please select at least one field to show in the settings menu"
          : null}
      </span>
      <CountryInput
        control={control}
        errors={errors}
        defaultValue=""
        onCountrySelect={setDefaultCallingCode}
        show={settings.address}
      />
      <StreetInput
        register={register}
        errors={errors}
        onClick={() => ScrollTo("street")}
        show={settings.address}
      />
      <Box gap={2} display="flex">
        <PostalInput
          register={register}
          errors={errors}
          onClick={() => ScrollTo("postal")}
          show={settings.address}
        />
        <CityInput
          register={register}
          errors={errors}
          onClick={() => ScrollTo("city")}
          show={settings.address}
        />
      </Box>
      <PhoneInput
        control={control}
        errors={errors}
        defaultValue={defaultCallingCode}
        onClick={() => ScrollTo("tel")}
        show={settings.tel}
      />
      <EmailInput
        register={register}
        errors={errors}
        onClick={() => ScrollTo("email")}
        show={settings.email}
      />
      <button
        type="submit"
        style={{ opacity: disableButton ? 0.4 : 1 }}
        disabled={disableButton ? true : false}
      >
        {content[lang]["submit"]}
      </button>
      <span onClick={() => onReset()} className="btn-reset">
        {content[lang]["reset"]}
      </span>
    </Box>
  );
}

export default DriverInformation3;
