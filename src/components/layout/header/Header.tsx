"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "О Нас",
    link: "#about",
  },

  {
    name: "Услуги",
    link: "#product",
  },
  {
    name: "Изделия",
    link: "#work",
  },
  {
    name: "Доставка",
    link: "#delivery",
  },
  {
    name: "Контакты",
    link: "#contacts",
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box
      position="fixed"
      top={showHeader ? 0 : "-80px"}
      left="0"
      right="0"
      height="80px"
      backgroundColor="white"
      transition="top 0.3s"
      zIndex="1000"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Flex justify="center" align="center" height="100%">
          <Box display="flex" color="black">
            <Box>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                <Box
                  display={{ lg: "flex", base: "block" }}
                  alignItems="center"
                  gap={5}
                >
                  <Image
                    width={{ lg: "200px", base: "120px" }}
                    height="100%"
                    src="https://fabrica17.vercel.app/static/media/%D0%BB%D0%BE%D0%B3%D0%BE%D0%91%D0%B8%D0%B3.ad739bcb05f9769b6638.jpg"
                    alt=""
                  />
                  <Box
                    display={{ lg: "flex", base: "none" }}
                    width="1px"
                    height="30px"
                    background="grey"
                  ></Box>
                  <Text
                    marginTop={{ lg: "0", base: "3px" }}
                    fontSize="12px"
                    width={{ lg: "50%", base: "70%" }}
                  >
                    <p>
                      Работая с нами поставщики МП увеличили свои продажи в х3
                      раза
                    </p>
                  </Text>
                </Box>
              </ScrollLink>
            </Box>
            {isMobile ? (
              <>
                <Button onClick={onOpen} background="white" fontSize={20}>
                  <GiHamburgerMenu />
                </Button>

                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader> </DrawerHeader>

                    <DrawerBody>
                      <Box display="flex" flexDirection="column" gap={2}>
                        {links.slice(1.5).map((item, index) => (
                          <Button
                            key={index}
                            background="white"
                            fontSize="14px"
                            border="solid 1px #495B4FB2"
                            borderRadius="50px"
                            _hover={{ bg: "#49594F", color: "white" }}
                          >
                            <ScrollLink
                              activeClass="active"
                              to={item.link}
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={700}
                            >
                              {item.name}
                            </ScrollLink>
                          </Button>
                        ))}
                      </Box>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            ) : (
              <>
                <Box display="flex" gap={10}>
                  {links.slice(1.5).map((item, index) => (
                    <Button
                      key={index}
                      _hover={{ bg: "#49594F", color: "white" }}
                      background="white"
                      fontSize="14px"
                      border="solid 1px #495B4FB2"
                      borderRadius="50px"
                    >
                      <ScrollLink
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                      >
                        {item.name}
                      </ScrollLink>
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Flex>
      </div>
    </Box>
  );
};

export default Header;
