import { LANGUAGE_CHANGE } from "./types";

export const changeLanguage = ({ language }) => ({
  type: LANGUAGE_CHANGE,
  payload: { language }
});

export default { changeLanguage };
