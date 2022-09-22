// wraps entire app within _app.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>YT-1 Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <div>
                    <Component {...pageProps} />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default MyApp;
