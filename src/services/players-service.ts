import { PlayersModel, StatisticsModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayersModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);

    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deletePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let response = null;
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = HttpResponse.ok(data);
  }

  return response;
};
