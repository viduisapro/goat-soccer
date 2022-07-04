namespace SpriteKind {
    export const p2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.floorDark2, function (sprite, location) {
    game.showLongText("goal", DialogLayout.Top)
    info.player2.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
    tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
    mySprite2.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.floorLight2, function (sprite, location) {
    game.showLongText("goal", DialogLayout.Top)
    info.player1.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
    tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
    mySprite2.setVelocity(0, 0)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.setVelocity(sprite.ax - 20, sprite.ay - 20)
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (controller.left.isPressed()) {
        if (controller.A.isPressed()) {
            otherSprite.vx = -150
        } else {
            otherSprite.vx = -120
        }
    } else {
        if (controller.right.isPressed()) {
            if (controller.A.isPressed()) {
                otherSprite.vx = 150
            } else {
                otherSprite.vx = 120
            }
        } else {
            if (controller.up.isPressed()) {
                if (controller.A.isPressed()) {
                    otherSprite.vx = -150
                } else {
                    otherSprite.vy = -120
                }
            } else {
                if (controller.down.isPressed()) {
                    if (controller.A.isPressed()) {
                        otherSprite.vx = 150
                    } else {
                        otherSprite.vy = 120
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.Food, function (sprite, otherSprite) {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        if (controller.player2.isPressed(ControllerButton.A)) {
            otherSprite.vx = -160
        } else {
            otherSprite.vx = -120
        }
    } else {
        if (controller.player2.isPressed(ControllerButton.Right)) {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                otherSprite.vx = 160
            } else {
                otherSprite.vx = 120
            }
        } else {
            if (controller.player2.isPressed(ControllerButton.Up)) {
                otherSprite.vy = -120
            } else {
                if (controller.player2.isPressed(ControllerButton.Down)) {
                    otherSprite.vy = -120
                }
            }
        }
    }
})
let thep2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e . . . 
    . . . . . . . . . . . . . . e e . . 
    . . . . . . . . . . . . . . d d d d 
    . . . . . . . . . . . . . . d 1 f d 
    . . . . . . . . . . . . . d d 1 f d 
    d d d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d . . . . 
    d d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . e . e . . . e . e . . . . . . . 
    `, SpriteKind.Player)
mySprite.setImage(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e . . . 
    . . . . . . . . . . . . . . e e . . 
    . . . . . . . . . . . . . . d d d d 
    . . . . . . . . . . . . . . d 1 f d 
    . . . . . . . . . . . . . d d 1 f d 
    d d d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d . . . . 
    d d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . e . e . . . e . e . . . . . . . 
    `)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 f 1 1 f 1 1 f 1 . . . . 
    . . 1 f f 1 f f f 1 f f 1 . . . 
    . 1 f f 1 1 1 f 1 1 1 f f 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 f 1 1 1 f 1 1 1 f 1 1 . . 
    . 1 f f f 1 f f f 1 f f f 1 . . 
    . 1 1 f 1 1 1 f 1 1 1 f 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 f f 1 1 1 f 1 1 1 f f 1 . . 
    . . 1 f f 1 f f f 1 f f 1 . . . 
    . . . 1 f 1 1 f 1 1 f 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
tiles.setTilemap(tilemap`level4`)
scene.cameraFollowSprite(mySprite2)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
thep2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e . . . . . . . . . . 
    . . e e e . . . . . . . . . . . 
    . e e e . . . . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    4 f 1 4 4 . . . . . . . . . . . 
    4 f 1 4 4 4 . . . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . . 2 4 4 4 4 4 4 4 4 4 2 . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 4 . 4 . . . 4 . 4 . . 
    . . . . . 4 . 4 . . . 4 . 4 . . 
    . . . . . 2 . 2 . . . 2 . 2 . . 
    `, SpriteKind.p2)
controller.player2.moveSprite(thep2)
tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
forever(function () {
    tiles.setTilemap(tilemap`level1`)
    pause(500)
    tiles.setTilemap(tilemap`level2`)
    pause(500)
    tiles.setTilemap(tilemap`level3`)
    pause(500)
    tiles.setTilemap(tilemap`level5`)
    pause(500)
})
forever(function () {
    if (controller.A.isPressed() && !(controller.B.isPressed())) {
        mySprite.startEffect(effects.warmRadial, 100)
        if (controller.left.isPressed()) {
            mySprite.vx = -150
        } else {
            if (controller.right.isPressed()) {
                mySprite.vx = 150
            } else {
                if (controller.down.isPressed()) {
                    mySprite.vy = 150
                } else {
                    if (controller.up.isPressed()) {
                        mySprite.vx = -150
                    }
                }
            }
        }
    } else {
        if (controller.B.isPressed()) {
            mySprite.startEffect(effects.coolRadial, 100)
            if (controller.left.isPressed()) {
                mySprite.vx = -300
            } else {
                if (controller.right.isPressed()) {
                    mySprite.vx = 300
                } else {
                    if (controller.down.isPressed()) {
                        mySprite.vy = 300
                    } else {
                        if (controller.up.isPressed()) {
                            mySprite.vx = -300
                        }
                    }
                }
            }
        } else {
            mySprite.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.A) && !(controller.player2.isPressed(ControllerButton.B))) {
        thep2.startEffect(effects.warmRadial, 100)
        if (controller.player2.isPressed(ControllerButton.Left)) {
            thep2.vx = -150
        } else {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                thep2.vx = 150
            } else {
                if (controller.player2.isPressed(ControllerButton.Down)) {
                    thep2.vy = 150
                } else {
                    if (controller.player2.isPressed(ControllerButton.Up)) {
                        thep2.vx = -150
                    }
                }
            }
        }
    } else {
        if (controller.player2.isPressed(ControllerButton.B)) {
            thep2.startEffect(effects.coolRadial, 100)
            if (controller.player2.isPressed(ControllerButton.Left)) {
                thep2.vx = -300
            } else {
                if (controller.player2.isPressed(ControllerButton.Right)) {
                    thep2.vx = 300
                } else {
                    if (controller.player2.isPressed(ControllerButton.Down)) {
                        thep2.vy = 300
                    } else {
                        if (controller.player2.isPressed(ControllerButton.Up)) {
                            thep2.vx = -300
                        }
                    }
                }
            }
        } else {
            thep2.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (info.player2.score() >= 10) {
        effects.confetti.startScreenEffect()
        game.splash("Player 2 wins")
        game.reset()
    } else {
        if (info.player1.score() >= 10) {
            effects.confetti.startScreenEffect()
            game.splash("Player 1 wins")
            game.reset()
        }
    }
})
