import React from "react";
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SortButtons = ({ setQuery, setSortOrder, query }) => {
    
    const buttonLeftCSS = {
        'border-radius': '10px 0px 0px 10px'
    };

    const buttonRightCSS = {
        'border-radius': '0px 10px 10px 0px'
    };
    

    function handleQuery(incomingQuery) {
        setQuery(incomingQuery);
    }

    function handleSortOrder(order) {
        setSortOrder(order);
    }

    return (
        <Row className="mb-3">
            <Col className="col-12 col-md-4 mb-3 order-md-2">
                <Form>
                    <Form.Group controlId="formQuery">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            onChange={e => handleQuery(e.target.value)} />
                    </Form.Group>
                </Form>
            </Col>
            <Col className="col-12 col-md-4 order-md-1 mb-3 mb-md-0">
                <Row className="justify-content-center mx-auto">
                    <Col className="p-0 col-auto">
                        <Button variant="success" style={buttonLeftCSS} onClick={(e) => (handleSortOrder('NAME_ASC'))}>Asc</Button>
                    </Col>
                    <Col className="px-0 bg-dark d-flex align-items-center col-auto">
                        <div>
                            <p className="my-0 text-white px-2"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
                        </div>
                    </Col>
                    <Col className="p-0 col-auto">
                        <Button variant="success" style={buttonRightCSS} onClick={(e) => (handleSortOrder('NAME_DESC'))}>Desc</Button>
                    </Col>
                </Row>
            </Col>
            <Col className="col-12 col-md-4 order-md-3">
                <Row className="justify-content-center mx-auto">
                    <Col className="p-0 col-auto">
                        <Button variant="success" style={buttonLeftCSS} onClick={(e) => (handleSortOrder('IMPORTANCE_ASC'))}>Asc</Button>
                    </Col>
                    <Col className="px-0 bg-dark d-flex align-items-center col-auto">
                        <div>
                            <p className="my-0 text-white px-2"><b>Importance</b></p>
                        </div>
                    </Col>
                    <Col className="p-0 col-auto">
                        <Button variant="success" style={buttonRightCSS} onClick={(e) => (handleSortOrder('IMPORTANCE_DESC'))}>Desc</Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    );
}

export default SortButtons;
