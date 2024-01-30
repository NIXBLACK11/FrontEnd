import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

import {
    Flex,
    Image,
    Button,
    ButtonGroup,
    Box,
    Spacer,
    Avatar,
    Grid,
    GridItem,
    Text
} from "@chakra-ui/react";

import ColorModeToggle from '../components/ColorModeToggle';
import { navigateToSignin, navigateToHome } from "../components/LinksUrl";
import FileUpload from "../components/FileUpload";

function User() {
    const { userName } = useParams();
    const navigate = useNavigate();
    const getTokenFromLocalStorage = () => {
        return localStorage.getItem("token");
    };

    useEffect(() => {
        const safetyCheck = async () => {
            if (!userName) {
                navigate("/home");
            }
            const token = getTokenFromLocalStorage();
            if(!token) {
                navigate("/home");
            }
            try {
                const response = await axios.get(`http://localhost:3000/user/check/${userName}`, {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                if(!response.data.valid) {
                    navigate("/home");
                }
            } catch(error) {
                if (error.response) {
                    console.error('Error Status:', error.response.status);
                    console.error('Error Data:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error Message:', error.message);
                }
                navigate("/home");
            }
        }
        safetyCheck();
    }, [userName, navigate]);

    return (
        <div>
        <Flex minWidth='max-content' paddingX='2' alignItems='center' gap='2'>
            <Box p='2' onClick={navigateToHome}>
                <Image src="/src/assets/logo.png" alt="VideoAnalyser" />
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='cyan' onClick={navigateToHome}>Home</Button>
                <Avatar marginTop={1} size="sm" name={userName} src='--' />
                <ColorModeToggle/>
            </ButtonGroup>
        </Flex>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} alignItems="center">
            {/* Image Grid Item */}
            <GridItem margin="5">
                <FileUpload/>
            </GridItem>

            {/* Text Grid Item */}
            <GridItem margin="3">
                <Text >
                🚀 Unlock the hidden insights within your videos like never before! Our cutting-edge video analysis platform is here to revolutionize the way you perceive and understand your video content. Whether you're a content creator, marketer, or just curious about the magic happening in your favorite videos, we've got you covered.
                </Text>
            </GridItem>
        </Grid>
        </div>
    );
}

export default User;