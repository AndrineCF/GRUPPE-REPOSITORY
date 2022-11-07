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
    console.log(formData.planning)
}