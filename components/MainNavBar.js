import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Heading, IconButton, Switch, useColorMode } from "@chakra-ui/react"
import NextLink from "next/link";
import { useState } from "react";

const MainNavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [display, changeDisplay] = useState("none");
    
    return (
        <Flex px={3} mt={4} alignItems="center" justifyContent="space-between" >
            <Flex>
                <Heading as="h1" fontSize={["md", "xl", "2xl", "3xl"]} top={{ base: "1.5rem", md : "2.5rem", lg :"3rem" }} left={{ base : "1rem", md : "2rem"}}> GypsyChoice </Heading>
            </Flex>
            <Flex top="1.7rem" right="1rem" align="center">
                <Flex display={["none", "none", "flex", "flex"]} mr={4}>
                    <NextLink href="/" passHref >
                        <Button
                            px={2}
                            as="a" 
                            variant="ghost"
                            aria-label="list your property with gypsychoice.com"
                            my={5}
                            w="100%"
                            >
                            List a property
                        </Button>
                    </NextLink>

                    <NextLink href="/" passHref>
                        <Button
                            px={2}
                            as="a" 
                            variant="ghost"
                            aria-label="sign in to your gypsychoice account"
                            my={5}
                            ml={4}
                            w="100%"
                            >
                            Sign in
                        </Button>
                    </NextLink>

                    <NextLink href="/" passHref>
                        <Button
                            px={0}
                            as="a" 
                            variant="ghost"
                            aria-label="sign up to a gypsychoice account"
                            my={5}
                            w="100%"
                            >
                            Sign up
                        </Button>
                    </NextLink>
                </Flex>

                <IconButton
                    aria-label="Open Menu"
                    size="sm"
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={() => changeDisplay("flex")}
                />
                {/* <Switch
                    isChecked={isDark}
                    onChange={ toggleColorMode }
                >
                </Switch> */}

                <IconButton variant="ghost" onClick={toggleColorMode} icon={ colorMode === "light" ? <MoonIcon /> : <SunIcon/> }/>
            </Flex>

            <Flex
                w="100vw"
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflow="auto"
                flexDir="column"
                display={display}
                >
                
                <Flex justifyContent="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay("none")}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                            <Button
                                as="a" 
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                w="100%"
                                >
                                Home
                            </Button>
                        </NextLink>

                        <NextLink href="/" passHref>
                            <Button
                                as="a" 
                                variant="ghost"
                                aria-label="About"
                                my={5}
                                w="100%"
                                >
                                About
                            </Button>
                        </NextLink>

                        <NextLink href="/" passHref>
                            <Button
                                as="a" 
                                variant="ghost"
                                aria-label="Contact"
                                my={5}
                                w="100%"
                                >
                                Contact
                            </Button>
                    </NextLink>
            </Flex>
            </Flex>
        </Flex>
  )
}

export default MainNavBar