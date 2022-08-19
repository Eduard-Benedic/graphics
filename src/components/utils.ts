
/** map one domain to the other */
export const mapDomain = (
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
  ) => {
    /** we need the ratio for the absolute distance of each domain */
    const ratio =
      Math.sqrt((toMax - toMin) ** 2) / Math.sqrt((fromMax - fromMin) ** 2)
  
    return (target: number): number => {
        return toMin + ratio * target
    }
}

/** find the minimum number */
export const min = (num: number[]) => {
    return Math.min(...num)
}

/** find the maximum number */
export const max = (num: number[]) => {
    return Math.max(...num)
}