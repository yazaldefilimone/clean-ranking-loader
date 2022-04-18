export type RankingScore = {
  player: Player;
  score: number;
  matchdate: Date;
  heros: Hero[];
};

type Player = {
  name: string;
  country: string;
};

type Hero = {
  name: string;
  lever: number;
};
