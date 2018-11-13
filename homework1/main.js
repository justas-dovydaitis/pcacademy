const minRows = 4;
const maxRows = 8;

let area = document.getElementById('textArea');
area.addEventListener('keypress', resize);
area.addEventListener('keydown', resize);

function resize() {
    let obj = this;
    let key = event.keyCode || event.charCode;
    let currentScrollHeight = parseInt(obj.scrollHeight, 10);
    let lines = Math.floor(currentScrollHeight / 15);

    if (lines <= maxRows && lines > minRows && (key == 8 || key == 46)) {
        setTimeout(() => {
            obj.style.height = (lines - 1) * 15 + 4 + 'px';
        }, 0);
    } else if (lines < maxRows)
        setTimeout(() => {
            obj.style.height = 'auto';
            obj.style.height = obj.scrollHeight + 'px';
        }, 0);
}
function load() {
    let area = document.getElementById('textArea');
    area.rows = minRows;
    area.style.height = area.scrollHeight + 'px';
    area.cols = 50;
    area.style.lineHeight = '15px';
}
document.onload = load();
