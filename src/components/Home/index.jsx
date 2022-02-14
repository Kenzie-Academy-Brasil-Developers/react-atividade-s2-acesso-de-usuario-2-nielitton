import { Link } from "react-router-dom";
import { members } from "../Members";

function Home() {
  return members.map((member) => <Link key={member.id} to={member.type === "pj" ? `/company/${member.id}` : `/customer/${member.id}`}>{member.name}</Link>);
}

export default Home;
