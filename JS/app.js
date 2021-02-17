/*

=> Events used in this projects in JavaScript are:
#1. dragstart
#2. dragend
#3. dragover
#4. dragenter
#5. dragenter
#6. dragleave
#7. drop

*/

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered.');
    e.target.className += ' hold';

    setTimeout(() => {
        e.target.className = 'hide';
    }, 0); // Gets Executed after end of all the other process if we set timeout to '0'

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragStart has been triggered.');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {

    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered.');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered.');
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered.');
        e.target.className = ' whiteBox';
    });
    
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered.');
        e.target.append(imgBox);
    });
}