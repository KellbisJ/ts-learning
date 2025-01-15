export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  isConnected(name: string): boolean;
  disconnect(): void;
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  isConnected(name: string): boolean {
    return false;
  }
  disconnect(): void {}
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  isConnected(name: string): boolean {
    return false;
  }
  disconnect(): void {}
}
