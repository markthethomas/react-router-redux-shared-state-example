import { useBanner } from "../features/bannerSlice";

export default function Cash() {
    const { showBanner, hideBanner } = useBanner();
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cash</h2>
            <button
                onClick={() =>
                    showBanner({
                        color: "red",
                        message: "Oops!",
                    })
                }
            >
                show global success banner
            </button>
            <button onClick={hideBanner}>hide global success banner</button>
        </main>
    );
}
