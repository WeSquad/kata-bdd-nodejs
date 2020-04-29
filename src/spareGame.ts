const processScore = (agg, score) => {
  let [firstAttempt, secondAttempt] = Array.from(score)
  if (firstAttempt === '-') {
    firstAttempt = 0
  }
  if (secondAttempt === '-') {
    secondAttempt = 0
  }
  return agg + parseInt(firstAttempt, 10) + parseInt(secondAttempt, 10)
}

export const spareGame = (score: string) => {
  const scoreList: string[] = score.split(',')
  const result = scoreList.reduce(processScore, 0)

  return result
}
