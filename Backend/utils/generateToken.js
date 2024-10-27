import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie('JWT', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 1000 is milisecond
        httpOnly: true, // pervent XSS attacks cross-site scripting attacks
        sameSite: 'strict',// CSFR attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV === "production",
    })
}

export default generateTokenAndSetCookie;