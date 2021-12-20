import { Link, Outlet } from "react-router-dom";
import Banner from "./shared/Banner";

export default function App() {
    return (
        <div>
            <h1>FloCash</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Banner />
                <Link to="/cash">Cash</Link> |{" "}
                <Link to="/transactions">Transactions</Link>
                <Outlet />
            </nav>
        </div>
    );
}
