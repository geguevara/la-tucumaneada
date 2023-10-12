import { BtnSubmit } from "./Submit.styles";

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <BtnSubmit
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      {children}
    </BtnSubmit>
  );
};

export default Submit;
