"use client"; // Next.js 13+ için client-side render yapılması gerekiyor

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../components/header";
import '../styles/globals.css';
const AppComponent = ({ Component }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const handleTokenChange = () => {
            const token = Cookies.get("token");
            axios
                .get("http://localhost:5000/api/users/currentuser", { headers: { Authorization: token } })
                .then((res) => setCurrentUser(res.data.currentUser))
                .catch(() => {
                    setCurrentUser(null);
                    router.push("/");
                });
        };

        window.addEventListener("tokenChanged", handleTokenChange);

        return () => {
            window.removeEventListener("tokenChanged", handleTokenChange); // Cleanup
        };
    }, []);
    return (
        <>
            <Header currentUser={currentUser} />
            <Component currentUser={currentUser} />
        </>
    );
};

export default AppComponent;
