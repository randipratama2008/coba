input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    input.setAccelerometerRange(AcceleratorRange.OneG)
    for (let index = 0; index < 4; index++) {
        if (input.compassHeading() >= 316 || input.compassHeading() < 45) {
            basic.showString("N")
        } else if (input.compassHeading() >= 46 || input.compassHeading() < 135) {
            basic.showString("E")
        } else if (input.compassHeading() >= 136 || input.compassHeading() < 225) {
            basic.showString("S")
        } else if (input.compassHeading() >= 226 || input.compassHeading() < 315) {
            basic.showString("W")
        } else {
        	
        }
        music.playMelody("C5 B A G F E D C ", 120)
        basic.pause(100)
    }
})
input.onGesture(Gesture.FreeFall, function () {
    soundExpression.giggle.playUntilDone()
    basic.showString("" + (input.acceleration(Dimension.Strength)))
})
input.onGesture(Gesture.TiltLeft, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.twinkle.play()
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.play()
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
