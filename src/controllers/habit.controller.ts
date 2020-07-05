import express from "express";
import UserService from "../services/user.service";
export default class HabitController {
  async createHabit(req: express.Request, res: express.Response) {
    const { email, name, frequency, startDate, time } = req.body;
    console.log(req.body);
    if (
      !email ||
      !name ||
      !frequency ||
      !Number(frequency) ||
      !startDate ||
      !time
    ) {
      return res.status(400).send({
        status: 400,
        message: "Bad Request",
      });
    } else {
      const userService = new UserService();
      userService
        .createNewHabitForUser(email, name, startDate, frequency, time)
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
}
