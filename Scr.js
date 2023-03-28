

document.getElementById('lis').addEventListener("keydown", key => {
    if ((event.key < "0" || event.key > "9") && event.key != "." && event.key != "Backspace")
        event.preventDefault(); // only 1 - 9, .
});

document.getElementById('min').addEventListener("mousedown", event => {
    if (document.getElementById('lis').value > 1) document.getElementById('lis').value--;
});

document.getElementById('max').addEventListener("mousedown", event => {
    document.getElementById('lis').value++;
});