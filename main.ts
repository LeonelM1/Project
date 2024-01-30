controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireBall = sprites.createProjectileFromSprite(img`
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
        `, myPlayer, 0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    sprites.destroy(myPlayer)
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.reset()
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
                direction = "right"
            } else if (rand == 2 && !(direction == "up")) {
                r += 1
                direction = "down"
            } else {
                c += -1
                direction = "left"
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeScoreBy(1)
})
let EnemySprite: Sprite = null
let direction = ""
let rand = 0
let c = 0
let r = 0
let fireBall: Sprite = null
let myPlayer: Sprite = null
tiles.setCurrentTilemap(tilemap`template`)
myPlayer = sprites.create(img`
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
let SpawnLocation = tiles.getTilesByType(sprites.dungeon.darkGroundCenter)
let EnemyImages = [
img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `,
img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `,
img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `,
img`
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bc......
    c5555555555555555b......
    .cbb31bb5555dd555b.cc...
    .c5333b555ddddd55dccc...
    .c533b55ddddddddddb.....
    .c5555dddbb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bc5ddddddbcccc
    .....cbbcc5555dddddddddc
    .....ccbbb555ddbddddddc.
    .....cdcbc55ddbbbdddcc..
    ...ccdddccddddbcbbcc....
    ...ccccccd555ddccc......
    ........cccccccc........
    `,
img`
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
    `
]
info.setLife(3)
info.setScore(0)
tiles.placeOnRandomTile(myPlayer, sprites.dungeon.darkGroundCenter)
controller.moveSprite(myPlayer, 100, 100)
scene.cameraFollowSprite(myPlayer)
buildRoom(3)
game.onUpdateInterval(1000, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length < 10) {
        EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
        EnemySprite.follow(myPlayer, 25)
        tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length) - 1))
    }
})
