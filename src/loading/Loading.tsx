import { Box, Image } from "@chakra-ui/react";
import scss from "./Laoding.module.scss";
import { FC } from "react";

const Fabrica: FC = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box marginLeft={{ lg: "-100px", base: "0px" }}>
          <Image
            width={{ lg: "200px", base: "100px" }}
            marginTop="300px"
            src="https://media3.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=6c09b952aoa8n1h8lws40a5d0o49sfity5p3ieqexiql09gb&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};
export default Fabrica;
