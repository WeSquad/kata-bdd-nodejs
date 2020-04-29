type ShouldCalculateSpare = (index: number, array: string[]) => boolean
const shouldCalculateSpare: ShouldCalculateSpare = (index, array) => {
  return index > 0 && array[index - 1].indexOf('/') !== -1
}

type CalculateSpare = (actualScore: number) => (currentFrame: string) => number
const calculateSpare: CalculateSpare = (actualScore) => (currentFrame) => {
  const [firstAttempt, secondAttempt] = Array.from(currentFrame)
  return actualScore + 10 + parseInt(firstAttempt, 10)
}

type CalculateCurrentScore = (firstAttempt: string, secondAttempt: string) => number
const calculateCurrentScore: CalculateCurrentScore = (firstAttempt, secondAttempt) => {
  return parseInt(firstAttempt, 10) + parseInt(secondAttempt, 10)
}

type ReplaceDashesWithZeros = (frame: string) => string[]
const replaceDashesWithZeros: ReplaceDashesWithZeros = (frame) =>
  Array.from(frame.replace(/-/gim, '0'))

const processScore = (agg, score, index, array) => {
  const [firstAttempt, secondAttempt] = replaceDashesWithZeros(score)
  const hasDoneASpare = score.indexOf('/') !== -1

  if (hasDoneASpare) {
    return agg
  }
  if (shouldCalculateSpare(index, array)) {
    return calculateSpare(agg)(score) + calculateCurrentScore(firstAttempt, secondAttempt)
  }
  return agg + calculateCurrentScore(firstAttempt, secondAttempt)
}

export const spareGame = (score: string): number => {
  const scoreList: string[] = score.split(',')
  const result = scoreList.reduce(processScore, 0)

  return result
}
