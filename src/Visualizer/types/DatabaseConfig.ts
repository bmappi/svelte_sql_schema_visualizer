import type { EdgeConfig } from "./EdgeConfig";
import type { SchemaColors } from "./SchemaColors";
import type { TableConfig } from "./TableConfig";
import type { TablePositions } from "./TablePositions";

export type Database = {
  name: string;
  description: string;
};

export type Databases = {
  [databaseName: string] : Database
};

export type DatabaseConfig = {
  tables: TableConfig[],
  edgeConfigs: EdgeConfig[],
  schemaColors: SchemaColors,
  tablePositions: TablePositions
};

export type DatabaseConfigs = {
  [databaseName: string] : DatabaseConfig
};
