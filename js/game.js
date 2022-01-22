const Game = {
    title: 'Sushisabi',
    authors: 'Mónica Sánchez Ugena e Inés García Periáñez',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    // platform: this.platform,
    // keys: {
    //    SPACE: 'Space'
    // },
    gameSize: { w: 700, h: 900 },

    gameInit() {
        this.setContext()
        this.setCanvasSize()
        this.drawProvisionalBackground()
        this.createPlatform()
        this.createRiceBall()
        this.checkPlatformCollision()
        this.drawAll()
        this.setEventHandlers()
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    setCanvasSize() {
        document.querySelector('#myCanvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.gameSize.h)
    },

    drawProvisionalBackground() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    createPlatform() {
        this.platform = new Platform(this.ctx, 0, 200, 250)
        // this.platforms.push(
        //     ,
        //     new Platform(this.ctx, 250, 320, 220),
        //     new Platform(this.ctx, 0, 450, 250),
        //     new Platform(this.ctx, 500, 450, 220),
        //     new Platform(this.ctx, 200, 650, 150),
        //     new Platform(this.ctx, 400, 770, 200)
        // )
    },

    createRiceBall() {
        this.riceBall = new RiceBall(this.ctx, 40, 60, this.gameSize)
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawProvisionalBackground()
            this.riceBall.draw()
            this.platform.draw()
            // this.platforms.forEach((elm) => {
            //     elm.draw()
            // })
            this.checkPlatformCollision()
        }, 40)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    checkPlatformCollision() {
        if (this.riceBall.riceBallPos.y >= this.platform.platformPos.y - this.riceBall.riceBallRadius - 1) {
            this.riceBall.riceBallPhysics.gravity = 0
        }

        if (this.riceBall.riceBallPos.x >= this.platform.platformPos.x + (this.riceBall.riceBallRadius * 3)) {
            this.riceBall.riceBallPhysics.gravity = 0
        }

        if (this.riceBall.riceBallPos.x <= this.platform.platformPos.x + (this.riceBall.riceBallRadius * 3)) {
            this.riceBall.riceBallPhysics.gravity = 0
        }

        this.riceBall.riceBallPhysics.gravity = 5

        // this.riceBall.riceBallPos.x >= this.platform.platformPos.x - this.riceBall.riceBallRadius &&
        // this.riceBall.riceBallPos.x <= this.platform.platformPos.x + this.platform.platformSize.w) {

    },


    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.riceBall.moveRight() : null
            key === 'ArrowLeft' ? this.riceBall.moveLeft() : null
        })
    }

}