"use client";

import Modal from "@/components/Modal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setISMounted] = useState(false);

  useEffect(() => {
    setISMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;
