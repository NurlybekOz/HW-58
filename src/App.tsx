import './App.css';
import Modal from "./UI/Modal/Modal.tsx";
import { useState } from "react";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const closeBtn = () => {
        console.log("clicked close");
        setShowModal(false);
    }

    const modalButtons = [
        {
            type: 'primary',
            label: 'Continue',
            onClick: () => console.log("clicked continue"),
        },
        {
            type: 'danger',
            label: 'Close',
            onClick: closeBtn,
        }
    ];

    const cancel = () => {
        setShowModal(false);
    }
    const closeAlert = () => {
        setShowAlert(false);
    }

    return (
        <>
            <div className="container">
                <button className='btn btn-primary m-2' onClick={() => setShowModal(true)}>Open 1 lvl</button>
                <Modal
                    show={showModal}
                    onClose={cancel}
                    title='Some kinda modal title'
                    buttons={modalButtons}
                >
                    <p>this is modal content</p>
                </Modal>
                <button className='btn btn-primary m-2' onClick={() => setShowAlert(true)}>Open 2 lvl</button>
                {showAlert && (
                    <Alert
                        type="warning"
                        onDismiss={closeAlert}
                    >This is warning type alert</Alert>
                )}
            </div>


        </>
    );
};

export default App;

