// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

// 1
console.log(Math.max(15, 15));

// 2
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 4
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};


for (let i = 0; i < 5; i++) {
    console.log(rand(1, 10));
};

/* arba kitas budas */

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 10));
};

// 5
console.clear();

let x = 0;
while (x != 5) {
    x = Math.floor(Math.random()*10);
    console.log(x);
};

// 6
let arr = [...Array(rand(20, 30))].map(_ => rand(10, 30));
console.log(arr);

let index = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
        index = i;
    }
}
console.log(arr[index]);

// 7

let arrayOfGivenLetters = ['A', 'B', 'C', 'D'];
let arrayOfRandomLetters = [...Array(100)].map(_ => arrayOfGivenLetters[rand(0, arrayOfGivenLetters.length-1)]);
console.log(arrayOfRandomLetters);

console.clear();

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let letter of arrayOfRandomLetters) {
    if (letter === 'A') {
        countA += 1;
    }
    if (letter === 'B') {
        countB += 1;
    }
    if (letter === 'C') {
        countC += 1;
    }
    if (letter === 'D') {
        countD += 1;
    }
}
console.log(`A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

// 8

function lygineSuma(a, b) {
    if (typeof a === 'number'
        && typeof b === 'number') {
            return a + b;
        }
    if (Array.isArray(a)
        && Array.isArray(b)) {
            return a.length + b.length
        }
    else {
        throw console.error('Kintamieji turi buti arba skaiciai, arba masyvai');
    }
}
console.log(lygineSuma([1, 5, 3], [2, 2]));

// 9

function pirminisSkaicius(a) {
    if (typeof a === 'number') {
        if (a === 1 || a === 0) {
            return false
        }
        if (a === 2) {
            return true
        } else {
            for (let i = 2; i < a; i++) {
            if (a % i !== 0) {
            return true
                } else if (a === i * i) {
                return false
             } else {
                return false
             }
             }
        }
    } else {
        return false
    }
}
console.log(pirminisSkaicius(19));

// 10

let numbers = [...Array(10)].map(_ => rand(0, 9));

function telefonoNumeris(arr) {
    if (Array.isArray(arr) &&
        arr.length === 10) {
            return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
        } else {
            throw console.error('Kintamasis nera masyvas, arba jo ilgis nelygus 10');
        }
};
console.log(telefonoNumeris(numbers));