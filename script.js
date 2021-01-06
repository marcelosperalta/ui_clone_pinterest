const grids = document.querySelectorAll(".grid");
const headings = document.querySelectorAll(".heading .wrapper .text");

function enterScreen(index) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll(".column");

    grid.classList.add("active");

    gridColumns.forEach(element => {
        element.classList.remove('animate-before')
    })
}
function exitScreen(index, exitDelay) {}

function setupAnimationCycle({ 
    initalScreenIndex, 
    timePerScreen, 
    exitDelay
}) {}

setupAnimationCycle({ 
    initalScreenIndex: 0,
    timePerScreen: 2000, //ms
    exitDelay: 200 * 7 //ms
})