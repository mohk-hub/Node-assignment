import React, { useState } from "react";
import axios from "axios";

export const GmailForm = () => {
    const [sent, setSent] = useState(false);
    const [text, setText] = useState("");
    const handleSend = async (e) => {
        try {
            e.preventDefault();
            setSent(true);

            await axios.post("http://localhost:8080/send_email",
                {
                    text,
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container">
                {!sent ? (
                    <form onSubmit={handleSend} className="mt-3">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="form-control mb-3"
                        />
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                ) : (
                    <h1>Email Sent</h1>
                )}
            </div>
        </>
    )
}
