import joi from "joi";
import humps from "humps";
import { knex } from "../../db";
import { User, UserCamel } from "./types/user";
import { createUserSchema } from "./schemas/user";

export const table = "users";

export const create = async (data: UserCamel) => {
  const v = joi
    .object(createUserSchema)
    .validate(data, { presence: "required" });
  if (v.error) {
    throw new Error(`${v.error}`);
  }
  const results: number[] = await knex<User>(table)
    .insert(humps.decamelizeKeys({ ...data }))
    .returning("id");

  return results[0];
};

export const findById = async (id: string) => {
  const results = await knex<User>(table).select("*").where({ id });

  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as UserCamel;
  }

  return null;
};

export const getUser = async (email: string) => {
  const results = await knex<User>(table).select("*").where({ email });

  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as UserCamel;
  }

  return null;
};

export const getUsers = async () => {
  const results = await knex<User>(table).select("*");

  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as UserCamel;
  }

  return null;
};
