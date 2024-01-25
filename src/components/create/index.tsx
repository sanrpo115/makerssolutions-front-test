import { useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./styles.scss";

const Create = () => {

  return (
    <div className="container__form">
      <div className="container__title">
        <h2>Crear un Maker</h2>
      </div>
      <div className="content__form">
        <Form>
          <FormGroup>
            <Label for="firstname" hidden >
              Nombre
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Primer nombre"
              type="text"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname" hidden >
              Apellido
            </Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Apellido"
              type="text"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" hidden >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="off"
            />
          </FormGroup>
          <Button color="success" size="sm">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );

}

export default Create;