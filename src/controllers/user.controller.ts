import express from "express";
import UserService from "../services/user.service";
import bcrypt from "bcryptjs";
export default class UserController {
  async createUser(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        status: 400,
        message: "Bad Request",
      });
    } else {
      const userService = new UserService();
      userService
        .createUser(email, password)
        .then((response) => {
          return res.status(200).send({
            status: 200,
            data: response,
          });
        })
        .catch((err) =>
          res.status(500).send({
            status: 500,
            message: err,
          })
        );
    }
  }
  userLogin(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        status: 400,
        message: "Bad Request",
      });
    } else {
      const userService = new UserService();
      userService.readUserData(email).then((response) => {
        if (!response) {
          return res.status(401).send({
            status: 401,
            message: "Invalid email",
          });
        }
        console.log(response.habits, response);
        bcrypt
          .compare(password, response.password)
          .then((data) => {
            if (data)
              return res.status(200).send({
                status: 200,
                message: "Login Successfull",
                habits: response.habits
              });
            else
              return res.status(401).send({
                status: 401,
                message: "Invalid password",
              });
          })
          .catch((err) =>
            res.status(500).send({
              status: 500,
              message: "Login Failed",
              data: err,
            })
          );
      });
    }
  }
}
