function buildRoom (numChests: number) {
    for (let index = 0; index < numChests; index++) {
        r = randint(4, 11)
        c = randint(4, 11)
        tiles.setTileAt(tiles.getTileLocation(c, r), sprites.dungeon.chestClosed)
        rand = randint(0, 3)
        direction = "up"
        if (rand == 0) {
            r += -1
            direction = "up"
        } else if (rand == 1) {
            c += 1
            direction = "right"
        } else if (rand == 2) {
            r += 1
            direction = "down"
        } else {
            c += -1
            direction = "left"
        }
        while (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(c, r))) && !(tiles.tileAtLocationEquals(tiles.getTileLocation(c, r), sprites.dungeon.chestClosed))) {
            tiles.setTileAt(tiles.getTileLocation(c, r), sprites.dungeon.floorLight0)
            tiles.setWallAt(tiles.getTileLocation(c, r), true)
            rand = randint(0, 3)
            if (rand == 0 && !(direction == "down")) {
                r += -1
                direction = "up"
            } else if (rand == 1 && !(direction == "left")) {
                c += 1
                direction = "left"
            } else if (rand == 2 && !(direction == "up")) {
                r += 1
                direction = "down"
            } else {
                c += -1
                direction = "right"
            }
            pause(500)
        }
    }
}
let direction = ""
let rand = 0
let c = 0
let r = 0
tiles.setCurrentTilemap(tilemap`template`)
let mySprite = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . f f f f f 2 2 f f f f f . . . 
    . f f e 2 e 2 2 e 2 e f f . . . 
    . f e 2 f 2 f f 2 f 2 e f . . . 
    . f f f 2 2 e e 2 2 f f f . . . 
    f f e f 2 f e e f 2 f e f f . . 
    f e e f f e e e e f e e e f . . 
    . f e e e e e e e e e e f . . . 
    . . f e e e e e e e e f . . . . 
    . e 4 f f f f f f f f 4 e . . . 
    . 4 d f 2 2 2 2 2 2 f d 4 . . . 
    . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundSouthEast1)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
buildRoom(3)
animation.runImageAnimation(
sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy),
[img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b 1 b b b 1 c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b b 2 2 2 2 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `,img`
    . . . . . . . . . . . f f f . . 
    f f f . . . . . . . . c c f f f 
    c b b c f . . . c c . c c c f f 
    . c b b b f f c c 3 c c 3 c f f 
    . c c c b b f c b 3 c b 3 c f f 
    . c c b c b f c b b b b b b c f 
    . c b b c b b c b 1 b b b 1 c c 
    . c b c c c b b b b b b b b b c 
    . . c c c c c b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f c 
    . . . c f b b b b f f f f f f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b 2 2 2 2 2 f . 
    . . . . . f c b b b 2 2 2 f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . c c . . . 
    . . . . . . c c c 3 c c 3 f . . 
    . . . . . c c c b 3 c b 3 c f . 
    . . . . f f b b b b b b b b c f 
    . . . . f f b b b 1 b b b 1 c c 
    . . . f f f c b b b b b b b b c 
    . . . f f f f b b c 1 f f 1 b c 
    . . . b b b c c b f 1 f f 1 f f 
    . . . c c c c f b f f f f f f f 
    . . c c c b b f b f 2 2 2 2 f f 
    . . . c b b c c b 2 2 2 2 2 f . 
    . . c b b c c f f b 2 2 2 f . . 
    . c c c c c f f f f f f f . . . 
    c c c c . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    . c b b c f . . . . . . . c f f 
    . . c b b c f . . . . . . c c f 
    . . c c c b f . . . . . . . f c 
    . . c c b b f f . . . . . f f c 
    . . c b b c b f c c . c c f f f 
    . . c b c c b f c c c c c f f f 
    . . . c c c b c b 3 c c 3 c f . 
    . . . c c c c b b 3 c b 3 b c . 
    . . . . c c b b b b b b b b c c 
    . . . c f b b b 1 1 b b b 1 1 c 
    . . c c f b b b b b b b b b b f 
    . . . . f b b b b c b b b c b f 
    . . . . f c b b b 1 f f f 1 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `],
100,
true
)
animation.runImageAnimation(
sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy),
[img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b 1 b b b 1 c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b b 2 2 2 2 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `,img`
    . . . . . . . . . . . f f f . . 
    f f f . . . . . . . . c c f f f 
    c b b c f . . . c c . c c c f f 
    . c b b b f f c c 3 c c 3 c f f 
    . c c c b b f c b 3 c b 3 c f f 
    . c c b c b f c b b b b b b c f 
    . c b b c b b c b 1 b b b 1 c c 
    . c b c c c b b b b b b b b b c 
    . . c c c c c b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f c 
    . . . c f b b b b f f f f f f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b 2 2 2 2 2 f . 
    . . . . . f c b b b 2 2 2 f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . c c . . . 
    . . . . . . c c c 3 c c 3 f . . 
    . . . . . c c c b 3 c b 3 c f . 
    . . . . f f b b b b b b b b c f 
    . . . . f f b b b 1 b b b 1 c c 
    . . . f f f c b b b b b b b b c 
    . . . f f f f b b c 1 f f 1 b c 
    . . . b b b c c b f 1 f f 1 f f 
    . . . c c c c f b f f f f f f f 
    . . c c c b b f b f 2 2 2 2 f f 
    . . . c b b c c b 2 2 2 2 2 f . 
    . . c b b c c f f b 2 2 2 f . . 
    . c c c c c f f f f f f f . . . 
    c c c c . . . . . . . . . . . . 
    `,img`
    . f f f . . . . . . . . f f f . 
    . c b b c f . . . . . . . c f f 
    . . c b b c f . . . . . . c c f 
    . . c c c b f . . . . . . . f c 
    . . c c b b f f . . . . . f f c 
    . . c b b c b f c c . c c f f f 
    . . c b c c b f c c c c c f f f 
    . . . c c c b c b 3 c c 3 c f . 
    . . . c c c c b b 3 c b 3 b c . 
    . . . . c c b b b b b b b b c c 
    . . . c f b b b 1 1 b b b 1 1 c 
    . . c c f b b b b b b b b b b f 
    . . . . f b b b b c b b b c b f 
    . . . . f c b b b 1 f f f 1 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `],
100,
true
)
