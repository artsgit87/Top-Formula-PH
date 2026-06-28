const shareBtn = document.getElementById("shareBtn");
const video = document.getElementById("screenVideo");

let peer;
let screenStream;

shareBtn.onclick = async () => {

    screenStream = await navigator.mediaDevices.getDisplayMedia({

        video: true,
        audio: true

    });

    video.srcObject = screenStream;

    const roomId = Math.random().toString(36).substring(2,8);

    peer = new Peer(roomId);

    peer.on("open", id => {

        alert("Room ID: " + id);

        console.log(id);

    });

};