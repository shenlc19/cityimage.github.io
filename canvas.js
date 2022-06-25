window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;
    function startPosition(e){
        painting = true;
        draw(e)
    }
    function finishedPostion(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if (!painting) return;
        else {
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPostion);
    canvas.addEventListener("mousemove", draw);
});