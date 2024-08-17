import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../styles/Icons.css';
import iconList from '../assets/data/iconsList.json';

const Icons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const loadIcons = () => {
            setIcons(iconList);
        };
        loadIcons();
    }, []);

    const filteredIcons = icons.filter(icon =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="d-flex flex-column align-items-center">
            <h1 className="my-4">Icons</h1>
            <InputGroup className="mb-3" style={{ maxWidth: '300px' }}>
                <FormControl
                    className="text-center"
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            <div className="icon-grid">
                <Row className="d-flex justify-content-center">
                    {filteredIcons.map((icon, index) => (
                        <Col key={index} className="text-center p-2">
                            <div className="icon-container">
                                <img src={icon.url} alt={icon.name} className="icon-image" />
                                <p className="icon-name">{icon.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Icons;
