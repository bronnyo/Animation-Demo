class Background {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
    };
    
    update() {
        
    };
    
    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./pixelforest.png"), 0, 0, 2048, 1536);
    }
}