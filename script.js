let workDuration = 25 * 60
let breakDuration = 5*60;
let currentDuration = workDuration;
let timer;
let onBreak = false;

function startTimer()
{
  clearInterval(timer)
  timer = setInterval(() => {
    if (currentDuration > 0)
      {
        currentDuration--;
        updateTimerDisplay();
      }
      else 
      { 
        onBreak = !onBreak; //couldnt i jsut set this to true?
        currentDuration = onBreak ? breakDuration : workDuration; // if on break is true do break duration else do workduration
        alert(onBreak ? "Time to take a break" : "Break over get back to work!");
        updateTimerDisplay();
      }
  }, 1000);
}

function resetTimer()
{
 clearInterval(timer);
 currentDuration = workDuration;
 onBreak = false;
 updateTimerDisplay();
}

function updateTimerDisplay()
{
  const min = Math.floor(currentDuration/60).toString().padStart(2, '0');
  const sec = (currentDuration % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${min}:${sec}`;
}