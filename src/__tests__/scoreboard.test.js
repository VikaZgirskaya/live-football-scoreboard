import { startGame } from '../lib/scoreboard';

describe('Live Football Scoreboard', () => {

    test('start one game with initial score 0-0', () => {
        const games = [];
        const gameOne = {
            gameId: 1,
            homeTeam: 'Mexico',
            awayTeam: 'Canada',
            timestamp: 1712418744000,
        }
        const result = startGame(games, gameOne);

        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            gameId: gameOne.gameId,
            homeTeam: gameOne.homeTeam,
            awayTeam: gameOne.awayTeam,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
            gameFinished: false,
            timestamp: gameOne.timestamp,
        });
    });
});
