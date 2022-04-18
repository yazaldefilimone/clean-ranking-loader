export class RankingUnavalableError extends Error {
  constructor() {
    super('Ranking unavaible');
    this.name = 'RankingUnavalableError';
  }
}
