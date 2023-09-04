function VideoDuration1(){
    const videoPlayer = document.querySelector("#shorts-player > div.html5-video-container > video");

    if(videoPlayer){
        const videoDuration = parseInt(videoPlayer.duration)*1000
        console.log(videoDuration);
        scroll(videoDuration)
    }else{
        console.log('Youtube Video Player Not Found')
    }

   
}

function scroll(val){
    let  ScrollButon = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
    if(ScrollButon){
        setTimeout(()=>{
            ScrollButon.click();
            setTimeout(()=>{
                VideoDuration1()
            }, 1000)
        }, val)
    }else{
        console.log('Could Not Find Button')
    }
}

VideoDuration1()