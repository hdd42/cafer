// Javascript Degiskenler ve Kosullar
// Her programlama dilinde, degiskenler ve kosullar vardir. 

/* 
-------- Javascript Degiskenler ---------
Degiskenler, programlama dillerrinde , gecici veya sabit degerleri tutmak icin kullanilirlar
ornegin, bir toplama islemin sonucu yada kullanicidan alacaginiz bir verinin tutulmasi gibi.
Javascript icinde 2 farkli degisken turu vardir {'const' ve 'let'}
*/ 

//const degiskenler
// eger degiskenin degeri hep sabit kalacaksa ve sonradan degismeyecekse, `const` turu kullanilir
const PI_SAYISI = 3.14
//program icinde PI_SAYISI isimli degiskeni , tanimladiktan sonra tekrar degistirmeye calisirsak
//hata aliriz

 PI_SAYISI = 2
//yukaridaki satirdan dolayi programimiz calismayacaktir! cunku `const` degisken tekrar tanimlanmaya calisiyor.
console.log(PI_SAYISI); // bu komut calismaz.!!!

/** let 
 * let ile tanimladigimiz degiskenleri programimiz icinde sornadan tekrar tanimlayabiliriz
 * ornegin 
*/
let sinifDakiOgrenciSayisi = 55
sinifDakiOgrenciSayisi = 65 
//degisken `let` ile tanimlandigi icin , tekrar atama yapabilmketeyiz.
//sinifDakiOgrenciSayisi artik 55 degil , `65` degerini tutmaktadir.
console.log("ogrenci sayisi = "+  sinifDakiOgrenciSayisi ) // hata olmadan calisir.
//
/** Degisken Tanimlama ve Degisken Atama arasindaki fark 
 * bir degiskene deger atamadan once tanimlamamiz gerekir 
*/
//degisken tanimla : 
let ogrenci 
// ogrenci adinda bir degisken tanimladik ama henuz deger atamadik.
ogrenci = 'Ali Buyuk'
//degiskene deger atadik.

/** const ve let arasindaki diger bir fark */
// const degiskenlerini tanimlarken degerlerinide atamak zorundayiz
const PI_SAYISI = 3.14 
// ama let ile tanimlama yaparken bu opsiyoneldir.
//asagidaki iki kullanimda gecerlidir
let toplam
toplam = 50

let vergi = 40

/** ekrana bilgi yazdirma */
// javascript ile ekrana bilgi yazdirmak icin console.log() metodunu kullaniriz
console.log("Ekrana bilgi yazdir")
//degiskenleri , " " yada ' ' (cift yada tek tirnak) icine almaya gerek yoktur
console.log(degisken)
// degiskenleri ekrana yazdirmak icin bir kac farkli yol vardir
// 1- + isareti ile 
// + isareti sayilar disinda kullanildiginda iki degeri birbirine ekler (toplama degil , ekleme)
let isim = "Ali"
let soyad ="Veli"
let tumIsim = isim+" " +soyad // Ali + bosluk + Veli => Ali Veli 
console.log(tumIsim)
// 2- string template -> template kullanimi
// ters tirnak kullanarak metinleri ve degiskenleri + isareti kullanmadan beraber kullanmamiza yarar
// tek tirnak degil( ' ), ters tirnak ( ` )(backtick)
//ornegin iki tane degiskenimiz olsun 
let isim ="samed"
let soyad = "adiguzel"
//(once ilk kullandigimiz yontemle + isaretiyle) 
let tamAd  = isim+" "+soyad
console.log(tamAd)

// template string yontemi ile ` (ters tirnak )
console.log(`${isim} ${soyad}`)
// back tick ile ` degiskenleri metinlerin icine gomebiliriz arti isaretine gerek yoktur
//boylece hem metinleri yazabilir hemde degiskenleri kolayca bu metne ekleyebiliriz,
// 1 - ilk oalrak yazdiracagimiz bilgi `(backtick) ile baslamali ve `(backtick) ile bitmeli
// 2- metnin icine eklemek istedigimiz degiskenleri ${__degisken_buraya_gelece} bu sekilde kullanmaliyiz
// 3- degiskeni ${} icine koymamiz gerekir.
// 4- ${} icine sadece degiskenler degil, her turlu gecerli javascript kodunu yada islemini ekleyebilirsiniz

let urunAdeti = 5
let urunFiyati = 10
console.log(`Urun toplam fiyatimiz : ${urunFiyati} x ${urunAdeti} = ${urunAdeti * urunFiyati} `)

//hangi yontem daha kolayimiza geliyorsa onu kullanabiliriz, genelde backtick ` daha cok kullanilir 


/** Javascript ile kosul islemleri */
// kosullar programlama dillerinin olmazsa olmazlaridir.
// bir sayi digerinden kucuk mu , buyukmu yada bir bir metin digerinden kisami uzun mu 
// gibi baist kosullardan , cok daha karisik ve komplex kosullara kadar bir cok durumu kontrol etmemiz gerekir
// ornegin bir ogrencinin bir dersden gecip gecmedigini anlayan bir programi dusunelim
// eger ogrencinin iki sinavi ve 2 sozlu notu olsun, ogrencinin dersten gecip gecmedigini hesaplamak icin 
//soyle bir kosul oldugunu dusunelim 
// (birinci sinavin %25 + ikinci sinavin %50) +(1.sozlu + ikinci sozlunun) % 25 nin toplamlari 60 in uzerinde olmasi gereksin
// birinci sinav = 70 => %25 =  14 
// ikinci sinav = 50 => %50 =  25
// 1.sozlu + 2.sozlu => 45 + 55 = 100 => %25 => 25
// 14 + 25 + 25 = 64 => ogrenci dersden gecti

// iki sayiyi
// toplamak icin +
// carpmak icin *
// bolmek icin /
//cikarmak icin -
// kullaniyoruz

// iki sayinin bir birine esit olup olmadigini kiyaslamak icin 2 tane esittir '==' kullaniriz 
 2 == 3 // => yanlis . (tek esittir bir deger atamak icin kullanilir 
 //iki esittir isarte ise '=='  iki degerin bir birine esit olup olmadigini kontrol eder)
// esittir ile iki metnin ayni olup olmadiginida kontrol edebiliriz
"ali" == "ali" // dogru

// sayilarin kucuk ve buyukluk kontrolu icin  kucuktur '<' veya  buyuktur '>' isaretlerini kullaniriz 
// kosullar yada karsilastirmalar geriye 'dogru ve ya yanlis' bir deger dondurur
// ingilizce olar 'true' yada 'false' degerleri 
 2 == 2 // => true(dogru) 
 "ali" == "veli" // => false(yanlis)
 2 > 5 // => false 
 5 / 3 < 5 // => dogru (5 bolu 3 , 5den kucuktur)

 //karsilasirmalari yaparken birden fazla kriter kullanabiliriz ornegin , bir sayinin 5 den ama 10 dan
 //kucuk olup olmadigini kontrol icin iki kosula ihtiyacimiz vardir 
 // 6 > 5 and 6 < 10 // => dogru 
  //birden fazla kosul kullanirken javascript icinde 2 operatorden daha yardim almak zorundayiz 
  // bunlar '&&' and ve '||' or  => ve ile veya 
  let sayi = 6
  sayi > 5 && sayi < 10 // => dogru (6 5 den buyuk ve 10dan kucuk)
  //yukarida ki ifade dogru degeri dondurmesi icin iki sartinda saglanmasi gerekmekte
 // bu yuzden '&&' kullandik . yani sayi  hem 5 ten buyuk hemde 10 kucuk olursa geriye 'true' dogru degeri doner
 //eger birden fazla sartimiz var ama hepsinin degil de sadece bir tanesinin bile dogru olmasi 
 //yeterli ise ozaman && yerine || 'or/veya' kullaniriz 
  isim=='ali' || isim=='veli' 
  //yukarida veya kullandigimiz icin ismin ali veya veli olmasi durumunda kosulumuz dogru oalcaktir.

  //javascript de kosul olusturmak icin if/else bloklarini kullaniriz.  
 //simdiye kadar sadece kosullari yazdik ama kontrol etmek 
 // if 'eger' kullanimi kolaydir 
 if(sayi > 5){
     //eger sayi 5 ten buyukse { } arasindaki kodlari calistir 
    console.log('sayi 5 den buyuktur. sayi : '+sayi)
 }else{
     //eger sayi 5 denkucukse burdaki kodlar calisir 
     console.log('sayi 5 den kucuk')
 }

// birden fazla degeride ayni sekilde && veya || ile kontrol edebiliriz

if(sayi > 5 && sayi < 10){
    //sayi hem 5 ile 10 arasinda
}else{
    //sayi 5 denkucuk yada 10 dan buyuk 
}

//peki bir baska sart daha eklemek istersek ornegin sayi 7 ise ayri bisey yapmak istesek
// ozaman iki secenegimiz var ya birden fazla if kullanacagiz yada elseif kullanacagiz 
//birden fazla if 
if(sayi==7){
    //sayi 7 ise burdaki kodlar calisir
}
if(sayi > 5 && sayi < 10){
    //sayi hem 5 ile 10 arasinda
}else{
    //sayi 5 denkucuk yada 10 dan buyuk 
}
 
//elseif kullanimi 

if(sayi > 5 && sayi < 10){
    //sayi hem 5 ile 10 arasinda
}else if(sayi==7){
    //sayi 7 ise burdaki kodlar calisir
    
}else{
//sayi 5 den kucuk yada 10 dan buyuk 
}
//else if yada birdan fazla if kullanmak bize kalmistir hangisi daha kolayimiza geliyorsa onu kullanabiliriz. 


//pratik sorusu 
//yukaridaki ders gecme programini yazalim
//kosaullari hatirlayalim
// (birinci sinavin %25 + ikinci sinavin %50) +(1.sozlu + ikinci sozlunun) % 25 nin toplamlari 60 in uzerinde olmasi gereksin
// birinci sinav = 70 => %25 =  14 
// ikinci sinav = 50 => %50 =  25
// 1.sozlu + 2.sozlu => 45 + 55 = 100 => %25 => 25
// 14 + 25 + 25 = 64 => ogrenci dersden gecti
let sinav1 = 50
let sinav2 = 45
let sozlu1 = 35
let sozlu2 = 65
// ogrenci gectimi? 
let birinciSinavYuzdesi = (sinav1 * 25) / 100 // birinci sinavin %25 i 
let ikinciSinavYuzdesi = (sinav2 * 50) / 100 // ikinci sinavin %50 si 
let sozluYuzdesi = ((sozlu1 + sozlu2 ) * 25 ) / 100 // sozlulerin toplaminin %25 i 
// parantez kullanimi zorunlu degildir fakat () ile oncelik belirtmis oluyoruz
// en icdeki parantezden baslayarak islemlerin disa dogru sira ile yapilmasini garantilemis olduk 
// once iki sozluyu topla , sonra toplami 25 ile carp ve bu sonucu 100 e bol 
//yuzde hesabi : sayiyi yuzdesi ile carpip 100 bolerek bulabiliriz. 
let sonuc = birinciSinavYuzdesi + ikinciSinavYuzdesi + sozluYuzdesi
if(sonuc > 59 ){
    //not 60 veya 60 dan buyuk 
    console.log(`notunuz ${sonuc} ve dersi gectiniz.`)
}else if(sonuc > 50 && sonuc < 60){
    //not 60 dan kucuk ama 50 den buyuk , bi firsat daha verelim
    console.log(`notunuz ${sonuc} dersi gecemediniz ama 50 - 60 arasi oldugu icin butunlemeye kaldiniz`)
}else{
    //not 50 den kucuk 
    console.log(`notunuz ${sonuc} dersdenkaldiniz tekrar almaniz gerekiyor.`)
}

/** pratik odevi 
 * evinizdeki kisilerin yaslarina gore ekrana genc mi yoksa yaslimi yoksa orta yaslimi olduklarini yazdiriniz
 * sartlar
 * eger kisi bayan ve   28 den kucuk ise genc , 28 ile 50 arasi orta yasli, 50 den buyuk ise yasli 
 * eger kisi erkek ve  30 dan kucuk ise genc , 30 -55 arasi orta yasli , 55 ustu ise yasli .
*/