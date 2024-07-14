import { findAllClubs } from "../repositories/clubs-repositories";
import * as HttpResponse from "../utils/http-helper";

export const getClubService = async () => {
  const data = await findAllClubs();

  const response = await HttpResponse.ok(data);

  return response;
};
