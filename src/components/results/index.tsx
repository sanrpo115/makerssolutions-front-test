import { useContext } from "react";
import { Table, Button } from "reactstrap";
import { CrudAppContext } from "../../context/context";
import "./styles.scss";

const Results = () => {

  const { listMakers } = useContext(CrudAppContext);

  return (
    <div className="container__table">
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
          {listMakers && listMakers.length > 0 ? 
            listMakers.map((maker: any, i:number) => {
              return (
                <tr key={i}>
                  <td>{maker.firstname}</td>
                  <td>{maker.lastname}</td>
                  <td>{maker.email}</td>
                  <td className="container__table--actions">
                    <Button color="primary" outline size="sm" >
                      Editar
                    </Button>
                    <Button color="danger" size="sm" >
                      Borrar
                    </Button>
                  </td>
                </tr>
              )
            }) : null}
        </tbody>
      </Table>
    </div>
  );

}

export default Results;