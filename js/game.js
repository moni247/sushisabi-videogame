const Game = {
    title: 'Sushisabi',
    authors: 'Mónica Sánchez Ugena e Inés García Periáñez',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    platforms: [],
    // keys: {
    //    SPACE: 'Space'
    // },
    gameSize: { w: 700, h: 900 },

    gameInit() {
        this.setContext()
        this.setCanvasSize()
        this.drawProvisionalBackground()
        this.createPlatform()
        this.drawAll()
    },


    // init(id) {
    // this.canvasDom = document.getElementById(id)
    // this.ctx = this.canvasDom.getContext('2d')
    // this.setDimensions()
    // this.setEventListeners()
    // this.start()

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
        this.platforms.push(
            new Platform(this.ctx, 200, 250, 300)
        )
        console.log(this.platforms)
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawProvisionalBackground()
            this.platforms.forEach((elm) => {
                elm.draw()
            })
        }, 40)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }

}