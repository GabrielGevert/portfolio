"use client";

import React, { useEffect, useState } from "react";
import { ModalOverlay, ModalContent, ModalText, CloseButton } from "./styles";

interface MailModalProps {
  isOpen: boolean;
  text: string;
  onClose: () => void;
}

const MailModal: React.FC<MailModalProps> = ({ isOpen, onClose, text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) {
    return null;
  }

  return (
    <ModalOverlay className={isOpen ? "open" : "close"}>
      <ModalContent>
        <ModalText>{text}</ModalText>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MailModal;
