import React from 'react';
import Badges from '../components/Badges';
import Icons from '../components/Icons';
import { Container, Box } from '@mui/material';

const Body = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '100%' }}>
            {/* Icons Section */}
            <Box sx={{ textAlign: 'center', flex: 1, overflow: 'auto', maxHeight: '400px', mr: 2 }}>
                <Icons />
            </Box>

            {/* Badges Section */}
            <Box sx={{ textAlign: 'center', flex: 1, overflow: 'auto', maxHeight: '400px', ml: 2 }}>
                <Badges />
            </Box>
        </Container>
    );
};

export default Body;
