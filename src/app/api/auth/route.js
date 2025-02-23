import { verifyJwtToken } from "@/libs/auth";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const verifiedToken = await verifyJwtToken(token);
        if (!verifiedToken) {
            return res.status(401).json({ message: "Invalid token" });
        }

        return res.status(200).json({ user: verifiedToken });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}