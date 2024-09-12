import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="#about"
      height={900}
      padding="100px 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className="container">
        <Box
          display={{ lg: "flex" }}
          justifyContent="center"
          alignItems="center"
          gap={{ base: "30" }}
        >
          <Box
            width="100%"
            background="#F8F8F8"
            display="flex"
            flexDirection="column"
            gap={{ lg: "2", base: "5" }}
            padding={5}
            borderRadius={15}
          >
            <Text fontSize={{ lg: "42", base: "32" }} fontWeight={700}>
              <h1>О нас</h1>
            </Text>

            <Text fontSize={{ lg: "20", base: "16" }} fontWeight={500}>
              <h4>
                Мы занимаемся швйным бизнесом уже на протяжении 5 лет времени и
                совместно с нашими партнерами добились хороших результатов.
              </h4>
            </Text>

            <Text
              fontSize={{ lg: "18", base: "14" }}
              fontWeight={400}
              display="flex"
              flexDirection="column"
              gap={{ lg: "2", base: "5" }}
            >
              <p>
                Нашими партнерами являются: сеть магазинов розничной одежды по
                России 1001 dress , Сеть магазинов по Казахстану Victoria Style
                Shop, Сеть магазинов Sky Lake и ORBY, Look online.
              </p>
              <p>
                За спиной 5 лет опыта работы, лучшая команда , отправили товар
                на 1000000$.
              </p>
            </Text>
          </Box>

          <Box background="white" width="100%">
            <Text
              fontSize={{ lg: "42", base: "22" }}
              fontWeight={700}
              color="#495B4F"
              marginTop={{ lg: "0", base: "12" }}
              marginLeft={{ lg: "0", base: "5" }}
            >
              <h1>Мы даем гарантию качества на пошив 95%, с исправлением 5%</h1>
            </Text>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default About;
