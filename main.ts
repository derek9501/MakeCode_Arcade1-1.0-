namespace SpriteKind {
    export const TNT = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (110 >= player1.y) {
            player1.y += 5
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.y) {
            player1.y += -5
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.x) {
            player1.x += -5
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.x) {
            player1.x += -5
        }
    }
})
info.onCountdownEnd(function () {
    if (開始 < 4) {
        game.splash("第" + 開始 + "關結束，準備開始第" + (開始 + 1) + "關", "，請按A鍵")
        開始 = 開始 + 0.9
        player1.setPosition(scene.screenWidth() / 2, 110)
    } else {
        game.gameOver(true)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.y) {
            player1.y += -5
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0.1 != 開始) {
        結束 = 開始
        開始 = 0.1
        TF = game.ask("確定要結束?")
        if (TF == true) {
            game.reset()
        } else {
            開始 = 結束
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if ((開始 + 0.1) % 1 == 0) {
        info.setLife(3)
        info.startCountdown(60)
        car1.vy = randint(開始 * 10, 開始 * 10 + 20)
        car2.vy = randint(開始 * 10, 開始 * 10 + 20)
        car3.vy = randint(開始 * 10, 開始 * 10 + 20)
        開始 = 開始 + 0.1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (150 >= player1.x) {
            player1.x += 5
        }
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (150 >= player1.x) {
            player1.x += 5
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (110 >= player1.y) {
            player1.y += 5
        }
    }
})
let TF = false
let 結束 = 0
let 開始 = 0
let player1: Sprite = null
let car3: Sprite = null
let car2: Sprite = null
let car1: Sprite = null
scene.setBackgroundColor(9)
car1 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
car2 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
car3 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
player1 = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
player1.setPosition(scene.screenWidth() / 2, 100)
car1.setPosition(randint(10, 150), 10)
car2.setPosition(randint(10, 150), 10)
while (car2.overlapsWith(car1)) {
    car2.setPosition(randint(10, 150), 10)
}
car3.setPosition(randint(10, 150), 10)
while (car3.overlapsWith(car1) || car3.overlapsWith(car2)) {
    car3.setPosition(randint(10, 150), 10)
}
game.splash("遊戲即將開始，請按A鍵")
開始 = 0.9
forever(function () {
    if (0 == 開始 % 1) {
        if (car1.y >= 110) {
            car1.setPosition(randint(10, 150), 10)
        }
        if (car2.y >= 110) {
            car2.setPosition(randint(10, 150), 10)
        }
        if (car3.y >= 110) {
            car3.setPosition(randint(10, 150), 10)
        }
        if (player1.overlapsWith(car1)) {
            car1.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
        }
        if (player1.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
        }
        if (player1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
        }
        if (car1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
            car1.setPosition(randint(10, 150), 10)
        }
        if (car1.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
            car1.setPosition(randint(10, 150), 10)
        }
        if (car3.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
            car3.setPosition(randint(10, 150), 10)
        }
    }
})
game.onUpdateInterval(500, function () {
    car1.vy = randint(開始 * 10, 開始 * 10 + 20)
    car2.vy = randint(開始 * 10, 開始 * 10 + 20)
    car3.vy = randint(開始 * 10, 開始 * 10 + 20)
})
