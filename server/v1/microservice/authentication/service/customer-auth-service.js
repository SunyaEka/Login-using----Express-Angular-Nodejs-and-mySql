const mysql = require('../../../common/database/mysql-db');
const jwt    = require('jsonwebtoken');
const nodemailer = require('nodemailer');

class AuthService {
    constructor() {
        this.mysql = new mysql();
     }

    async createNewUser(data) {
        try {
            const result = await this.mysql.createRecord('customer_login.login', data)
            return result;
        } catch(err) {
            throw new Error(err);
        }
    }
    async findUser(data) {
        try {
            let information = data;
            let query;
            if(data.username && data.username.length===10) {
                query = 'mobilenumber';
                information =  data.username;
            }else if(data.username && (data.username.length>10 || data.username.length<10)) {
                query = 'email';
                information = data.username;
            }else if(data.mobilenumber) {
                query = 'mobilenumber';
                information = data.mobilenumber;
            }else if(data.email) {
                query = 'email';
                information = data.email
            }else if(data.token && data.newPassword) {
                query = 'verificationtoken';
                information =  data.token;
            }
            const check = await this.mysql.findRecord("customer_login.login",query, information);
            return check;
        } catch(err) {
            throw new Error(err);
        }
    }
    async createAuthenticationToken(user) {
        return new Promise((reslove, reject) => {
            const payload = {
                userId:user,
            };
            let token = jwt.sign(payload,'hum123',{expiresIn: '86400'});
            reslove(token);
        })
    }
    async updateUserPassword(data) {
        try {
            let values = data;
            let query;

            if(data.username && data.username.length===10) {
                query = 'mobilenumber';
            }else if(data.username && (data.username.length>10 || data.username.length<10)) {
                query = 'email';
            }else if(data.token) {
                query = 'verificationtoken';
            }
            if(data.emptyToken === true) {
                query = 'email';
            }
            const result = await this.mysql.updateRecord("customer_login.login",query, values);
            return result;
        } catch(err) {
            throw new Error(err);
        }
    }

    async updateToken(data) {
        try{
            let query = 'email';
            let values = data;
            const result = await this.mysql.updateRecord("customer_login.login",query, values);
            return result;
        }catch(err) {
            throw new Error(err);
        }
    }

    async sendMail(data) {
        console.log("INSIDE SENDMAIL SERVICE");
        try{
            const subject = " Forgot Password";
            const link = data.link;
            const name = data.name;
            const email = data.email;

            const body = `Hello ` + name + ',' + 
                         `<br><br>
                         Follow the instructions to create a new password.
                         <br><br>
                         Click <a href=${link} target="_blank">here</a>
                          <br><br>
                          Thank you!`;

            // let testAccount = await nodemailer.createTestAccount();
              
            let transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'user email',
                    pass: '****'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailOptions = {
                from: 'ankit.kumar@humonicsglobal.com',
                to: email,
                subject: subject,
                text: body,
                html: body
            };


            let info = await transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
                return info.response;
            });                                 
        }catch(err) {
            throw new Error(err);
        }
    }
}
module.exports = AuthService;