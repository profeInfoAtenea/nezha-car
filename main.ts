function girarDerecha () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 90)
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
function girarIzquierda () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 270)
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function Avanzar () {
    neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S4, 90)
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    basic.showIcon(IconNames.Happy)
}
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        Avanzar()
    }
    for (let index = 0; index < 10; index++) {
        girarDerecha()
    }
    for (let index = 0; index < 10; index++) {
        girarIzquierda()
    }
})
