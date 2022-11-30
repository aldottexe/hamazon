//stores the reference for the video you want
let vid = document.getElementById('falling');
let played = false;

//triggers the function 'check' whenever the page is scrolled
window.addEventListener('scroll', check=>{
    //if the distance to from the top boarder of the element is a certain distance (0) from the top boarder of the window
    if(vid.getBoundingClientRect().top<=200 && !played){
        vid.play(); //play the video
        played = true; //mark that the video has been played so it will not be replayed.
    }
});

//I had issues scaling the video to the size of the paragraph, so I decided to use js to make it more accurate
let p = document.getElementsByClassName('relative')[0] //stores reference to div housing text
vid.setAttribute('height', p.scrollHeight+'px');

window.addEventListener('resize', scaleImg=>{//detects whenever page is rescaled
    vid.setAttribute('height', p.scrollHeight+'px'); //sets the height of the video to the height of the div
});