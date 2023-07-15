export interface DatabaseConfig {
  getDatabaseType(): string;
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabasedatabase(): string;
  getDatabaseUserName(): string;
  getDatabasePassword(): string;
  getDatabaseAutoLoadEnt(): boolean;
  getDatabaseSync(): boolean;
}




































