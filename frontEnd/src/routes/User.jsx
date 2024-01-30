import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

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
            {userName ? `Welcome, ${userName}!` : "Loading..."}
        </div>
    );
}

export default User;