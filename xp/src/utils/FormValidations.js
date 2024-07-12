const firstName = {
  required: "First Name is required",
  maxLength: {
    value: 15,
    message: "First Name cannot exceed 15 characters",
  },
  pattern: {
    value: /^[A-Z][a-zA-Z]*$/,
    message:
      "First Name must start with an uppercase letter and can only contain letters (uppercase and lowercase)",
  },
};

const lastName = {
  required: "Last Name is required",
  maxLength: {
    value: 15,
    message: "Last Name cannot exceed 15 characters",
  },
  pattern: {
    value: /^[A-Z][a-zA-Z]*$/,
    message:
      "Last Name must start with an uppercase letter and can only contain letters (uppercase and lowercase)",
  },
};

const email = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
};

const businessName = {
  required: "Business Name is required",
  maxLength: {
    value: 30,
    message: "Length cannot exceed 30 characters",
  },
};

const Validations = {
  firstName,
  lastName,
  email,
  businessName,
};

export default Validations;
