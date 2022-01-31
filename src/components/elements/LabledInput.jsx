import BasicInput from "../base/Input";

export const LabeledInput = ({ label, ...rest }) => (
  <label>
    <span>{label}</span>:<BasicInput {...rest} />
  </label>
);
