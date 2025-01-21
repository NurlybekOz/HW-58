interface Props {
    type?: 'primary' | 'success' | 'warning' | 'danger',
    onDismiss?: React.MouseEventHandler,
    children: React.ReactNode;
}

const Alert:React.FC<Props> = ({type, children, onDismiss}) => {
    return (

            <div className={`alert alert-${type} d-flex justify-content-between mb-2 align-items-center`} style={{display: 'block', width: '600px', height: '50px'}} role="alert">
                {children}
                {onDismiss && (
                    <button onClick={onDismiss} type='button' className='btn'>
                        X
                    </button>
                )}
            </div>
    );
};

export default Alert;