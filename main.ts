function World1 () {
    led.plotBrightness(X, Y, 1)
    led.plotBrightness(X, Y + 1, 1)
    led.plotBrightness(X, Y + 2, 1)
    led.plotBrightness(X, Y + 3, 1)
    led.plotBrightness(X, Y + 4, 1)
    led.plotBrightness(X + 1, Y + 4, 1)
    led.plotBrightness(X + 2, Y + 4, 1)
    led.plotBrightness(X + 3, Y + 4, 1)
    led.plotBrightness(X + 4, Y + 4, 1)
    led.plotBrightness(X + 1, Y, 1)
    led.plotBrightness(X + 2, Y, 1)
    led.plotBrightness(X + 3, Y, 1)
    led.plotBrightness(X + 4, Y, 1)
    led.plotBrightness(X + 4, Y + 1, 1)
    led.plotBrightness(X + 4, Y + 2, 1)
    led.plotBrightness(X + 4, Y + 3, 1)
    led.unplot(X + 1, Y + 1)
    led.unplot(X + 2, Y + 1)
    led.unplot(X + 3, Y + 1)
    led.unplot(X + 1, Y + 2)
    led.unplot(X + 2, Y + 2)
    led.unplot(X + 3, Y + 2)
    led.unplot(X + 1, Y + 3)
    led.unplot(X + 2, Y + 3)
    led.unplot(X + 3, Y + 3)
    led.unplot(X + 5, Y + 0)
    led.unplot(X + 5, Y + 1)
    led.unplot(X + 5, Y + 2)
    led.unplot(X + 5, Y + 3)
    led.unplot(X + 5, Y + 4)
}
let OffSet = 0
let Jump = 0
let Y = 0
let X = 0
basic.showString("Tilt Left And Right To Move")
basic.pause(100)
basic.showString("Press A To Jump")
basic.pause(100)
basic.showString("Press B to Enter Pipe")
X = 0
Y = 0
basic.forever(function () {
    if (Jump < 0) {
        while (Jump < 0) {
            Jump = Jump + 1
            basic.pause(200)
        }
    } else if (input.buttonIsPressed(Button.A)) {
        Jump = Jump - 1
        basic.pause(200)
        Jump = Jump - 1
        basic.pause(500)
    }
})
basic.forever(function () {
    World1()
    led.plotBrightness(OffSet + 2, Jump + 3, 255)
    if (input.isGesture(Gesture.TiltLeft) && OffSet > -2) {
        OffSet = OffSet - 1
        basic.pause(200)
    }
    if (OffSet == -2 && X == 0) {
        OffSet = -1
    }
    if (input.isGesture(Gesture.TiltRight) && OffSet < 0) {
        OffSet = OffSet + 1
        basic.pause(200)
    } else if (input.isGesture(Gesture.TiltRight) && X > -1) {
        X = X - 1
        basic.pause(200)
    }
})
