import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Image,
    Button,
    ButtonGroup,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Spacer
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import ColorModeToggle from '../components/ColorModeToggle';


const CFaLock = chakra(FaLock);
const CFaUserAlt = chakra(FaUserAlt);

function Signin() {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    return <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Image src="../assets/react.svg" alt="VideoAnalyser" />
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='cyan'>Sign In</Button>
                <ColorModeToggle/>
            </ButtonGroup>
        </Flex>

        <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="cyan.500" />
        <Heading colorScheme='cyan'>Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="cyan.300"/>}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="cyan.300"/>}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button colorScheme='cyan' h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="cyan.500" >forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="cyan"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="cyan.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
    </div>
}

export default Signin;