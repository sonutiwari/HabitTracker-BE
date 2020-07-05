import DBConnection from "../config/mongoose";
import UserModel, { userModel } from "../models/user.model";
import { HabitModel } from "../models/habit.model";
export default class UserService {
  async createUser(email: string, password: string) {
    const document = new userModel({
      email,
      password,
    });
    const connection = new DBConnection();
    connection.connect();
    return userModel
      .create(document)
      .then((resp) => Promise.resolve(resp))
      .catch((err) => Promise.reject(err))
      .finally(() => connection.close());
  }

  async readUserData(email: string): Promise<any> {
    const connection = new DBConnection();
    connection.connect();
    try {
        const data: any = await userModel.findOne({email: email});
        const habits = [];
        for (const habit of data.habits){
            const habitData = await HabitModel.findById(habit._id);
            habits.push(habitData);
        }
        return Promise.resolve({password: data.password, email: data.email, habits: habits});
    } catch(err) {
        return Promise.reject(err);
    } finally {
        connection.close();
    }
  }
  updateUserData() {}
  deleteUserData() {}



  async createNewHabitForUser(
    email: string,
    name: string,
    startDate: string,
    frequency: string,
    time: string
  ) {
    const document = new HabitModel({ name, startDate, frequency, time });
    const connection = new DBConnection();
    connection.connect();
    return userModel
      .updateOne({ email: email }, { $push: { habits: { $each: [document] } } })
      .then((resp) => {
        return HabitModel.create(document)
          .then((resp) => Promise.resolve(resp))
          .catch((err) => Promise.reject(err))
          .finally(() => connection.close());
      })
  }
}
