import { dbPlayers } from "../database/db";
import { PlayersModel, StatisticsModel } from "../models/player-model";

const database: PlayersModel[] = dbPlayers;

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

export const deletePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
