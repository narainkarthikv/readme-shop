import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { loadAndFilter }  from '../utils/loadAndFilter';
import badgeList from '../assets/data/badgesList.json';

const Badges = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        setBadges(badgeList); 
    }, []);

    const filteredBadges = loadAndFilter(badges, searchTerm);

    return (
        <Container sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Badges
            </Typography>

            {/* Search Input */}
            <TextField
                variant="outlined"
                placeholder="Search badges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 3, maxWidth: '300px' }}
            />

            {/* Badges Grid */}
            <Grid container spacing={2} justifyContent="center">
                {filteredBadges.slice(0, 15).map((badge, index) => (
                    <Grid item key={index} xs={4} sm={2}>
                        <Box className="badge-container">
                            <img src={badge.url} alt={badge.name} className="badge-image" />
                            <Typography variant="body1">{badge.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Badges;
