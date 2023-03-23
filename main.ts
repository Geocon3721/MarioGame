function _11map () {
    led.unplot(X, Y - 1)
    led.unplot(X, Y)
    led.unplot(X, Y + 1)
    led.unplot(X, Y + 2)
    led.unplot(X, Y + 3)
    led.plotBrightness(X, Y + 4, 1)
    led.unplot(X + 1, Y - 1)
    led.unplot(X + 1, Y)
    led.unplot(X + 1, Y + 1)
    led.unplot(X + 1, Y + 2)
    led.unplot(X + 1, Y + 3)
    led.plotBrightness(X + 1, Y + 4, 1)
    led.unplot(X + 2, Y - 1)
    led.unplot(X + 2, Y)
    led.unplot(X + 2, Y + 1)
    led.unplot(X + 2, Y + 2)
    led.unplot(X + 2, Y + 3)
    led.plotBrightness(X + 2, Y + 4, 1)
    led.unplot(X + 3, Y - 1)
    led.unplot(X + 3, Y)
    led.unplot(X + 3, Y + 1)
    led.unplot(X + 3, Y + 2)
    led.unplot(X + 3, Y + 3)
    led.plotBrightness(X + 3, Y + 4, 1)
    led.unplot(X + 4, Y - 1)
    led.unplot(X + 4, Y)
    led.unplot(X + 4, Y + 1)
    led.unplot(X + 4, Y + 2)
    led.unplot(X + 4, Y + 3)
    led.plotBrightness(X + 4, Y + 4, 1)
    led.unplot(X + 5, Y - 1)
    led.unplot(X + 5, Y + 3)
    led.plotBrightness(X + 5, Y + 4, 1)
}
let ScreenMoveJump = 0
let Jump = 0
let OffSet = 0
let Coins = 0
let CoinBlock11A = 0
let Y = 0
let X = 0
if (true) {
    basic.showString("Tilt Left And Right To Move")
    basic.pause(100)
    basic.showString("Press A To Jump")
    basic.pause(100)
    basic.showString("Press B to Enter Pipe")
    basic.pause(100)
    basic.showString("World 1-1")
    basic.pause(100)
    basic.showString("5 Lives Left")
}
X = 0
Y = 0
basic.forever(function () {
    if (CoinBlock11A >= 2) {
        led.plotBrightness(X + 5, Y + 2, 1)
    } else if (CoinBlock11A > 0) {
        Coins = Coins + 1
        CoinBlock11A = CoinBlock11A + 1
    }
})
basic.forever(function () {
    if (X - OffSet == -3 && Jump == -2) {
    	
    } else if (Jump < 0) {
        Jump = Jump + 1
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.A)) {
        if (X - OffSet == -3 && Jump == 0) {
            CoinBlock11A = CoinBlock11A + 1
        } else {
            Jump = Jump - 1
            basic.pause(200)
        }
        if (X - OffSet == -3 && Jump == 0) {
            CoinBlock11A = CoinBlock11A + 1
        } else {
            Jump = Jump - 1
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    _11map()
    led.plotBrightness(OffSet + 2, Jump + (3 + ScreenMoveJump), 200)
    if (X - OffSet == -4 && Jump == 1) {
    	
    } else if (input.isGesture(Gesture.TiltLeft) && OffSet > -2) {
        OffSet = OffSet - 1
        basic.pause(200)
    }
    if (X - OffSet == -2 && Jump == 1) {
    	
    } else if (input.isGesture(Gesture.TiltRight) && OffSet < 0) {
        OffSet = OffSet + 1
        basic.pause(200)
    } else if (input.isGesture(Gesture.TiltRight) && X > -5) {
        X = X - 1
        basic.pause(200)
    }
})
basic.forever(function () {
    if (Jump < -1) {
        ScreenMoveJump = 1
        Y = 1
    } else if (Jump > -2) {
        Y = 0
        ScreenMoveJump = 0
    }
})
basic.forever(function () {
    if (CoinBlock11A == 0) {
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.unplot(X + 5, Y + 2)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
        led.unplot(X + 5, Y)
        led.unplot(X + 5, Y + 1)
        led.plotBrightness(X + 5, Y + 2, 100)
        basic.pause(100)
    }
})
