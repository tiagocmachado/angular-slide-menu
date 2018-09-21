export class SaveUserResource {
  public firstName: string;
  public lastName: string;
  public companyName: string;
  public email: string;
  public password: string;

  constructor(firstName: string = '', lastName: string = '', companyName: string = '', email: string = '', password: string = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
    this.email = email;
    this.password = password;
  }
}
