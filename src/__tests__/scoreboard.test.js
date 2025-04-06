import { startGame, updateGameScore } from '../lib/scoreboard';

describe('Live Football Scoreboard', () => {
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
            ...gameOne,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
            gameFinished: false,
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
            ...gameTwo,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
            gameFinished: false,
        });
    });

    test('throws error if the same game started', () => {
        const games = [gameOne];
        expect(() => {
            startGame(games, gameOne);
        }).toThrow('The game already started.');
    });

    test('update game score to 0-1', () => {
        const games = [gameOne];
      
        const updatedGame = {
          ...gameOne,
          homeGoals: 0,
          awayGoals: 1,
          timestamp: 1712420244000,
        };
      
        const result = updateGameScore(games, updatedGame);
      
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
          ...updatedGame,
          gameGoals: updatedGame.homeGoals + updatedGame.awayGoals,
          gameFinished: false,
        });
      });
});
