//pratik sorusu 
//yukaridaki ders gecme programini yazalim
//kosaullari hatirlayalim
// (birinci sinavin %25 + ikinci sinavin %50) +(1.sozlu + ikinci sozlunun) % 25 nin toplamlari 60 in uzerinde olmasi gereksin
// birinci sinav = 70 => %25 =  14 
// ikinci sinav = 50 => %50 =  25
// 1.sozlu + 2.sozlu => 45 + 55 = 100 => %25 => 25
// 14 + 25 + 25 = 64 => ogrenci dersden gecti
// ogrenci eger 50 - 60 arasinda bir not aldiysa , butunlemeye kaldi 
// 50 altindaki not ise sinif tekrari sorry!
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
