import React, { useState } from "react";
import { StyledAlert, StyledSection } from "./ContactForm.style";
import { ReactComponent as Mail } from "../../../assets/img/mail.svg";
import Input from "../../atoms/input/Input";
import SendIcon from "@mui/icons-material/Send";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";

const ContactForm = () => {
  const initialInputsState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [inputs, setInputs] = useState(initialInputsState);

  const [emailIsSend, setEmailStatus] = useState({
    isSend: false,
    sending: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmailStatus((prev) => ({ ...prev, loading: true }));
    try {
      const res = await axios.post(
        "http://localhost:3005/api/email/send",
        inputs
      );
      if (res.status === 200) {
        setEmailStatus((prev) => ({ isSend: true, loading: false }));
        setInputs(initialInputsState);
      }
    } catch (err) {
      console.log(err);
    }
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
      autoComplete: "off",
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      placeholder: "Nazwisko",
      required: false,
      autoComplete: "off",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "E-mail*",
      required: true,
      autoComplete: "off",
    },
    {
      id: 4,
      type: "tel",
      name: "phone",
      placeholder: "Nr telefonu",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{3}",
      required: false,
      format: "###-###-###",
      mask: "_",
      autoComplete: "off",
    },
    {
      id: 5,
      type: "textarea",
      name: "message",
      placeholder: "Wiadomość*",
      cols: "30",
      rows: "1",
      required: true,
      autoComplete: "off",
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
        <form onSubmit={submitHandler}>
          {formFields.map(({ id, ...props }) => (
            <Input
              key={id}
              value={inputs[props.name]}
              onChange={changeHandler}
              props={props}
            />
          ))}
          {emailIsSend.isSend ? (
            <StyledAlert>
              <InfoOutlinedIcon />
              <p>Twoja wiadomość została wysłana pomyślnie.</p>
            </StyledAlert>
          ) : (
            <button disabled={emailIsSend.isSend}>
              {emailIsSend.loading ? "wysyłanie" : "wyślij"}
              <SendIcon />
            </button>
          )}
        </form>
      </div>
    </StyledSection>
  );
};

export default ContactForm;
