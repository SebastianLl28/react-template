export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public maidenName: string;
  public age: number;
  public gender: string;
  public email: string;
  public image: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    image: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.maidenName = maidenName;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.image = image;
  }
}
