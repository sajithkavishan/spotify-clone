"use client";

import AuthModal from "@/components/AuthModal";

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
      <AuthModal />
    </>
  );
};

export default ModalProvider;
