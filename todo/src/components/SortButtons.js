import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const SortButtons = ({ setTasks, updateTasks }) => {
    function handleSortTaskAsc(e) {
        axios.get('http://localhost:8000/?sortBy=NAME_ASC').then(
            (result) => {setTasks(result.data);}
        );
    }

    function handleSortTaskDesc(e) {
        axios.get('http://localhost:8000/?sortBy=NAME_DESC').then(
            (result) => {setTasks(result.data);}
        );
    }

    function handleSortImportanceAsc(e) {
        axios.get('http://localhost:8000/?sortBy=IMPORTANCE_ASC').then(
            (result) => {setTasks(result.data);}
        );
    }

    function handleSortImportanceDesc(e) {
        axios.get('http://localhost:8000/?sortBy=IMPORTANCE_DESC').then(
            (result) => {setTasks(result.data);}
        );
    }
    

    return (
        <Row className="mb-3">
            <Col>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortTaskAsc())}>Asc</Button>
                    </Col>
                    <Col md="auto">
                        <p><b>Name</b></p>
                    </Col>
                    <Col md="auto">
                        <Button variant="success" onClick={(e) => (handleSortTaskDesc())}>Desc</Button>
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <Button variant="success" onClick={(e) => (handleSortImportanceAsc())}>Asc</Button>
                    </Col>
                    <Col md="auto">
                        <p><b>Importance</b></p>
                    </Col>
                    <Col md="auto">
                    <Button variant="success" onClick={(e) => (handleSortImportanceDesc())}>Desc</Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    );
}

export default SortButtons;
