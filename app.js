const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Handle invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  next();
});

app.post("/apc/v1/card-list", (req, res) => {
  let data = {
    dataProtected: {
      cardList: [
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Signature",
          cardProductDescription: "sdsdssd",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-1.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "1234568879",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Mastercard World",
          cardProductDescription:
            "Kebebasan bertransaksi global dengan limit tinggi.",
          isRecomend: true,
          category: "Shopping",
          promo: {
            title:
              "Ajukan hingga 31 Desember 2024 biar langsung dapetin promo spesialnya:",
            description: {
              id: [
                "Instan Upgrade ke Garuda Gold Privilege",
                "Akses ke Garuda Executive Lounge (Domestik dan Internasional)",
              ],
              en: [],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [
                "Dapetin miles lebih banyak setiap transaksi Rp20.000 / 2 Garuda Miles",
                "Extra diskon 10% setiap hari Rabu di website/App Garuda Indonesia",
                "Welcome bonus sebesar 35.000 Garuda Miles (setara tiket pergi ke Jepang dengan Garuda Indonesia)",
                "Jaminan perlindungan asuransi kecelakaan dalam perjalanan dengan santunan hingga maksimum Rp 3 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Signature dan Rp 1 milyar untuk pemegang Kartu Kredit Garuda BNI Visa Platinum.",
              ],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-2.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription: "cardProductDescription",
          isRecomend: true,
          category: "Cashback",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Health",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
        {
          id: "id",
          binFirstDigit: "binFirstDigit",
          cardProductName: "Garuda Visa Platinum",
          cardProductDescription:
            "Nikmati keuntungan menarik dalam setiap perjalanan.",
          isRecomend: true,
          category: "Travel",
          promo: {
            title: "applyCcDetailSceenPromoTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefit: {
            title: "applyCcDetailSceenBenefitTitle",
            description: {
              id: [{}, {}],
              en: [{}, {}],
            },
          },
          benefitCount: 8,
          image: "/src/assets/images/credit-card-3.svg",
          position: 1,
          cardProfile: {
            income: "A",
            promo: ["HIBURAN", "TOKO"],
          },
        },
      ],
    },
    data: {
      page: 1,
      totalPage: 5,
      noOfRecord: 10,
    },
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
  res.json({ data: "check" });
});

app.get("/apc/v1/personal-data", (req, res) => {
  res.json({
      dataProtected: {
        jobStatus: "PROFESIONAL", //PROFESIONAL, PENGUSAHA, TIDAK BEKERJA, PENSIUN,
        address: "JL. SETIABUDI",
        rt: "35",
        rw: "35",
        buildingName: "Perumahan Bagus",
        district: "Setia Budi",
        subdistrict: "Setia Budi",
        city: "BATU",
        postalCode: "12910",
      },
  });
});

app.get("/apc/v1/reference", (req, res) => {
  res.send({
      dataProtected: {
        categories: [
          {
            key: "Travel",
            value: "Travel",
            image:
              "https://mav-baseurl.co.id/asset/v1/image/9jcPmyDTYXKx6J4SlS-OX.png",
          },
          {
            key: "Shopping",
            value: "Shopping",
            image:
              "https://mav-baseurl.co.id/asset/v1/image/9jcPmyDTYXKx6J4SlS-OX.png",
          },
          {
            key: "Cashback",
            value: "Cashback",
            image:
              "https://mav-baseurl.co.id/asset/v1/image/9jcPmyDTYXKx6J4SlS-OX.png",
          },
          {
            key: "Health",
            value: "Health",
            image:
              "https://mav-baseurl.co.id/asset/v1/image/9jcPmyDTYXKx6J4SlS-OX.png",
          },
          {
            key: "Game",
            value: "Game",
            image:
              "https://mav-baseurl.co.id/asset/v1/image/9jcPmyDTYXKx6J4SlS-OX.png",
          },
        ],
      }
  });
});

app.get("/reference/v1/lov", (req, res) => {
  if (req.query.category == "apply-cc.personal-data") {
    res.send({
        data: {
          education: [
            {
              lovKey: "education.level.diploma",
              lovValue: "Diploma",
              lovDisplay: "applyccEducationDiploma",
            },
            {
              lovKey: "education.level.bachelor",
              lovValue: "S1",
              lovDisplay: "applyccEducationS1",
            },
            {
              lovKey: "education.level.master",
              lovValue: "S2",
              lovDisplay: "applyccEducationS2",
            },
            {
              lovKey: "education.level.doctorate",
              lovValue: "S3",
              lovDisplay: "applyccEducationS3",
            },
            {
              lovKey: "education.level.others",
              lovValue: "Others",
              lovDisplay: "applyccEducationOthers",
            },
          ],
          dependents: [
            {
              lovKey: "dependents.count.none",
              lovValue: "None",
              lovDisplay: "applyccDependentsNone",
            },
            {
              lovKey: "dependents.count.one",
              lovValue: "1",
              lovDisplay: "applyccDependents1",
            },
            {
              lovKey: "dependents.count.two",
              lovValue: "2",
              lovDisplay: "applyccDependents2",
            },
            {
              lovKey: "dependents.count.three",
              lovValue: "3",
              lovDisplay: "applyccDependents3",
            },
            {
              lovKey: "dependents.count.four",
              lovValue: "4",
              lovDisplay: "applyccDependents4",
            },
            {
              lovKey: "dependents.count.more-than-four",
              lovValue: "More than 4",
              lovDisplay: "applyccDependentsMoreThan4",
            },
          ],
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
          "first": [
            {
              "lovKey": "inbox-transactional.trx-history.status.success",
              "lovValue": "SUCCESS",
              "lovDisplay": "applyCCLandingPageScreenListTitle1"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.failed",
              "lovValue": "FAILED",
              "lovDisplay": "applyCCLandingPageScreenListDescription1"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.pending",
              "lovValue": "PENDING",
              "lovDisplay": "/src/assets/icons/img_investment_20_banner_mutual_fund.svg"
            }
          ],
          "second": [
            {
              "lovKey": "inbox-transactional.trx-history.status.success",
              "lovValue": "SUCCESS",
              "lovDisplay": "applyCCLandingPageScreenListTitle2"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.failed",
              "lovValue": "FAILED",
              "lovDisplay": "applyCCLandingPageScreenListDescription2"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.pending",
              "lovValue": "PENDING",
              "lovDisplay": "/src/assets/icons/img_investment_21_banner_mutual_fund.svg"
            }
          ],
          "third": [
            {
              "lovKey": "inbox-transactional.trx-history.status.success",
              "lovValue": "SUCCESS",
              "lovDisplay": "applyCCLandingPageScreenListTitle3"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.failed",
              "lovValue": "FAILED",
              "lovDisplay": "applyCCLandingPageScreenListDescription3"
            },
            {
              "lovKey": "inbox-transactional.trx-history.status.pending",
              "lovValue": "PENDING",
              "lovDisplay": "/src/assets/icons/img_investment_22_banner_mutual_fund.svg"
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
