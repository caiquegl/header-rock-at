import React, { useState } from "react";
import "./import-png.d.ts";
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ChakraProvider,
  Divider,
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
import { BiChevronDown, BiUserPlus } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { IProps } from "./props";

const HeaderDefault = ({
  user,
  listOrganization,
  organizationActive,
  changeOrganization,
  listWorkspace,
  workspaceActive,
  changeWorkspace,
  listApp,
  appActive,
  changeApp,
  logout,
  listMenu,
}: IProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
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
                                  src={
                                    organizationActive.avatar_url
                                      ? organizationActive.avatar_url
                                      : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                  }
                                  alt={organizationActive.name}
                                  borderRadius="3px"
                                />
                              </Box>
                            }
                          >
                            {organizationActive.name}
                          </MenuButton>
                          <MenuList>
                            {listOrganization &&
                              listOrganization.length > 0 &&
                              listOrganization.map((list) => (
                                <MenuItem
                                  onClick={() => changeOrganization(list)}
                                >
                                  <Flex alignItems="center">
                                    <Box w="35px" h="35px" mr="10px">
                                      <Image
                                        src={
                                          list.avatar_url
                                            ? list.avatar_url
                                            : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                        }
                                        alt="Dan Abramov"
                                        borderRadius="3px"
                                      />
                                    </Box>
                                    <Text
                                      fontWeight="semibold"
                                      fontSize="18px"
                                      color="black.500"
                                    >
                                      {list.name}
                                    </Text>
                                  </Flex>
                                </MenuItem>
                              ))}
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
                                src={
                                  workspaceActive.avatar_url
                                    ? workspaceActive.avatar_url
                                    : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                }
                                alt={workspaceActive.name}
                                borderRadius="3px"
                              />
                            </Box>
                          }
                        >
                          {workspaceActive.name}
                        </MenuButton>
                        <MenuList>
                          {listWorkspace &&
                            listWorkspace.length > 0 &&
                            listWorkspace.map((list) => (
                              <MenuItem onClick={() => changeWorkspace(list)}>
                                <Flex alignItems="center">
                                  <Box w="35px" h="35px" mr="10px">
                                    <Image
                                      src={
                                        list.avatar_url
                                          ? list.avatar_url
                                          : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                      }
                                      alt="Dan Abramov"
                                      borderRadius="3px"
                                    />
                                  </Box>
                                  <Text
                                    fontWeight="semibold"
                                    fontSize="18px"
                                    color="black.500"
                                  >
                                    {list.name}
                                  </Text>
                                </Flex>
                              </MenuItem>
                            ))}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Box
                  onMouseLeave={() => setOpenMenu3(false)}
                  onMouseEnter={() => setOpenMenu3(true)}
                >
                  <Menu isOpen={openMenu3}>
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
                                src={
                                  appActive.avatar_url
                                    ? appActive.avatar_url
                                    : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                }
                                alt={appActive.name}
                                borderRadius="3px"
                              />
                            </Box>
                          }
                        >
                          {appActive.name}
                        </MenuButton>
                        <MenuList>
                          {listApp &&
                            listApp.length > 0 &&
                            listApp.map((list) => (
                              <MenuItem onClick={() => changeApp(list)}>
                                <Flex alignItems="center">
                                  <Box w="35px" h="35px" mr="10px">
                                    <Image
                                      src={
                                        list.avatar_url
                                          ? list.avatar_url
                                          : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                                      }
                                      alt="Dan Abramov"
                                      borderRadius="3px"
                                    />
                                  </Box>
                                  <Text
                                    fontWeight="semibold"
                                    fontSize="18px"
                                    color="black.500"
                                  >
                                    {list.name}
                                  </Text>
                                </Flex>
                              </MenuItem>
                            ))}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
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
              <Menu>
                <MenuButton>
                  <Text
                    fontSize="18px"
                    fontWeight="semibold"
                    mr="10px"
                    textTransform="capitalize"
                  >
                    {user.name}{" "}
                    <Icon as={BiChevronDown} mr="10px" fontSize="14px" />
                  </Text>
                </MenuButton>
                <MenuList p="10px" w="308px">
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mb="15px"
                  >
                    <Box>
                      <Text fontSize="18px" mb="6px" fontWeight="bold">
                        {user.name}
                      </Text>
                      <Text fontSize="16px">{user.email}</Text>
                    </Box>
                    <Avatar
                      name={user.name}
                      size="lg"
                      src={
                        user.avatar_url
                          ? user.avatar_url
                          : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                      }
                    />
                  </Flex>
                  <Button
                    borderRadius="4px"
                    w="100%"
                    h="40px"
                    border="2px solid #50049C"
                    textAlign="center"
                    bg="none"
                    color="#50049C"
                    _hover={{
                      transition: "all 0.4s",
                      bg: "#50049C",
                      color: "white",
                    }}
                  >
                    Preferências da conta
                  </Button>
                  <Divider m="10px 0" />
                  {listMenu && listMenu}
                  <Divider m="10px 0" />
                  <Flex
                    alignItems="center"
                    color="red"
                    cursor="pointer"
                    onClick={() => {
                      if (logout) logout();
                    }}
                  >
                    <Text fontSize="16px">Sair</Text>
                    <Icon as={IoMdExit} ml="10px" fontSize="16px" />
                  </Flex>
                </MenuList>
              </Menu>
              <Avatar
                name={user.name}
                src={
                  user.avatar_url
                    ? user.avatar_url
                    : "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
                }
              />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default HeaderDefault;
