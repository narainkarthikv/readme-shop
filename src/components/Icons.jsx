import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { loadAndFilter }  from '../utils/loadAndFilter';
import iconList from '../assets/data/iconsList.json';

const Icons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        setIcons(iconList); 
    }, []);

    const filteredIcons = loadAndFilter(icons, searchTerm);

    return (
        <Container sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Icons
            </Typography>

            {/* Search Input */}
            <TextField
                variant="outlined"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 3, maxWidth: '300px' }}
            />

            {/* Icons Grid */}
            <Grid container spacing={2} justifyContent="center">
                {filteredIcons.map((icon, index) => (
                    <Grid item key={index} xs={4} sm={2} lg={2}>
                        <Box className="icon-container">
                            <img src={icon.url} alt={icon.name} className="icon-image" />
                            <Typography variant="body1">{icon.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Icons;
