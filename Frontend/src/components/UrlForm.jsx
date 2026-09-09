import { useState } from "react";
export default function UrlForm({onShorten,error}){
     const [url, setUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onShorten(url);
        setUrl("");
    };
    return(
        <form className="url-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                placeholder="Paste your long URL..."
                onChange={(event) => setUrl(event.target.value)}
            />
            <button type="submit">
                Shorten
            </button>
            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}
        </form>
    )
};