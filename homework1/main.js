const lineHeight = 15;
let area = document.getElementById('textArea');
area.addEventListener('input', resize);

function resize() {
    const minRows = 4;
    const maxRows = 8;

    let obj = this;
    let key = event.keyCode || event.charCode;
    let currentScrollHeight = parseInt(obj.scrollHeight, 10);
    let lines = Math.floor(currentScrollHeight / lineHeight);

    const expandTextArea =
		lines <= maxRows && lines > minRows && (key == 8 || key == 46);
    if (expandTextArea) {
        obj.style.height = (lines - 1) * lineHeight + 'px';
    } else if (lines < maxRows) {
        obj.style.height = 'auto';
        obj.style.height = obj.scrollHeight + 'px';
    }
}
function load() {
    const minRows = 4;
    let area = document.getElementById('textArea');
    area.rows = minRows;
    area.style.height = area.scrollHeight + 'px';
    area.cols = 50;
    area.style.lineHeight = lineHeight + 'px';
}
document.onload = load();
