class Platform {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }
        this.platformSize = { w: width, h: 20 }
        // y si las convertimos en imágenes, tendrán una propiedad this.imagesInstance = undefined

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.y)
    }
}