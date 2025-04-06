import { startGame, updateGameScore, finishGame } from '../lib/scoreboard';

describe('Live Football Scoreboard', () => {
    const gameOne = {
        gameId: 1,
        homeTeam: 'Mexico',
        awayTeam: 'Canada',
        gameFinished: false,
        timestamp: 1712418744000,
    }
    const gameTwo = {
        gameId: 2,
        homeTeam: 'Spain',
        awayTeam: 'Brazil',
        gameFinished: false,
        timestamp: 1712425944000,
    }
    const gameThree = {
        gameId: 3,
        homeTeam: 'Germany',
        awayTeam: 'France',
        gameFinished: false,
        timestamp: 1712428244000,
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
        });
    });

    test('start two games with initial score 0-0', () => {
        const games = [gameOne];
        const result = startGame(games, gameTwo);

        expect(result).toHaveLength(2);
        expect(result[1]).toEqual({
            ...gameTwo,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
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
        };
      
        const result = updateGameScore(games, updatedGame);
      
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            ...updatedGame,
            gameGoals: updatedGame.homeGoals + updatedGame.awayGoals,
        });
    });

    test('update two games scores', () => {
        const games = [gameOne, gameTwo, gameThree];
      
        const updatedGameOne = {
            ...gameOne,
            homeGoals: 0,
            awayGoals: 2,
        };

        const updatedGameTwo = {
            ...gameTwo,
            homeGoals: 3,
            awayGoals: 2,
        };
      
        const resultOne = updateGameScore(games, updatedGameOne);
        const resultTwo = updateGameScore(resultOne, updatedGameTwo);
      
        expect(resultTwo).toHaveLength(3);
        expect(resultTwo[0]).toEqual({
            ...updatedGameOne,
            gameGoals: updatedGameOne.homeGoals + updatedGameOne.awayGoals,
        });
        expect(resultTwo[1]).toEqual({
            ...updatedGameTwo,
            gameGoals: updatedGameTwo.homeGoals + updatedGameTwo.awayGoals,
        });
        expect(resultTwo[2]).toEqual(gameThree);
    });

    test('finish one game', () => {
        const games = [gameOne];
      
        const result = finishGame(games, gameOne.gameId);
      
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            ...gameOne,
            gameFinished: true,
        });
    });

    test('finish two games', () => {
        const games = [gameOne, gameTwo, gameThree];
      
        const resultOne = finishGame(games, gameOne.gameId);
        const resultTwo = finishGame(resultOne, gameTwo.gameId);
      
        expect(resultTwo).toHaveLength(3);
        expect(resultTwo[0]).toEqual({
            ...gameOne,
            gameFinished: true,
        });
        expect(resultTwo[1]).toEqual({
            ...gameTwo,
            gameFinished: true,
        });
        expect(resultTwo[2]).toEqual(gameThree);
    });
    

});
