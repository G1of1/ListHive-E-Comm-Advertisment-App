import jwt from 'jsonwebtoken';
//Token generation and cookie setup
export const generateTokenAndSetCookie = (userID, res) => {
    const token  = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};
