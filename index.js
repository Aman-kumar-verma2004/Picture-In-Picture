const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Async function that use to select media stream , pass it to the video and then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        console.log("Whoops ! Something is not defined!")
    }
}

button.addEventListener('click', async ()=> {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

selectMediaStream();