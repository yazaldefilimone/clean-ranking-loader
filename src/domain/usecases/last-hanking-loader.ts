import { RankingStore } from '@/domain/entities';

export interface LastRankingLoader {
  load: () => Promise<RankingStore[]>;
}
