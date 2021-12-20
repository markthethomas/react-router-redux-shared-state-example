import { useBanner } from "../features/bannerSlice";

export default function Transactions() {
    const { showBanner, hideBanner } = useBanner();
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Transactions</h2>
            <button
                onClick={() =>
                    showBanner({
                        color: "green",
                        message: "Success!",
                    })
                }
            >
                show global success banner
            </button>
            <button onClick={hideBanner}>hide global success banner</button>
        </main>
    );
}
