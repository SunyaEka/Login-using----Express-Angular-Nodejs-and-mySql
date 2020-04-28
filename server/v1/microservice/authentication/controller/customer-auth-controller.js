const customerAuthService = require('../service/customer-auth-service');
class customerAuthController {

    constructor() {
        this.customerAuthService = new customerAuthService();
        this.createUser= this.createUser.bind(this);
        this.fetchUser =this.fetchUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.forgetPassword = this.forgetPassword.bind(this);
        this.createNewPassword = this.createNewPassword.bind(this);
    }

    async createUser(req, res) {
        console.log("INSIDE CREATE USER", req.body);
        const data = req.body;
        let json ={};
        try {
            const check = await this.customerAuthService.findUser(data);

            if(check.length===0) {
                const result = await this.customerAuthService.createNewUser(data);

                if(result) {
                    json = {
                        "response": "SUCCESS"
                    };
                    res.send(json);
                    res.end();
                    return;
                }
            }else {
                json = {
                    "response": "ERROR",
                    "message": "Mobile Number Already exist!"
                };
                res.send(json);
                res.end();
                return;
            }
               
        }catch (e) {
            console.log("ERROR:", e);
            json = {
                "response": "ERROR",
                "message": e
            };
            res.send(json);
            res.end();
        }
    }

    // For Login Purpose

    async fetchUser(req, res) {
        console.log("INSIDE FETCH USER", req.body);
        let json = {};
        try {
            const checkUser = await this.customerAuthService.findUser(req.body);
            if(checkUser && checkUser[0]) {
                let userpassword = checkUser[0].password;
                if(userpassword === req.body.password) {

                    const token = await this.customerAuthService.createAuthenticationToken(checkUser[0].mobilenumber);
                    json = {
                        "response": "SUCCESS",
                        "token": token
                    };
                    res.send(json);
                    res.end();
                    return;
                }else {
                    json = {
                        "response": "ERROR",
                        "message": "Password is incorrect"
                    };
                    res.send(json);
                    res.end();
                    return;
                }
            }else {
                json ={
                    "response": "ERROR",
                    "message": "User not Found"
                };
                res.send(json);
                res.end();
                return;
            }
        }catch(e) {
            console.log("ERROR:",e);
            json = {
                "response": "ERROR",
                "message": e
            };
            res.send(json);
            res.end();
        }
    }

    // For Update Password
    async updateUser(req, res) {
        console.log("INSIDE UPDATE USER", req.body);
        let json ={};
        try {
            let findRecord = await this.customerAuthService.findUser(req.body);
            if(findRecord && findRecord[0]) {
                let userOldPassword = findRecord[0].password;
                if(userOldPassword === req.body.oldPassword) {
                    let result = await this.customerAuthService.updateUserPassword(req.body);
                    json = {
                        "response": "SUCCESS",
                        "message": "PASSWORD SUCCESSFULLY UPDATED"
                    };
                    res.send(json);
                    res.end();
                    return;
                }else {
                    json = {
                        "response": "ERROR",
                        "message": "Old Password Doesn't Match"
                    };
                    res.send(json);
                    res.end();
                    return;
                }
            }else {
                json = {
                    "response": "ERROR",
                    "message": "User Doesn't Exists"
                };
                res.send(json);
                res.end();
                return;
            }
        }catch(e) {
            console.log("INSIDE CATCH",e);
            json = {
                "response": "ERROR",
                "message": e
            };
            res.send(json);
            res.end();
        }
    }

    async forgetPassword(req, res) {
        console.log("INSIDE FORGET PASSWORD");
        let json = {};
        let verificationLink;
        let data ={};
        try {
            let findUser = await this.customerAuthService.findUser(req.body);
            if(findUser && findUser[0]) {

                if(findUser[0].verificationtoken=='') {

                  let randomToken = Math.random().toString(36).substr(2);
                  verificationLink = "http://localhost:8200/create-new-password/"+randomToken;

                  let updateData = {
                    username : findUser[0].email,
                    token : randomToken
                  } 
  
                  data = {
                      "email": findUser[0].email,
                      "link": verificationLink,
                      "name": findUser[0].firstname
                  };

                    let setTokenDb = await this.customerAuthService.updateToken(updateData);
                    const sendVerificationMail = await this.customerAuthService.sendMail(data);
                }
                if(!findUser[0].verificationtoken=='') {
                    verificationLink = "http://localhost:8200/create-new-password/"+findUser[0].verificationtoken;

                    data = {
                      "email": findUser[0].email,
                      "link": verificationLink,
                      "name": findUser[0].firstname
                  };
                    const sendVerificationMail = await this.customerAuthService.sendMail(data);
                }

                json = {
                    "response": "SUCCESS",
                    "message":  "Please Check Your Email For the reset password"
                };
                res.send(json);
                res.end();
                return;
            }else {
                json = {
                    "response": "ERROR",
                    "message":  "No User Exist with this EmailId"
                };
                res.send(json);
                res.end();
                return;
            }
        }catch(e) {
            console.log("INSIDE ERROR");
            json = {
                "response": "ERROR",
                "message": e
            };
            res.send(json);
            res.end();
        }
    }

    async createNewPassword(req, res) {
        console.log("Inside create new password",req.body);
        let json = {};

        try {

          let findRecord = await this.customerAuthService.findUser(req.body);
          if(findRecord && findRecord[0]) {

            let changeDetails = {
                newPassword : req.body.newPassword,
                token : req.body.token,
                email : findRecord[0].email,
                changePasswordReq : true
            }
            let result = await this.customerAuthService.updateUserPassword(changeDetails);
            let data = {
                token: findRecord[0].verificationtoken,
                email : findRecord[0].email,
                emptyToken : true,
            }
            let deleteToken = await this.customerAuthService.updateUserPassword(data);
            json = {
              "response": "SUCCESS",
              "message": "Password changed Successfully!"
            }
            res.send(json);
            res.end();
            return;
          }else {
            json = {
              "response": "ERROR",
              "message": "TOKEN IS NOT VALID"
            }
            res.send(json);
            res.end();
            return;
          }
        }catch(e) {
          json = {
            "response": "ERROR",
            "message": e
          }
          res.send(json);
          res.end();            
        }
    }
}
module.exports = customerAuthController;