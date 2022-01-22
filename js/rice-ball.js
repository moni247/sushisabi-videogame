class RiceBall {
    constructor(ctx, posX, posY, gameSize) {
        this.ctx = ctx
        this.riceBallPos = { x: posX, y: posY }
        // this.riceBallSize = { w: 50, h: 50 }
        this.riceBallRadius = 20
        this.riceBallVel = { x: 10, y: 1 }
        this.riceBallPhysics = { gravity: 5 }
        this.gameSize = gameSize
        // this.platform = platform
        // this.imageInstance = undefined

        this.initRiceBall()
    }

    initRiceBall() {
        this.draw()
        this.moveLeft()
        this.moveRight()
    }

    draw() {
        this.move()
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.arc(this.riceBallPos.x, this.riceBallPos.y, this.riceBallRadius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
    }

    move() {
        this.riceBallPos.y += this.riceBallPhysics.gravity


        this.checkBaseCollision()
    }

    checkBaseCollision() {
        if (this.riceBallPos.y >= this.gameSize.h - this.riceBallRadius) {
            this.riceBallPos.y -= (this.riceBallRadius / 2)
            this.riceBallPhysics.gravity = 0
        }
    }

    // this.platforms.forEach((elem) => {
    //     if (this.riceBallPos.y + this.riceBallRadius <= elem.platformPos.y) {
    //         this.riceBallPos.y = elem.platformPos.y
    //         console.log('hago algo')
    //     }
    // });


    moveLeft() {
        this.riceBallPos.x -= 15
    }

    moveRight() {
        this.riceBallPos.x += 15
    }

}