import { useSelector } from "react-redux";

export default function Banner() {
    const { visible, color, message, action } = useSelector(
        (state) => state.banner
    );
    return (
        visible && (
            <div
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "1rem",
                    marginBottom: "1rem",
                }}
            >
                {message}
                {action && <button onClick={action}>action</button>}
            </div>
        )
    );
}

Banner.defaultProps = {
    color: "green",
    message: "Success!",
    action: () => {},
};
