// 1.ZADATAK: Napraviti HTML strukturu da se na pocetku vide 2 button-a.
// Kada se klikne na oba(naravno ponaosob), treba da se izlistaju svi Pokemoni iz niza u svom dugmetu.
// Na klik jednog dugmeta, treba da se izlistaju sve informacije o tom Pokemonu.

//uvoz is preth.domaceg:
let pokemon1 = {
    ime: "Bulbasaur", vrsta: "travnati", sposobnosti: ["Overgrow", "ThickFat", "Chlorophyll"], karakteristike: { napad: 5, odbrana: 2, brzina: 10 }
}
let pokemon2 = {
    ime: "Charmander", vrsta: "vatreni", sposobnosti: ["Blaze", "CuteCharm"], karakteristike: { napad: 20, odbrana: 3, brzina: 8 }
}
let pokemon3 = {
    ime: "Squirtle", vrsta: "vodeni", sposobnosti: ["Torrent", "Hydration", "CuteCharm"], karakteristike: { napad: 4, odbrana: 5, brzina: 12 }
}
let pokemon4 = {
    ime: "Vulpix", vrsta: "vatreni", sposobnosti: ["FlashFire", "CuteCharm"], karakteristike: { napad: 8, odbrana: 7, brzina: 10 }
}
let kolekcijaPokemona = [pokemon1, pokemon2, pokemon3, pokemon4];


const upDiv = document.querySelector('#up');
const divZaIspis1 = document.createElement('div');
upDiv.appendChild(divZaIspis1); //morala sam da ga dodam, da bih mogla da ga cistim pri svakom kliku a da dugmici ostanu sve vreme
const downDiv = document.querySelector('#down');
const divZaIspis2 = document.createElement('div');
downDiv.appendChild(divZaIspis2);
const upBtn = document.querySelector('#up button');
const downBtn = document.querySelector('#down button');
//Gornji protivnik
upBtn.addEventListener('click', () => {
    upBtn.remove();
    kolekcijaPokemona.forEach(element => {
        let x = document.createElement("button");
        x.textContent = `${element.ime}`;
        upDiv.append(x);
        //novo dugme lista podatke o Pokemonu
        x.addEventListener('click', () => {
            divZaIspis1.innerHTML = "";
            let infoKartica = document.createElement("div");
            infoKartica.id = `${element.ime}`; //id je naziv Pokemona za css
            divZaIspis1.appendChild(infoKartica);
            //div za sliku
            let foto = document.createElement('div');
            foto.innerHTML = `<img src='../images/${element.ime}.jpg' alt='Pokemon'/>`;
            let parIme = document.createElement("p");
            parIme.innerHTML = `<a href="https://bs.wikipedia.org/wiki/Spisak_Pok%C3%A9mona" target="_blank">${element.ime}</a>`;
            let parVr = document.createElement("p");
            parVr.innerHTML = `<b>vrsta:</b> ${element.vrsta}`;
            let parSpo = document.createElement("p");
            parSpo.innerHTML = `<b>sposobnosti:</b> ${element.sposobnosti}`;
            let divBorba = document.createElement('div');
            divBorba.innerHTML = `<b>napad:</b> ${element.karakteristike.napad}<br><b>odbrana:</b> ${element.karakteristike.odbrana}<br><b>brzina:</b> ${element.karakteristike.brzina}`;
            infoKartica.append(foto, parIme, parVr, parSpo, divBorba);
        })

    })
})

//Donji protivnik
downBtn.addEventListener('click', () => {
    downBtn.remove();
    kolekcijaPokemona.forEach(element => {
        let x = document.createElement("button");
        x.textContent = `${element.ime}`;
        downDiv.append(x);
        //novo dugme lista podatke o Pokemonu
        x.addEventListener('click', () => {
            divZaIspis2.innerHTML = "";
            let infoKartica = document.createElement("div");
            infoKartica.id = `${element.ime}`; //id je naziv Pokemona za css
            divZaIspis2.appendChild(infoKartica);
            //div za sliku
            let foto = document.createElement('div');
            foto.innerHTML = `<img src='../images/${element.ime}.jpg' alt='Pokemon'/>`;
            let parIme = document.createElement("p");
            parIme.innerHTML = `<a href="https://bs.wikipedia.org/wiki/Spisak_Pok%C3%A9mona" target="_blank">${element.ime}</a>`;
            let parVr = document.createElement("p");
            parVr.innerHTML = `<b>vrsta:</b> ${element.vrsta}`;
            let parSpo = document.createElement("p");
            parSpo.innerHTML = `<b>sposobnosti:</b> ${element.sposobnosti}`;
            let divBorba = document.createElement('div');
            divBorba.innerHTML = `<b>napad:</b> ${element.karakteristike.napad}<br><b>odbrana:</b> ${element.karakteristike.odbrana}<br><b>brzina:</b> ${element.karakteristike.brzina}`;
            infoKartica.append(foto, parIme, parVr, parSpo, divBorba);

        })

    })
})