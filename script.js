const btn = document.getElementById("shareBtn");
const video = document.getElementById("screenVideo");

btn.onclick = async () => {

const stream = await navigator.mediaDevices.getDisplayMedia({

video:true,

audio:true

});

video.srcObject = stream;

};