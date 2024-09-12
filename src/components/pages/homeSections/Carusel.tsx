"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const Carusel = () => {
  const sliderRef = useRef<Slider | null>(null); // reference to control the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Количество слайдов по умолчанию
    slidesToScroll: 1,
    arrows: false, // Отключаем встроенные стрелки
    responsive: [
      {
        breakpoint: 1024, // экраны меньше 1024px
        settings: {
          slidesToShow: 2, // показываем 2 слайда
        },
      },
      {
        breakpoint: 768, // экраны меньше 768px
        settings: {
          slidesToShow: 1, // показываем 1 слайд
        },
      },
    ],
  };

  return (
    <Box padding="100px 0" background="#F8F8F8">
      <div className="container">
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
            <Box width="400px" height="300px" overflow="hidden" padding="0 5px">
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/gallery4.65622a900a19efafcca5.webp"
                alt=""
              />
            </Box>
            <Box width="400px" height="300px" overflow="hidden" padding="0 5px">
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/gallery3.ded11707a2d120ca1128.webp"
                alt=""
              />
            </Box>

            <Box width="400px" height="300px" overflow="hidden" padding="0 5px">
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/gallery1.4702f41ba66b1f841f07.webp"
                alt=""
              />
            </Box>
            <Box width="400px" height="300px" overflow="hidden" padding="0 5px">
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="20px"
                src="https://fabrica17.vercel.app/static/media/gallery2.9fbafcb8b9ef50fc6020.webp"
                alt=""
              />
            </Box>
          </Slider>
        </Box>
      </div>
    </Box>
  );
};

export default Carusel;
