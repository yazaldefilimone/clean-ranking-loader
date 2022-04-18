import { LoadLastRakingRepository } from '@/data/contracts';
import { RankingScoreModel } from '@/data/models';
import { ranking } from '@/infra/data-soures';
export class FakeRankingRepository implements LoadLastRakingRepository {
  async loadLastranking(): Promise<RankingScoreModel[]> {
    return ranking.map((item) => ({
      player: item.user,
      score: item.score,
      matchdate: new Date(item.data),
      heros: item.heroes,
    }));
  }
}
