const docs = `

main.js sadrzi neke globalne varijable koje sluze za proveru/vodjenje state-a tj otvorenih dialoga
i neku generalnu functionalnost (sakrivanje/pokazivanje teksta i slicno)

dialozi(dialog) se generisu kao instance klase (dialog.js).

delovi dialoga se generisu preko generatora (generator.js)
generator & dialog za ovu dokumentaciju su singletoni.

generator koristi yield za pravljene jedinstvenog identifikacionog broja da ne bi doslo do konflikta izmedju
instanci elemenata (u ovom slucaju UNIX vreme zbog lakse izrade, idealno treba biti pravi UUID).

kontakt forma koristi osnovnu validaciju provere duzine ulaznog teksta i RegEx za proveru email adrese.

Stvari preuzete sa:

Osnovna tema:
https://html5up.net/strongly-typed
 -Boostrap
 -jQuery
 -breakpoints jQuery module

Slike:
https://media.travellino.rs/2022/10/kolmar-2-nocenja-autobusom-vikend-putovanje.jpg

https://www.usnews.com/object/image/00000151-83ff-d104-a7f5-abff6e1d0000/151208-editorial.jpg?update-time=1449618580742&size=superhero-medium

https://upload.wikimedia.org/wikipedia/commons/5/55/TunisAveHabibBourguiba.jpg

https://krstarenje.org/slike/blogovi/luka-italija-djenova-730x382.jpg

https://media.zlatibor.org.rs/images/article_photos/13/tablet_11971515051363428.jpg

https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Castello_di_San_Marino.JPG/1200px-Castello_di_San_Marino.JPG

https://www.pogodak.rs/putovanja/wp-content/uploads/2013/09/bologna.jpg


`