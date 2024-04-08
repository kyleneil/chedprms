import { db } from "../connect.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const credentials = (req, res) => {
    const findUserQuery = "SELECT * FROM account WHERE user_id = ?"
    db.query(findUserQuery, [req.body.user_id], (err, data) => {
        if (err) return res.status(500).json(err)
        if (!data.length) return res.status(401).json("User not Found")
        const checkPassword = bcrypt.compareSync(
            req.body.Password,
            data[0].Password
        )
        if (!checkPassword) return res.status(400).json("Incorrect Password")
        const token = jwt.sign({
            id: req.body.user_id,
        },
            "GwapoKo",
            { expiresIn: "1d" }
        )

        const { Password, ...others } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: false,
            credentials: "include",
        }).status(200).json({ others, token })

    })
}

export const logout = (req, res) => {
    res.clearCookie("accessToken").status(200).json("User has logout!")

}