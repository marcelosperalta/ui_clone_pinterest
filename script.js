const grids = document.querySelectorAll(".grid");
const headings = document.querySelectorAll(".heading .wrapper .text");

function enterScreen(index) {

    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll(".column");

    grid.classList.add("active");

    gridColumns.forEach(element => {
        element.classList.remove('animate-before', 'animate-after');
    });

    heading.classList.remove('animate-before', 'animate-after');

}

function exitScreen(index, exitDelay) {

    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll(".column");

    gridColumns.forEach(element => {
        element.classList.add('animate-after');
    });

    heading.classList.add("animate-after");

    setTimeout(() => {
        grid.classList.remove("active");
    }, exitDelay);

}

function setupAnimationCycle({ initialScreenIndex, timePerScreen, exitDelay}) {

    // enterScreen(initialScreenIndex);

    // setTimeout(() => {
    //     exitScreen(initialScreenIndex, exitDelay);
    // }, timePerScreen);

    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = initialScreenIndex;

    function nextCycle() {

        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

        // 0, 1, 2, 3 > 4 screens to show
        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;

    }

    // setInterval(() => {
    //     console.log("Novo ciclo");
    // }, cycleTime);

    setInterval(nextCycle, cycleTime);

}
setupAnimationCycle({ 

    initialScreenIndex: 0,
    timePerScreen: 2000, //ms
    exitDelay: 200 * 7 //ms

});