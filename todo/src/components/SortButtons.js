import React from "react";
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SortButtons = ({ setQuery, setSortOrder }) => {
    function handleQuery(incomingQuery) {
        setQuery(incomingQuery);
    }

    function handleSortOrder(order) {
        setSortOrder(order);
    }

    return (
        <Row className="mb-3">
            <Col>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortOrder('NAME_ASC'))}>Asc</Button>
                    </Col>
                    <Col md="auto">
                        <p><b>Name</b></p>
                    </Col>
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortOrder('NAME_DESC'))}>Desc</Button>
                    </Col>
                </Row>
            </Col>

            <Col>
                <Form>
                    <Form.Group controlId="formQuery">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            onChange={e => handleQuery(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Col>

            <Col>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortOrder('IMPORTANCE_ASC'))}>Asc</Button>
                    </Col>
                    <Col md="auto">
                        <p><b>Importance</b></p>
                    </Col>
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortOrder('IMPORTANCE_DESC'))}>Desc</Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    );
}

export default SortButtons;
