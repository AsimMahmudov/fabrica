import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";

const Partners = () => {
  return (
    <Box
      id="#contacts"
      padding="100px 0"
      background="#F8F8F8"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Box
          background="white"
          borderRadius={20}
          padding={10}
          boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
        >
          <Text fontSize={{ lg: "40px", base: "30px" }} fontWeight={700}>
            <h1>Партнеры</h1>
          </Text>

          <Divider borderColor="gray.400" borderWidth="1px" />

          <Box
            padding={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            gap={{ lg: "7px", base: "5" }}
          >
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="data:image/png;base64,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"
              alt=""
            />
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="https://fabrica17.vercel.app/static/media/partner2.5bdc6f75c6b6a3d70464.png"
              alt=""
            />
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="https://fabrica17.vercel.app/static/media/partner3.af79874b28cdeadd4454.png"
              alt=""
            />
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="https://fabrica17.vercel.app/static/media/partner4.f374d0dab41c5bdc7c88.png"
              alt=""
            />
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="https://fabrica17.vercel.app/static/media/partner5.9b6a452cb6f9173a926a.png"
              alt=""
            />
            <Image
              width={{ lg: "150px", base: "130px" }}
              height="100%"
              src="https://fabrica17.vercel.app/static/media/partner6.f6a71c0c7cb00d55dbd2.png"
              alt=""
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Partners;
