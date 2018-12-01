<template>
  <div>
    <div class="text-xs-center mb-2">
      <v-chip label class="teal darken-1 white--text">Aradığınız ürünler aşağıdadır.</v-chip>
    </div>
    <List v-bind:products="result" />
  </div>
</template>

<script>
  import List from '../components/List'
  import axios from 'axios'

  export default {
    components: {
      List
    },
    data() {
      return {
        result: []
      }
    },
    methods: {
      search: async (searchText) => {
        const response = await axios.get("http://localhost:3000/api/search?q=" + searchText)
        return response.data.response
      }
    },
    mounted() {
      let query = this.$route.query.search;
      this.result = [{
        "productName": "2010 Eğitim Bilimleri Kurumsal Yaprak Test",
        "productPrice": "   12,50",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=289490&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/2010-egitim-bilimleri-kurumsal-yaprak-test/242766.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "2014 Polis Meslek Yüksekokulları Sınavları Çek Kopar Yaprak Test",
        "productPrice": "   18,63",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=162916&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/2014-polis-meslek-yuksekokullari-sinavlari-cek-kopar-yaprak-test/326046.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5. Sınıf Fen Bilimleri Yaprak Test",
        "productPrice": "   6,56",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=88998&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5-sinif-fen-bilimleri-yaprak-test/332566.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5. Sınıf İngilizce Yaprak Test",
        "productPrice": "   8,44",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=74501&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5-sinif-ingilizce-yaprak-test/332570.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5. Sınıf Sosyal Bilgiler Yaprak Test",
        "productPrice": "   8,44",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=88999&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5-sinif-sosyal-bilgiler-yaprak-test/332568.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5. Sınıf Türkçe Yaprak Test",
        "productPrice": "   8,44",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=79819&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5-sinif-turkce-yaprak-test/332569.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "8.Sınıf Fen ve Teknoloji Test Kitabı",
        "productPrice": "   22,50",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=169513&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/8sinif-fen-ve-teknoloji-test-kitabi/334570.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "2.Sınıf Poşet Yaprak Test",
        "productPrice": "   9,38",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=94872&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/2sinif-poset-yaprak-test/340266.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "2.Sınıf Yaprak Test English 24 Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=84798&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/2sinif-yaprak-test-english-24-test/340261.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "3.Sınıf Kurumsal Yaprak Test",
        "productPrice": "   10,63",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=84854&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/3sinif-kurumsal-yaprak-test/340513.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "1.Sınıf Yaprak Test",
        "productPrice": "   9,38",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=54854&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/1sinif-yaprak-test/340221.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5.Sınıf Matematik Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=154695&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5sinif-matematik-yaprak-test/334686.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5.Sınıf Sosyal Bilgiler Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=164377&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5sinif-sosyal-bilgiler-yaprak-test/334687.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5.Sınıf Türkçe Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=169544&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5sinif-turkce-yaprak-test/334689.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5.Sınıf İngilizce Yaprak Test",
        "productPrice": "   6,25",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=169545&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5sinif-ingilizce-yaprak-test/334690.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "5.Sınıf Temel Dersler Yaprak Test",
        "productPrice": "   10,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=294694&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/5sinif-temel-dersler-yaprak-test/334691.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "4.Sınıf Sosyal Bilgiler Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=169546&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/4sinif-sosyal-bilgiler-yaprak-test/334697.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "4.Sınıf Fen ve Teknoloji Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=89276&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/4sinif-fen-ve-teknoloji-yaprak-test/334693.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "4.Sııf Matematik Yaprak Test",
        "productPrice": "   5,00",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=89277&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/4siif-matematik-yaprak-test/334696.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "4.Sınıf İngilizce Yaprak Test",
        "productPrice": "   4,69",
        "productImage": "https://imageserver.kitapyurdu.com/select.php?imageid=169548&width=100&isWatermarked=true",
        "productLink": "https://www.kitapyurdu.com/kitap/4sinif-ingilizce-yaprak-test/334700.html&filter_name=test",
        "siteName": "kitapyurdu"
      }, {
        "productName": "2A Toys Solo Test",
        "productPrice": "2,12 TL",
        "productImage": "https://productimages.hepsiburada.net/s/6/280-413/9713742708786.jpg",
        "productLink": "https://www.hepsiburada.com/2a-toys-solo-test-p-HBV000007OROM",
        "siteName": "hepsiburada"
      }, {
        "productName": "2. Sınıf Tüm Dersler Yaprak Test",
        "productPrice": "3,24 TL",
        "productImage": "https://productimages.hepsiburada.net/s/18/280-413/9799579172914.jpg",
        "productLink": "https://www.hepsiburada.com/2-sinif-tum-dersler-yaprak-test-p-HBV00000AHCZY",
        "siteName": "hepsiburada"
      }, {
        "productName": "Star Solo Test Zeka Oyunu",
        "productPrice": "2,38 TL",
        "productImage": "https://productimages.hepsiburada.net/s/11/280-413/9027383722034.jpg",
        "productLink": "https://www.hepsiburada.com/star-solo-test-zeka-oyunu-p-OYUNAT2312",
        "siteName": "hepsiburada"
      }, {
        "productName": "4. Sınıf Tüm Dersler Yaprak Test",
        "productPrice": "4,26 TL",
        "productImage": "https://productimages.hepsiburada.net/s/18/280-413/9799577927730.jpg",
        "productLink": "https://www.hepsiburada.com/4-sinif-tum-dersler-yaprak-test-p-HBV00000AHCZE",
        "siteName": "hepsiburada"
      }, {
        "productName": "İsem Yayıncılık Dgs Çek Kopar Yaprak Test 2018",
        "productPrice": "9,90 TL",
        "productImage": "https://productimages.hepsiburada.net/s/7/280-413/9753481707570.jpg",
        "productLink": "https://www.hepsiburada.com/isem-yayincilik-dgs-cek-kopar-yaprak-test-2018-p-HBV000008ZWET",
        "siteName": "hepsiburada"
      }, {
        "productName": "Yargı Ders Arkadaşım 2. Sınıf Temel Dersler Test Kitabı",
        "productPrice": "12,68 TL",
        "productImage": "https://productimages.hepsiburada.net/s/7/280-413/9764070555698.jpg",
        "productLink": "https://www.hepsiburada.com/yargi-ders-arkadasim-2-sinif-temel-dersler-test-kitabi-p-HBV0000097TBT",
        "siteName": "hepsiburada"
      }, {
        "productName": "Solotest Efsane Solo Test Oyunu - ORJINAL URUN",
        "productPrice": "2,39 TL",
        "productImage": "https://productimages.hepsiburada.net/s/3/280-413/9608268742706.jpg",
        "productLink": "https://www.hepsiburada.com/solotest-efsane-solo-test-oyunu-orjinal-urun-p-HBV000004LH60",
        "siteName": "hepsiburada"
      }, {
        "productName": "Mastech Ms6812 Kablo Test Cihazı",
        "productPrice": "62,99 TL",
        "productImage": "https://productimages.hepsiburada.net/s/6/280-413/9721729089586.jpg",
        "productLink": "https://www.hepsiburada.com/mastech-ms6812-kablo-test-cihazi-p-HRRSMMS6812",
        "siteName": "hepsiburada"
      }, {
        "productName": "Cs Motor Test",
        "productPrice": "24,90 TL",
        "productImage": "https://productimages.hepsiburada.net/s/3/280-413/9614432043058.jpg",
        "productLink": "https://www.hepsiburada.com/cs-motor-test-p-HBV000004RRPI",
        "siteName": "hepsiburada"
      }, {
        "productName": "Solo Test Zeka Oyunu",
        "productPrice": "2,98 TL",
        "productImage": "https://productimages.hepsiburada.net/s/11/280-413/9037123289138.jpg",
        "productLink": "https://www.hepsiburada.com/solo-test-zeka-oyunu-p-OYUNEGEHOBI049",
        "siteName": "hepsiburada"
      }, {
        "productName": "Sınav 2. Sınıf Tüm Dersler Yaprak Test",
        "productPrice": "11,20 TL",
        "productImage": "https://productimages.hepsiburada.net/s/23/280-413/9989284626482.jpg",
        "productLink": "https://www.hepsiburada.com/sinav-2-sinif-tum-dersler-yaprak-test-p-KSINAVDERGI32096",
        "siteName": "hepsiburada"
      }, {
        "productName": "Unit Ut-12A Temassız Voltaj Test Cihazı",
        "productPrice": "25,00 TL",
        "productImage": "https://productimages.hepsiburada.net/s/12/280-413/9060708614194.jpg",
        "productLink": "https://www.hepsiburada.com/unit-ut-12a-temassiz-voltaj-test-cihazi-p-HRANTENUT12A",
        "siteName": "hepsiburada"
      }, {
        "productName": "C.F.L. 725HB Compact Şarj Cihazı + Pil Test Cihazı + 2 Adet 1100 maH İnce Kalem Pil",
        "productPrice": "20,00 TL",
        "productImage": "https://productimages.hepsiburada.net/s/12/280-413/9065005514802.jpg",
        "productLink": "https://www.hepsiburada.com/c-f-l-725hb-compact-sarj-cihazi-pil-test-cihazi-2-adet-1100-mah-ince-kalem-pil-p-OFISCFL725",
        "siteName": "hepsiburada"
      }, {
        "productName": "Sözün Özü 2. Sınıf Matematik Dıt Test (30 Adet)",
        "productPrice": "1,30 TL",
        "productImage": "https://productimages.hepsiburada.net/s/7/280-413/9076082802738.jpg",
        "productLink": "https://www.hepsiburada.com/sozun-ozu-2-sinif-matematik-dit-test-30-adet-p-KARTI6054717897",
        "siteName": "hepsiburada"
      }, {
        "productName": "Dikkati Güçlendirme Seti 7 Yaş Test - Osman Abalı",
        "productPrice": "2,00 TL",
        "productImage": "https://productimages.hepsiburada.net/s/7/280-413/9096993636402.jpg",
        "productLink": "https://www.hepsiburada.com/dikkati-guclendirme-seti-7-yas-test-osman-abali-p-KADEDA93678",
        "siteName": "hepsiburada"
      }, {
        "productName": "Dikkati Güçlendirme Seti 8 Yaş Test-Kolektif",
        "productPrice": "2,00 TL",
        "productImage": "https://productimages.hepsiburada.net/s/2/280-413/9541082873906.jpg",
        "productLink": "https://www.hepsiburada.com/dikkati-guclendirme-seti-8-yas-test-kolektif-p-KADEDA86587",
        "siteName": "hepsiburada"
      }, {
        "productName": "Yargı Ders Arkadaşım 3. Sınıf Temel Dersler Test Kitabı",
        "productPrice": "13,65 TL",
        "productImage": "https://productimages.hepsiburada.net/s/7/280-413/9764070326322.jpg",
        "productLink": "https://www.hepsiburada.com/yargi-ders-arkadasim-3-sinif-temel-dersler-test-kitabi-p-HBV0000097TBF",
        "siteName": "hepsiburada"
      }, {
        "productName": "İsem Yayıncılık Evveliyat Kpss 2017 Matematik Çek Kopart Yaprak Test",
        "productPrice": "2,90 TL",
        "productImage": "https://productimages.hepsiburada.net/s/0/280-413/9461735718962.jpg",
        "productLink": "https://www.hepsiburada.com/isem-yayincilik-evveliyat-kpss-2017-matematik-cek-kopart-yaprak-test-p-HBV000000S89N",
        "siteName": "hepsiburada"
      }, {
        "productName": "Yediiklim Yayınları 2019 KPSS Coğrafya Çek Kopart Yaprak Test",
        "productPrice": "11,37 TL",
        "productImage": "https://productimages.hepsiburada.net/s/22/280-413/9949007151154.jpg",
        "productLink": "https://www.hepsiburada.com/yediiklim-yayinlari-2019-kpss-cografya-cek-kopart-yaprak-test-p-HBV00000ELNUH",
        "siteName": "hepsiburada"
      }, {
        "productName": "Robokolik Krokodil Test Kablosu 3 Adet",
        "productPrice": "2,85 TL",
        "productImage": "https://productimages.hepsiburada.net/s/19/280-413/9824842383410.jpg",
        "productLink": "https://www.hepsiburada.com/robokolik-krokodil-test-kablosu-3-adet-p-HBV00000B4XFX",
        "siteName": "hepsiburada"
      }, {
        "productName": "Sözün Özü Yayınları 7. Sınıf Din Kültürü Ve Ahlak Bilgisi Dıt Test",
        "productPrice": "1,30 TL",
        "productImage": "https://productimages.hepsiburada.net/s/8/280-413/9119957057586.jpg",
        "productLink": "https://www.hepsiburada.com/sozun-ozu-yayinlari-7-sinif-din-kulturu-ve-ahlak-bilgisi-dit-test-p-KPNLU240185",
        "siteName": "hepsiburada"
      }, {
        "productName": "İsem 2018 Kpss Genel Kültür Tarih Çek Kopart Yaprak Test",
        "productPrice": "6,23 TL",
        "productImage": "https://productimages.hepsiburada.net/s/18/280-413/9789344219186.jpg",
        "productLink": "https://www.hepsiburada.com/isem-2018-kpss-genel-kultur-tarih-cek-kopart-yaprak-test-p-HBV00000A55I3",
        "siteName": "hepsiburada"
      }, {
        "productName": "Sınav Dergi 4.Sınıf Tüm Dersler Yaprak Test (104 Adet)",
        "productPrice": "17,50 TL",
        "productImage": "https://productimages.hepsiburada.net/s/8/280-413/8797901717554.jpg",
        "productLink": "https://www.hepsiburada.com/sinav-dergi-4-sinif-tum-dersler-yaprak-test-104-adet-p-KSINAVDERGI30795",
        "siteName": "hepsiburada"
      }, {
        "productName": "Olimpik Çocuk Matematik Ve Zeka Test Kitabı 1. Sınıflar İçin Bilsem’e Hazırlık",
        "productPrice": "22,02 TL",
        "productImage": "https://productimages.hepsiburada.net/s/2/280-413/9578424139826.jpg",
        "productLink": "https://www.hepsiburada.com/olimpik-cocuk-matematik-ve-zeka-test-kitabi-1-siniflar-icin-bilsem-e-hazirlik-p-HBV000003SYIN",
        "siteName": "hepsiburada"
      }, {
        "productName": "Candan CM-60 Manuel Test Pompası Su Tesisatı Test Pompası",
        "productPrice": "549,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/tahliye-ve-temiz-su-hortumlari/candan-cm-60-manuel-test-pompasi-su-tesisati-test-pompasi-P125237826",
        "siteName": "n11"
      }, {
        "productName": "Palme 5. Sınıf Next Level Englısh Test Booklet Yaprak Test",
        "productPrice": "14,40 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/palme-5-sinif-next-level-english-test-booklet-yaprak-test-P281736830",
        "siteName": "n11"
      }, {
        "productName": "Palme 7. Sınıf Next Level English Test Booklet Yaprak Test",
        "productPrice": "16,80 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/palme-7-sinif-next-level-english-test-booklet-yaprak-test-P281736911",
        "siteName": "n11"
      }, {
        "productName": "Palme 6. Sınıf Next Level English Test Booklet Yaprak Test",
        "productPrice": "16,80 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/palme-6-sinif-next-level-english-test-booklet-yaprak-test-P281736854",
        "siteName": "n11"
      }, {
        "productName": "ELM 327 OBD2 SÜPER MİNİ Bluetoothlu V2.1 Arıza Tespit Cihazı",
        "productPrice": "32,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/tespit-ve-test-cihazlari/elm-327-obd2-super-mini-bluetoothlu-v21-ariza-tespit-cihazi-P262090610",
        "siteName": "n11"
      }, {
        "productName": "Xiaomi Mi TDS Pen Su Kalite Test Kalemi TDS METRE",
        "productPrice": "58,88 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/su-aritma-cihazlari/xiaomi-mi-tds-pen-su-kalite-test-kalemi-tds-metre-P207938555",
        "siteName": "n11"
      }, {
        "productName": "Profesyonel Araç Oto Araba Kontrol Test Kalemi Yedek Sigorta Seti",
        "productPrice": "24,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/sigorta/profesyonel-arac-oto-araba-kontrol-test-kalemi-yedek-sigorta-seti-P271485021",
        "siteName": "n11"
      }, {
        "productName": "Surelab Hızlı Gebelik Hamilelik Testi Kart Test 10 adet",
        "productPrice": "16,50 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/surelab-hizli-gebelik-hamilelik-testi-kart-test-10-adet-P204935063",
        "siteName": "n11"
      }, {
        "productName": "Xiaomi Hybrid Kulaklık orjinal Barkot test çalışıyor PRO HD Mİ",
        "productPrice": "169,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/cep-telefonu-kulaklik/xiaomi-hybrid-kulaklik-orjinal-barkot-test-calisiyor-pro-hd-mi-P256822805",
        "siteName": "n11"
      }, {
        "productName": "Oncomed Hızlı Gebelik Hamilelik Testi Kart Test 10 adet",
        "productPrice": "14,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/gebelik-ve-ovulasyon-testleri/oncomed-hizli-gebelik-hamilelik-testi-kart-test-10-adet-P264036248",
        "siteName": "n11"
      }, {
        "productName": "Araç Boya Test Cihazı Kaliteli %100 Doğru Ölçüm Fırsat Ürünü",
        "productPrice": "139,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/tespit-ve-test-cihazlari/arac-boya-test-cihazi-kaliteli-100-dogru-olcum-firsat-urunu-P255185094",
        "siteName": "n11"
      }, {
        "productName": "ÇANTA 8.SINIF 6´Lı Yaprak Test Seti",
        "productPrice": "70,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/canta-8sinif-6li-yaprak-test-seti-P296400073",
        "siteName": "n11"
      }, {
        "productName": "Xiaomi Mi TDS Pen-Su Kalite Test Kalemi",
        "productPrice": "54,20 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/su-aritma-cihazlari/xiaomi-mi-tds-pen-su-kalite-test-kalemi-P290850978",
        "siteName": "n11"
      }, {
        "productName": "KABLO BULUCU TESTER NETWORK 5061p BİLİ BİLİ RJ11 RJ45 TEST SET Cİ",
        "productPrice": "149,95 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/kablo-bulucu-tester-network-5061p-bili-bili-rj11-rj45-test-set-ci-P195602307",
        "siteName": "n11"
      }, {
        "productName": "OKYANUS 7.SINIF 3´LÜ YAPRAK TEST SETİ SÜRPRİZ HEDİYELİ",
        "productPrice": "47,52 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/okyanus-7sinif-3lu-yaprak-test-seti-surpriz-hediyeli-P296400041",
        "siteName": "n11"
      }, {
        "productName": "ÖZ-DE-BİR 8.SINIF TÜM DERSLER YAPRAK TESTLER VE SORU BANKASI",
        "productPrice": "99,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/kaynak-kitaplar/oz-de-bir-8sinif-tum-dersler-yaprak-testler-ve-soru-bankasi-P300570172",
        "siteName": "n11"
      }, {
        "productName": "ELM327 Bluetooth Türkçe Araç Arıza Tespit Cihazı",
        "productPrice": "44,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/tespit-ve-test-cihazlari/elm327-bluetooth-turkce-arac-ariza-tespit-cihazi-P299948701",
        "siteName": "n11"
      }, {
        "productName": "Xiaomi Mi TDS Pen - Su Kalite Test Kalemi",
        "productPrice": "59,88 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/su-aritma-cihazlari/xiaomi-mi-tds-pen-su-kalite-test-kalemi-P286007886",
        "siteName": "n11"
      }, {
        "productName": "BİLFEN BİLTEST 6.SINIF MATEMATİK FEN TÜRKÇE SOSYAL YAPRAK TEST SE",
        "productPrice": "40,24 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/bilfen-biltest-6sinif-matematik-fen-turkce-sosyal-yaprak-test-se-P302025878",
        "siteName": "n11"
      }, {
        "productName": "BİLFEN BİLTEST 7.SINIF MATEMATİK TÜRKÇE SOSYAL TÜRKÇE YAPRAK TEST",
        "productPrice": "45,98 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/bilfen-biltest-7sinif-matematik-turkce-sosyal-turkce-yaprak-test-P302025882",
        "siteName": "n11"
      }, {
        "productName": "BİLFEN BİLTEST 8.SINIF MATEMATİK FEN TÜRKÇE İNKİLAP YAPRAK TEST S",
        "productPrice": "51,95 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/bilfen-biltest-8sinif-matematik-fen-turkce-inkilap-yaprak-test-s-P302025896",
        "siteName": "n11"
      }, {
        "productName": "TME Fren Hidrolik Yağ Test Ölçer Kalem",
        "productPrice": "59,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/elektrik-olcum-cihazlari/tme-fren-hidrolik-yag-test-olcer-kalem-P296730947",
        "siteName": "n11"
      }, {
        "productName": "7.Sınıf 2019 More and more Set 5 Kitap Word Power Test Book Engli",
        "productPrice": "79,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/7sinif-2019-more-and-more-set-5-kitap-word-power-test-book-engli-P290571604",
        "siteName": "n11"
      }, {
        "productName": "ÖZ-DE-BİR YAYINLARI 6.SINIF YAPRAK TESTLER VE SORU BANKASI",
        "productPrice": "99,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/kaynak-kitaplar/oz-de-bir-yayinlari-6sinif-yaprak-testler-ve-soru-bankasi-P300587404",
        "siteName": "n11"
      }, {
        "productName": "ÖZ-DE-BİR YAYINLARI TYT SAYISAL ALTIN SERİ YAPRAK TEST SETİ",
        "productPrice": "75,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/ygs-ve-lys/oz-de-bir-yayinlari-tyt-sayisal-altin-seri-yaprak-test-seti-P301518706",
        "siteName": "n11"
      }, {
        "productName": "ÖZ-DE-BİR YAYINLARI AYT EŞİT AĞIRLIK ALTIN SERİ YAPRAK TESTLER",
        "productPrice": "75,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/ygs-ve-lys/oz-de-bir-yayinlari-ayt-esit-agirlik-altin-seri-yaprak-testler-P301536414",
        "siteName": "n11"
      }, {
        "productName": "ÖZ-DE-BİR YAYINLARI 7.SINIF YAPRAK TESTLER VE SORU BANKASI",
        "productPrice": "99,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/kaynak-kitaplar/oz-de-bir-yayinlari-7sinif-yaprak-testler-ve-soru-bankasi-P300579718",
        "siteName": "n11"
      }, {
        "productName": "Çanta Yayınları 8. Sınıf Matematik Çek Kopart Yaprak Test",
        "productPrice": "14,16 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/canta-yayinlari-8-sinif-matematik-cek-kopart-yaprak-test-P302383583",
        "siteName": "n11"
      }, {
        "productName": "Çanta Yayınları 8. Sınıf İngilizce Çek Kopart Yaprak Test",
        "productPrice": "12,26 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/canta-yayinlari-8-sinif-ingilizce-cek-kopart-yaprak-test-P302383591",
        "siteName": "n11"
      }, {
        "productName": "Çanta Yayınları 8. Sınıf Türkçe Çek Kopart Yaprak Test",
        "productPrice": "14,16 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/canta-yayinlari-8-sinif-turkce-cek-kopart-yaprak-test-P302383586",
        "siteName": "n11"
      }, {
        "productName": "2. El Oto Boya Ölçüm Cihazı",
        "productPrice": "699,00 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/tespit-ve-test-cihazlari/2-el-oto-boya-olcum-cihazi-P295337282",
        "siteName": "n11"
      }, {
        "productName": "6.Sınıf 2019 More and more Set 4 Kitap Word Power Test Book Engli",
        "productPrice": "63,90 TL",
        "productImage": "https://n11scdn.akamaized.net/static/css/jquery/img/blank.gif",
        "productLink": "https://urun.n11.com/diger/6sinif-2019-more-and-more-set-4-kitap-word-power-test-book-engli-P290572892",
        "siteName": "n11"
      }]
      // this.search(query).then((response) => {  
      //     this.result = response
      // })
    },
    watch: {
      '$route'(to, from) {
        let query = to.query.search
        let as = this.search(query).then((response) => {
          this.result = response
        })
      }
    }
  }
</script>