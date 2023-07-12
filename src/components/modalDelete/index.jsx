import { Modal, Button } from "react-bulma-components";

const ModalDelete = ({ open, close, title, text, confirm }) => {
  return (
    <Modal show={open} onClose={close}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>{title}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <p>{text}</p>
        </Modal.Card.Body>
        <Modal.Card.Footer justifyContent="flex-end">
          <div className="flex">
            <Button color="link" onClick={close}>
              Cancelar
            </Button>
            <Button color="danger" onClick={confirm}>
              Remover
            </Button>
          </div>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};

export default ModalDelete;
