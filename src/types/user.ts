export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: any; // Firebase Timestamp type
}

export interface UserCreate {
  fullName: string;
  email: string;
  createdAt: any; // Firebase Timestamp type
}

export interface UserInterface {
  id: string;
  fullName: string;
  telephone?: string;
  email: string;
  profileImage?: string;
  profilePicture?: string;
  notifications: boolean;
  roles: string[];
  createdAt: string;
}