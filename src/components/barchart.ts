import { mapDomain,min, max } from "./utils"

export const barchart = (
    ctx: CanvasRenderingContext2D,
    data: number[], 
    width: number,
    height: number
) => {
    const mapHeight = mapDomain(min(data), max(data), 0, height)

    data.forEach((item, index) => {
    ctx.fillRect(
            25 + index * (width / data.length),
            height - mapHeight(item),
            100,
            mapHeight(item)
        )
    })
}