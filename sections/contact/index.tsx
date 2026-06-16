"use client";

import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, MailModal } from "@/components";
import {
  ContactContainer,
  ContactLink,
  ContactLinksWrap,
  FirstContent,
  FirstContentText,
  FirstContentTitle,
  FormPanel,
  SecondContent,
  SecondContentButton,
  SecondContentInput,
  SecondContentTextArea,
  SecondContentTitle,
  SecondContentWrapInputs,
} from "./styles";
import { useLanguage } from "@/utils/LanguageContext";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const translations = {
  en: {
    title: "Get in touch:",
    text: "I'm open to new opportunities and always happy to chat. Reach me on any channel below or send a message right here.",
    secondTitle: "Send me a message, I'll get back to you soon!",
    buttonText: "Send",
    mailSucessText:
      "Email sent successfully! I will get back to you as soon as possible!",
    mailErrorText:
      "An error occurred while sending the email, please try again! Error:",
  },
  pt: {
    title: "Entre em contato:",
    text: "Estou aberto a novas oportunidades e sempre disposto a trocar uma ideia. Me chame em qualquer canal abaixo ou envie uma mensagem por aqui mesmo.",
    secondTitle: "Me mande uma mensagem, retorno o quanto antes!",
    buttonText: "Enviar",
    mailSucessText:
      "Email enviado com sucesso! Irei te retornar o mais breve possível!",
    mailErrorText: "Ocorreu um erro ao enviar o e-mail, tente novamente! Erro:",
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
        () => {
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
          <ContactLinksWrap>
            <ContactLink
              target="_blank"
              href="https://www.linkedin.com/in/gabrielgevert/"
              rel="noopener noreferrer"
            >
              <Linkedin width={22} height={22} />
              <span>LinkedIn</span>
            </ContactLink>
            <ContactLink
              target="_blank"
              href="https://github.com/GabrielGevert"
              rel="noopener noreferrer"
            >
              <Github width={22} height={22} />
              <span>GitHub</span>
            </ContactLink>
            <ContactLink
              target="_blank"
              href="mailto:gevertlolz@gmail.com"
              rel="noopener noreferrer"
            >
              <Mail width={22} height={22} />
              <span>gevertlolz@gmail.com</span>
            </ContactLink>
          </ContactLinksWrap>
        </FirstContent>
        <SecondContent>
          <FormPanel>
            <SecondContentTitle>
              {translations[currentLanguage].secondTitle}
            </SecondContentTitle>
            <form onSubmit={sendEmail}>
              <SecondContentWrapInputs>
                <SecondContentInput
                  name="from_name"
                  placeholder={isEnglish ? "Name" : "Nome"}
                  required
                />
                <SecondContentInput
                  name="from_email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <SecondContentTextArea
                  name="message"
                  placeholder={isEnglish ? "Message" : "Mensagem"}
                  required
                />
                <SecondContentButton type="submit">
                  {translations[currentLanguage].buttonText}
                  <Send width={18} height={18} />
                </SecondContentButton>
              </SecondContentWrapInputs>
            </form>
          </FormPanel>
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
