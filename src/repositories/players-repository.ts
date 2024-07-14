import { db } from "../database/db";
import { PlayersModel } from "../models/player-model";

const database: PlayersModel[] = db;

export const findAllPlayers = async (): Promise<PlayersModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayersModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const createPlayer = async (
  id: number
): Promise<PlayersModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayersModel) => {
  database.push(player);
};
