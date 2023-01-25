import {
    FLESLAND_1,
    FLESLAND_2,
    FLESLAND_3,
    FLESLAND_1_TITLE,
    FLESLAND_2_TITLE,
    FLESLAND_3_TITLE,
    UKNOWN_FORM,
  } from "constants/staticInfo";

const FormTitle = (formName) => {
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

  return title;
}

export default FormTitle;