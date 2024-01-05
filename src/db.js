import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "bfmzgsa0ccj7kpgn295k-mysql.services.clever-cloud.com",
  user: "ucrzho7p6hgzrcqn",
  password: "A8vjzGQCP7dOYRexrrka",
  port: 3306,
  database: "bfmzgsa0ccj7kpgn295k",
});
