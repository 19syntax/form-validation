function Validation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*[A-Z])(?=.*\d).*$/;

  if (values.fullName === "") {
    errors.fullName = "Name is required";
  }

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match";
  }

  if (values.password === "") {
    errors.password = "Password Required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password didn't match";
  }
  return errors;
}

export default Validation;
