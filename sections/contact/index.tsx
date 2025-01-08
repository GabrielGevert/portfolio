"use client";

import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, MailModal } from "@/components";
import {
  ContactContainer,
  FirstContent,
  FirstContentText,
  FirstContentTitle,
  FirstContentWrapItens,
  Href,
  SecondContent,
  SecondContentButton,
  SecondContentInput,
  SecondContentTextArea,
  SecondContentTitle,
  SecondContentWrapInputs,
} from "./styles";
import { useLanguage } from "@/utils/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

const translations = {
  en: {
    title: "Get in touch:",
    text: "Satisfied with me? Please, get in touch!",
    secondTitle: "Contact me, let’s make magic together!",
    buttonText: "Send",
    mailSucessText:
      "Email sent successfully! I will get back to you as soon as possible!",
    mailErrorText: "Ocorreu um erro ao enviar o e-mail, tente novamente! Erro:",
  },
  pt: {
    title: "Entre em contato:",
    text: "Satisfeito? Por favor, entre em contato comigo!",
    secondTitle: "Entre em contato, vamos fazer mágica juntos!",
    buttonText: "Enviar",
    mailSucessText:
      "Email enviado com sucesso! Irei te retornar o mais breve possível!",
    mailErrorText:
      "An error occurred while sending the email, please try again! Error:",
  },
};

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1wgxxb1",
        "template_0g9m90u",
        e.target as HTMLFormElement,
        "lLXJKrSgDNV2tTDVL"
      )
      .then(
        (result) => {
          setModalText(translations[currentLanguage].mailSucessText);
          setIsModalOpen(true);
        },
        (error) => {
          setModalText(
            `${translations[currentLanguage].mailErrorText} ${error.text}`
          );
          setIsModalOpen(true);
        }
      );
  };

  return (
    <Container ref={ref} className="color">
      <ContactContainer>
        <FirstContent>
          <FirstContentTitle>
            {translations[currentLanguage].title}
          </FirstContentTitle>
          <FirstContentText>
            {translations[currentLanguage].text}
          </FirstContentText>
          <FirstContentWrapItens>
            <Href target="_blank" href="https://www.linkedin.com/in/gabrielgevert/" rel="noopener noreferrer">
              <Linkedin width={36} height={36} />
            </Href>
            <Href target="_blank" href="https://github.com/GabrielGevert" rel="noopener noreferrer">
              <Github width={36} height={36} />
            </Href>
            <Href target="_blank" href="mailto:gevertlolz@gmail.com" rel="noopener noreferrer">
              <Mail width={36} height={36} />
            </Href>
          </FirstContentWrapItens>
        </FirstContent>
        <SecondContent>
          <SecondContentTitle>
            {translations[currentLanguage].secondTitle}
          </SecondContentTitle>
          <form onSubmit={sendEmail}>
            <SecondContentWrapInputs>
              <SecondContentInput
                name="from_name"
                placeholder={isEnglish ? "Name: " : "Nome: "}
                required
              />
              <SecondContentInput
                name="from_email"
                placeholder="Email: "
                required
              />
              <SecondContentTextArea
                name="message"
                placeholder={isEnglish ? "Message: " : "Mensagem: "}
                required
              />
              <SecondContentButton type="submit">
                {translations[currentLanguage].buttonText}
              </SecondContentButton>
            </SecondContentWrapInputs>
          </form>
        </SecondContent>
      </ContactContainer>
      {isModalOpen && (
        <MailModal
          isOpen={isModalOpen}
          text={modalText}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Container>
  );
});

export default Contact;
