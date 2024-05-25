import * as yup from "yup";

export const yupValidate = async (schema, value) => {
  try {
    const data = await schema.validate(value);
    return { values: data };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return { error: error.message };
    } else {
      return { error: error.message };
    }
  }
};

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

const nameAndEmailValidation = {
  email: yup.string().email("Invalid email!").required("Email is missing"),
  firstname: yup.string().required("First Name is required").min(3),
  lastname: yup.string().required("Lastname is required").min(3),
};

export const contactSchema = yup.object({
  mobile: yup.string().required("Phone is missing").min(10).max(10),
  ...nameAndEmailValidation,
});
