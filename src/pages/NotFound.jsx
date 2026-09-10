import { Link } from "react-router-dom";
import { PageHero } from "../components/UI";
export default function NotFound(){return <PageHero title="Page not found" text="The page you requested does not exist."><Link className="button button-dark" to="/">Return to Bio Pulse</Link></PageHero>}
