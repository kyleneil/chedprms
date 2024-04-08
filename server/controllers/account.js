import { db } from "../connect.js";
import bcrypt from "bcryptjs"

export const accounts = (req, res) => {
    const accountsQuery = "SELECT * FROM account"
    db.query(accountsQuery, (err, data) => {
        if(err) return res.status(500).json(err)

        res.status(200).json(data)
    })
}

export const insertAdminAccount = (req, res) => {
    const insertQuery = "INSERT INTO `account`(`user_id`, `Password`, `Full_name`) VALUES (?,?,?)"
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.Password, salt);

    db.query(
        insertQuery, 
        [req.body.user_id, hashedPassword, req.body.Full_name], (err, data) => {
        if(err) return res.status(500).json(err);

        res.status(200).json({message: "Successfully Inserted"})
    }
    );
};

export const DeleteAdminAccount = (req, res) => {
    const deleteQuery = "DELETE FROM `account` WHERE user_id = ?"

    db.query(
        deleteQuery,
        [req.body.user_id], (err, data) => {
            if(err) return res.status(500).json(err);

            res.status(200).json({message: "Account Deleted"})
        }
    )
}