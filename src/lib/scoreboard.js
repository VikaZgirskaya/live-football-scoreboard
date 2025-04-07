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


export const updateGameScore = (games, gameData) => {
    return games.map(game => {
        if (game.gameId === gameData.gameId) {
            return { 
                ...game, 
                homeGoals: gameData.homeGoals, 
                awayGoals: gameData.awayGoals,
                gameGoals: gameData.homeGoals + gameData.awayGoals,
            };
        }
        return game;
    });
};


export const finishGame = (games, gameId) => {
    return games.map(game => {
        if (game.gameId === gameId) {
           return { ...game, gameFinished: true };
        }
        return game;
    });
};


export const getOnlineGamesSummary = games => {
    return [...games]
        .filter(game => !game.gameFinished)
        .sort((a, b) => {
            if (a.gameGoals !== b.gameGoals) return b.gameGoals - a.gameGoals;
            return b.timestamp - a.timestamp;
        });
};
