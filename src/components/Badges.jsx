import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../styles/Badges.css';
import badgeList from '../assets/data/badgesList.json';

const Badges = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const loadBadges = () => {
            setBadges(badgeList);
        };
        loadBadges();
    }, []);

    const filteredBadges = badges.filter(badge =>
        badge.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="d-flex flex-column align-items-center">
            <h1 className="my-4">Badges</h1>
            <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
                <FormControl
                    placeholder="Search Badges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            <div className="badge-grid">
                <Row className="d-flex justify-content-center">
                    {filteredBadges.slice(0, 15).map((badge, index) => (
                        <Col key={index} xs={4} className="text-center p-2">
                            <div className="badge-container">
                                <img src={badge.url} alt={badge.name} className="badge-image" />
                                <p className="badge-name">{badge.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Badges;
