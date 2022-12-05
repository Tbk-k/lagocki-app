import React, { useRef, useState } from "react";
import { StyledSection } from "./ContactForm.style";
import { ReactComponent as Mail } from "../../../assets/img/mail.svg";
import Input from "../../atoms/input/Input";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formFields = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      placeholder: "Imię*",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      placeholder: "Nazwisko",
      required: false,
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "E-mail*",
      required: true,
    },
    {
      id: 4,
      type: "tel",
      name: "phone",
      placeholder: "Nr telefonu",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{3}",
      maxLength: 11,
      required: false,
    },
    {
      id: 5,
      type: "textarea",
      name: "message",
      placeholder: "Wiadomość*",
      cols: "30",
      rows: "1",
      required: true,
    },
  ];
  return (
    <StyledSection>
      <p>
        Napisz do nas a nasi pracownicy skontaktują się z Tobą tak szybko jak
        będzie to możliwe.
      </p>
      <div>
        <Mail />
        <h2>Formularz kontaktowy</h2>
        <form onSubmit={submitHandler} ref={formRef}>
          {formFields.map(({ id, ...props }) => (
            <Input
              key={id}
              value={inputs[props.name]}
              onChange={changeHandler}
              props={props}
            />
          ))}

          <button>
            wyślij <SendIcon />
          </button>
        </form>
      </div>
    </StyledSection>
  );
};

export default ContactForm;
