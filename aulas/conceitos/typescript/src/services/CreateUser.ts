interface techsObject {
  tech: string,
  experience: number
}

interface createUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | techsObject>
}

export default function CreateUser({ name, email, password}:createUserData) {
  const user = {
    name,
    email,
    password
  }
}