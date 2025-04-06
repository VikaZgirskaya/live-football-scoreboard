export const startGame = (games, gameData) => {
    if (games.some(game => game.gameId === gameData.gameId)) {
        throw new Error('The game already started.');
    }
  
    return [
        ...games,
        {
            gameId: gameData.gameId,
            homeTeam: gameData.homeTeam,
            awayTeam: gameData.awayTeam,
            homeGoals: 0,
            awayGoals: 0,
            gameGoals: 0,
            gameFinished: false,
            timestamp: gameData.timestamp,
        }
    ];
};


export const updateGameScore = (games, newGameData) => {
    return games;
};
