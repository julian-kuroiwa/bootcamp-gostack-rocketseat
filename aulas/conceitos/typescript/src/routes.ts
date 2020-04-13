import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "julian.kuroiwa@email.com", 
    password: "1234",
    techs: [
      "NodeJS",
      "ReactJS",
      "React Native",
      {
        tech: "VueJS",
        experience: 100
      }
    ]
  });

  return response.json("Hello World");
}