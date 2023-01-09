class YogiBear {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Yogi.png"), .02, 0, 37, 75, 11, 0.2);
    
        this.x = 0;
        this.y = 0;
        this.speed = 300;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}