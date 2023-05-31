import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DataContext } from './Problem-2';

const USCountries = () => {
    const contacts = useContext(DataContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button
                onClick={handleShow}
                className="btn btn-lg btn-outline-warning"
                type="button"
            >
                US Contacts
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal B</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        {
                            contacts.map(contact => {
                                if(contact.country.name === 'United States') {
                                    return contact.country.name
                                }
                            })
                        }
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

export default USCountries;