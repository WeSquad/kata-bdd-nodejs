const processScore = (agg, score) => {
  return 0
}

export const spareGame = (score: string) => {
  const scoreList: string[] = score.split(',')
  const result = scoreList.reduce(processScore, 0)

  return result
}
