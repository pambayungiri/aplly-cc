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
          "id": "Y8DErxapFYL46_aCP8Orz",
          "cardProductDescription": "Coba Tiga",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 1,
          "cardProductName": "BNI Mastercard Titanium",
          "isRecommend": null,
          "binFirstDigit": "524125",
          "image": ""
        },
        {
          "id": "Y8DErxapFYL46_aCP8Orz",
          "cardProductDescription": "Copy dua",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 1,
          "cardProductName": "BNI Mastercard Titanium",
          "isRecommend": null,
          "binFirstDigit": "524125",
          "image": ""
        },
        {
          "id": "Y8DErxapFYL46_aCP8Orz",
          "cardProductDescription": "Copy satu",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 1,
          "cardProductName": "BNI Mastercard Titanium",
          "isRecommend": null,
          "binFirstDigit": "524125",
          "image": ""
        },
        {
          "id": "Y8DErxapFYL46_aCP8Orz",
          "cardProductDescription": "BNI Mastercard Titanium Description",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 1,
          "cardProductName": "BNI Mastercard Titanium",
          "isRecommend": null,
          "binFirstDigit": "524125",
          "image": ""
        },
        {
          "id": "kZleLawaNT09De6BEEcco",
          "cardProductDescription": "Kebebasan bertransaksi global dengan limit tinggi.",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "CASHBACK",
          "position": 2,
          "cardProductName": "Mastercard World",
          "isRecommend": null,
          "binFirstDigit": "510055",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/V0hiW-zDNDOuW6lXjGkjg.png"
        },
        {
          "id": "CnApMNCssz-4nHMrtdE15",
          "cardProductDescription": "Nikmati keuntungan eksklusif dengan di setiap perjalanan.",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "Ajukan hingga 31 Desember 2024 biar langsung dapetin promo spesialnya:",
            "description": {
              "en": [
                "Instan Upgrade ke Garuda Gold Privilege",
                "Akses ke Garuda Executive Lounge (Domestik dan Internasional)"
              ],
              "id": [
                "Instan Upgrade ke Garuda Gold Privilege",
                "Akses ke Garuda Executive Lounge (Domestik dan Internasional)"
              ]
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 3,
          "cardProductName": "Garuda Visa Signature",
          "isRecommend": null,
          "binFirstDigit": "466573",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/J3sA1Afyy63As4NmxCvSd.png"
        },
        {
          "id": "_C_HJmdT19NHTf0dwsn7F",
          "cardProductDescription": "Nikmati keuntungan menarik dalam setiap perjalanan.",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "SHOPPING",
          "position": 4,
          "cardProductName": "Garuda Visa Platinum",
          "isRecommend": null,
          "binFirstDigit": "466574",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/2wzzdbWnj0gr23_w_rGeA.png"
        },
        {
          "id": "hUjU2JLEP_BbbBP1WKcfn",
          "cardProductDescription": "Rasakan lebih banyak keuntungan dalam setiap perjalananmu.",
          "cardProfile": {
            "promo": [
              "HIBURAN",
              "TOKO"
            ],
            "income": "A"
          },
          "benefit": {
            "title": "applyCcDetailSceenBenefitTitle",
            "description": {
              "en": [
                "Shop easily and securely on e-commerce up to Rp10 million per day.",
                "Your Mastercard can be used for transactions both domestically and internationally.",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines).",
                "Welcome package of 120,000 KrisFlyer miles (equivalent to a round-trip business class ticket from Jakarta to Dubai/Hong Kong/Tokyo on Singapore Airlines)."
              ],
              "id": [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum."
              ]
            }
          },
          "promo": {
            "title": "applyCcDetailSceenPromoTitle",
            "description": {
              "en": [],
              "id": []
            }
          },
          "benefitCount": 4,
          "category": "TRAVEL",
          "position": 5,
          "cardProductName": "Batik Air Platinum",
          "isRecommend": null,
          "binFirstDigit": "523239",
          "image": "https://mav-apigw-ext-test2.bni.co.id:48202/asset/v1/image/_kHfO90kGA3bZW_N3vHfU.png"
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
      "id": "W85eSpyKL1owGGFVYz-cu"
    }
  });
});

app.get("/apc/v1/personal-data", (req, res) => {
  res.json({
    "dataProtected": {
      "postalCode": "11730",
      "district": "CENGKARENG",
      "jobStatus": "PROFESIONAL",
      "address": "QQ123",
      "buildingName": "",
      "subdistrict": "CENGKARENG BARAT",
      "province": "DKI JAKARTA",
      "city": "JAKARTA BARAT",
      "rw": "",
      "rt": "11"
    }
  });
});

app.get("/apc/v1/reference", (req, res) => {
  res.send({
    "dataProtected": {
      "categories": [
        {
          "key": "TRAVEL",
          "value": "applyCcCategoryTravelLockey",
          "image": null
        },
        {
          "key": "SHOPPING",
          "value": "applyCcCategoryShoppingLockey",
          "image": null
        },
        {
          "key": "CASHBACK",
          "value": "applyCcCategoryCashbackLockey",
          "image": null
        },
        {
          "key": "HEALTH",
          "value": "applyCcCategoryHealthLockey",
          "image": null
        }
      ]
    }
  });
});

app.get("/reference/v1/lov", (req, res) => {
  if (req.query.category == "apply-cc.personal-data") {
    res.send({
      "data": {
        "lastEducation": [
          {
            "lovValue": "D",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationDiploma",
            "lovKey": "apply-cc.personal-data.lastEducation.diploma"
          },
          {
            "lovValue": "U",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS1",
            "lovKey": "apply-cc.personal-data.lastEducation.s1"
          },
          {
            "lovValue": "M",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS2",
            "lovKey": "apply-cc.personal-data.lastEducation.s2"
          },
          {
            "lovValue": "M",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationS3",
            "lovKey": "apply-cc.personal-data.lastEducation.s3"
          },
          {
            "lovValue": "S",
            "lovDisplay": "applyCCDetailPersonalDataScreenLastEducationOther",
            "lovKey": "apply-cc.personal-data.lastEducation.other"
          }
        ],
        "numberDependents": [
          {
            "lovValue": "0",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents0",
            "lovKey": "apply-cc.personal-data.numberDependents.0"
          },
          {
            "lovValue": "1",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents1",
            "lovKey": "apply-cc.personal-data.numberDependents.1"
          },
          {
            "lovValue": "2",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents2",
            "lovKey": "apply-cc.personal-data.numberDependents.2"
          },
          {
            "lovValue": "3",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents3",
            "lovKey": "apply-cc.personal-data.numberDependents.3"
          },
          {
            "lovValue": "4",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents4",
            "lovKey": "apply-cc.personal-data.numberDependents.4"
          },
          {
            "lovValue": "5",
            "lovDisplay": "applyCCDetailPersonalDataScreenNumberDependents5",
            "lovKey": "apply-cc.personal-data.numberDependents.5"
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
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II",
            "lovDisplay": "applyCCJobDataScreenPositionPGeneralManager",
            "lovKey": "apply-cc.job-data.positionP.generalManager"
          },
          {
            "lovValue": "Direktur/Pejabat Eselon I",
            "lovDisplay": "applyCCJobDataScreenPositionPDirektur",
            "lovKey": "apply-cc.job-data.positionP.direktur"
          },
          {
            "lovValue": "Perwira Menengah",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraMenengah",
            "lovKey": "apply-cc.job-data.positionP.perwiraMenengah"
          },
          {
            "lovValue": "Perwira Pertama",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraPertama",
            "lovKey": "apply-cc.job-data.positionP.perwiraPertama"
          },
          {
            "lovValue": "Bintara",
            "lovDisplay": "applyCCJobDataScreenPositionPBintara",
            "lovKey": "apply-cc.job-data.positionP.bintara"
          },
          {
            "lovValue": "Tamtama",
            "lovDisplay": "applyCCJobDataScreenPositionPTamtama",
            "lovKey": "apply-cc.job-data.positionP.tamtama"
          },
          {
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III",
            "lovDisplay": "applyCCJobDataScreenPositionPManager",
            "lovKey": "apply-cc.job-data.positionP.manager"
          },
          {
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV",
            "lovDisplay": "applyCCJobDataScreenPositionPAssistantManager",
            "lovKey": "apply-cc.job-data.positionP.assistantManager"
          },
          {
            "lovValue": "Staf",
            "lovDisplay": "applyCCJobDataScreenPositionPStaf",
            "lovKey": "apply-cc.job-data.positionP.staf"
          },
          {
            "lovValue": "Kepala Pemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPKepalaPemerintahan",
            "lovKey": "apply-cc.job-data.positionP.kepalaPemerintahan"
          },
          {
            "lovValue": "Aparat Pemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPAparatPemerintahan",
            "lovKey": "apply-cc.job-data.positionP.aparatPemerintahan"
          },
          {
            "lovValue": "Anggota Lembaga Tinggi Negara",
            "lovDisplay": "applyCCJobDataScreenPositionPAnggotaLembagaTinggiNegara",
            "lovKey": "apply-cc.job-data.positionP.anggotaLembagaTinggiNegara"
          },
          {
            "lovValue": "Menteri",
            "lovDisplay": "applyCCJobDataScreenPositionPMenteri",
            "lovKey": "apply-cc.job-data.positionP.menteri"
          },
          {
            "lovValue": "Perwira Tinggi",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraTinggi",
            "lovKey": "apply-cc.job-data.positionP.perwiraTinggi"
          }
        ],
        "positionN": [
          {
            "lovValue": "Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionNDirektur",
            "lovKey": "apply-cc.job-data.positionN.direktur"
          },
          {
            "lovValue": "Wakil Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionNWakilDirektur",
            "lovKey": "apply-cc.job-data.positionN.wakilDirektur"
          },
          {
            "lovValue": "General Manager/Kepala Biro",
            "lovDisplay": "applyCCJobDataScreenPositionNGeneralManager",
            "lovKey": "apply-cc.job-data.positionN.generalManager"
          },
          {
            "lovValue": "Manager/Kepala Bagian",
            "lovDisplay": "applyCCJobDataScreenPositionNManager",
            "lovKey": "apply-cc.job-data.positionN.manager"
          },
          {
            "lovValue": "Asisten Manager/Kepala Seksi",
            "lovDisplay": "applyCCJobDataScreenPositionNAsistenManager",
            "lovKey": "apply-cc.job-data.positionN.asistenManager"
          },
          {
            "lovValue": "Staf",
            "lovDisplay": "applyCCJobDataScreenPositionNStaf",
            "lovKey": "apply-cc.job-data.positionN.staf"
          }
        ],
        "typeCompany": [
          {
            "lovValue": "B",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyBumn",
            "lovKey": "apply-cc.job-data.typeCompany.bumn"
          },
          {
            "lovValue": "P",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyGovernmentAgencies",
            "lovKey": "apply-cc.job-data.typeCompany.governmentAgencies"
          },
          {
            "lovValue": "S",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyPrivate",
            "lovKey": "apply-cc.job-data.typeCompany.private"
          },
          {
            "lovValue": "N",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyNationalPrivate",
            "lovKey": "apply-cc.job-data.typeCompany.nationalPrivate"
          },
          {
            "lovValue": "M",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyMultinational",
            "lovKey": "apply-cc.job-data.typeCompany.multinational"
          },
          {
            "lovValue": "L",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyOther",
            "lovKey": "apply-cc.job-data.typeCompany.other"
          }
        ],
        "businessFields": [
          {
            "lovValue": "H",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsBanking",
            "lovKey": "apply-cc.job-data.businessFields.banking"
          },
          {
            "lovValue": "I",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsGovernment",
            "lovKey": "apply-cc.job-data.businessFields.government"
          },
          {
            "lovValue": "L",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOther",
            "lovKey": "apply-cc.job-data.businessFields.other"
          },
          {
            "lovValue": "A",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsFarming",
            "lovKey": "apply-cc.job-data.businessFields.farming"
          },
          {
            "lovValue": "B",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsMining",
            "lovKey": "apply-cc.job-data.businessFields.mining"
          },
          {
            "lovValue": "C",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsIndustry",
            "lovKey": "apply-cc.job-data.businessFields.industry"
          },
          {
            "lovValue": "D",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOil",
            "lovKey": "apply-cc.job-data.businessFields.oil"
          },
          {
            "lovValue": "E",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsProperty",
            "lovKey": "apply-cc.job-data.businessFields.property"
          },
          {
            "lovValue": "F",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTrading",
            "lovKey": "apply-cc.job-data.businessFields.trading"
          },
          {
            "lovValue": "G",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTransport",
            "lovKey": "apply-cc.job-data.businessFields.transport"
          }
        ],
        "positionS": [
          {
            "lovValue": "Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSDirektur",
            "lovKey": "apply-cc.job-data.positionS.direktur"
          },
          {
            "lovValue": "Wakil Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSWakilDirektur",
            "lovKey": "apply-cc.job-data.positionS.wakilDirektur"
          },
          {
            "lovValue": "General Manager/Kepala Biro",
            "lovDisplay": "applyCCJobDataScreenPositionSGeneralManager",
            "lovKey": "apply-cc.job-data.positionS.generalManager"
          },
          {
            "lovValue": "Manager/Kepala Bagian",
            "lovDisplay": "applyCCJobDataScreenPositionSManager",
            "lovKey": "apply-cc.job-data.positionS.manager"
          },
          {
            "lovValue": "Asisten Manager/Kepala Seksi",
            "lovDisplay": "applyCCJobDataScreenPositionSAsistenManager",
            "lovKey": "apply-cc.job-data.positionS.asistenManager"
          },
          {
            "lovValue": "Staf",
            "lovDisplay": "applyCCJobDataScreenPositionSStaf",
            "lovKey": "apply-cc.job-data.positionS.staf"
          }
        ],
        "positionM": [
          {
            "lovValue": "Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionMDirektur",
            "lovKey": "apply-cc.job-data.positionM.direktur"
          },
          {
            "lovValue": "Wakil Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionMWakilDirektur",
            "lovKey": "apply-cc.job-data.positionM.wakilDirektur"
          },
          {
            "lovValue": "General Manager/Kepala Biro",
            "lovDisplay": "applyCCJobDataScreenPositionMGeneralManager",
            "lovKey": "apply-cc.job-data.positionM.generalManager"
          },
          {
            "lovValue": "Manager/Kepala Bagian",
            "lovDisplay": "applyCCJobDataScreenPositionMManager",
            "lovKey": "apply-cc.job-data.positionM.manager"
          },
          {
            "lovValue": "Asisten Manager/Kepala Seksi",
            "lovDisplay": "applyCCJobDataScreenPositionMAsistenManager",
            "lovKey": "apply-cc.job-data.positionM.asistenManager"
          },
          {
            "lovValue": "Staf",
            "lovDisplay": "applyCCJobDataScreenPositionMStaf",
            "lovKey": "apply-cc.job-data.positionM.staf"
          }
        ],
        "positionB": [
          {
            "lovValue": "Komisaris/Pemilik/Persero",
            "lovDisplay": "applyCCJobDataScreenPositionBKomisaris",
            "lovKey": "apply-cc.job-data.positionB.komisaris"
          },
          {
            "lovValue": "Direktur Utama/CEO",
            "lovDisplay": "applyCCJobDataScreenPositionBDirekturUtama",
            "lovKey": "apply-cc.job-data.positionB.direkturUtama"
          },
          {
            "lovValue": "Direktur/Pejabat Eselon I",
            "lovDisplay": "applyCCJobDataScreenPositionBDirektur",
            "lovKey": "apply-cc.job-data.positionB.direktur"
          },
          {
            "lovValue": "Wakil Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionBWakilDirektur",
            "lovKey": "apply-cc.job-data.positionB.wakilDirektur"
          },
          {
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II",
            "lovDisplay": "applyCCJobDataScreenPositionBGeneralManager",
            "lovKey": "apply-cc.job-data.positionB.generalManager"
          },
          {
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III",
            "lovDisplay": "applyCCJobDataScreenPositionBManager",
            "lovKey": "apply-cc.job-data.positionB.manager"
          },
          {
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV",
            "lovDisplay": "applyCCJobDataScreenPositionBAssistantManager",
            "lovKey": "apply-cc.job-data.positionB.assistantManager"
          },
          {
            "lovValue": "Staf",
            "lovDisplay": "applyCCJobDataScreenPositionBStaf",
            "lovKey": "apply-cc.job-data.positionB.staf"
          }
        ],
        "positionL": [
          {
            "lovValue": "Other",
            "lovDisplay": "applyCCJobDataScreenPositionLOther",
            "lovKey": "apply-cc.job-data.positionL.other"
          }
        ]
      }
    });
  }

  if (req.query.category == "apply-cc.residence") {
    res.send({
        data: {
          statusResidence: [
            {
              lovKey: "apply-cc.residence.statusResidence.own",
              lovValue: "V010|M",
              lovDisplay: "applyCCResidenceDataScreenOwn",
            },
            {
              lovKey: "apply-cc.residence.statusResidence.family",
              lovValue: "V010|F",
              lovDisplay: "applyCCResidenceDataScreenFamily",
            },
            {
              lovKey: "apply-cc.residence.statusResidence.company",
              lovValue: "V010|C",
              lovDisplay: "applyCCResidenceDataScreenCompany",
            },
            {
              lovKey: "apply-cc.residence.statusResidence.rent",
              lovValue: "V010|R",
              lovDisplay: "applyCCResidenceDataScreenRent",
            },
            {
              lovKey: "apply-cc.residence.statusResidence.boarding",
              lovValue: "V010|B",
              lovDisplay: "applyCCResidenceDataScreenBoarding",
            },
            {
              lovKey: "apply-cc.residence.statusResidence.others",
              lovValue: "V010|O",
              lovDisplay: "applyCCResidenceDataScreenOthers",
            },
          ],
        },
    });
  }

  if (req.query.category == "apply-cc.emergency-contact") {
    res.send({
        data: {
          familyRelationship: [
            {
              lovKey: "inbox-transactional.trx-history.status.success",
              lovValue: "ortu",
              lovDisplay: "Orang Tua",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.failed",
              lovValue: "kakak",
              lovDisplay: "Kakak.",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "adik",
              lovDisplay: "Adik",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "suami/istri",
              lovDisplay: "Suami/Istri",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "kake/nenek",
              lovDisplay: "Kakek/Nenek",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "mertua",
              lovDisplay: "Mertua",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "anak",
              lovDisplay: "Anak",
            },
            {
              lovKey: "inbox-transactional.trx-history.status.pending",
              lovValue: "lainnya",
              lovDisplay: "Lainnya",
            },
          ],
        },
    });
  }

  if (req.query.category == "apply-cc.landing-page") {
    res.send({
      "data": {
        "1": [
          {
            "lovDisplay": "applyCCLandingPageScreenListTitle1",
            "lovValue": "applyCCLandingPageScreenList1",
            "lovKey": "apply-cc.landing-page.1.title"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListDescription1",
            "lovValue": "applyCCLandingPageScreenList1",
            "lovKey": "apply-cc.landing-page.1.description"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListIcon1",
            "lovValue": "applyCCLandingPageScreenList1",
            "lovKey": "apply-cc.landing-page.1.icon"
          }
        ],
        "2": [
          {
            "lovDisplay": "applyCCLandingPageScreenListTitle2",
            "lovValue": "applyCCLandingPageScreenListTitle2",
            "lovKey": "apply-cc.landing-page.2.title"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListDescription2",
            "lovValue": "applyCCLandingPageScreenListDescription2",
            "lovKey": "apply-cc.landing-page.2.description"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListIcon2",
            "lovValue": "applyCCLandingPageScreenListIcon2",
            "lovKey": "apply-cc.landing-page.2.icon"
          }
        ],
        "3": [
          {
            "lovDisplay": "applyCCLandingPageScreenListTitle3",
            "lovValue": "applyCCLandingPageScreenListTitle3",
            "lovKey": "apply-cc.landing-page.3.title"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListDescription3",
            "lovValue": "applyCCLandingPageScreenListDescription3",
            "lovKey": "apply-cc.landing-page.3.description"
          },
          {
            "lovDisplay": "applyCCLandingPageScreenListIcon3",
            "lovValue": "applyCCLandingPageScreenListIcon3",
            "lovKey": "apply-cc.landing-page.3.icon"
          }
        ]
      }
    });
  }
});

app.get("/apc/v1/personal-data", (req, res) => {
  res.send({
      dataProtected: {
        jobStatus: "TIDAK BEKERJA",
        address: "JL. SETIABUDI",
        rt: "35",
        rw: "35",
        buildingName: "Perumahan Bagus",
        district: "Setia Budi",
        subdistrict: "Setia Budi",
        city: "BATU",
        postalCode: "12910",
      }
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
      data: {
        province: [
          {
            id: "a1b2c3d4",
            provinceCode: "1",
            provinceName: "Aceh",
          },
          {
            id: "e5f6g7h8",
            provinceCode: "2",
            provinceName: "Sumatera Utara",
          },
          {
            id: "i9j0k1l2",
            provinceCode: "3",
            provinceName: "Sumatera Barat",
          },
          {
            id: "m3n4o5p6",
            provinceCode: "4",
            provinceName: "Riau",
          },
          {
            id: "q7r8s9t0",
            provinceCode: "5",
            provinceName: "Kepulauan Riau",
          },
          {
            id: "u1v2w3x4",
            provinceCode: "6",
            provinceName: "Jambi",
          },
          {
            id: "y5z6a7b8",
            provinceCode: "7",
            provinceName: "Sumatera Selatan",
          },
          {
            id: "c9d0e1f2",
            provinceCode: "8",
            provinceName: "Bangka Belitung",
          },
          {
            id: "g3h4i5j6",
            provinceCode: "9",
            provinceName: "Bengkulu",
          },
          {
            id: "k7l8m9n0",
            provinceCode: "10",
            provinceName: "Lampung",
          },
          {
            id: "o1p2q3r4",
            provinceCode: "11",
            provinceName: "DKI Jakarta",
          },
          {
            id: "s5t6u7v8",
            provinceCode: "12",
            provinceName: "Jawa Barat",
          },
          {
            id: "w9x0y1z2",
            provinceCode: "13",
            provinceName: "Jawa Tengah",
          },
          {
            id: "a3b4c5d6",
            provinceCode: "14",
            provinceName: "DI Yogyakarta",
          },
          {
            id: "e7f8g9h0",
            provinceCode: "15",
            provinceName: "Jawa Timur",
          },
          {
            id: "i1j2k3l4",
            provinceCode: "16",
            provinceName: "Banten",
          },
          {
            id: "m5n6o7p8",
            provinceCode: "17",
            provinceName: "Bali",
          },
          {
            id: "q9r0s1t2",
            provinceCode: "18",
            provinceName: "Nusa Tenggara Barat",
          },
          {
            id: "u3v4w5x6",
            provinceCode: "19",
            provinceName: "Nusa Tenggara Timur",
          },
          {
            id: "y7z8a9b0",
            provinceCode: "20",
            provinceName: "Kalimantan Barat",
          },
          {
            id: "c1d2e3f4",
            provinceCode: "21",
            provinceName: "Kalimantan Tengah",
          },
          {
            id: "g5h6i7j8",
            provinceCode: "22",
            provinceName: "Kalimantan Selatan",
          },
          {
            id: "k9l0m1n2",
            provinceCode: "23",
            provinceName: "Kalimantan Timur",
          },
          {
            id: "o3p4q5r6",
            provinceCode: "24",
            provinceName: "Kalimantan Utara",
          },
          {
            id: "s7t8u9v0",
            provinceCode: "25",
            provinceName: "Sulawesi Utara",
          },
          {
            id: "w1x2y3z4",
            provinceCode: "26",
            provinceName: "Sulawesi Tengah",
          },
          {
            id: "a5b6c7d8",
            provinceCode: "27",
            provinceName: "Sulawesi Selatan",
          },
          {
            id: "e9f0g1h2",
            provinceCode: "28",
            provinceName: "Sulawesi Tenggara",
          },
          {
            id: "i3j4k5l6",
            provinceCode: "29",
            provinceName: "Gorontalo",
          },
          {
            id: "m7n8o9p0",
            provinceCode: "30",
            provinceName: "Sulawesi Barat",
          },
          {
            id: "q1r2s3t4",
            provinceCode: "31",
            provinceName: "Maluku",
          },
          {
            id: "u5v6w7x8",
            provinceCode: "32",
            provinceName: "Maluku Utara",
          },
          {
            id: "y9z0a1b2",
            provinceCode: "33",
            provinceName: "Papua",
          },
          {
            id: "c3d4e5f6",
            provinceCode: "34",
            provinceName: "Papua Barat",
          },
        ],
      }
  });
});

app.get("/reference/v1/provinces/:provinceCode/cities", (req, res) => {
  console.log(req.params);

  res.send({
      data: {
        city: [
          {
            id: "1a2b3c4d",
            cityCode: "1",
            provinceCode: "1",
            cityName: "Banda Aceh",
          },
          {
            id: "2e3f4g5h",
            cityCode: "2",
            provinceCode: "1",
            cityName: "Sabang",
          },
          {
            id: "3i4j5k6l",
            cityCode: "3",
            provinceCode: "1",
            cityName: "Langsa",
          },
          {
            id: "4m5n6o7p",
            cityCode: "4",
            provinceCode: "1",
            cityName: "Lhokseumawe",
          },
          {
            id: "5q6r7s8t",
            cityCode: "5",
            provinceCode: "1",
            cityName: "Subulussalam",
          },
          {
            id: "6u7v8w9x",
            cityCode: "6",
            provinceCode: "1",
            cityName: "Aceh Besar",
          },
          {
            id: "7y8z9a0b",
            cityCode: "7",
            provinceCode: "1",
            cityName: "Aceh Jaya",
          },
          {
            id: "8c9d0e1f",
            cityCode: "8",
            provinceCode: "1",
            cityName: "Aceh Selatan",
          },
          {
            id: "9g0h1i2j",
            cityCode: "9",
            provinceCode: "1",
            cityName: "Aceh Singkil",
          },
          {
            id: "0k1l2m3n",
            cityCode: "10",
            provinceCode: "1",
            cityName: "Aceh Tamiang",
          },
          {
            id: "1o2p3q4r",
            cityCode: "11",
            provinceCode: "1",
            cityName: "Aceh Tengah",
          },
          {
            id: "2s3t4u5v",
            cityCode: "12",
            provinceCode: "1",
            cityName: "Aceh Tenggara",
          },
          {
            id: "3w4x5y6z",
            cityCode: "13",
            provinceCode: "1",
            cityName: "Aceh Timur",
          },
          {
            id: "4a5b6c7d",
            cityCode: "14",
            provinceCode: "1",
            cityName: "Aceh Utara",
          },
          {
            id: "5e6f7g8h",
            cityCode: "15",
            provinceCode: "1",
            cityName: "Bener Meriah",
          },
          {
            id: "6i7j8k9l",
            cityCode: "16",
            provinceCode: "1",
            cityName: "Bireuen",
          },
          {
            id: "7m8n9o0p",
            cityCode: "17",
            provinceCode: "1",
            cityName: "Gayo Lues",
          },
          {
            id: "8q9r0s1t",
            cityCode: "18",
            provinceCode: "1",
            cityName: "Nagan Raya",
          },
          {
            id: "9u0v1w2x",
            cityCode: "19",
            provinceCode: "1",
            cityName: "Pidie",
          },
          {
            id: "0y1z2a3b",
            cityCode: "20",
            provinceCode: "1",
            cityName: "Pidie Jaya",
          },
          {
            id: "1c2d3e4f",
            cityCode: "21",
            provinceCode: "1",
            cityName: "Simeulue",
          },
          {
            id: "2g3h4i5j",
            cityCode: "22",
            provinceCode: "1",
            cityName: "West Aceh",
          },
        ],
      }
  });
});

app.get("/reference/v1/cities/:cityCode/districts", (req, res) => {
  console.log(req.params);

  res.send({
      data: {
        district: [
          {
            id: "Aa1Bb2Cc3Dd4",
            districtCode: "101",
            cityCode: "1",
            districtName: "Kuta Alam",
          },
          {
            id: "Ee5Ff6Gg7Hh8",
            districtCode: "102",
            cityCode: "1",
            districtName: "Baiturrahman",
          },
          {
            id: "Ii9Jj10Kk11Ll12",
            districtCode: "103",
            cityCode: "1",
            districtName: "Syiah Kuala",
          },
          {
            id: "Mm13Nn14Oo15Pp16",
            districtCode: "104",
            cityCode: "1",
            districtName: "Meuraxa",
          },
          {
            id: "Qq17Rr18Ss19Tt20",
            districtCode: "105",
            cityCode: "1",
            districtName: "Ulee Kareng",
          },
        ],
      }
  });
});

app.get("/reference/v1/districts/:districtCode/sub-districts", (req, res) => {
  console.log(req.params);

  res.send({
      data: {
        subDistrict: [
          {
            id: "SubAa1Bb2Cc3Dd4",
            subDistrictCode: "10101",
            districtCode: "101",
            subDistrictName: "Lampriet",
            postalCode: ["12345", "12346", "12347"],
          },
          {
            id: "SubEe5Ff6Gg7Hh8",
            subDistrictCode: "10102",
            districtCode: "101",
            subDistrictName: "Peunayong",
            postalCode: ["12348", "12349"],
          },
          {
            id: "SubIi9Jj10Kk11Ll12",
            subDistrictCode: "10103",
            districtCode: "101",
            subDistrictName: "Bandar Baru",
            postalCode: ["12350", "12351", "12352"],
          },
          {
            id: "SubMm13Nn14Oo15Pp16",
            subDistrictCode: "10104",
            districtCode: "101",
            subDistrictName: "Beurawe",
            postalCode: ["12353"],
          },
        ],
      },
  });
});

app.listen(port, () => {});
