export interface PlayersModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: StatisticsModel;
}

export interface StatisticsModel {
  overall: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}
