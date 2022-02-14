import { Link, useParams } from "react-router-dom";
import { members } from "../../components/Members";

const Company = () => {
    const params = useParams()
    const company = members.find((company) => {
        return company.id === params.id
    })

    return(
        <div>
            <h1>Detalhes da empresa</h1>
            <p>Nome da empresa: {company && company.name}</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Company