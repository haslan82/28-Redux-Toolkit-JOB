import React from "react";
import { Button, Form, Modal } from "react-bootstrap";




const FormModal = ({isOpen, handleClose} ) => {
   // console.log(isOpen);
const handleSubmit = (e)=>{
e.preventDefault();
    //console.log("çalıştı")
console.log(e.target);

const formData = new FormData(e.target);
//console.log(formData);

console.log(Object.fromEntries(formData.entries()))


}

   return (
    <Modal centered show={isOpen} className="text-black">
      <Modal.Header>
        <Modal.Title> Yeni Görev Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">

          <Form.Group>
            <Form.Label> Görev Başlığı </Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbarı Düzenle"
              required
              defaultValue={"title"}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz:</Form.Label>
            <Form.Control
              name="author"
              placeholder="Navbarı Düzenle"
              required
              defaultValue={"author"}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanılacak Kişi</Form.Label>
            <Form.Control
              name="assigned_to"
              placeholder="Navbarı Düzenle"
              required
              defaultValue={"assigned_to"}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control 
            type="date"
              name="end_date"
              placeholder="Navbarı Düzenle"
              required
              defaultValue={"date"}
            />
          </Form.Group>


{/* //! Butonlar */}
          <Modal.Footer>
        <Button onClick={handleClose} type="button" variant="secondary">İptal</Button>
        <Button type="submit">Kaydet</Button>
      </Modal.Footer>

        </Form>
      </Modal.Body>
      
    </Modal>
  );
};

export default FormModal;
