import { mapDomain,min, max } from "./utils"

export class Barchart {
    ctx: CanvasRenderingContext2D
    data: number[]
    width: number
    height: number
    constructor(ctx: CanvasRenderingContext2D, data: number[], width: number, height: number) {
        this.ctx = ctx
        this.data = data
        this.width = width
        this.height = height
    }

    draw() {
        const mapHeight = mapDomain(min(this.data), max(this.data), 0, this.height)
        this.data.forEach((item, index) => {
        this.ctx.fillRect(
                25 + index * (this.width / this.data.length),
                this.height - mapHeight(item),
                100,
                mapHeight(item)
            )
        })
    }

    addLabels() {
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 3.0
        this.ctx.beginPath()
        this.ctx.moveTo(25, 0)
        this.ctx.lineTo(25, this.height)
        this.ctx.lineTo(this.width, this.height)
        this.ctx.stroke()
    }
}
