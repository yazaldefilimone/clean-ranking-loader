import { RankingScoreModel } from '@/data/models';

export interface LoadLastRakingRepository {
  loadLastranking: () => Promise<RankingScoreModel[]>;
}
