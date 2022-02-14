import { Link, useParams } from "react-router-dom";
import { members } from "../../components/Members";

const Customer =() => {
  const params = useParams();
  const member = members.find((member) => {
    return member.id === params.id;
  });
  return (
    <div>
      <h1>Detalhes do Cliente</h1>
      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Customer;
