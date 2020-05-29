import React from "react";
import "./style.css";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ProfileCard ({ name, skills, description, email, phone, Button, id }) {
    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="font-italic">{name}</h3>
          </Col>
          <Col size="md-4">
            <div className="btn-container">
                <Button />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <div id="skillListDiv" className="row">
                {skills.map(skill => (
                    <p key={id} className="eachSkill">{skill}</p>
                ))}
            </div>
          </Col>
        </Row>
        <Row>
            <Col size="12 sm-4 md-2">
            <img className="img-thumbnail img-fluid w-100" src="" alt={name} />
          </Col>
        </Row>
        <Row>
            <Col size="12 sm-8 md-10">
            <p>{description}</p>
            </Col>
        </Row>
      </ListItem>
    );
  }
  
  export default ProfileCard;