import { startGame } from '../lib/scoreboard';

describe('startGame()', () => {
    const gameOne = {
        gameId: 1,
        homeTeam: 'Mexico',
        awayTeam: 'Canada',
        timestamp: 1712418744000,
    }

    test('start one game with initial score 0-0', () => {
        const games = [];
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

    test('start two games with initial score 0-0', () => {
        const games = [gameOne];
        const gameTwo = {
            gameId: 2,
            homeTeam: 'Spain',
            awayTeam: 'Brazil',
            timestamp: 1712425944000,
        }
        const result = startGame(games, gameTwo);

        expect(result).toHaveLength(2);
        expect(result[1]).toEqual({
            gameId: gameTwo.gameId,
            homeTeam: gameTwo.homeTeam,
            awayTeam: gameTwo.awayTeam,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
            gameFinished: false,
            timestamp: gameTwo.timestamp,
        });
    });

    test('throws error if the same game started', () => {
        const games = [gameOne];
        expect(() => {
            startGame(games, gameOne);
        }).toThrow('The game already started.');
    });
});
