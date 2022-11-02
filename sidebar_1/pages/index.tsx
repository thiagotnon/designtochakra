import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { AvatarBox } from "../components/AvatarBox";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { Sidebar } from "../components/Sidebar";
import { SwitchButtons } from "../components/SwitchButtons";

const IndexPage = () => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
  );
};

export default IndexPage;
