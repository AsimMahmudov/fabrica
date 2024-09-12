import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Delivery = () => {
  return (
    <Box
      id="#delivery"
      padding="100px 0"
      background="#495B4FCC"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Box display={{ lg: "flex" }} justifyContent="space-between" gap={20}>
          <Box
            textAlign="center"
            display="flex"
            flexDirection={{ lg: "column", base: "column-reverse" }}
            gap={5}
          >
            <Image
              width="100%"
              borderRadius={20}
              src="https://fabrica17.vercel.app/static/media/delivery.180e83147f574ff69d76.webp"
              alt=""
            />
            <Box color="white">
              <Text fontSize={30} fontWeight={600}>
                <h1>Доставка</h1>
              </Text>
              <Text fontSize={{ lg: "18px", base: "16px" }}>
                <p>
                  Доставка товаров из Бишкека в ваш город происходит через
                  наземные грузовые карго, авиа-карго, автобус, спринтер(частные
                  грузоперевозки).
                </p>
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            marginTop={{ lg: "0", base: "12" }}
            flexDirection="column"
            gap={5}
          >
            <Box
              padding={{ lg: "35px", base: "25px" }}
              background="white"
              borderRadius={20}
            >
              <Text fontSize={20} fontWeight={600}>
                <h2>Россия</h2>
              </Text>
              <Text fontSize={{ lg: "15px", base: "13px" }}>
                <p>
                  Доставка от 7-12 дней все города и регионы. Стоимость от 35-50
                  рублей за кг.
                </p>
              </Text>
            </Box>
            <Box
              padding={{ lg: "35px", base: "25px" }}
              background="white"
              borderRadius={20}
            >
              <Text fontSize={20} fontWeight={600}>
                <h2>Россия</h2>
              </Text>
              <Text fontSize={{ lg: "15px", base: "13px" }}>
                <p>
                  Доставка от 7-12 дней все города и регионы. Стоимость от 35-50
                  рублей за кг.
                </p>
              </Text>
            </Box>
            <Box
              padding={{ lg: "35px", base: "25px" }}
              background="white"
              borderRadius={20}
              width={{ lg: "600px", base: "100%" }}
            >
              <Text fontSize={20} fontWeight={600}>
                <h2>Россия</h2>
              </Text>
              <Text fontSize={{ lg: "15px", base: "13px" }}>
                <p>
                  Доставка от 7-12 дней все города и регионы. Стоимость от 35-50
                  рублей за кг.
                </p>
              </Text>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Delivery;
