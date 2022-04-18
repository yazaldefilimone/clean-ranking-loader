import { RankingScore } from '@/domain/entities';
import { LastRankingLoader } from '@/domain/usecases';
import { LoadLastRakingRepository } from '@/data/contracts';
import { RankingUnavalableError } from '@/domain/errors';

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(private readonly loadLastRankingrepository: LoadLastRakingRepository) {}
  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavalableError();
    }
    return this.loadLastRankingrepository.loadLastranking();
  }
}
