"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const Caruselone = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box padding="50px 0" background="#F8F8F8">
      <div className="container">
        <Text
          fontSize={{ lg: "42", base: "32" }}
          fontWeight={700}
          marginLeft="40px"
        >
          <h1>Наша команда</h1>
        </Text>
        <Flex justifyContent="space-between" padding="20px">
          <Button
            onClick={() => sliderRef.current?.slickPrev()}
            colorScheme="#F8F8F8"
            marginRight="10px"
            color="black"
            border="solid 1px grey"
            borderRadius="50%"
            padding="2px"
          >
            <GrLinkPrevious />
          </Button>
          <Button
            onClick={() => sliderRef.current?.slickNext()}
            colorScheme="#F8F8F8"
            color="black"
            border="solid 1px grey"
            borderRadius="50%"
            padding="2px"
          >
            <GrLinkNext />
          </Button>
        </Flex>
        <Box color="red">
          <Slider ref={sliderRef} {...settings}>
            <Box
              width="400px"
              height="300px"
              overflow="hidden"
              padding="0 30px"
            >
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/%D0%9A%D0%B0%D0%BB%D0%B4%D1%8B%D0%B1%D0%B0%D0%B5%D0%B2-%D0%AB%D1%80%D1%8B%D1%81%D0%BA%D0%B5%D0%BB%D0%B4%D0%B8.792e7e48a19f7420d352.webp"
                alt=""
              />

              <Button
                marginTop="-100px"
                marginLeft="20px"
                fontSize="12px"
                background="white"
                borderRadius="20px"
              >
                директор по маркетингу
              </Button>
            </Box>
            <Box
              width="400px"
              height="300px"
              overflow="hidden"
              padding="0 30px"
            >
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/tech.511fbc39c1794f9e0284.webp"
                alt=""
              />
              <Button
                marginTop="-100px"
                marginLeft="20px"
                fontSize="12px"
                background="white"
                borderRadius="20px"
              >
                Технолог
              </Button>
            </Box>

            <Box
              width="400px"
              height="300px"
              overflow="hidden"
              padding="0 30px"
            >
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/purchasing.1dc0f0ae616ee24566c9.webp"
                alt=""
              />
              <Button
                marginTop="-100px"
                marginLeft="20px"
                fontSize="12px"
                background="white"
                borderRadius="20px"
              >
                Одел снобжения
              </Button>
            </Box>
            <Box
              width="400px"
              height="300px"
              overflow="hidden"
              padding="0 30px"
            >
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2-%D0%B1%D0%B0%D0%BA%D1%82%D1%8B%D0%B3%D1%83%D0%BB.94a2fb51f02ad0b6f1e3.webp"
                alt=""
              />
              <Button
                marginTop="-100px"
                marginLeft="20px"
                fontSize="12px"
                background="white"
                borderRadius="20px"
              >
                Основатель
              </Button>
            </Box>
            <Box
              width="400px"
              height="300px"
              overflow="hidden"
              padding="0 30px"
            >
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%D0%B0-%D0%BC%D1%8B%D1%80%D0%B7%D0%B0%D0%B3%D1%83%D0%BB.cf6fd4d78520e4b0f19e.webp"
                alt=""
              />
              <Button
                marginTop="-100px"
                marginLeft="20px"
                fontSize="12px"
                background="white"
                borderRadius="20px"
              >
                Исполнительный директор
              </Button>
            </Box>
          </Slider>
        </Box>
      </div>
    </Box>
  );
};

export default Caruselone;
