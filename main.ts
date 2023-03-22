function _11_Map () {
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
    led.unplot(X + 5, Y)
    led.unplot(X + 5, Y + 1)
    led.unplot(X + 5, Y + 2)
    led.unplot(X + 5, Y + 3)
    led.plotBrightness(X + 5, Y + 4, 1)
}
let ScreenMoveJump = 0
let OffSet = 0
let Jump = 0
let Y = 0
let X = 0
X = 0
Y = 0
basic.forever(function () {
    if (Jump < 0) {
        Jump = Jump + 1
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.A)) {
        Jump = Jump - 1
        basic.pause(200)
        Jump = Jump - 1
        basic.pause(500)
    }
})
basic.forever(function () {
    _11_Map()
    led.plotBrightness(OffSet + 2, Jump + (3 + ScreenMoveJump), 200)
    if (input.isGesture(Gesture.TiltLeft) && OffSet > -2) {
        OffSet = OffSet - 1
        basic.pause(200)
    }
    if (input.isGesture(Gesture.TiltRight) && OffSet < 0) {
        OffSet = OffSet + 1
        basic.pause(200)
    } else if (input.isGesture(Gesture.TiltRight) && X > -1) {
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
