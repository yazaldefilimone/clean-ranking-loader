import { LastRankingLoader } from '@/domain/usecases';
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts';
import { RankingScoreViewModel } from '@/presentation/view-model';

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();

      return ok(RankingScoreViewModel.mapColetion(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}
