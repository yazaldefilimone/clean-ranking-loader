import { RankingScore } from '@/domain/entities';

export class RankingScoreViewModel {
  player: Player;
  score: number;
  matchdate: string;
  heros: Hero[];
  static map(entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchdate: entity.matchdate.toISOString(),
    };
  }
  static mapColetion(entity: RankingScore[]): RankingScoreViewModel[] {
    return entity.map(RankingScoreViewModel.map);
  }
}

type Player = {
  name: string;
  country: string;
};

type Hero = {
  name: string;
  level: number;
};
