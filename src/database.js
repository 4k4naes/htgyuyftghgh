import { products } from "./constants.js";
import knex from "knex";
import fs from "fs";

export async function init() {
  const db = knex({
    client: "better-sqlite3",
    connection: {
      filename: "./database.db",
    },
    useNullAsDefault: true,
  });

  if (!fs.existsSync("./database.db")) {
    await db.schema.createTable("product", (table) => {
      table.increments("id").primary();
      table.text("category").notNullable();
      table.text("name").notNullable();
      table.text("description").notNullable();
      table.decimal("price").notNullable();
      table.text("image").notNullable();
      table.integer("stock").notNullable();
      table.integer("rating").notNullable();
      table.integer("reviews").notNullable();
    });

    await db("product").insert(products);
  }
}

export default { init };
