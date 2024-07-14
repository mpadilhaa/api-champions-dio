import { dbClubs } from "../database/db";
import { ClubsModel } from "../models/clubs-model";

const database = dbClubs;

export const findAllClubs = async (): Promise<ClubsModel[]> => {
  return database;
};
