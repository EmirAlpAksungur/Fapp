const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

const generateToken = (user) => {
    return jwt.sign({ email: user.email }, "asşdlasşdsaşi231", {
        expiresIn: "1h",
    });
};

const creteUser = async () => {
    const hashedPassword = await bcrypt.hash("demo", 10);
    users.push({ email: "demo@demo.com", password: hashedPassword });
};

app.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    req.session = {
        jwt: token,
    };
    res.json({ token });
});

const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, "asşdlasşdsaşi231", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });

};

app.get("/api/users/currentuser", authenticateToken, (req, res) => {
    res.json({ currentUser: req.user });
});

app.get("/api/data", (req, res) => {
    const array2D = Array.from({ length: 30 }, () =>
        Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
    );

    res.json({ data: array2D });
});

app.listen(5000, () => {
    creteUser()
    console.log("Server running on port 5000")
}
);
