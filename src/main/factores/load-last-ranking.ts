import { LastRankingLoaderService } from '@/data/services';
import { FakeRankingRepository } from '@/infra/repositoriest';
import { LoadLastRankingController } from '@/presentation/controllers';

export const makeLoadLastRankingFacture = () => {
  const repo = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repo);
  const controller = new LoadLastRankingController(loader);

  return controller;
};
