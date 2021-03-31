import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationsModal from "./NewConversationsModal";
import NewContactModal from "./NewContactModal";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts";

export default function SideBar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATION_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };

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
        <Button classname="rounded-0" onClick={() => setModalOpen(true)}>
          New {conversationsOpen ? "Conversations" : "Contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationsModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

SideBar.propTypes = {
  id: PropTypes.string.isRequired,
};
