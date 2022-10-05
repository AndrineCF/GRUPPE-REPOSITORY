### Innledning

Gruppen ble enig om å bruke «Github projects» for å strukturere arbeids oppgavene skulle utføres fordi at det var enkelt å bruke, mer oversiktlig for hvem som hadde gjort hva i oppgavene og hvilken status det var i. Planleggingsmetoden gruppen brukte var basert på Kanban metoden med “bord” tilpasset scrum for strukturen av oppgavene.

Gruppen tilpasset tavlen med innhold som bestod av:
- Backlog: som inneholder arbeidsoppgaver som gruppen skal utføre
- In progress: Arbeidsoppgavene har blitt valgt ut og er i prosess
- In review: Arbeidsoppgavene er ferdigstilt og skal gjennomgås
- Done: Arbeidsoppgavene er utført 

### Nedbryting

For å velge relevante arbeidsprosesser, er det viktig å bryte ned prosjektet i deler. Vi starter med å dele inn gruppen i mindre arbeidsgrupper med tanke på hvor mye hver enkelt gruppemedlem kan om programmering osv. Slik at vi får en jevn fordeling av ferdigheter og kunnskap i de forskjellige undergruppene samtidig slik at vi kunne lære av hverandre. Deretter sørger vi for at gruppen har den nødvendige kunnskapen for å starte å jobbe med prosjektet. Ved å lage branches, gjorde det at vi kunne arbeide slik vi kunne prøve oss frem uten å være redde for å gjøre feil. Tilslutt setter vi sammen arbeidet vårt slik at alt er oversiktlig. 

### P-FLAGG
| Navn | Oppgave |
|---|---|
| Gabriel | README og Gambia-flagget |
| Steinar | README og Gambia-flagget |
 
Utrolig vanskelig måte å løse oppgaven på:
1.    Koden er vanskelig å lese i taggene, som gjør det tungvint for andre
 
2.    Kan ikke bruke ::after og ::before pseudo-elementer i style taggen for å stile før og etter elementet, et triks brukt for å lage stjerner i HTML
 
3.    Kan ikke strukturere og organisere koden, må kode og kopiere stiller fra element til element i stedet for class="box" for at en stil skal gjelde for alle bokser
 
Men det er noen positive sider å gjøre det slik:
1.    Trenger ikke å spesifisere en tagg i css-dokumentet
 
2.    Raske endringer og direkte endringer på et element i HTML
 
Vi brukte også chrome dev-tools for å se hvordan kode endringene ville reflektere i flagget. Eksempel margin, height, width, color etc.
 
### References
Gambia Flag Colors. (n.d.). Flag Color. Retrieved October 3, 2022, from https://flagcolor.com/gambia-flag-colors/#:%7E:text=Gambia%20Flag%20Color%20Codes%20and%20Values.%20Red.%20PANTONE%3A,CMYK%3A%20%280%2C86%2C63%2C0%29%20White.%20Hex%20%28HTML%29%3A%20%23ffffff%3B%20RGB%3A%20%28255%2C255%2C255%29
 
Gambia. (n.d.). Retrieved October 3, 2022, from https://www.fotw.info/flags/gm.html#storm
 
CSS Margin. (n.d.). Retrieved September 28, 2022, from https://www.w3schools.com/css/css_margin.asp
 
### CSS-FLAGG
| Navn | Oppgave |
|---|---|
| Joakim| README og Danmark flagget |
| Rune| README og Danmark flagget |
 
#### Fordeler og ulemper
 
##### Fordeler
 
Å sette ting inn i css styles blir det er veldig oversiktlig når du ser på koden. 
 
##### Ulemper
 
Ikke å ha i eget dokument for mer oversikt
Raske endringer krever at du skriver en helt ny klasse
 
##### Beskrivelse av prosess
Vi brukte CSS styles hvor man setter navn i egen <style> </style> hvor all styling av siden pågår. Vi satt navn på hvert paragraf og vi lagde navn som sier hva disse <p> elementene gjør. For eksempel “danWhiteVert” er en klasse som lager en vertikal linje på et spesifikt punkt. 
 
Metoden var ganske enkel å forstå når vi kom i gang da all CSS blir skrevet inn på en plass. på den måten er det mer oversiktlig. Vi brukte marger for å flytte på de hvite linjene til koordinatene dem skulle være på i henhold til dimensjonene. Satte til slutt grå farge på body slik at grensen på flagget blir lettere å se på grunn av de hvite linjene. 
 
### References
 
Denmark Flag Color Codes with HEX, RGB, CMYK & Pantone. (n.d.). Retrieved October 4, 2022, from https://www.flagcolorcodes.com/denmark+
 
Denmark. (n.d.). Retrieved October 4, 2022, from https://www.crwflags.com/fotw/flags/dk.html
 
### CANVAS-FLAGG
| Navn | Oppgave |
|---|---|
| Andrine| README og Hellas flagget |
| Jonas | README og Hellas flagget |
| Felix | README og Hellas flagget |
  
Implementering av canvas metoden ble gjort via ha et canvas elementet i html body. Hensikt med dette var å kunne få tilgang javascript funksjonene som ble brukt i script seksjon til dette elementet. Også viktig å påpeke at dette kunne bli gjort i script med å lage canvas element det.
Metoden var enkelt å gjøre når man forstå hvordan innsetting av elementene i canvas virket. Det som var vanskelig var å regne ut og passe på koordinatorene. Også gjorde om body fargen som hvite stripene skulle bli lettere å se. Gruppen fant dimensjonene og farge koden ble funnet på nett. Dimensjonene ble gang med 10 for scale flagget større som den var mer synlig på nettsiden.

#### Fordeler
  
1.    Mulighet å justere elementer helt etter ønske i canvas elementet
  
2.    Mulighet å lage funksjon som kan gjenskape elementer istedenfor måtte skrive inn alt på nytt
  
3.    Mulighet å kunne benytte innbyg funksjoner til canvas elementet som man slipper å måtte lage funksjoner eller elementer (f.eks. masse p-tag)

#### Ulemper
  
1.    Må være forsiktig med koordinater til elementet siden den kan legger over andre elementer.
  
2.    Må passe på hvilken rekkefølge man legger til canvas element som elementene får riktig farge.

### References

wikimedia. (19. September 2021) File:Flag of Greece (construction sheet).svg Hentet 03.otober 2022 fra https://commons.wikimedia.org/wiki/File:Flag_of_Greece_(construction_sheet).svg

flagcolorcodes (u.d) Greece Flag Color Codes https://www.flagcolorcodes.com/greece


