import { AspectRatio, Box, Button, Stack, Text } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
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
          display={{ lg: "flex", base: "block" }}
          justifyContent={{ lg: "space-between", base: "center" }}
          alignItems="center"
          boxShadow="0px 5px 15px rgba(0, 0, 0, 0.35)"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={10}
            alignItems={{ lg: "start", base: "center" }}
          >
            <Text fontSize={{ lg: "45px", base: "30px" }} fontWeight={700}>
              <h1>Контакты</h1>
            </Text>

            {/* ////// */}

            <Box
              display={{ lg: "flex", base: "block" }}
              alignItems="center"
              textAlign={{ lg: "start", base: "center" }}
              gap={40}
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <Text color="grey" fontSize={{ lg: "16", base: "14" }}>
                  <p>Телефон</p>
                </Text>
                <Text fontSize={{ lg: "16", base: "14" }}>
                  <a>+996707-33-33-56</a>
                </Text>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Text color="grey" fontSize={{ lg: "16", base: "14" }}>
                  <p>Телефон</p>
                </Text>
                <Text fontSize={{ lg: "16", base: "14" }}>
                  <a>+996702-11-11-72</a>
                </Text>
              </Box>
            </Box>

            {/* //---// */}

            <Box
              display={{ lg: "flex", base: "block" }}
              textAlign={{ lg: "start", base: "center" }}
              alignItems="center"
              gap="88px"
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <Text color="grey" fontSize={{ lg: "16", base: "14" }}>
                  <p>Адрес</p>
                </Text>
                <Text fontSize={{ lg: "16", base: "14" }}>
                  <a href="https://2gis.kg/bishkek/search/%D0%BC%D0%B0%D0%BC%D0%B1%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%2013%D0%B1/geo/15763234351075686/74.635405%2C42.872196?m=74.635422%2C42.872174%2F17.77">
                    г. бишкек Ул.мамбетова 13б
                  </a>
                </Text>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Text color="grey" fontSize={{ lg: "16", base: "14" }}>
                  <p>Почта</p>
                </Text>
                <Text fontSize={{ lg: "16", base: "14" }}>
                  <a href="">info@fabrica17.ru</a>
                </Text>
              </Box>
            </Box>

            {/* /////// */}

            <Box
              display={{ lg: "flex", base: "block" }}
              gap={160}
              padding={{ lg: "0px", base: "20px 0" }}
            >
              <Stack direction="row" spacing={3}>
                <Link href="https://www.instagram.com/fabrica17.co">
                  <Button
                    background="black"
                    color="white"
                    borderRadius="50px"
                    fontSize={25}
                    padding={2}
                    marginLeft={{ lg: "0px", base: "60px" }}
                  >
                    <FaInstagram />
                  </Button>
                </Link>

                <Link href="https://vk.com/public211944223">
                  <Button
                    background="#5181B8"
                    color="white"
                    borderRadius="50px"
                    fontSize={25}
                    padding={2}
                  >
                    <FaVk />
                  </Button>
                </Link>

                <Link href="https://www.youtube.com/@Bishkek_pro">
                  <Button
                    background="#FF0000"
                    color="white"
                    borderRadius="50px"
                    fontSize={25}
                    padding={2}
                  >
                    <FaYoutube />
                  </Button>
                </Link>
              </Stack>

              <Stack
                direction="row"
                spacing={3}
                marginTop={{ lg: "0px", base: "20px" }}
              >
                <Link href="https://t.me/+996707333356">
                  <Button
                    leftIcon={<FaTelegram />}
                    background="#2AA1DA"
                    color="white"
                    borderRadius="50px"
                    fontSize={{ lg: "20px", base: "16px" }}
                    fontWeight={400}
                  >
                    Заказать
                  </Button>
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=996707333356&text&type=phone_number&app_absent=0">
                  <Button
                    leftIcon={<IoLogoWhatsapp />}
                    background="#74CE30"
                    color="white"
                    borderRadius="50px"
                    fontSize={{ lg: "20px", base: "16px" }}
                    fontWeight={400}
                  >
                    связаться
                  </Button>
                </Link>
              </Stack>
            </Box>

            {/* /// */}
          </Box>
          <AspectRatio
            width={{ lg: "500px", base: "100%" }}
            height={{ lg: "400px", base: "100%" }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93562.02290430982!2d74.5094603986431!3d42.87678641540669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb781d9b621f1%3A0xcb049b56c24a1887!2sVostok%205!5e0!3m2!1sen!2skg!4v1688674356007!5m2!1sen!2skg" />
          </AspectRatio>
        </Box>
      </div>
    </Box>
  );
};

export default Contact;
