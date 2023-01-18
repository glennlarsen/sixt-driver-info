import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import DriverInformation from "components/forms/DriverInformation";
import DriverInformation2 from "components/forms/DriverInformation2";
import DriverInformation3 from "components/forms/DriverInformation3";

function LiveForm() {
  const { formName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!formName) {
      navigate("/forms");
    }
  }, []);

  return (
    <Container>
      <Head
        page="Liveform"
        description="Driver information form for clients to fill"
      />
      <Header title="Driver Information" info={formName} />
      {formName === "flesland1" && <DriverInformation />}
      {formName === "flesland2" && <DriverInformation2 />}
      {formName === "flesland3" && <DriverInformation3 />}
    </Container>
  );
}

export default LiveForm;
