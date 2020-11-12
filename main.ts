input.onButtonPressed(Button.A, function () {
    count += 1
    if (count >= 7) {
        count = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (weekday[count]))
})
let weekday: string[] = []
let count = 0
count = 0
weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
