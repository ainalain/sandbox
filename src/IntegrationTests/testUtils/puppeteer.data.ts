export interface Credentials {
  username: string;
  password: string;
}

/*
 * These roles are examples of user types: every user type could have
 * its own interface and available actions
 */
export enum UserTypes {
  Doctor = 'Doctor',
  Parent = 'Parent',
  Admin = 'Admin'
}

/*
 * I know it looks stupid but this is only an example:
 * if you have test user accounts for development and testing,
 * you can use them here for your automated tests
 */
export const doctorCredentials: Credentials = {
  username: "doctor",
  password: "doctor",
};

export const parentCredentials: Credentials = {
  username: "parent",
  password: "parent",
};

export const adminCredentials: Credentials = {
  username: "admin",
  password: "admin",
};

export const credentials = {
  [UserTypes.Doctor]: doctorCredentials,
  [UserTypes.Parent]: parentCredentials,
  [UserTypes.Admin]: adminCredentials,
};
