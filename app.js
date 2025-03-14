const express = require("express");
const app = express();
const port = 6969;

app.use(express.json());

// Handle invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  next();
});

app.use(express.urlencoded({extended : true}));

app.post("/apc/v1/card-list", (req, res) => {
  let data = {
    "data": {
      "totalPage": 1,
      "page": 1,
      "noOfRecord": 10
    },
    "dataProtected": {
      "cardList": [
        {
          "cardProductName": "BNI MyPertamina Platinum",
          "binFirstDigit": "000000",
          "id": "T_6RwNMQ5jKdLbQs_r6J_",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "description": {
              "en": [
                "Discount 10% untuk pembelian membership The Card",
                "Cashback 5% untuk Green Fee",
                "Cashback 5% untuk transaksi di merchant-merchant Golf (Apparel, Merchandise, & Restaurant at Golf Course)",
                "Bebas iuran tahunan tanpa syarat di tahun ke-1",
                "Bebas iuran tahunan di tahun ke-2 dan seterusnya dengan syarat transaksi 1x di tahun sebelumnya."
              ],
              "id": [
                "Discount 10% untuk pembelian membership The Card",
                "Cashback 5% untuk Green Fee",
                "Cashback 5% untuk transaksi di merchant-merchant Golf (Apparel, Merchandise, & Restaurant at Golf Course)",
                "Bebas iuran tahunan tanpa syarat di tahun ke-1",
                "Bebas iuran tahunan di tahun ke-2 dan seterusnya dengan syarat transaksi 1x di tahun sebelumnya."
              ]
            },
            "title": "applyCcDetailSceenBenefitTitle"
          },
          "benefitCount": 5,
          "promo": {
            "description": {
              "en": [],
              "id": []
            },
            "title": "applyCcDetailSceenPromoTitle"
          },
          "position": 5,
          "category": "LIFESTYLE",
          "cardProductDescription": "Kartu hasil kerjasama co-branding antara BNI dan PT. Lotte Mart Indonesia yang ditujukan bagi pelanggan setia LOTTE Mart.",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/SfUVdDhDZA2-wz-S9qUVc.png",
          "isRecommend": null
        },
        {
          "cardProductName": "BNI AMEX Vibe",
          "binFirstDigit": "370136",
          "id": "sr-G7x2pkNDU_rrlHwIBt",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "description": {
              "en": [
                "Cashback Rp 250 ribu untuk pengajuan Kartu Kredit BNI yang disetujui dengan melakukan minimum akumulasi transaksi selama 2 bulan (sejak Kartu Kredit BNI disetujui) sebesar Rp 5.000.000,-",
                "Welcome Cashback Rp 50 ribu untuk aktivasi kartu dalam periode 1 bulan setelah kartu kredit disetujui",
                "Diskon up to Rp 30 ribu untuk GrabCar, GrabBike dan GrabFood",
                "Promo Buy 1 Get 2 di XXI, CGV, Cinepolis dan Mtix",
                "Diskon 10% di Tokopedia, Shopee dan Blibli",
                "Free Annual Fee for Life, tahun pertama tanpa syarat, tahun kedua dan seterusnya dengan syarat minimal 1x transaksi di tahun sebelumnya dengan nominal berapapun"
              ],
              "id": [
                "Cashback Rp 250 ribu untuk pengajuan Kartu Kredit BNI yang disetujui dengan melakukan minimum akumulasi transaksi selama 2 bulan (sejak Kartu Kredit BNI disetujui) sebesar Rp 5.000.000,-",
                "Welcome Cashback Rp 50 ribu untuk aktivasi kartu dalam periode 1 bulan setelah kartu kredit disetujui",
                "Diskon up to Rp 30 ribu untuk GrabCar, GrabBike dan GrabFood",
                "Promo Buy 1 Get 2 di XXI, CGV, Cinepolis dan Mtix",
                "Diskon 10% di Tokopedia, Shopee dan Blibli",
                "Free Annual Fee for Life, tahun pertama tanpa syarat, tahun kedua dan seterusnya dengan syarat minimal 1x transaksi di tahun sebelumnya dengan nominal berapapun"
              ]
            },
            "title": "applyCcDetailSceenBenefitTitle"
          },
          "benefitCount": 6,
          "promo": {
            "description": {
              "en": [],
              "id": []
            },
            "title": "applyCcDetailSceenPromoTitle"
          },
          "position": 5,
          "category": "DAILY_NEEDS",
          "cardProductDescription": "Kartu Kredit yang dipersembahkan bagi Anda untuk menunjang gaya hidup dan aktivitas sehari-hari. Nikmati berbagai benefit dan privileges yang kami tawarkan khusus bagi Anda.",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/9hQtpCJDGQSiRhm2NxInQ.png",
          "isRecommend": null
        },
        {
          "cardProductName": "BNI Mastercard Titanium",
          "binFirstDigit": "524125",
          "id": "ZdyQlt-g9Ls7qh7Pb407G",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "description": {
              "en": [
                "2x BNI Rewards Point untuk transaksi domestik di MCC Hotel melalui website/apps/outlet",
                "Hotel (contoh : www.ritzcarlton.com, www.marriott.com dan lain-lain) dan MCC Travel melalui Travel Agent/Online Travel Agent (contoh : Traveloka, Tiket.com dan lain-lain) dengan minimum transaksi Rp 1 juta",
                "Dapatkan 2x BNI Rewards Point untuk transaksi overseas offline di MCC mana saja dengan minimum transaksi Rp 1 juta.",
                "Cashback 3% hingga Rp 200 ribu untuk setiap transaksi di MCC Airlines minimal Akumulasi Rp 6,5 Juta per bulan melalui website/apps/outlet airlines atau maskapai (contoh : Garuda, Emirates, https://www.ana.co.jp/id/id/ dan lain-lain)",
                "Bebas iuran untuk 1 tahun pertama"
              ],
              "id": [
                "2x BNI Rewards Point untuk transaksi domestik di MCC Hotel melalui website/apps/outlet",
                "Hotel (contoh : www.ritzcarlton.com, www.marriott.com dan lain-lain) dan MCC Travel melalui Travel Agent/Online Travel Agent (contoh : Traveloka, Tiket.com dan lain-lain) dengan minimum transaksi Rp 1 juta",
                "Dapatkan 2x BNI Rewards Point untuk transaksi overseas offline di MCC mana saja dengan minimum transaksi Rp 1 juta.",
                "Cashback 3% hingga Rp 200 ribu untuk setiap transaksi di MCC Airlines minimal Akumulasi Rp 6,5 Juta per bulan melalui website/apps/outlet airlines atau maskapai (contoh : Garuda, Emirates, https://www.ana.co.jp/id/id/ dan lain-lain)",
                "Bebas iuran untuk 1 tahun pertama"
              ]
            },
            "title": "applyCcDetailSceenBenefitTitle"
          },
          "benefitCount": 5,
          "promo": {
            "description": {
              "en": [],
              "id": []
            },
            "title": "applyCcDetailSceenPromoTitle"
          },
          "position": 5,
          "category": "DAILY_NEEDS",
          "cardProductDescription": "Kartu Kredit BNI yang didesain khusus untuk Millenial dan Gen Z yang memiliki jiwa petualang. Dengan desain kartu berkonsep unik, Kartu Kredit BNI Titanium menjadi simbol perjalanan hidup berjiwa muda yang penuh dengan petualangan.",
          "image": "",
          "isRecommend": null
        },
        {
          "cardProductName": "BNI MyPertamina Platinum",
          "binFirstDigit": "000000",
          "id": "T_6RwNMQ5jKdLbQs_r6JA",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "description": {
              "en": [
                "Nikmati Cashback 8% untuk BBM, Welcome Cashback Rp 200 Ribu dan 2X BNI Rewards Point setiap kali bertransaksi menggunakan Aplikasi MyPertamina.",
                "Selain itu, nikmati juga Diskon Rp 100 Ribu untuk transaksi di e-commerce Shopee!"
              ],
              "id": [
                "Nikmati Cashback 8% untuk BBM, Welcome Cashback Rp 200 Ribu dan 2X BNI Rewards Point setiap kali bertransaksi menggunakan Aplikasi MyPertamina.",
                "Selain itu, nikmati juga Diskon Rp 100 Ribu untuk transaksi di e-commerce Shopee!"
              ]
            },
            "title": "applyCcDetailSceenBenefitTitle"
          },
          "benefitCount": 2,
          "promo": {
            "description": {
              "en": [],
              "id": []
            },
            "title": "applyCcDetailSceenPromoTitle"
          },
          "position": 5,
          "category": "DAILY_NEEDS",
          "cardProductDescription": "Kartu hasil kerjasama co-branding antara BNI dan PT. Lotte Mart Indonesia yang ditujukan bagi pelanggan setia LOTTE Mart.",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/SfUVdDhDZA2-wz-S9qUVc.png",
          "isRecommend": null
        },
        {
          "cardProductName": "BNI APLGI The Card",
          "binFirstDigit": "000000",
          "id": "Md6cqZD7E2y-YRQbGmhTX",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "description": {
              "en": [
                "Discount 10% untuk pembelian membership The Card",
                "Cashback 5% untuk Green Fee",
                "Cashback 5% untuk transaksi di merchant-merchant Golf (Apparel, Merchandise, & Restaurant at Golf Course)",
                "Bebas iuran tahunan tanpa syarat di tahun ke-1",
                "Bebas iuran tahunan di tahun ke-2 dan seterusnya dengan syarat transaksi 1x di tahun sebelumnya."
              ],
              "id": [
                "Discount 10% untuk pembelian membership The Card",
                "Cashback 5% untuk Green Fee",
                "Cashback 5% untuk transaksi di merchant-merchant Golf (Apparel, Merchandise, & Restaurant at Golf Course)",
                "Bebas iuran tahunan tanpa syarat di tahun ke-1",
                "Bebas iuran tahunan di tahun ke-2 dan seterusnya dengan syarat transaksi 1x di tahun sebelumnya."
              ]
            },
            "title": "applyCcDetailSceenBenefitTitle"
          },
          "benefitCount": 5,
          "promo": {
            "description": {
              "en": [],
              "id": []
            },
            "title": "applyCcDetailSceenPromoTitle"
          },
          "position": 5,
          "category": "DAILY_NEEDS",
          "cardProductDescription": "Kartu hasil kerjasama antara BNI dan Asosiasi Pemilik Lapangan Golf Indonesia (APLGI) yang dipersembahkan untuk Anda pecinta olahraga golf",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/fJoYiDoWUIFKJ7tWafanI.png",
          "isRecommend": null
        }
      ]
    }
  };

  if (req.body.dataProtected && req.body.dataProtected.category) {
    data.dataProtected.cardList = data.dataProtected.cardList.filter(
      (item) =>
        item.category.toLowerCase() ===
        req.body.dataProtected.category.toLowerCase()
    );
  }

  if (req.body.dataProtected && req.body.dataProtected.filterName) {
    data.dataProtected.cardList = data.dataProtected.cardList.filter((item) =>
      item.cardProductName
        .toLowerCase()
        .includes(req.body.dataProtected.filterName.toLowerCase())
    );
  }

  res.json({ dataProtected : data.dataProtected, data : data.data });
});

app.post("/apc/v1/upsert-document", (req, res) => {

  console.log(req.body);
  
  res.json({
    "dataProtected": {
      "id": "E3rZabj2qQWSHq5dqPIzK"
    }
  });
});

app.post("/apc/v1/preparation", (req, res) => {

  console.log(req.body);
  
  res.status(503).send({ "errorMessage": "GNR-000-997_errorMessage", "errorCode": "GNR-000-997", "errorDesc": "DOWNTIME_SERVICE_LEVEL", "errorTitle": "GNR-000-997_errorTitle", "timestamp": "2025-03-11 15:08:14.019+0700" });
});

// app.get("/apc/v1/personal-data", (req, res) => {
//   res.json({
//     "dataProtected": {
//       "rt": "010",
//       "postalCode": "14350",
//       "fullName": "IRPAN FAJAR SANTOSO",
//       "province": "DKI JAKARTA",
//       "subdistrict": "SUNTER AGUNG",
//       "jobStatus": "PENSIUN",
//       "ktp": "3172020111970002",
//       "rw": "001",
//       "city": "JAKARTA UTARA",
//       "typeCompanyDropdown": "L",
//       "buildingName": "PALING MEWAH SEJAGAD",
//       "address": "JL.ANCOL SELATAN",
//       "district": "TANJUNG PRIOK",
//       "jobPositionDropdown": "PENSIUN"
//     }
//   });
// });

app.get("/apc/v1/reference", (req, res) => {
  res.send({
    "dataProtected": {
      "categories": [
        {
          "image": null,
          "value": "applyCcCategoryDailyNeedsLockey",
          "key": "DAILY_NEEDS"
        },
        {
          "image": null,
          "value": "applyCcCategoryLifestyleLockey",
          "key": "LIFESTYLE"
        },
        {
          "image": null,
          "value": "applyCcCategoryDiningLockey",
          "key": "DINING"
        },
        {
          "image": null,
          "value": "applyCcCategoryTravelLockey",
          "key": "TRAVEL"
        },
        {
          "image": null,
          "value": "applyCcCategoryShoppingLockey",
          "key": "SHOPPING"
        },
        {
          "image": null,
          "value": "applyCcCategoryCashbackLockey",
          "key": "CASHBACK"
        },
        {
          "image": null,
          "value": "applyCcCategoryHealthLockey",
          "key": "HEALTH"
        }
      ]
    }
  });
});

app.get("/reference/v1/lov", (req, res) => {
  if (req.query.category == "apply-cc.personal-data") {
    res.send({
      "data": {
        "numberDependents": [
          {
            "lovKey": "apply-cc.personal-data.numberDependents.0",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents0",
            "lovValue": "0"
          },
          {
            "lovKey": "apply-cc.personal-data.numberDependents.1",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents1",
            "lovValue": "1"
          },
          {
            "lovKey": "apply-cc.personal-data.numberDependents.2",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents2",
            "lovValue": "2"
          },
          {
            "lovKey": "apply-cc.personal-data.numberDependents.3",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents3",
            "lovValue": "3"
          },
          {
            "lovKey": "apply-cc.personal-data.numberDependents.4",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents4",
            "lovValue": "4"
          },
          {
            "lovKey": "apply-cc.personal-data.numberDependents.5",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents5",
            "lovValue": "5"
          }
        ],
        "lastEducation": [
          {
            "lovKey": "apply-cc.personal-data.lastEducation.diploma",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationDiploma",
            "lovValue": "D"
          },
          {
            "lovKey": "apply-cc.personal-data.lastEducation.s1",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS1",
            "lovValue": "U"
          },
          {
            "lovKey": "apply-cc.personal-data.lastEducation.s2",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS2",
            "lovValue": "M"
          },
          {
            "lovKey": "apply-cc.personal-data.lastEducation.s3",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS3",
            "lovValue": "M"
          },
          {
            "lovKey": "apply-cc.personal-data.lastEducation.other",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationOther",
            "lovValue": "S"
          }
        ]
      }
    });
  }
  if (req.query.category == "apply-cc.job-data") {
    res.send({
      "data": {
        "positionP": [
          {
            "lovKey": "apply-cc.job-data.positionP.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionPGeneralManager",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionPDirektur",
            "lovValue": "Direktur/Pejabat Eselon I"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.perwiraMenengah",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraMenengah",
            "lovValue": "Perwira Menengah"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.perwiraPertama",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraPertama",
            "lovValue": "Perwira Pertama"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.bintara",
            "lovDisplay": "applyCCJobDataScreenPositionPBintara",
            "lovValue": "Bintara"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.tamtama",
            "lovDisplay": "applyCCJobDataScreenPositionPTamtama",
            "lovValue": "Tamtama"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.manager",
            "lovDisplay": "applyCCJobDataScreenPositionPManager",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.assistantManager",
            "lovDisplay": "applyCCJobDataScreenPositionPAssistantManager",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.staf",
            "lovDisplay": "applyCCJobDataScreenPositionPStaf",
            "lovValue": "Staf"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.kepalaPemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPKepalaPemerintahan",
            "lovValue": "Kepala Pemerintahan"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.aparatPemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPAparatPemerintahan",
            "lovValue": "Aparat Pemerintahan"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.anggotaLembagaTinggiNegara",
            "lovDisplay": "applyCCJobDataScreenPositionPAnggotaLembagaTinggiNegara",
            "lovValue": "Anggota Lembaga Tinggi Negara"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.menteri",
            "lovDisplay": "applyCCJobDataScreenPositionPMenteri",
            "lovValue": "Menteri"
          },
          {
            "lovKey": "apply-cc.job-data.positionP.perwiraTinggi",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraTinggi",
            "lovValue": "Perwira Tinggi"
          }
        ],
        "positionPEGAWAI_SWASTA": [
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSDirektur",
            "lovValue": "Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionSWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionSGeneralManager",
            "lovValue": "General Manager/Kepala Biro"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.manager",
            "lovDisplay": "applyCCJobDataScreenPositionSManager",
            "lovValue": "Manager/Kepala Bagian"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.asistenManager",
            "lovDisplay": "applyCCJobDataScreenPositionSAsistenManager",
            "lovValue": "Asisten Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_SWASTA.staf",
            "lovDisplay": "applyCCJobDataScreenPositionSStaf",
            "lovValue": "Staf"
          }
        ],
        "typeCompany": [
          {
            "lovKey": "apply-cc.job-data.typeCompany.bumn",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyBumn",
            "lovValue": "B"
          },
          {
            "lovKey": "apply-cc.job-data.typeCompany.governmentAgencies",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyGovernmentAgencies",
            "lovValue": "P"
          },
          {
            "lovKey": "apply-cc.job-data.typeCompany.private",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyPrivate",
            "lovValue": "S"
          },
          {
            "lovKey": "apply-cc.job-data.typeCompany.nationalPrivate",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyNationalPrivate",
            "lovValue": "N"
          },
          {
            "lovKey": "apply-cc.job-data.typeCompany.multinational",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyMultinational",
            "lovValue": "M"
          },
          {
            "lovKey": "apply-cc.job-data.typeCompany.other",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyOther",
            "lovValue": "L"
          }
        ],
        "positionMILITER_POLISI": [
          {
            "lovKey": "apply-cc.job-data.positionMILITER_POLISI.perwiraTinggi",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraTinggi",
            "lovValue": "Perwira Tinggi"
          },
          {
            "lovKey": "apply-cc.job-data.positionMILITER_POLISI.perwiraMenengah",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraMenengah",
            "lovValue": "Perwira Menengah"
          },
          {
            "lovKey": "apply-cc.job-data.positionMILITER_POLISI.perwiraPertama",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraPertama",
            "lovValue": "Perwira Pertama"
          },
          {
            "lovKey": "apply-cc.job-data.positionMILITER_POLISI.bintara",
            "lovDisplay": "applyCCJobDataScreenPositionPBintara",
            "lovValue": "Bintara"
          },
          {
            "lovKey": "apply-cc.job-data.positionMILITER_POLISI.tamtama",
            "lovDisplay": "applyCCJobDataScreenPositionPTamtama",
            "lovValue": "Tamtama"
          }
        ],
        "positionPEJABAT_NEGARA": [
          {
            "lovKey": "apply-cc.job-data.positionPEJABAT_NEGARA.kepalaPemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPKepalaPemerintahan",
            "lovValue": "Kepala Pemerintahan"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEJABAT_NEGARA.aparatPemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPAparatPemerintahan",
            "lovValue": "Aparat Pemerintahan"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEJABAT_NEGARA.anggotaLembagaTinggiNegara",
            "lovDisplay": "applyCCJobDataScreenPositionPAnggotaLembagaTinggiNegara",
            "lovValue": "Kepala Pemerintahan"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEJABAT_NEGARA.menteri",
            "lovDisplay": "applyCCJobDataScreenPositionPMenteri",
            "lovValue": "Kepala Pemerintahan"
          }
        ],
        "businessFields": [
          {
            "lovKey": "apply-cc.job-data.businessFields.farming",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsFarming",
            "lovValue": "A"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.mining",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsMining",
            "lovValue": "B"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.industry",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsIndustry",
            "lovValue": "C"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.oil",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOil",
            "lovValue": "D"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.property",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsProperty",
            "lovValue": "E"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.trading",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTrading",
            "lovValue": "F"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.transport",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTransport",
            "lovValue": "G"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.banking",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsBanking",
            "lovValue": "H"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.government",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsGovernment",
            "lovValue": "I"
          },
          {
            "lovKey": "apply-cc.job-data.businessFields.other",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOther",
            "lovValue": "L"
          }
        ],
        "positionL": [
          {
            "lovKey": "apply-cc.job-data.positionL.other",
            "lovDisplay": "applyCCJobDataScreenPositionLOther",
            "lovValue": "Other"
          }
        ],
        "positionM": [
          {
            "lovKey": "apply-cc.job-data.positionM.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionMDirektur",
            "lovValue": "Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionM.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionMWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionM.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionMGeneralManager",
            "lovValue": "General Manager/Kepala Biro"
          },
          {
            "lovKey": "apply-cc.job-data.positionM.manager",
            "lovDisplay": "applyCCJobDataScreenPositionMManager",
            "lovValue": "Manager/Kepala Bagian"
          },
          {
            "lovKey": "apply-cc.job-data.positionM.asistenManager",
            "lovDisplay": "applyCCJobDataScreenPositionMAsistenManager",
            "lovValue": "Asisten Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionM.staf",
            "lovDisplay": "applyCCJobDataScreenPositionMStaf",
            "lovValue": "Staf"
          }
        ],
        "positionN": [
          {
            "lovKey": "apply-cc.job-data.positionN.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionNDirektur",
            "lovValue": "Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionN.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionNWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionN.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionNGeneralManager",
            "lovValue": "General Manager/Kepala Biro"
          },
          {
            "lovKey": "apply-cc.job-data.positionN.manager",
            "lovDisplay": "applyCCJobDataScreenPositionNManager",
            "lovValue": "Manager/Kepala Bagian"
          },
          {
            "lovKey": "apply-cc.job-data.positionN.asistenManager",
            "lovDisplay": "applyCCJobDataScreenPositionNAsistenManager",
            "lovValue": "Asisten Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionN.staf",
            "lovDisplay": "applyCCJobDataScreenPositionNStaf",
            "lovValue": "Staf"
          }
        ],
        "positionPEGAWAI_NEGRI_SIPIL": [
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_NEGRI_SIPIL.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionPDirektur",
            "lovValue": "Direktur/Pejabat Eselon I"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_NEGRI_SIPIL.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionPGeneralManager",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_NEGRI_SIPIL.manager",
            "lovDisplay": "applyCCJobDataScreenPositionPManager",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_NEGRI_SIPIL.assistantManager",
            "lovDisplay": "applyCCJobDataScreenPositionPAssistantManager",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_NEGRI_SIPIL.staf",
            "lovDisplay": "applyCCJobDataScreenPositionPStaf",
            "lovValue": "Staf"
          }
        ],
        "positionPEGAWAI_BUMN": [
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.komisaris",
            "lovDisplay": "applyCCJobDataScreenPositionBKomisaris",
            "lovValue": "Komisaris/Pemilik/Persero"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.direkturUtama",
            "lovDisplay": "applyCCJobDataScreenPositionBDirekturUtama",
            "lovValue": "Direktur Utama/CEO"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionBDirektur",
            "lovValue": "Direktur/Pejabat Eselon I"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionBWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionBGeneralManager",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.manager",
            "lovDisplay": "applyCCJobDataScreenPositionBManager",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.assistantManager",
            "lovDisplay": "applyCCJobDataScreenPositionBAssistantManager",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionPEGAWAI_BUMN.staf",
            "lovDisplay": "applyCCJobDataScreenPositionBStaf",
            "lovValue": "Staf"
          }
        ],
        "positionB": [
          {
            "lovKey": "apply-cc.job-data.positionB.komisaris",
            "lovDisplay": "applyCCJobDataScreenPositionBKomisaris",
            "lovValue": "Komisaris/Pemilik/Persero"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.direkturUtama",
            "lovDisplay": "applyCCJobDataScreenPositionBDirekturUtama",
            "lovValue": "Direktur Utama/CEO"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionBDirektur",
            "lovValue": "Direktur/Pejabat Eselon I"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionBWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionBGeneralManager",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.manager",
            "lovDisplay": "applyCCJobDataScreenPositionBManager",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.assistantManager",
            "lovDisplay": "applyCCJobDataScreenPositionBAssistantManager",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionB.staf",
            "lovDisplay": "applyCCJobDataScreenPositionBStaf",
            "lovValue": "Staf"
          }
        ],
        "positionS": [
          {
            "lovKey": "apply-cc.job-data.positionS.direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSDirektur",
            "lovValue": "Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionS.wakilDirektur",
            "lovDisplay": "applyCCJobDataScreenPositionSWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "apply-cc.job-data.positionS.generalManager",
            "lovDisplay": "applyCCJobDataScreenPositionSGeneralManager",
            "lovValue": "General Manager/Kepala Biro"
          },
          {
            "lovKey": "apply-cc.job-data.positionS.manager",
            "lovDisplay": "applyCCJobDataScreenPositionSManager",
            "lovValue": "Manager/Kepala Bagian"
          },
          {
            "lovKey": "apply-cc.job-data.positionS.asistenManager",
            "lovDisplay": "applyCCJobDataScreenPositionSAsistenManager",
            "lovValue": "Asisten Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "apply-cc.job-data.positionS.staf",
            "lovDisplay": "applyCCJobDataScreenPositionSStaf",
            "lovValue": "Staf"
          }
        ]
      }
    });
  }

  if (req.query.category == "apply-cc.residence") {
    res.send({
      "data": {
        "statusResidence": [
          {
            "lovKey": "apply-cc.residence.statusResidence.own",
            "lovDisplay": "applyCCResidenceDataScreenOwn",
            "lovValue": "V010|M"
          },
          {
            "lovKey": "apply-cc.residence.statusResidence.family",
            "lovDisplay": "applyCCResidenceDataScreenFamily",
            "lovValue": "V040|K"
          },
          {
            "lovKey": "apply-cc.residence.statusResidence.company",
            "lovDisplay": "applyCCResidenceDataScreenCompany",
            "lovValue": "V060|P"
          },
          {
            "lovKey": "apply-cc.residence.statusResidence.rent",
            "lovDisplay": "applyCCResidenceDataScreenRent",
            "lovValue": "V050|S"
          },
          {
            "lovKey": "apply-cc.residence.statusResidence.kost",
            "lovDisplay": "applyCCResidenceDataScreenKost",
            "lovValue": "V030|O"
          },
          {
            "lovKey": "apply-cc.residence.statusResidence.other",
            "lovDisplay": "applyCCResidenceDataScreenOther",
            "lovValue": "V090|L"
          }
        ]
      }
    });
  }

  if (req.query.category == "apply-cc.emergency-contact") {
    res.send({
      "data": {
        "familyRelationship": [
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.parent",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipParent",
            "lovValue": "1"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.olderBrotherSister",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipOlderBrotherSister",
            "lovValue": "2"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.youngerBrotherSister",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipYoungerBrotherSister",
            "lovValue": "3"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.company",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipCompany",
            "lovValue": "4"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.husbandWife",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipHusbandWife",
            "lovValue": "5"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.grandparents",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipGrandparents",
            "lovValue": "6"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.parentsInLaw",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipParentsInLaw",
            "lovValue": "7"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.nephew",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipNephew",
            "lovValue": "8"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.other",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipOther",
            "lovValue": "9"
          },
          {
            "lovKey": "apply-cc.emergency-contact.familyRelationship.child",
            "lovDisplay": "applyCCEmergencyContactScreenFamilyRelationshipChild",
            "lovValue": "10"
          }
        ]
      }
    });
  }

  if (req.query.category == "apply-cc.landing-page") {
    res.send({
      "data": {
        "1": [
          {
            "lovKey": "apply-cc.landing-page.1.title",
            "lovDisplay": "applyCCLandingPageScreenListTitle1",
            "lovValue": "applyCCLandingPageScreenList1"
          },
          {
            "lovKey": "apply-cc.landing-page.1.description",
            "lovDisplay": "applyCCLandingPageScreenListDescription1",
            "lovValue": "applyCCLandingPageScreenList1"
          },
          {
            "lovKey": "apply-cc.landing-page.1.icon",
            "lovDisplay": "applyCCLandingPageScreenListIcon1",
            "lovValue": "applyCCLandingPageScreenList1"
          }
        ],
        "2": [
          {
            "lovKey": "apply-cc.landing-page.2.title",
            "lovDisplay": "applyCCLandingPageScreenListTitle2",
            "lovValue": "applyCCLandingPageScreenListTitle2"
          },
          {
            "lovKey": "apply-cc.landing-page.2.description",
            "lovDisplay": "applyCCLandingPageScreenListDescription2",
            "lovValue": "applyCCLandingPageScreenListDescription2"
          },
          {
            "lovKey": "apply-cc.landing-page.2.icon",
            "lovDisplay": "applyCCLandingPageScreenListIcon2",
            "lovValue": "applyCCLandingPageScreenListIcon2"
          }
        ],
        "3": [
          {
            "lovKey": "apply-cc.landing-page.3.title",
            "lovDisplay": "applyCCLandingPageScreenListTitle3",
            "lovValue": "applyCCLandingPageScreenListTitle3"
          },
          {
            "lovKey": "apply-cc.landing-page.3.description",
            "lovDisplay": "applyCCLandingPageScreenListDescription3",
            "lovValue": "applyCCLandingPageScreenListDescription3"
          },
          {
            "lovKey": "apply-cc.landing-page.3.icon",
            "lovDisplay": "applyCCLandingPageScreenListIcon3",
            "lovValue": "applyCCLandingPageScreenListIcon3"
          }
        ]
      }
    });
  }
});

app.get("/apc/v1/personal-data", (req, res) => {
  res.send({
    "dataProtected": {
      "rt": "001",
      "postalCode": "12970",
      "fullName": "IKA NUR OKTAVIANA",
      "province": "DKI JAKARTA",
      "subdistrict": "PASAR MANGGIS",
      "jobStatus": "LAINNYA",
      "ktp": "1810044110000001",
      "rw": "001",
      "city": "JAKARTA SELATAN",
      "typeCompanyDropdown": "S",
      "buildingName": "",
      "address": "JAKARTA SELATAN",
      "district": "SETIA BUDI",
      "jobPositionDropdown": "PEGAWAI_SWASTA"
    }
  });
});

app.post("/apc/v1/execution", (req, res) => {


  res.status(409).send({
    "errorMessage": "GNR-000-000_errorMessage",
    "errorCode": "GNR-000-000",
    "errorDesc": "GENERAL_FAULT_MSG",
    "errorTitle": "GNR-000-000_errorTitle",
    "timestamp": "2025-03-12 19:31:08.760+0700"
  });
});

app.get("/content/v1/tnc", (req, res) => {
  res.send({
    "data": {
      "tncId": 1,
      "tncType": "PROVISIONING",
      "tncVersion": "1.2.3",
      "tncLanguage": "ID",
      "tncContent": "<div style=\"width: 100%\">\n <p style=\"\n color: var(--functional-bw-tones-black, #0E0E0E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 24px;\n font-style: normal;\n font-weight: 700;\n line-height: 120%; /* 28.8px /\n \">\n Syarat & Ketentuan\n </p>\n <p style=\"\n color: var(--functional-bw-tones-black, #0E0E0E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 14px;\n font-style: normal;\n font-weight: 400;\n line-height: 140%; / 19.6px /\n \">\n Baca dan setujui syarat & ketentuan penggunaan New BNI Mobile\n </p>\n <p style=\"\n color: var(--functional-bw-tones-charcoal-gray, #4E4E4E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 14px;\n font-style: normal;\n font-weight: 400;\n line-height: 120%; / 16.8px /\n \">\n Diperbarui pada 8 Juni 2023 \n </p>\n <p style=\"\n color: var(--functional-bw-tones-black, #0E0E0E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 14px;\n font-style: normal;\n font-weight: 400;\n line-height: 140%;\n \">\n <span style=\"font-weight: bold;\">Catatan:</span> Ketentuan dan Persyaratan Umum Layanan Transaksi Reksa Dana ini merupakan satu kesatuan dan tidak terpisahkan dengan Formulir Pembukaan Rekening Nasabah dan Surat Pernyataan Nasabah.\n </p>\n <ol style=\"\n color: var(--functional-bw-tones-black, #0E0E0E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 14px;\n font-style: normal;\n font-weight: 400;\n line-height: 140%; / 19.6px /\n \">\n <li>PT Bank Negara Indonesia (Persero) Tbk, (selanjutnya disebut BNI) bertindak sebagai Agen Penjual Efek Reksa Dana yang memberikan layanan jasa Pembelian (subscription), Penjualan Kembali (redemption) dan/atau Pengalihan (switching) unit penyertaan Reksa Dana (untuk selanjutnya disebut dengan Layanan Transaksi Reksa Dana).</li>\n <li>Nasabah adalah perorangan atau perusahaan yang memiliki rekening di BNI.</li>\n <li>Pemegang Unit Penyertaan adalah Nasabah yang memiliki unit penyertaan Reksa Dana.</li>\n <li>Reksa Dana adalah produk pasar modal dan bukan merupakan produk Bank, BNI tidak bertanggung jawab atas segala tuntutan dan risiko atas pengelolaan portofolio Reksa Dana.</li>\n <li>Investasi pada Reksa Dana bukan merupakan bagian dari simpanan pihak ketiga pada BNI dan tidak termasuk dalam cakupan objek program penjaminan Pemerintah atau Lembaga Penjamin Simpanan.</li>\n <li>Reksa Dana adalah instrumen Investasi yang diterbitkan dan dikelola oleh Manajer Investasi Bersama Bank Kustodian berdasarkan Kontrak Investasi Kolektif (KIK) dan bukan merupakan produk BNI selaku bank umum.</li>\n <li>Investasi pada Reksa Dana mengandung risiko-risiko yaitu risiko berkurangnya nilai unit penyertaan sebagai akibat fluktuasi harga efek portofolio Reksa Dana dan risiko-risiko lain sebagaimana tercantum dalam Prospektus.</li>\n <li>Investasi pada Reksa Dana bukan merupakan bagian dari simpanan pihak ketiga pada BNI dan tidak termasuk dalam cakupan objek program penjaminan Pemerintah atau Lembaga Penjamin Simpanan.</li>\n <li>Reksa Dana adalah instrumen Investasi yang diterbitkan dan dikelola oleh Manajer Investasi Bersama Bank Kustodian berdasarkan Kontrak Investasi Kolektif (KIK) dan bukan merupakan produk BNI selaku bank umum.</li>\n <li>Investasi pada Reksa Dana mengandung risiko-risiko yaitu risiko berkurangnya nilai unit penyertaan sebagai akibat fluktuasi harga efek portofolio Reksa Dana dan risiko-risiko lain sebagaimana tercantum dalam Prospektus.</li>\n <li>Sebelum melakukan pembelian unit penyertaan Reksa Dana melalui BNI, Nasabah harus membaca dan sepenuhnya memahami Prospektus dari Reksa Dana tersebut.</li>\n <li>Reksa Dana adalah Reksa Dana sebagaimana dimaksud dalam Undang-Undang Nomor. 8 Tahun 1995 tentang Pasar Modal yang dalam ketentuan ini berarti Reksa Dana yang penjualannya dilakukan oleh BNI.</li>\n <li>Keikutsertaan dalam Layanan Transaksi Reksa Dana:\n <ol style=\"list-style-type: lower-alpha;\">\n <li>Nasabah wajib melengkapi Formulir Pembukaan Rekening Nasabah dan menandatangani Ketentuan dan Persyaratan Umum Layanan Transaksi Reksa Dana di bawah ini.</li>\n <li>Nasabah wajib menyampaikan fotocopy identitas diri yang masih berlaku yaitu KTP/SIM/Passport untuk Nasabah;</li>\n <li>Dalam rangka pelaksanaan transaksi Pembelian/Penjualan Kembali/Pengalihan Reksa Dana, BNI akan menyampaikan data-data Nasabah kepada Manajer Investasi dan Bank Kustodian termasuk data mengenai nama dan alamat Nasabah.</li>\n <li>Nasabah mengakui bahwa penyerahan data-data Nasabah tersebut bukan merupakan suatu pelanggaran atas kerahasiaan data Nasabah.</li>\n </ol>\n </li>\n <li>Pembelian:\n <ol style=\"list-style-type: lower-alpha;\">\n <li>Pembelian Reksa Dana melalui Layanan Transaksi Reksa Dana BNI dilakukan oleh Nasabah BNI untuk pertama kali dengan minimum sebesar nilai nominal yang tercantum dalam Prospektus dan dapat ditentukan lain dari waktu ke waktu oleh BNI.</li>\n <li>Informasi mengenai investasi Pemegang Efek Reksa Dana akan diterbitkan oleh Bank Kustodian dan merupakan tanda bukti kepemilikan yang sah dari Bank Kustodian. Informasi tersebut dapat diakses melalui https://akses.ksei.co.id/, mengikuti ketentuan yang berlaku di KSEI.</li>\n <li>Nasabah dengan ini secara tegas mengakui dan setuju bahwa BNI tidak mempunyai kewajiban untuk menerima order pembelian dari Nasabah baik sebagian maupun seluruhnya dan BNI tidak bertanggungjawab untuk memastikan Manajer Investasi yang bersangkutan akan menerima order pembelian Nasabah atau atas setiap kerugian yang timbul termasuk kerugian peluang Investasi yang mungkin diderita Nasabah akibat penolakan Manajer Investasi atau keterlambatan dalam menerima order pembelian tersebut oleh Manajer Investasi.</li>\n <li>Jika pada Hari Bursa, Formulir Pembelian Reksa Dana yang telah dilengkapi diterima BNI sebelum jam 13:00 WIB, maka proses pembelian unit penyertaan Reksa Dana akan didasarkan pada Nilai Aktiva bersih (NAB) per unit penyertaan pada penutupan Hari Bursa, dan untuk Formulir Pembelian Reksa Dana yang diterima setelah jam 13:00 WIB, proses pembelian akan didasarkan pada NAB per unit penyertaan pada Hari Bursa berikutnya.</li>\n </ol>\n </li>\n <li>Dalam hal salah satu ketentuan dalam Syarat dan Ketentuan ini dinyatakan batal berdasarkan suatu peraturan perundang-undangan atau putusan yang berkekuatan hukum tetap, maka pernyataan batal tersebut tidak mengurangi keabsahan atau menyebabkan batalnya persyaratan atau ketentuan lain dalam Syarat dan Ketentuan ini dan oleh karenanya dalam hal demikian ketentuan lain dalam Syarat dan Ketentuan ini tetap sah dan mengikat.</li>\n <li>Saya menyatakan bahwa saya telah membaca, mengetahui dan memahami sepenuhnya Syarat dan Ketentuan Umum Layanan Transaksi Reksa Dana tersebut di atas dan dengan demikian mengikatkan diri pada ketentuan dan persyaratan umum tersebut.</li>\n <li>Apabila Nasabah memiliki keluhan ataupun pengaduan terkait dengan produk ataupun layanan BNI, Nasabah dapat menghubungi BNI Call di nomor 1500046 atau email di bnicall@bni.co.id. Untuk petunjuk tata cara pelayanan dalam penyelesaian pengaduan Nasabah dapat mengacu pada website BNI di www.bni.co.id</li>\n </ol>\n <p style=\"\n color: var(--functional-bw-tones-black, #0E0E0E);\n font-feature-settings: 'clig' off, 'liga' off;\n font-family: 'TT Interphases Pro';\n font-size: 14px;\n font-style: normal;\n font-weight: 400;\n line-height: 140%; / 19.6px */\n \">\n PERJANJIAN INI TELAH DISESUAIKAN DENGAN KETENTUAN PERATURAN PERUNDANG-UNDANGAN TERMASUK KETENTUAN PERATURAN OTORITAS JASA KEUANGAN.\n </p>\n</div>"
    }
  });
});

app.get("/reference/v1/provinces", (req, res) => {
  res.send({
    "data": {
      "province": [
        {
          "provinceCode": "72",
          "id": "Gh2h2tKkRe1WB10000000",
          "provinceName": "BALI"
        },
        {
          "provinceCode": "2",
          "id": "Gh2h2tKkRe1WB10000001",
          "provinceName": "BANTEN"
        },
        {
          "provinceCode": "23",
          "id": "Gh2h2tKkRe1WB10000002",
          "provinceName": "BENGKULU"
        },
        {
          "provinceCode": "5",
          "id": "Gh2h2tKkRe1WB10000003",
          "provinceName": "DAERAH ISTIMEWA YOGYAKARTA"
        },
        {
          "provinceCode": "3",
          "id": "Gh2h2tKkRe1WB10000004",
          "provinceName": "DKI JAKARTA"
        },
        {
          "provinceCode": "63",
          "id": "Gh2h2tKkRe1WB10000005",
          "provinceName": "GORONTALO"
        },
        {
          "provinceCode": "31",
          "id": "Gh2h2tKkRe1WB10000006",
          "provinceName": "JAMBI"
        },
        {
          "provinceCode": "1",
          "id": "Gh2h2tKkRe1WB10000007",
          "provinceName": "JAWA BARAT"
        },
        {
          "provinceCode": "9",
          "id": "Gh2h2tKkRe1WB10000008",
          "provinceName": "JAWA TENGAH"
        },
        {
          "provinceCode": "12",
          "id": "Gh2h2tKkRe1WB10000009",
          "provinceName": "JAWA TIMUR"
        },
        {
          "provinceCode": "53",
          "id": "Gh2h2tKkRe1WB10000010",
          "provinceName": "KALIMANTAN BARAT"
        },
        {
          "provinceCode": "51",
          "id": "Gh2h2tKkRe1WB10000011",
          "provinceName": "KALIMANTAN SELATAN"
        },
        {
          "provinceCode": "58",
          "id": "Gh2h2tKkRe1WB10000012",
          "provinceName": "KALIMANTAN TENGAH"
        },
        {
          "provinceCode": "54",
          "id": "Gh2h2tKkRe1WB10000013",
          "provinceName": "KALIMANTAN TIMUR"
        },
        {
          "provinceCode": "55",
          "id": "Gh2h2tKkRe1WB10000014",
          "provinceName": "KALIMANTAN UTARA"
        },
        {
          "provinceCode": "37",
          "id": "Gh2h2tKkRe1WB10000015",
          "provinceName": "KEPULAUAN BANGKA BELITUNG"
        },
        {
          "provinceCode": "38",
          "id": "Gh2h2tKkRe1WB10000016",
          "provinceName": "KEPULAUAN RIAU"
        },
        {
          "provinceCode": "39",
          "id": "Gh2h2tKkRe1WB10000017",
          "provinceName": "LAMPUNG"
        },
        {
          "provinceCode": "81",
          "id": "Gh2h2tKkRe1WB10000018",
          "provinceName": "MALUKU"
        },
        {
          "provinceCode": "83",
          "id": "Gh2h2tKkRe1WB10000019",
          "provinceName": "MALUKU UTARA"
        },
        {
          "provinceCode": "32",
          "id": "Gh2h2tKkRe1WB10000020",
          "provinceName": "NANGGROE ACEH DARUSSALAM (NAD)"
        },
        {
          "provinceCode": "71",
          "id": "Gh2h2tKkRe1WB10000021",
          "provinceName": "NUSA TENGGARA BARAT"
        },
        {
          "provinceCode": "74",
          "id": "Gh2h2tKkRe1WB10000022",
          "provinceName": "NUSA TENGGARA TIMUR"
        },
        {
          "provinceCode": "82",
          "id": "Gh2h2tKkRe1WB10000023",
          "provinceName": "PAPUA"
        },
        {
          "provinceCode": "84",
          "id": "Gh2h2tKkRe1WB10000024",
          "provinceName": "PAPUA BARAT"
        },
        {
          "provinceCode": "35",
          "id": "Gh2h2tKkRe1WB10000025",
          "provinceName": "RIAU"
        },
        {
          "provinceCode": "64",
          "id": "Gh2h2tKkRe1WB10000026",
          "provinceName": "SULAWESI BARAT"
        },
        {
          "provinceCode": "61",
          "id": "Gh2h2tKkRe1WB10000027",
          "provinceName": "SULAWESI SELATAN"
        },
        {
          "provinceCode": "60",
          "id": "Gh2h2tKkRe1WB10000028",
          "provinceName": "SULAWESI TENGAH"
        },
        {
          "provinceCode": "69",
          "id": "Gh2h2tKkRe1WB10000029",
          "provinceName": "SULAWESI TENGGARA"
        },
        {
          "provinceCode": "62",
          "id": "Gh2h2tKkRe1WB10000030",
          "provinceName": "SULAWESI UTARA"
        },
        {
          "provinceCode": "34",
          "id": "Gh2h2tKkRe1WB10000031",
          "provinceName": "SUMATERA BARAT"
        },
        {
          "provinceCode": "36",
          "id": "Gh2h2tKkRe1WB10000032",
          "provinceName": "SUMATERA SELATAN"
        },
        {
          "provinceCode": "33",
          "id": "Gh2h2tKkRe1WB10000033",
          "provinceName": "SUMATERA UTARA"
        }
      ]
    }
  });
});

app.get("/reference/v1/provinces/:provinceCode/cities", (req, res) => {
  console.log(req.params);

  res.send({
    "data": {
      "city": [
        {
          "cityCode": "924",
          "id": "XHeJcerK64W6b10000077",
          "cityName": "BOYOLALI",
          "provinceCode": "9"
        },
        {
          "cityCode": "907",
          "id": "XHeJcerK64W6b10000078",
          "cityName": "BREBES",
          "provinceCode": "9"
        },
        {
          "cityCode": "915",
          "id": "XHeJcerK64W6b10000079",
          "cityName": "CILACAP",
          "provinceCode": "9"
        },
        {
          "cityCode": "903",
          "id": "XHeJcerK64W6b10000080",
          "cityName": "DEMAK",
          "provinceCode": "9"
        },
        {
          "cityCode": "904",
          "id": "XHeJcerK64W6b10000081",
          "cityName": "GROBOGAN",
          "provinceCode": "9"
        },
        {
          "cityCode": "911",
          "id": "XHeJcerK64W6b10000082",
          "cityName": "JEPARA",
          "provinceCode": "9"
        },
        {
          "cityCode": "904",
          "id": "XHeJcerK64W6b10000081",
          "cityName": "GROBOGAN",
          "provinceCode": "9"
        },
        {
          "cityCode": "911",
          "id": "XHeJcerK64W6b10000082",
          "cityName": "JEPARA",
          "provinceCode": "9"
        }
      ]
    }
  });
});


app.get("/reference/v1/cities/:cityCode/districts", (req, res) => {
  console.log(req.params);

  res.send({
    "data": {
      "district": [
        {
          "districtName": "AMPEL",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001327",
          "districtCode": "UKwaiAEWvUHyC10001327"
        },
        {
          "districtName": "ANDONG",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001328",
          "districtCode": "UKwaiAEWvUHyC10001328"
        },
        {
          "districtName": "BANYUDONO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001329",
          "districtCode": "UKwaiAEWvUHyC10001329"
        },
        {
          "districtName": "BOYOLALI",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001330",
          "districtCode": "UKwaiAEWvUHyC10001330"
        },
        {
          "districtName": "CEPOGO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001331",
          "districtCode": "UKwaiAEWvUHyC10001331"
        },
        {
          "districtName": "JUWANGI",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001332",
          "districtCode": "UKwaiAEWvUHyC10001332"
        },
        {
          "districtName": "KARANGGEDE",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001333",
          "districtCode": "UKwaiAEWvUHyC10001333"
        },
        {
          "districtName": "KEMUSU",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001334",
          "districtCode": "UKwaiAEWvUHyC10001334"
        },
        {
          "districtName": "KLEGO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001335",
          "districtCode": "UKwaiAEWvUHyC10001335"
        },
        {
          "districtName": "MOJOSONGO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001336",
          "districtCode": "UKwaiAEWvUHyC10001336"
        },
        {
          "districtName": "MUSUK",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001337",
          "districtCode": "UKwaiAEWvUHyC10001337"
        },
        {
          "districtName": "NGEMPLAK",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001338",
          "districtCode": "UKwaiAEWvUHyC10001338"
        },
        {
          "districtName": "NOGOSARI",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001339",
          "districtCode": "UKwaiAEWvUHyC10001339"
        },
        {
          "districtName": "SAMBI",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001340",
          "districtCode": "UKwaiAEWvUHyC10001340"
        },
        {
          "districtName": "SAWIT",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001341",
          "districtCode": "UKwaiAEWvUHyC10001341"
        },
        {
          "districtName": "SELO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001342",
          "districtCode": "UKwaiAEWvUHyC10001342"
        },
        {
          "districtName": "SIMO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001343",
          "districtCode": "UKwaiAEWvUHyC10001343"
        },
        {
          "districtName": "TERAS",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001344",
          "districtCode": "UKwaiAEWvUHyC10001344"
        },
        {
          "districtName": "WONOSEGORO",
          "cityCode": "924",
          "id": "O3BmtjE34gDLq10001345",
          "districtCode": "UKwaiAEWvUHyC10001345"
        }
      ]
    }
  });
});

app.get("/reference/v1/districts/:districtCode/sub-districts", (req, res) => {
  console.log(req.params);

  res.send({
    "data": {
      "subDistrict": [
        {
          "id": "NhvAFiueBm6Do10013479",
          "subDistrictCode": "clrBHuBX12AGR10013479",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "BANARAN",
          "postalCode": "57313"
        },
        {
          "id": "NhvAFiueBm6Do10013480",
          "subDistrictCode": "clrBHuBX12AGR10013480",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "KARANGGENENG",
          "postalCode": "57312"
        },
        {
          "id": "NhvAFiueBm6Do10013481",
          "subDistrictCode": "clrBHuBX12AGR10013481",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "KEBONBIMO",
          "postalCode": "57316"
        },
        {
          "id": "NhvAFiueBm6Do10013482",
          "subDistrictCode": "clrBHuBX12AGR10013482",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "KIRINGAN",
          "postalCode": "57314"
        },
        {
          "id": "NhvAFiueBm6Do10013483",
          "subDistrictCode": "clrBHuBX12AGR10013483",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "MUDAL",
          "postalCode": "57316"
        },
        {
          "id": "NhvAFiueBm6Do10013484",
          "subDistrictCode": "clrBHuBX12AGR10013484",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "PENGGUNG",
          "postalCode": "57316"
        },
        {
          "id": "NhvAFiueBm6Do10013485",
          "subDistrictCode": "clrBHuBX12AGR10013485",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "PULISEN",
          "postalCode": "57316"
        },
        {
          "id": "NhvAFiueBm6Do10013486",
          "subDistrictCode": "clrBHuBX12AGR10013486",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "SISWODIPURAN",
          "postalCode": "57311"
        },
        {
          "id": "NhvAFiueBm6Do10013487",
          "subDistrictCode": "clrBHuBX12AGR10013487",
          "districtCode": "UKwaiAEWvUHyC10001330",
          "subDistrictName": "WINONG",
          "postalCode": "57315"
        }
      ]
    }
  });
});

app.listen(port, () => {});
