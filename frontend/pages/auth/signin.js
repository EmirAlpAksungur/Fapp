import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { setToken } from "@/utils/cookieSettings";
import "../../styles/login.css"
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/login", { email, password });

            setToken(res.data.token)
            router.push("/");
        } catch (error) {
            setMessage("Hatalı kullanıcı adı şifre");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-header">Login</h1>
                <div style={{ padding: "24px" }}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="input-field"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div style={{ paddingInline: "24px" }}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="input-field"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}