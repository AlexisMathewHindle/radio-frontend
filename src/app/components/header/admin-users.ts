export class AdminUsers {
  constructor(
    public userName: string,
    public userEmail: string,
  ) {
    this.userName = userName;
    this.userEmail = userEmail;
  }
}
