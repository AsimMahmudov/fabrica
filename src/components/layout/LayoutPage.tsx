"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./header/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import Fabrica from "@/loading/Loading";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {loading ? (
        <>
          <Fabrica />
        </>
      ) : (
        <>
          <Header />
          <Box as="main" flex="1">
            {children}
          </Box>
          <Box mt="auto">
            <Footer />
          </Box>
        </>
      )}
    </Box>
  );
};

export default LayoutPage;
