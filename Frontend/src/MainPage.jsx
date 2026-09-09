import { useState } from "react"
import axios from 'axios';
import '../src/MainPage.css'
import ShortUrl from "./components/ShortUrl";
import UrlForm from "./components/UrlForm";

export default function MainPage(){
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");
    
    const handleShorten = async (url) => {
        try {
            setError("");
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/url`,
                { url }
            );
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            if (error.response?.status === 429) {
                setError(
                    "Too many requests. Please wait a few minutes."
                );
            } else if (error.response?.status === 400) {
                setError("Enter a valid URL.");
            } else {
                setError("Something went wrong.");
            }
        };
    };
    
    return(
        <main className="main-page">
            <div className="url-container">
                <h1>URL Shortener</h1>
                <p className="subtitle">
                    Make your long links short and easy to share.
                </p>
                <UrlForm
                    onShorten={handleShorten}
                    error={error}
                />
                <ShortUrl shortUrl={shortUrl} />
            </div>
        </main>
    )
}