basic.forever(function () {
    let kompasrichting = 0
    basic.showString("" + (kompasrichting))
})
basic.forever(function () {
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.compassHeading() > 135 && 225 < input.compassHeading()) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (input.compassHeading() > 225 && 315 < input.compassHeading()) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (input.compassHeading() > 315 && 360 < input.compassHeading()) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (input.compassHeading() > 0 && 45 < input.compassHeading()) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
