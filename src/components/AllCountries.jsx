import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from './Problem-2';

const AllCountries = () => {
    const contacts = useContext(DataContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button
                onClick={handleShow}
                className="btn btn-lg btn-outline-primary"
                type="button"
            >
                All Contacts
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal A</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                {contact.country.name}
                            </li>
                        ))}
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">
                        All Contacts
                    </Button>
                    <Button variant="secondary">
                        US Contacts
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllCountries;