import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";

if (typeof window !== "undefined") {
    Modal.setAppElement("#__next"); // Untuk Next.js (default root ID)
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
