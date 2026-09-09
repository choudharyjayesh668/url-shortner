import { useState } from "react";

export default function ShortUrl({ shortUrl }) {
    const [copied, setCopied] = useState(false);

    if (!shortUrl) {
        return null;
    }

    const copyShortUrl = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="short-url-container">
            <p>Your shortened URL</p>
            <div className="short-url-box">
                <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {shortUrl}
                </a>
                <button
                    type="button"
                    className={`copy-button${copied ? " copied" : ""}`}
                    onClick={copyShortUrl}
                    aria-label="Copy shortened URL"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
}
