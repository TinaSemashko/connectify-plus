import humps from "humps";
import { knex } from "../../db";
import { User, UserCamel } from "./types/user";

export const table = "users";

export const getUsers = async () => {
  const results = await knex<User>(table).select("*");

  if (results && results.length) {
    return humps.camelizeKeys(results) as UserCamel[];
  }

  return null;
};

export const getUser = async (email: string, password: string) => {
  const results = await knex<User>(table)
    .select("*")
    .where({ email, password });

  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as UserCamel;
  }

  return null;
};

export const putUserAbonnement = async (email: string) => {
  const results = await knex<User>(table)
    .update({ abonnement: true })
    .where({ email });

  if (results) return results;

  return null;
};

export const createUser = async (data: UserCamel) => {
  const results: number[] = await knex<User>(table)
    .insert(humps.decamelizeKeys({ ...data }))
    .returning("id");

  return results[0];
};
