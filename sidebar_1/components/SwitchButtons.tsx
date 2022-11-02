import React from "react";
import { Button, Flex, Switch } from "@chakra-ui/react";

export const SwitchButtons = ({ collapse }) => {
  const [isPersonal, setIsPersonal] = React.useState(true);
  const [isBusiness, setIsBusiness] = React.useState(false);

  const handleIsPersonal = () => {
    setIsBusiness(false);
    setIsPersonal(true);
  };

  const handleIsBusiness = () => {
    setIsPersonal(false);
    setIsBusiness(true);
  };

  if (!collapse) {
    return (
      <Flex w="full" alignItems="center" textAlign="center" py={6}>
        <Switch w="full" colorScheme="teal" />
      </Flex>
    );
  }
  return (
    <Flex
      w="full"
      borderWidth={1}
      borderColor="gray.100"
      borderRadius={14}
      my={6}
    >
      <Button
        w="full"
        variant={isPersonal ? "solid" : "ghost"}
        borderRadius={14}
        colorScheme={isPersonal ? "messenger" : "gray"}
        id="personal"
        onClick={handleIsPersonal}
        textTransform="uppercase"
        color={isPersonal ? "white" : "gray.500"}
        size="sm"
        py={5}
      >
        Personal
      </Button>
      <Button
        w="full"
        variant={isBusiness ? "solid" : "ghost"}
        borderRadius={14}
        colorScheme={isBusiness ? "messenger" : "gray"}
        id="business"
        onClick={handleIsBusiness}
        textTransform="uppercase"
        color={isBusiness ? "white" : "gray.500"}
        size="sm"
        py={5}
      >
        Business
      </Button>
    </Flex>
  );
};
