info.onCountdownEnd(function () {
    info.setLife(150)
    mySprite2 = sprites.create(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb44f4b5b44444b4444f444b....
        ...ebb44ff4b4444444444bf44446...
        ..eb6bb44ff44444bb444bff444446..
        ..e6bb5b22f44444b5b44f224bb44e..
        .e66b4b422ff44444b44ff222b5b44e.
        .e6bb444222ff4444444f22224bb44e.
        eb66b444222fff44444ff222244444be
        eb66bb44222b4f44444fbb22444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .ffbb66666bb4444444444444444bfe.
        .ffffff66666bbb44444444444ffff88
        8fffeffffffffbbbbbbbbbbbfff22ff8
        8f7ffff2cfcccfffffffffff22ff66f8
        ff6ff2ffffffff2ff22fff2ffff668ff
        fff8666fff6fffffff7f6fff7fffffff
        ffff8777f8f867ff7ff666776fffffbf
        ffeffeefffeff7766688effeeeefff6f
        ffbfffeffeeeeeeeeeeeeefeeeeefb6e
        ff6ddfffffeeeffeffeeeeeffefff46e
        .cf6ddd4effffffeeeeefffffffb46e.
        .ffffffffffffffffffffffffb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, SpriteKind.Enemy)
    mySprite2.follow(mySprite, 20)
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.disintegrate, 5000)
    info.changeLifeBy(-1)
    info.changeScoreBy(3)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 f 1 1 5 5 1 f 5 4 . . 
    . b d 5 f 5 f 5 5 5 f 1 f 5 4 . 
    b 4 5 f 5 f 5 f 5 f 5 f 1 f 4 . 
    c d 5 5 f f f 5 5 5 f f f 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 f f f 5 5 5 5 5 4 
    c 4 d 5 4 5 f f f f f 5 5 5 5 4 
    . c 4 5 5 f f f f f f f 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(-5)
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 f 2 2 6 7 7 6 f 7 7 6 . . 
        e 2 4 4 f 2 6 7 6 f 2 6 7 7 6 . 
        e 2 f f 2 f 6 6 f 2 f f 7 7 6 . 
        e 2 f f 2 4 2 2 2 4 f f e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
