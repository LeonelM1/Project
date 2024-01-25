controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
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
let bat: Sprite = null
let direction = ""
let rand = 0
let c = 0
let r = 0
let projectile2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`template`)
mySprite = sprites.create(img`
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
info.setLife(3)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
buildRoom(3)
game.onUpdateInterval(1000, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length < 10) {
        let batspeed = 0
        bat = sprites.create(img`
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
            `, SpriteKind.Enemy)
        bat.follow(mySprite)
        bat.x = randint(0, scene.screenWidth())
        mySprite.setVelocity(0, -40 * batspeed)
        bat.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
