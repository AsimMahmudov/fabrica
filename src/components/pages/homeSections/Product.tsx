"use client";
import {
  Box,
  Stack,
  Text,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineWindow } from "react-icons/md";

import img from "../../../assets/Frame 34104 (1).png";
import img1 from "../../../assets/Frame 34107 (1).png";
import img2 from "../../../assets/Frame 34107 (2).png";
import img3 from "../../../assets/Frame 34107 (3).png";
import img4 from "../../../assets/Frame 34107.png";
import Link from "next/link";
import React from "react";

const Product = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box
      id="#product"
      height={{ lg: "900px", base: "1530px" }}
      padding="100px 0"
      background="#F8F8F8"
      display="flex"
      justifyContent={{ lg: "center" }}
      alignItems={{ lg: "center" }}
    >
      <div className="container">
        <Box
          display={{ lg: "flex" }}
          flexDirection="row-reverse"
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          gap={30}
        >
          {/* //////// */}

          <Box
            display="flex"
            flexDirection="column"
            gap={5}
            marginLeft={{ lg: "0px", base: "10px" }}
          >
            <Text fontSize={{ lg: "42", base: "30" }} fontWeight={700}>
              <h1>Наши изделия</h1>
            </Text>
            <Text fontSize={{ lg: "20", base: "14" }} fontWeight={500}>
              <p>
                Чтобы посмотреть каталог всех готовых <br /> изделий, обратитесь
                к менеджеру и получите <br /> доступ к закрытому каналу в
                телеграме.
              </p>
            </Text>

            <Stack direction="row" spacing={4}>
              {/* ////////////// */}

              <>
                <Button
                  onClick={onOpen}
                  leftIcon={<MdOutlineWindow />}
                  background="#698874"
                  color="white"
                  borderRadius="50px"
                  fontSize={{ lg: "16", base: "12" }}
                >
                  Запросить каталог
                </Button>

                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input ref={initialRef} placeholder="First name" />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="Last name" />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
              {/* ////////////// */}

              <Link href="https://api.whatsapp.com/send/?phone=996707333356&text&type=phone_number&app_absent=0">
                <Button
                  leftIcon={<IoLogoWhatsapp />}
                  background="#74CE30"
                  color="white"
                  borderRadius="50px"
                  fontSize={{ lg: "16", base: "12" }}
                >
                  Call us
                </Button>
              </Link>
            </Stack>
          </Box>

          {/* ///// */}

          <Box
            overflowY="scroll"
            height={{ lg: "500px", base: "100%" }}
            padding="0 10px"
            marginTop={{ lg: "0px", base: "20px" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={5}
            >
              <Button
                background="white"
                borderRadius="50px"
                fontSize={{ lg: "16", base: "12" }}
              >
                Брюки - пошив от 150р
              </Button>
              <Box display="flex" borderRadius="20px">
                <Image width={700} height={500} src={img} alt="" />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={5}
              marginTop={5}
            >
              <Button
                background="white"
                borderRadius="50px"
                fontSize={{ lg: "16", base: "12" }}
              >
                Юбки - пошив от 140р
              </Button>
              <Box display="flex" borderRadius="20px">
                <Image width={700} height={500} src={img1} alt="" />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={5}
              marginTop={5}
            >
              <Button
                background="white"
                borderRadius="50px"
                fontSize={{ lg: "16", base: "12" }}
              >
                Рубашки - пошив от 150р
              </Button>
              <Box display="flex" borderRadius="20px">
                <Image width={700} height={500} src={img2} alt="" />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={5}
              marginTop={5}
            >
              <Button
                background="white"
                borderRadius="50px"
                fontSize={{ lg: "16", base: "12" }}
              >
                Платья - пошив от 200р
              </Button>
              <Box display="flex" borderRadius="20px">
                <Image width={700} height={500} src={img3} alt="" />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={5}
              marginTop={5}
            >
              <Button
                background="white"
                borderRadius="50px"
                fontSize={{ lg: "16", base: "12" }}
              >
                Из трикотажа - пошив от 130р
              </Button>
              <Box display="flex" borderRadius="20px">
                <Image width={700} height={500} src={img4} alt="" />
              </Box>
            </Box>
          </Box>

          {/* //////// */}
        </Box>
      </div>
    </Box>
  );
};

export default Product;
