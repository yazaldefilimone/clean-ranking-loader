import { Router } from 'express';
import { expressAdapter } from '../adapters';
import { makeLoadLastRankingFacture } from '../factores/load-last-ranking';

export default (router: Router): void => {
  router.get('/ranking/last', expressAdapter(makeLoadLastRankingFacture()));
};
