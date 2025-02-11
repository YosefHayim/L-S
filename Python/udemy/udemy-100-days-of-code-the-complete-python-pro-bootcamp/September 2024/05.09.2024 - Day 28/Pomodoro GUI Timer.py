from tkinter import *
import math

# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
reps = 0
timer = None  # To store the reference to the after() function

# ---------------------------- TIMER RESET ------------------------------- #
def reset_time():
    global reps
    window.after_cancel(timer)  # Cancel the timer
    reps = 0
    timer_title.config(text="Timer", fg=GREEN)
    canvas.itemconfig(timer_text, text="00:00")
    checkmark_label.config(text="")  # Clear the checkmarks

# ---------------------------- TIMER MECHANISM ------------------------------- #
def start_timer():
    global reps
    reps += 1
    work_sec = WORK_MIN * 60
    short_break_sec = SHORT_BREAK_MIN * 60
    long_break_sec = LONG_BREAK_MIN * 60

    if reps % 8 == 0:
        count_down(long_break_sec)
        timer_title.config(text="Long break", fg=RED)
    elif reps % 2 == 0:
        count_down(short_break_sec)
        timer_title.config(text="Short break", fg=PINK)
    else:
        count_down(work_sec)
        timer_title.config(text="Time to work!", fg=GREEN)

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #
def count_down(count):
    count_min = math.floor(count / 60)
    count_sec = count % 60
    if count_sec < 10:
        count_sec = f"0{count_sec}"

    canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec}")
    if count > 0:
        global timer
        timer = window.after(1000, count_down, count - 1)  # Store the timer reference
    else:
        start_timer()
        # Only update marks after a work session (odd reps)
        if reps % 2 == 1:
            marks = ""
            for _ in range(math.floor(reps / 2)):
                marks += "✓"
            checkmark_label.config(text=marks)

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Pomodoro")
window.config(padx=90, pady=50, bg=YELLOW)

canvas = Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)
tomato_img = PhotoImage(file="./tomato.png")
canvas.create_image(100, 112, image=tomato_img)
timer_text = canvas.create_text(100, 130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold"))
canvas.grid(column=1, row=2)

# Title name: Timer
timer_title = Label(text="Timer", fg=GREEN, bg=YELLOW, font=(FONT_NAME, 35, "bold"), highlightthickness=0)
timer_title.grid(column=1, row=1)

# Button Start
start_button = Button(text="Start", command=start_timer, highlightthickness=0)
start_button.grid(column=0, row=3)

# Button Reset
reset_button = Button(text="Reset", command=reset_time, highlightthickness=0)
reset_button.grid(column=2, row=3)

# Checkmark
checkmark_label = Label(fg=GREEN, bg=YELLOW, font=(FONT_NAME, 15), highlightthickness=0)
checkmark_label.grid(column=1, row=4)

window.mainloop()
