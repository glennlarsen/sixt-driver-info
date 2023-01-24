import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Head from "components/Head";
import Layout from "components/Layout";
import FormDetails from "components/FormDetails";
import {
  FLESLAND_1,
  FLESLAND_2,
  FLESLAND_3,
  FLESLAND_1_TITLE,
  FLESLAND_2_TITLE,
  FLESLAND_3_TITLE,
  UKNOWN_FORM,
} from "constants/staticInfo";

function Form() {
  const { formName } = useParams();
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    if (!formName) {
      navigate("/forms");
    }
  }, []);

  let title = UKNOWN_FORM;
  switch (formName) {
    case FLESLAND_1:
      title = FLESLAND_1_TITLE;
      break;
    case FLESLAND_2:
      title = FLESLAND_2_TITLE;
      break;
    case FLESLAND_3:
      title = FLESLAND_3_TITLE;
      break;
    default:
      title = UKNOWN_FORM;
  }

  return (
    <Container>
      <Head
        page="Form"
        description="Choose what action you want to perform on this form"
      />
      <Layout backPage="forms" info={formName}>
        <FormDetails title={title} />
      </Layout>
    </Container>
  );
}

export default Form;
