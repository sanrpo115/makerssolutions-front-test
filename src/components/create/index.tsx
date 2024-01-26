import { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./styles.scss";
import { CrudAppContext } from "../../context/context";

const Create = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { saveMaker, updateMaker, updateValues } = useContext(CrudAppContext);

  useEffect(() => {
    if(updateValues.id) {
      setValues({...values, ...updateValues});
    }
  }, [updateValues]);
  
  
  const validatedForm = () => {
    let formValid = true;
    const newErrors = {};

    for (const key in values) {
      if (values[key] === null || values[key] === "") {
        formValid = false;
        newErrors[key] = true;
      }
    }

    if (formValid) {
      setErrors({});
      if(values && values['id']) {
        updateMaker(values);
      } else {
        saveMaker(values);
      }
    } else {
      console.log(newErrors)
      setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    }

  };

  return (
    <div className="container__form">
      <div className="container__title">
        <h2>Crear un Maker</h2>
      </div>
      <div className="content__form">
        <Form >
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
              value={values['firstname']}
              onChange={(e:any) => {
                const newValue = {[e.target.name]: e.target.value};
                setValues({...values, ...newValue});
              }}
            />
            {errors && errors['firstname'] && (
              <div className="alert alert-danger custom-alert">
                Este campo es requerido *
              </div>
            )}
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
              value={values['lastname']}
              onChange={(e:any) => {
                const newValue = {[e.target.name]: e.target.value};
                setValues({...values, ...newValue});
              }}
            />
            {errors && errors['lastname'] && (
              <div className="alert alert-danger custom-alert">
                Este campo es requerido *
              </div>
            )}
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
              value={values['email']}
              onChange={(e:any) => {
                const newValue = {[e.target.name]: e.target.value};
                setValues({...values, ...newValue});
              }}
            />
            {errors && errors['email'] && (
              <div className="alert alert-danger custom-alert">
                Este campo es requerido *
              </div>
            )}
          </FormGroup>
          <Button color="success" size="sm" onClick={validatedForm}>
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );

}

export default Create;