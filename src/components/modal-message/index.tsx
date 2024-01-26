import { Button, Modal, ModalFooter } from 'reactstrap';
import "./styles.scss";

const ModalMessage = ({isOpen, message, onClose}) => {

  return (
    <Modal 
      title='' 
      isOpen={isOpen} 
      toggle={() => onClose()} 
      wrapClassName="modal__default modal__default-empty" 
      width="400px" footer=""
      centered={true}
    >
      <div className="empty" style={{ width: 'auto' }}>
        <h2 className="empty-message" style={{ fontSize: '19px' }}>
          {message}
        </h2>
      </div>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={() => onClose()}>
          Aceptar
        </Button>
      </ModalFooter>
    </Modal>
  )

}

export default ModalMessage;