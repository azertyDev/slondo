export const defaultSEOContent = {
    ru: {
        title: 'Slondo',
        description: '',
        text: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей неоднозначны предоставлены сами себе.'
    },
    uz: {
        title: 'Slondo',
        description: '',
        text: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей неоднозначны предоставлены сами себе.'
    }
};

export const getSEOContent = (subCtgrName: string, location: string) => {
    const seoContent = {
        phonesAndTablets: {
            ru: {
                title: `Телефоны и планшеты в ${location} | купить смартфоны, умные часы, чехлы и запчасти`,
                description: `Множество объявлений по продаже телефонов, смартфонов, планшетов, смарт-часов и других комплектующих, на slondo.uz | купить по лучшей цене в ${location}`,
                text: 'Современную жизнь трудно представить без смартфона и гаджетов работающих вместе с ним. Мы просыпаемся по будильнику из телефона и смотрим время на умные часы. Девайсы всюду ассистируют нам, поэтому следует ответственно отнестись к их выбору. Выбирайте, узнавайте цены и покупайте смартфоны или планшеты с помощью slondo.uz! Теперь для быстрой продажи нового или б.у. телефона, зарядного устройства, умных часов, а также аксессуаров и комплектующих к ним, достаточно выложить объявление указав цену, состояние и другие параметры. Покупатель сам найдет Вас!',
                mobilePhones: {
                    title: `Купить телефон в ${location} | новые и б/у смартфоны и мобильные телефоны по лучшим ценам`,
                    description: `Быстро и выгодно купить мобильный телефон в ${location} вам поможет slondo.uz! Множество новых и б.у. смартфонов разных брендов: Samsung, xiaomi, apple iphone и многие другие.`,
                    text: 'Мобильные телефоны, давно стали неотъемлемой частью жизни каждого человека. Читать, слушать музыку, пользоваться картами, общаться и многое другое позволяют нам современные модели смартфонов. Покупая мобильный телефон или смартфон, базовый пользователь обращает внимание на процессор, ОЗУ, камеру и размер внутренней памяти. Процессор и ОЗУ напрямую влияют на производительность девайса, позволяя открывать любые мобильные приложения и игры, в также быстро переключаться между ними. Камера смартфона сейчас способна заменить профессиональные фотоаппараты, делая качественные мобильные снимки. Размер накопителя показывает какой объем информации вы можете хранить на устройстве. Учитывая, что современные фотографии, приложения и игры весят очень много, имеет смысл купить телефон с 128 Гб и больше. Все вышеперечисленные параметры напрямую влияют на цену устройства. Если вы не фотолюбитель, нет смысла переплачивать за камеру. На slondo.uz вы можете найти смартфоны следующих брендов: Xiaomi redmi, Iphone (айфон) x, xs, se, Samsung Galaxy, Huawei, Google, Sony, Meizu, LG, Nokia, Lenovo и другие',
                    apple: {
                        title: `Iphone в ${location} | купить или узнать цены на айфоны и другие смартфоны от apple`,
                        description: `Купить айфон в ${location} или узнать цены на смартфоны от apple | новые и б/у телефоны от apple в кредит и рассрочку.`,
                        text: 'Смартфоны от apple давно зарекомендовали себя как надежные и производительные девайсы. Регулярно обновляя свою линейку iphone, новые гаджеты получают все более мощные комплектующие, а старые модели в это время теряют в цене, что позволяет купить айфоны гораздо дешевле их первоначальной стоимости. Всего компания apple выпустила достаточно большое количество смартфонов, большинство из которых прекрасно функционируют по сей день. К примеру, Iphone 4 S или 5 S C давно не подходят под большинство сегодняшних игр и приложений, но до сих пор нормально функционируют. Более поздние модели: 6 plus S, 7 S SE, остаются мощными аппаратами, конкурирующие со многими новыми смартфонами, среднего ценового сегмента. Телефоны, вышедшие в 2017 году и позднее 8 plus, X, поддерживают практически все нынешние приложения, а смартфоны от apple линейки XR, XS, MAX, а также 11 pro MAX и новейшие девайсы 12 mini, pro, max, SE, являются флагманами, несмотря на значительное время, прошедшее после их релиза. Также компания apple позволяет пользователям самим выбрать необходимый объем памяти: 32, 64, 128, 256 или 512 гб. Выбрать лучшее из множества предложений, вам поможет slondo.uz!'
                    }
                }
            },
            uz: {
                title: `Telefonlar va planshetlar ${location}da / Smartfon, smart watch, soatlar, chexol va ehtiyot qismlarni sotib olish.`,
                description: `Telefonlar, smartfon, planshetlar, smart watch  va boshqa komponentlarni sotish uchun ko\'plab e’lonlar slondo.uzda / ${location} shahrida eng yaxshi narxda sotib olish.`,
                text: `Zamonaviy hayotni smartfonsiz va u bilan ishlaydigan gadjetlarsiz tasavvur qilish qiyin. Qo’limizdagi telefon bir vaqtning o’zida ham aloqa vositasi, ham foto-video kamera, ham soat, kalendar,budilnik va boshqa ko’plab ishlarni bajaradigan dastyorga aylanib ulgurdi. Gadjet deb aytilayotgan bu qurilmalar har joyda bizga yordam beradi, shuning uchun siz ularni tanlashda mas\'uliyatli munosabatda bo\'lishingiz kerak. Slondo.uz sayti yordamida smartfon yoki planshetlarni sotib olishingiz, narxlarni bilib olishingiz va sotishingiz mumkin! Buning uchun yangi yoki ishlatilgan telefon, zaryadnik,Smart Watch, shuningdek, aksessuarlar va butlovchi qismlarning narxini, holatni va boshqa parametrlarni ko\'rsatuvchi ma’lumotni joylashtirish kifoya. Xaridorning o’zi  sizni topadi!`,
                mobilePhones: {
                    title: `Smartfonlar. iPhone ${location}da sotib olish / yangi va ishlatilgan smartfon va mobil telefonlar eng yaxshi narxlarda.`,
                    description: `Samsung, Xiaomi, Apple, iPhone mobil telefonlarini ${location}da sotib olishda Slondo.uz sizga yordam beradi. Ko\'plab brend smartfonlar.`,
                    text: 'Telefonlar va smartfonlar har bir inson hayotining ajralmas qismiga aylandi. O\'qish, musiqa tinglash, bank kartalaridan foydalanish, muloqot qilish va boshqa ko\'p narsalar zamonaviy telefonlarga imkon beradi. Mobil telefon yoki smartfonni sotib olishda  prosessor, RAM, kamera va ichki xotira hajmiga e\'tibor beriladi. Prosessor va RAM to\'g\'ridan-to\'g\'ri qurilmaning ishlashiga ta\'sir qiladi, har qanday mobil ilovalar va o\'yinlarni ochishga imkon beradi va ular orasida axborot almashishi tezlashadi. Smartfon kamerasi endi professional kameralarning o’rnini bosa oladi va yuqori sifatli mobil tasvirlarni yaratadi. Ichki xotiraning  yoki flesh karta kattaligi qurilmada qanday ma\'lumotlarni saqlashingiz mumkinligini ko\'rsatadi. Zamonaviy fotosuratlar, ilovalar va o\'yinlar juda katta hajmga ega  bo\'lganligi sababli, 128 Gb va undan katta ichki hotiraga ega bo’lgan telefonni sotib olish mantiqan to’g’ri bo’ladi. Yuqoridagi barcha parametrlar qurilmaning narxiga bevosita ta\'sir qiladi. Agar siz fotosuratchi bo\'lmasangiz, kamera uchun ortiqcha pul to\'lashda hech qanday mantiq yo\'q. Slondo.uz orqali quyidagi brendlarning smartfonlarini topishingiz mumkin: Xiaomi redmi, iPhone, Samsung Galaxy, Huawei, Mi, Sony, Artel, Meizu, LG, Nokia, Lenovo va boshqalar'
                }
            }
        }
    };

    return seoContent[subCtgrName];
};