export const startGame = (games, gameData) => {
  
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
