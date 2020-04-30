const calculateStrike = (frames: string[], currentIndex: number): number => {
  const [nextFrameFirstAttempt, nextFrameSecondAttempt] = Array.from(frames[currentIndex + 1])
  const [nextNextFrameFirstAttempt] = Array.from(frames[currentIndex + 2])
  let strikeResult = 10
  if (nextFrameFirstAttempt === 'X') {
    strikeResult += 10
    if (nextNextFrameFirstAttempt === 'X') {
      strikeResult += 10
    } else {
      strikeResult += parseInt(nextNextFrameFirstAttempt, 10)
    }
  } else {
    strikeResult += parseInt(nextFrameFirstAttempt, 10)
    if (nextFrameSecondAttempt === '/') {
      strikeResult += 10 - parseInt(nextFrameFirstAttempt, 10)
    } else {
      strikeResult += parseInt(nextFrameSecondAttempt, 10)
    }
  }

  return strikeResult
}

type ShouldCalculateSpare = (index: number, array: string[]) => boolean
const shouldCalculateSpare: ShouldCalculateSpare = (index, array) => {
  return index > 0 && array[index - 1].indexOf('/') !== -1
}

type CalculateSpare = (currentFrame: string) => number
const calculateSpare: CalculateSpare = (currentFrame): number => {
  const [firstAttempt] = Array.from(currentFrame)
  return firstAttempt === 'X' ? 10 : parseInt(firstAttempt, 10)
}

type CalculateCurrentScore = (firstAttempt: string, secondAttempt: string) => number
const calculateCurrentScore: CalculateCurrentScore = (firstAttempt, secondAttempt) => {
  return parseInt(firstAttempt, 10) + parseInt(secondAttempt, 10)
}

type ReplaceDashesWithZeros = (frame: string) => string
const replaceDashesWithZeros: ReplaceDashesWithZeros = frame => frame.replace(/-/gim, '0')

type ProcessScore = (aggregate: number, score: string, index: number, array: string[]) => number
const processScore: ProcessScore = (agg, score, index, array) => {
  if (index > 9) {
    return agg
  }
  const [firstAttempt, secondAttempt] = score.split('')
  const hasDoneASpare = score.indexOf('/') !== -1
  const hasDoneAStike = score.indexOf('X') !== -1
  let result = agg
  if (hasDoneASpare) {
    result += 10
  } else if (hasDoneAStike) {
    result += calculateStrike(array, index)
  } else {
    result += calculateCurrentScore(firstAttempt, secondAttempt)
  }
  if (shouldCalculateSpare(index, array)) {
    result += calculateSpare(score)
  }

  return result
}

export const spareGame = (score: string): number => {
  const scoreList: string[] = score.split(',')
  const result = scoreList.map(replaceDashesWithZeros).reduce(processScore, 0)

  return result
}
