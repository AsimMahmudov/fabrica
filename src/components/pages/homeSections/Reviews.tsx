import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Reviews = () => {
  return (
    <Box
      id="/"
      padding="100px 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Box>
          <Text fontSize={{ lg: "40px", base: "30px" }} fontWeight={700}>
            <h1>Отзывы</h1>
          </Text>
          <Box display={{ lg: "flex", base: "block" }}>
            <Image
              sx={{
                filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
              }}
              width={400}
              height="100%"
              marginTop={{ lg: "100px", base: "30px" }}
              src="https://fabrica17.vercel.app/static/media/review1.e717c918f1bad618c70a.png"
              alt=""
            />
            <Image
              sx={{
                filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
              }}
              width={250}
              height="100%"
              marginTop={{ lg: "20px", base: "-60px" }}
              src="https://fabrica17.vercel.app/static/media/review2.885e544790a441983cf9.png"
              alt=""
            />
            <Image
              sx={{
                filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
              }}
              width={300}
              height="100%"
              marginTop={{ lg: "120px", base: "-20px" }}
              marginLeft={{ lg: "0px", base: "40px" }}
              src="https://fabrica17.vercel.app/static/media/review4.22c762ee7c9799241131.png"
              alt=""
            />
            <Image
              sx={{
                filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
              }}
              width={350}
              height="100%"
              marginLeft={{ lg: "-130px", base: "0px" }}
              marginTop={{ lg: "0px", base: "-50px" }}
              src="https://fabrica17.vercel.app/static/media/review3.f588c7145153aaf299b6.png"
              alt=""
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Reviews;
