import { useEffect, useRef } from "react"
import { barchart } from "./barchart"

const drawGrid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.strokeStyle = "#0184766e"
  ctx.beginPath()
  for (let i = 0; i < width; i += 100) {
    ctx.moveTo(i, 0)
    ctx.lineTo(i, height)
    ctx.stroke()
  }

  for (let j = 0; j < height; j += 100) {
    ctx.moveTo(0, j)
    ctx.lineTo(width, j)
    ctx.stroke()
  }
  ctx.closePath()
}

const draw = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    return
  }

  drawGrid(ctx, canvas.width, canvas.height)

  ctx.fillStyle = "#01847657"
  ctx.fillRect(0, 0, 500, 500)

  const data = [16, 68, 20, 30, 54, 60, 20, 25, 23, 2]

  ctx.fillStyle = "#b7d96a"
  barchart(ctx, data, canvas.width, canvas.height)
}

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      draw(canvasRef.current)
    }
  }, [canvasRef])

  return <canvas ref={canvasRef} width={1200} height={800} />
}

export default Canvas
