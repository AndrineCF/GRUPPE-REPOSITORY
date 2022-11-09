function myBtn() {

    var morningTime = document.getElementById("wakeupTime").value
    var workTogeth = document.getElementById("workTogether").value
    var story = document.getElementById("backStory").value
    var talkItOut = document.getElementById("talkItOut").value
    var processor = document.getElementById("Processor").value
    var chat = document.getElementById("Schedule").value
    var interaction = document.getElementById("chatting").value
    var workTime = document.getElementById("workTime").value
    var plan = document.getElementById("planning").value
    

    
    var formData = {};
    formData['planning'] = plan;
    formData['workTime'] = workTime
    formData['chatting'] = interaction
    formData['Schedule'] = chat
    formData['Processor'] = processor
    formData['talkItOut'] = talkItOut
    formData['backStory'] = story
    formData['workTogether'] = workTogeth
    formData['wakeupTime'] = morningTime

    var jsonString = JSON.stringify(formData);
    console.log(jsonString)

    output.innerText = jsonString

    fetch('https://bacit.info/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ jsonString })
})
.then(response => response.json())
.then(response => alert('Your id for the bacit.info post is: ' + response.time + '-' + response.trxid + '\n\nDetails: \n' + JSON.stringify(response)))
}