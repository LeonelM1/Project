// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020b020202020b02020b02020b02020b0b01080808080808080808080808040202090303020303030303030303030a0202020202020303030303030303030a020b090303030303030303030303030a0202090202030303030303030303030a0202090302020203030303030303030a0b02010303030202030303030303030a0202090303030302030303030303030a0b0b02020202020203030302020202020202090303030303030303020303030a0202090303030303030303030301030a020b090303030303030303020303030a0b02090303030303030303020202020202020507070707070707070707070706020b020b02020b02020b02020b02020b02`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . . . . . . 2 
2 . . . . 2 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.floorLight1], TileScale.Sixteen);
            case "template":
            case "level2":return tiles.createTilemap(hex`10001000010a010101010a01010a01010a01010a0a0c0707070707070707070707070301010802020b020202020202020202090101080b0b0b02020202020202020209010a08020b02020202020202020202090101080b0b0b020202020202020202090101080b0b0b0b0202020202020202090a01080b02020b0b0202020202020209010108020202020b02020202020202090a0a080b0b0b0b0b0202020b0b0b0b0901010802020202020202020b02020209010108020202020202020202020b0209010a0802020202020202020b020b02090a010802020202020202020b0b0b0b0901010406060606060606060606060605010a010a01010a01010a01010a01010a01`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
