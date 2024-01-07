export interface isPlayer {
  name: string;
  age: number;
  surname: string;
  country: string;

  getProperty(): string;
  play(): void;
}
