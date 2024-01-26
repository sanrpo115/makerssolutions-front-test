import { useContext } from "react";
import { Table, Button } from "reactstrap";
import { CrudAppContext } from "../../context/context";
import "./styles.scss";

const Results = () => {

  const { listMakers, deleteMaker, setUpdateValues } = useContext(CrudAppContext);

  return (
    <div className="container__table">
      {
        listMakers && listMakers.length !== 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listMakers && listMakers.length > 0 && 
                listMakers.map((maker: any, i:number) => {
                  return (
                    <tr key={i}>
                      <td>{maker.firstname}</td>
                      <td>{maker.lastname}</td>
                      <td>{maker.email}</td>
                      <td className="container__table--actions">
                        <Button color="primary" outline size="sm" onClick={() => setUpdateValues(maker)}>
                          Editar
                        </Button>
                        <Button color="danger" size="sm" onClick={() => deleteMaker(maker.id)}>
                          Borrar
                        </Button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        ): <>
          <span>Ingresa y guarda un Maker para empezar</span>
        </>
      }
    </div>
  );

}

export default Results;