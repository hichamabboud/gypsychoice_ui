import NextLink from "next/link";
import { Box, Button, Heading, HStack, Text, Link, useColorMode, colorMode, IconButton, Flex, Switch } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const MainNavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
       <Flex
            justifyContent="space-between"
            alignItems="center"
            w="full"
            px={6}
            py={4}
        >
            <Box>
                <Text></Text>
            </Box>
            <Flex>
                <Flex display={{ base : "none", md : "flex"}}>
                    <NextLink passHref href="/">
                        <Link >
                            <Button as="a" w="100%" aria-label="List your property" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> List your Property </Button>
                        </Link>
                    </NextLink>
                
                    <NextLink passHref href="/">
                        <Link>
                            <Button as="a" w="100%" aria-label="sign in" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> Sign In </Button>
                        </Link>
                    </NextLink>
                
                    <NextLink passHref href="/">
                        <Link>
                            <Button as="a" w="100%" aria-label="sign up" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> Sign Up </Button>
                        </Link>
                    </NextLink>
                </Flex>
            
                <IconButton
                    icon={<HamburgerIcon />}
                    size="md"
                    mr={4}
                    display={{ base : "flex", md : "none"}}
                />
                
                <Switch
                    color="green"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                    alignSelf="center"
                >
                </Switch>
            </Flex>
        </Flex>
  )
}

export default MainNavBar;



// return (
//         <HStack as="nav" justifyContent="space-between" w="full" px={8} py={3} >
//             <Heading as="h1" size="md" > GypsyChoice </Heading>
//             <HStack>
//                 <NextLink passHref href="/">
//                     <Link >
//                         <Button as="a" w="100%" aria-label="List your property" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> List your Property </Button>
//                     </Link>
//                 </NextLink>
                
//                 <NextLink passHref href="/">
//                     <Link>
//                         <Button as="a" w="100%" aria-label="sign in" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> Sign In </Button>
//                     </Link>
//                 </NextLink>
                
//                 <NextLink passHref href="/">
//                     <Link>
//                         <Button as="a" w="100%" aria-label="sign up" variant="ghost" _hover={{ backgroundColor : "none", underlineDecoration : "none"}} p={2}> Sign Up </Button>
//                     </Link>
//                 </NextLink>

                
                
//                 <Box>
//                     {colorMode === "light" ? <IconButton variant="ghost" _focus={{ variant:"ghost"}} onClick={toggleColorMode} isRound aria-label='dark mode button'  icon={<MoonIcon />} /> : <IconButton _focus={{ variant:"ghost"}} variant="ghost" onClick={toggleColorMode} isRound aria-label='dark mode button' icon={<SunIcon /> } />}
//                 </Box>
//             </HStack>
//         </HStack>
//   )