export class User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  focus?: { text: string, done: boolean };
  working_hours?: number;
}
