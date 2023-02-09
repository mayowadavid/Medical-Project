const useValidation = () => {
  const validateEmail = (emailValue: string) => {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailValue.match(validRegex) != null;
  };
  const validatePassword = (passwordValue: string) => {
    var validRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,20}$/;
    return passwordValue.match(validRegex) != null;
  };
  const validatePhone = (phoneValue: string) => {
    var validRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneValue.match(validRegex) != null;
  };
  const validateEmpty = (stringValue: string) => {
    return stringValue.length != 0;
  };
  const validateNRIC = (stringValue: string) => {
    var validRegex = /^[STFG]\d{7}[A-Z]$/;
    return stringValue.length != 0;
  };
  const validateFIN = (stringValue: string) => {
    var validRegex = /^[STFG]\d{7}[A-Z]$/;
    return stringValue.length != 0;
  };
  const validatePassport = (stringValue: string) => {
    var validRegex = /^[Ee]\d\d\d\d\d\d\d[A-Za-z]$/;
    return stringValue.length != 0;
  };
  const validatePostal = (stringValue: string) => {
    var validRegex = /^[0-9]*$/;
    return stringValue.match(validRegex) != null;
  };
  const validateAtleastOneLetter = (stringValue: string) => {
    var validRegex = /^[a-zA-Z0-9\s+.]*[a-zA-Z]{1}[a-zA-Z0-9\s+.]*$/;
    return stringValue.match(validRegex) != null;
  };
  const validateOnlyLetters = (stringValue: string) => {
    var validRegex = /^[a-zA-Z\s+.]+$/;
    return stringValue.match(validRegex) != null;
  };
  return {
    validateEmail,
    validatePassword,
    validateEmpty,
    validatePhone,
    validateNRIC,
    validateFIN,
    validatePassport,
    validatePostal,
    validateAtleastOneLetter,
    validateOnlyLetters,
  };
};
export default useValidation;
