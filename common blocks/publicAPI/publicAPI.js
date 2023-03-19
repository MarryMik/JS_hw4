const videoFrame = document.getElementsByClassName("publicAPI__wrap")[0];

fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=Km5nbbtQVDo&maxResults=1&key=AIzaSyA-CNENRDGaXdREWigOx7Humm-gkAQPRt8")
.then(response => response.json())
.then(json =>{
    videoData=json;
    console.log(videoData.items[0].player['embedHtml'])
    return videoFrame.innerHTML=videoData.items[0].player['embedHtml'];
})

