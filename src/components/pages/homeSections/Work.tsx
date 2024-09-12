import { Box, Text } from "@chakra-ui/react";
import { MdOutlineStorage } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa";
import { PiShootingStarBold } from "react-icons/pi";

import { IoDocumentTextSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { MdAmpStories } from "react-icons/md";

const Work = () => {
  return (
    <Box
      id="#work"
      padding="100px 0"
      background="#F8F8F8"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Box>
          <Box
            background="#AD9B90"
            width="100%"
            height="300px"
            padding={{ lg: "0px", base: "25px 10px " }}
            borderRadius={20}
            color="white"
            textAlign="center"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Text fontSize={{ lg: "60px", base: "30px" }} fontWeight={700}>
              <h1>Наши услуги</h1>
            </Text>
            <Text fontSize={{ lg: "20px", base: "14px" }}>
              <p>
                Официальная маркировка по Честному знаку в белую изготовителем
                выступает наша компания ОсОО &quot;Азиянур Кооперейшн&quot;
              </p>
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            marginTop={-100}
          >
            <Box
              background="white"
              borderRadius="50%"
              width={{ lg: "230px", base: "150px" }}
              height={{ lg: "230px", base: "150px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              padding={5}
              color="#495B4F"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.15)"
              gap={2}
            >
              <Text fontSize={{ lg: "50px", base: "40px" }}>
                <h1>
                  <IoDocumentTextSharp />
                </h1>
              </Text>
              <Text fontSize={{ lg: "16px", base: "10px" }}>
                <p>Полная консультация по модели, фурнитуре и ткани</p>
              </Text>
            </Box>

            <Box
              background="white"
              borderRadius="50%"
              width={{ lg: "230px", base: "150px" }}
              height={{ lg: "230px", base: "150px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              padding={5}
              color="#495B4F"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.15)"
              gap={2}
            >
              <Text fontSize={{ lg: "60px", base: "40px" }}>
                <h1>
                  <MdAmpStories />
                </h1>
              </Text>
              <Text fontSize={{ lg: "16px", base: "10px" }}>
                <p>Разработка лекало конструкций</p>
              </Text>
            </Box>

            <Box
              background="white"
              borderRadius="50%"
              width={{ lg: "230px", base: "150px" }}
              height={{ lg: "230px", base: "150px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              padding={5}
              color="#495B4F"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.15)"
              gap={2}
              marginTop={{ lg: "0px", base: "20px" }}
            >
              <Text fontSize={{ lg: "50px", base: "40px" }}>
                <h1>
                  <FaThList />
                </h1>
              </Text>
              <Text fontSize={{ lg: "16px", base: "10px" }}>
                <p>Подбор тканей и фурнитуры</p>
              </Text>
            </Box>

            <Box
              background="white"
              borderRadius="50%"
              width={{ lg: "230px", base: "150px" }}
              height={{ lg: "230px", base: "150px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              padding={5}
              color="#495B4F"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.15)"
              gap={2}
              marginTop={{ lg: "0px", base: "20px" }}
            >
              <Text fontSize={{ lg: "50px", base: "40px" }}>
                <h1>
                  <IoDocumentTextSharp />
                </h1>
              </Text>
              <Text fontSize={{ lg: "16px", base: "10px" }}>
                <p>Пошив образца и составление тех. задания</p>
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          display={{ lg: "flex", base: "block" }}
          justifyContent="space-between"
          alignItems="center"
          padding="100px 0"
        >
          <Text
            fontSize={{ lg: "47px", base: " 30px" }}
            fontWeight={700}
            width={{ lg: "30%", base: "100%" }}
          >
            <h1>Почему вам стоит выбрать нас?</h1>
          </Text>

          <Box
            display="flex"
            flexDirection="column"
            gap={5}
            width={{ lg: "600px", base: "100%" }}
            marginTop={{ lg: "0px", base: "20px" }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={{ lg: "15px", base: " 5px" }}
            >
              <Text
                border="solid 2px black"
                padding={5}
                borderRadius={50}
                fontSize={{ lg: "30px", base: " 20px" }}
                transition="0.5s"
                _hover={{
                  background: "grey",
                  color: "white",
                  transition: "0.5s",
                }}
              >
                <h1>
                  <PiShootingStarBold />
                </h1>
              </Text>
              <Box display="flex" flexDirection="column" gap={1}>
                <Text fontSize={{ lg: "26px", base: " 16px" }} fontWeight={700}>
                  <h2>Узко специализированный цех</h2>
                </Text>
                <Text fontSize={{ lg: "20px", base: " 12px" }}>
                  <p>
                    это значит, мы концентри́рованны на пошиве <br />{" "}
                    определенных моделей.
                  </p>
                </Text>
              </Box>
            </Box>

            <hr />

            <Box
              display="flex"
              alignItems="center"
              gap={{ lg: "15px", base: " 5px" }}
            >
              <Text
                border="solid 2px black"
                padding={5}
                borderRadius={50}
                fontSize={{ lg: "30px", base: " 20px" }}
                transition="0.5s"
                _hover={{
                  background: "grey",
                  color: "white",
                  transition: "0.5s",
                }}
              >
                <h1>
                  <RiTodoFill />
                </h1>
              </Text>
              <Box display="flex" flexDirection="column" gap={1}>
                <Text fontSize={{ lg: "26px", base: " 16px" }} fontWeight={700}>
                  <h2>постоянно развиваемся</h2>
                </Text>
                <Text fontSize={{ lg: "20px", base: " 12px" }}>
                  <p>учимся и следим за модными тенденциями в нашей сфере.</p>
                </Text>
              </Box>
            </Box>

            <hr />

            <Box
              display="flex"
              alignItems="center"
              gap={{ lg: "15px", base: " 5px" }}
            >
              <Text
                border="solid 2px black"
                padding={5}
                borderRadius={50}
                fontSize={{ lg: "30px", base: " 20px" }}
                transition="0.5s"
                _hover={{
                  background: "grey",
                  color: "white",
                  transition: "0.5s",
                }}
              >
                <h1>
                  <FaIdCard />
                </h1>
              </Text>
              <Box display="flex" flexDirection="column" gap={1}>
                <Text fontSize={{ lg: "26px", base: " 16px" }} fontWeight={700}>
                  <h2>Оплата удобным способом</h2>
                </Text>
                <Text fontSize={{ lg: "20px", base: " 12px" }}>
                  <p>
                    наличными, безналичными средствами, банковской карточкой.
                  </p>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Work;
