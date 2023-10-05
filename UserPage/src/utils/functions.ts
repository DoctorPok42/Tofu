const moyenne = (userStats: any) => {
    var score = 0;

    score += userStats.kill;
    score -= userStats.death;
    score *= (userStats.tempdejeu * 0.5)
    score /= 10;

    return score;
}

export default moyenne;
