export interface BirthChart {
  userId: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  birthHour: number;
  birthMinute: number;
  birthPlace: {
    city: string;
    latitude: number;
    longitude: number;
  };
  createdAt: any; // Firebase Timestamp
}