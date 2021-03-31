import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts";

export default function SideBar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>
    </div>
  );
}

SideBar.propTypes = {
  id: PropTypes.string.isRequired,
};
