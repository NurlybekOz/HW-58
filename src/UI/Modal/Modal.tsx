import Backdrop from "../Backdrop/Backdrop.tsx";

interface PropsBtn {
    type: string;
    onClick: React.MouseEventHandler;
    label: string;

}

interface Props {
    show: boolean;
    onClose: React.MouseEventHandler;
    title: string;
    children: React.ReactNode;
    buttons?: PropsBtn[];
}

const Modal: React.FC<Props> = ({ show, onClose, title, children, buttons = []}) => {
    return (
        <>
            <Backdrop show={show} onClick={onClose} />
            <div className="modal show" style={{display: show ? 'block': 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button className="btn btn-light" onClick={onClose}>x</button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {buttons.map((button, index) => (
                                <button key={index}
                                        onClick={button.onClick}
                                        type="button"
                                        className={`btn btn-${button.type}`}>{button.label}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Modal;