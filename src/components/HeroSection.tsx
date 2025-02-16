import React, { useState, useEffect } from "react";
import {Box,Typography,Button} from "@mui/material";
import {motion} from "framer-motion";
const Herosection: React.FC = () => {
    const [text, setText] = useState("Welcome!");
    useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) => (prevText==="Welcome!"?"Bienvenue!":"Welcome!"));
        }, 2000);
        return () => clearInterval(interval);
        },[]);
    return(
        
        <Box
            sx={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
                p: { xs: 2, md: 4 },
            }}
            >
            <motion.div
                key={text}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant="h2" sx={{ mt: "15%" }}>
                {text}
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Typography variant="h1" component="h1" gutterBottom>
                I am Ritvik Goyal!
                </Typography>
                <Typography variant="h4" color="text.secondary" gutterBottom>
                A passionate Software Developer in Toronto!
            </Typography>
            </motion.div>
            
            <Button
                variant="contained"
                color="primary"
                size="large"
                href="/portfolio"
            >
                See My Work
            </Button>
            </Box>
                        
                );
            };
export default Herosection;