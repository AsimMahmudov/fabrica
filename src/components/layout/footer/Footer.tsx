import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
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

  return (
    <Box paddingBlock="20px" width="100%" color="white" background="black">
      <div className="container">
        <Box
          display={{ lg: "flex", base: "block" }}
          justifyContent="space-between"
          textAlign="center"
          gap={5}
        >
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={5}>
            {links.slice(1.5).map((item, index) => (
              <Text key={index}>
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
              </Text>
            ))}
          </Box>
          <Box
            display={{ lg: "flex", base: "block" }}
            marginTop={{ lg: "0px", base: "20px" }}
            gap={5}
          >
            <Text>
              <p>© 2023 «Fabrica17». Все права защищены</p>
            </Text>
            <Text>
              <p>Разработал Motion Web LLC </p>
            </Text>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
