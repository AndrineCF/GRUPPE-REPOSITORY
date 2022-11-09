
// Gir "Submit knappen" funksjon når man trykker på knappen fra "WEB-Form.html"
function myBtn() {

// Angitt de to kategoriene til variabel og angitt navninformasjon, hentet id fra WEB.Form.html
    var name = document.getElementById("firstName").value
    var lastname = document.getElementById("lastName").value

// Angitt alle kategoriene til variabler, sliderinformasjonen og verdi, WEB.Form.html
    var morningTime = document.getElementById("wakeupTime").value
    var workTogeth = document.getElementById("workTogether").value
    var story = document.getElementById("backStory").value
    var talkItOut = document.getElementById("talkItOut").value
    var processor = document.getElementById("Processor").value
    var chat = document.getElementById("Schedule").value
    var interaction = document.getElementById("chatting").value
    var workTime = document.getElementById("workTime").value
    var plan = document.getElementById("planning").value


// Samlet alt under en variabel for å stringify
    var formData = {};
    formData['firstName'] = name;
    formData['lastName'] = lastname;
    formData['planning'] = plan;
    formData['workTime'] = workTime
    formData['chatting'] = interaction
    formData['Schedule'] = chat
    formData['Processor'] = processor
    formData['talkItOut'] = talkItOut
    formData['backStory'] = story
    formData['workTogether'] = workTogeth
    formData['wakeupTime'] = morningTime
// Gjorde jsString til en variabel som er koblet formdata
    var jsonString = JSON.stringify(formData);
// Får i vise resultatet fra slider informasjonen
    output.innerText = jsonString
// For å sende informasjonen til bacit.info serveren
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