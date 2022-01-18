const db = require('../service/connect');
const mdlsUser = require("../models/users");
var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs");
const config=require('../config/authconfig')

module.exports = {
    signUp: async (req, res) => {
        try {
            let prenom = req.body.prenom; mail = req.body.email, hashPassword = bcrypt.hashSync(req.body.password, 8);
            let role='user';
            let userBm=await mdlsUser.checkUserByMail(mail)
            let userBn=await mdlsUser.checkUserByName(prenom)
            if(!(userBm.length===0 || userBn===0) ){
                res.send({
                    message:"Email or username already in use"
                })
            }else if(!(userBm.length===0) && !(userBm.length===0)){
                res.send({
                    message:"This account is already exist,please use other mail and username"
                })
            }else{
                let useR =await mdlsUser.create(prenom,mail,hashPassword,role);
                res.status(200).send({
                    message:"Created a new account successfully"
                })
            }
        } catch (error) {
            res.send(error)

        }
    },
    signin: async (req,res) => {
        try {
            let email = req.body.email;
            if(!email){
                return res.status(404).send(
                    {
                        message:"Please put your email"
                    }
                )
            }
            let useR = await mdlsUser.getOneUserM(email);
            console.log(useR);
            if (!useR.rows[0]) {
                return res.status(404).send({
                    message: "User Not found."
                })
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                useR.rows[0].password

            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid password"
                });
            }
            var token = jwt.sign({ id: useR.rows[0].id }, config.secret, {
                expiresIn: 86400
            });


            res.status(200).send({
                id: useR.rows[0].id,
                username: useR.rows[0].prenom,
                email: useR.rows[0].email,
                role: useR.rows[0].role,
                token: token
            });

        } catch (error) {
            res.status(500).send(error)

        }

    }
}

