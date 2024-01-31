import React, { useRef, useState } from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  chakra,
  FormControl,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

import { MdTitle, MdOutlineDescription } from "react-icons/md";

const CMdTitle = chakra(MdTitle);
const CMdDescription = chakra(MdOutlineDescription);

const FileUpload = ({ userName }) => {
  const [videoDetails, setVideoDetails] = useState({
    videoTitle: "title",
    videoDescription: "description"
  });

  // const [clicked, setClicked] = useState(false);
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const fileInputRef = useRef();
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
  
      if (file) {
        const token = getTokenFromLocalStorage();
  
        if (!token) {
          console.error("Token is missing");
          return;
        }
        
        const response1 = await axios.post(`http://localhost:3000/user/${userName}/videoData`, videoDetails, {
          headers: {
            Authorization: `${token}`
          }
        });
        
        const videoId = response1.data.videoId;

        const formData = new FormData();
        formData.append("video", file, `${videoId}.mp4`);

        const response2 = await axios.post(`http://localhost:3000/user/${userName}/video`, formData, {
          headers: {
            Authorization: `${token}`
          }
        });
  
        if (response2.status === 200) {
          console.log("Video uploaded successfully");
        } else {
          console.error("Error uploading video");
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Container my="12">
      <AspectRatio width="120" height="80" ratio={1}>
        <Box
          borderColor="cyan.500"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md"
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading color="cyan.500" fontSize="lg" fontWeight="bold">
                    Drop videos here
                  </Heading>
                  <Text color="cyan.500" fontWeight="light">
                    or click to upload
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="video/*"  // Update accept attribute for videos
              onChange={handleFileChange}  // Add onChange event to handle file change
              ref={fileInputRef}
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
            />
          </Box>
        </Box>
      </AspectRatio>
            <Stack
              spacing={4}
              p="1rem"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdTitle color="cyan.300"/>}
                  />
                  <Input 
                    type="string" 
                    placeholder="title"
                    onChange={(e) => {
                      e.preventDefault();
                      setVideoDetails({
                        ...videoDetails,
                        videoTitle: e.target.value 
                      })
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdDescription color="cyan.300"/>}
                  />
                  <Input 
                    type="string" 
                    placeholder="description"
                    onChange={(e) => {
                      e.preventDefault();
                      setVideoDetails({
                        ...videoDetails,
                        videoDescription: e.target.value 
                      })
                    }}
                  />
                </InputGroup>
              </FormControl>
              {/* <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="cyan"
                width="full"
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(true);
                }}
              >
                Login
              </Button> */}
            </Stack>
    </Container>
  );
}

export default FileUpload;