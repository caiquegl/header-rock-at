import React, { useState } from "react";
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Logo from "./logo.png";
import { FiChevronRight } from "react-icons/fi";
import { BiUserPlus } from "react-icons/bi";

const HeaderDefault = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(2, 1fr)" marginBottom="39px">
        <GridItem>
          <Flex alignItems="center">
            <Image
              src={Logo}
              alt="logo"
              w="121px"
              h="39px"
              mr="10px"
              mb="5px"
            />
            <Breadcrumb
              spacing="8px"
              separator={<Icon as={FiChevronRight} color="gray.500" mt="9px" />}
              borderLeft="1px solid "
              borderColor="black.100"
              pl="10px"
            >
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Box
                    onMouseLeave={() => setOpenMenu2(false)}
                    onMouseEnter={() => setOpenMenu2(true)}
                  >
                    <Menu isOpen={openMenu2}>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            isActive={isOpen}
                            as={Button}
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                            leftIcon={
                              <Box w="40px" h="40px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                            }
                          >
                            Organização
                          </MenuButton>
                          <MenuList>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                            <MenuItem>
                              <Flex alignItems="center">
                                <Box w="35px" h="35px" mr="10px">
                                  <Image
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                    borderRadius="3px"
                                  />
                                </Box>
                                <Text
                                  fontWeight="semibold"
                                  fontSize="18px"
                                  color="black.500"
                                >
                                  Nome do Workspace
                                </Text>
                              </Flex>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                  </Box>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Box
                  onMouseLeave={() => setOpenMenu(false)}
                  onMouseEnter={() => setOpenMenu(true)}
                >
                  <Menu isOpen={openMenu}>
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          isActive={isOpen}
                          as={Button}
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          leftIcon={
                            <Box w="40px" h="40px" mr="10px">
                              <Image
                                src="https://bit.ly/dan-abramov"
                                alt="Dan Abramov"
                                borderRadius="3px"
                              />
                            </Box>
                          }
                        >
                          Workspace
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                          <MenuItem>
                            <Flex alignItems="center">
                              <Box w="35px" h="35px" mr="10px">
                                <Image
                                  src="https://bit.ly/dan-abramov"
                                  alt="Dan Abramov"
                                  borderRadius="3px"
                                />
                              </Box>
                              <Text
                                fontWeight="semibold"
                                fontSize="18px"
                                color="black.500"
                              >
                                Nome do Workspace
                              </Text>
                            </Flex>
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>App</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center" justifyContent="flex-end">
            <Flex
              alignItems="center"
              color="black.500"
              cursor="pointer"
              _hover={{
                color: "violet.600",
                transition: "all 0.4s",
              }}
            >
              <Icon as={BiUserPlus} mr="10px" fontSize="24px" />
              <Text fontSize="18px" fontWeight="semibold">
                Convidar usuário
              </Text>
            </Flex>
            <Flex alignItems="center" ml="30px">
              <Text fontSize="18px" fontWeight="semibold" mr="10px">
                Raphael Garcia
              </Text>
              <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default HeaderDefault;
