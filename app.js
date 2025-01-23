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
    dataProtected: "DC70103F14ECDFBFE521405FEB70895AEAAF6C047D5F52041A998A218BF52788083314B1A6C5B5BE15DC060C9BBA2928D10E2E436467EE75DA49D102FD508D8670672380E3E54C8C9192BFDEEECFF2466B79BE206DF62BF8518225FEA42CBD8BC4881964424E09CFADAC8D74D2706D999C6225F6C62DF3312040A9D4A6CE98300A88145882C4E9B8D6E5075A6C187D34EBCBEA6DE4EC57C2191B02E5A4D6FDC0724111C5D2AF395BA60B6A430B4A397A7F3C1A42FD5FB4190630BEB03E227D1F515F40614A98A70C571B0069CAD08594ED5C3B7096FA37A13A217AC58A423D87C3D678442D4F9C26AE22C385BD80F790E54A1EE48498184615C24196C82306483E48F33DA2768A1626DF1EE5BE8828DCC0444CE5F78B2A81DE7EC9AC16F0991C7FB02026C24C397D8BBB74067D9EC026E143E621AB1D9CBEC7E5AC3E50039E6189E4FE4F62D9C07D542BD1E8B30D79C414BF10570DD30B104952716C4677598A5F05E2CBA23E1A7E201AF6F060B70289A07C7173F3029FD8674CB39FAD72CB744C5B7405E19439CD8C98631BD8088151F940991205D8C8B67595F86FF0DCABB9530427D84D744A050434CEC751738892501BE8002BDA930326509686ABA18052D5AC0F1AB6F62BB5915FD51C7EE45C02B643CA65E575F28A1276EE676270143FA861E4C4B4139B5FAFFE41AC234B976573C6172E66CDECD8672CF19DCE4F68E92FC336573D08380FA04E0209CD2423B11C54CA61CED8241E4CEE82524F98EC2121A21ABD582E5587EFB4B548FD7141C5E078B05D72C4E47AC13B6679D60C66D8814CBE750E6ECA00C51C2BAE209FE48F426F9B790613CFAE82E4FB25D642BFD081327525DB75DB774917C80977ECCC0EB59A05AC6ED367D7B903F542F4A25992DA6D5F5852061B1AE19A2443433C31E3FB08497A8A22A5F05C6BC2C73E16EF0B424C19AABD2AB9ED3FD688E7A83522CA4BB10785659CEDB58911109B51E6AFF28C93860016E6CA328B272F251BED08B0EB181DFBB00E16893C16A782E6D04C2E93548244CCF0F339D872C3810993A3211652CC48ADF6AA0F7D3D483FF4ABDCA2165D1D2D98D0B936D55C42D6EACE3C872B4DC74D59711F2F983EDD1B51C8799ED4498B47C736615B971D0539365352252991AFBD6D3BCBA893F0363DD31D961B4EF6994BD3F94DFC53BB2794F3B5BB9B1A96439CE2C51A87461AD57F1E34B1919C264A45586C7B26E303CABB678B32293EDBB36BDD9C34815BA5912B11668AB77834FF79DA7E1BDE23B5B7DB08AC961B91124B2C67A2C581264577FDC770FEC79D66618C6CE15ADB0658167647746A54CA2C51B5FAF242CEA7EA1DC5D1FC848A89DB15DE293078E1A31A694256ED76A3137F2868C741D15B419EB97CA903C90871DEBBB202C1778E062B0BAD30BCD573AB9AFEE9BFDA06F38E6EDB634E3B36BEC5B7BCF01ED8B9F18D94BC0E3B83293118FD8B657F07309A13A3B1831F3A3D78D5999316E355BE228EC5094E9140F479733C2E2595DED09D1033AB8D67B307055185F301F407361D8C30DB14444E135F9B51A569F8CA60484CF345C9AD95E0A1E23EA2B6C32D3ECAC0B46B171EC1F76BC2C01AF38E853D8AE66341997D992B46B1A7BC01248D34501E559B2EB85FF0D96D425FC45AC10AF4793D0658A8EEB6961DFE571E152C256DD0D36BC2E1BDAE0A561FB410FF3779DC5BFF08B871C92443BFB477C67DF2B7C957B36B49787419123B7C8CF3BEB62C3C9A63EC7E715F4081C7BFA066ADA4685854044CE4A28A37A93F0E8D74C5695E391F67DD76CDEC6B61B8FD3578399FA0C1A5CA3635514B9590942C79BB9F0ECC57117AAC92C54F22B984DC7CC19E41C5C10162DCA8A47945539CDB62D4442EECF8B0CBF9159C0F7AEA4C06455237E82C8798C50369EFF8951DB9AC1F189F3887B2D7E736E58B2B01E4C99EF1AB3DB000D3EE7D2081CEC3309BDE4FA3CF6F6001F984B7603C5BA873DB218583AE035058BC67AB760D8A364C1AF2F25CE71027FC5D29F8B3F5508133C155C5AD2FAADE25A7A811607E5A079B3E04E70CE15F04ACDD0957BDE28FA4852485741275B4EF87BD9410883E582D8E64C6AD24C453CC3F19519D42F36844919E20A27A5B689332DB4321A76368A16B031E3AA21A60250943D71BAC568760D92DA52E0110BFE1109134780E30E75864C64AC51E4633DA6109A4683AA1B51DC9A83BC3460F0DC3D4A3040A7E20099F989E8ADAED77089159FAD55587443A9216954A223A8516E3F70CB4047DDAA4CEB5D126134BE76D19A9B5A1020AF659EC0B269293CFA89FB84E9D4591C4D37C1BD34FA1ABF93BAF150415E6A379C2517745FCD00280ADF3EA3CCFE42EA4F081668BB02B307A85CC2F5D6ED0C938941ADD264C0694C90915234C33830C9D35E55853E9F89756D9F73371F971E3F9C02C7E181BB416F9B8305E0BEF1E5987FF7ED01B9D920BEFF3234C92F8FF5D46E9919DBAF2A50E43D6822361693D867313ED55FD6AB98DB826AC5FCB239A5157F6603D7BC59B097221842614D61861D1D5B4C4238D8433D6C7F46B3143E74663903159E67C170C12E3404D2A916871939A421B76AE81185AE0510FE473FC71741E5DB64729BCD464A5C721A0A29511E55196800A4D800A70684B61D939DBC7F57F983E33EF9B30453219ED51F8F25A3C36E80894560E9D41F6C24790D5D59F287E35193BA5361C109B290B51AACD9DAD91DE2BF1DAA74EC670914BCFF621A746C2620DFF15E48C4901C14FE4C90004425521B5FCB6673F9625535EB78F5F8B69D3D16D0C2E9485DBA745AC25EF7679805590C9394C53F6D69AB5B4811EEDD993A10E3B332B7C2112181F61FDF9CA0C4E0A7F7FB16CED2911073B0AD5677CE5604641C9A45701EFB84DE3A186BB61D25819ED21338C10FA96724C83FB46E3574C62999FA65AA758FB7C1613F3A44A8D0300716ED24FCB61CBCC6723918912C60EBCD2DD57F4F742AD35614BC5F73471CB8DDA2C72DF7EC30D524AB22E7C0377EB6005907DD414394BDC7EB3",
    data: {
      page: 1,
      totalPage: 5,
      noOfRecord: 10,
    },
  };

  // if (req.body.dataProtected && req.body.dataProtected.category) {
  //   data.dataProtected.cardList = data.dataProtected.cardList.filter(
  //     (item) =>
  //       item.category.toLowerCase() ===
  //       req.body.dataProtected.category.toLowerCase()
  //   );
  // }

  // if (req.body.dataProtected && req.body.dataProtected.filterName) {
  //   data.dataProtected.cardList = data.dataProtected.cardList.filter((item) =>
  //     item.cardProductName
  //       .toLowerCase()
  //       .includes(req.body.dataProtected.filterName.toLowerCase())
  //   );
  // }

  res.json({ dataProtected : data.dataProtected, data : data.data });
});

app.post("/apc/v1/upsert-document", (req, res) => {

  console.log(req.body);
  
  res.json({ dataProtected: {
    id : "hahahahah"
  }});
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
  if (req.query.category == "apply-cc.job-data") {
    res.send({
      "data": {
        "typeCompany": [
          {
            "lovValue": "B",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyBumn",
            "lovKey": "bumn1"
          },
          {
            "lovValue": "P",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyGovernmentAgencies",
            "lovKey": "ip1"
          },
          {
            "lovValue": "S",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyPrivate",
            "lovKey": "swa1"
          },
          {
            "lovValue": "N",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyNationalPrivate",
            "lovKey": "swan1"
          },
          {
            "lovValue": "M",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyMultinational",
            "lovKey": "mult1"
          },
          {
            "lovValue": "L",
            "lovDisplay": "applyCCJobDataScreenTypeCompanyOther",
            "lovKey": "oth1"
          }
        ],
        "businessFields": [
          {
            "lovValue": "Pertanian, Perkebunan, Peternakan",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsFarming",
            "lovKey": "applyCCJobDataScreenBusinessFieldsFarming1"
          },
          {
            "lovValue": "Pertambangan",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsMining",
            "lovKey": "applyCCJobDataScreenBusinessFieldsMining1"
          },
          {
            "lovValue": "Industri, Pabrik, Home Industry, Percetakan",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsIndustry",
            "lovKey": "applyCCJobDataScreenBusinessFieldsIndustry1"
          },
          {
            "lovValue": "Minyak, Gas, Air, Listrik",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOil",
            "lovKey": "applyCCJobDataScreenBusinessFieldsOil1"
          },
          {
            "lovValue": "Properti, Kontraktor",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsProperty",
            "lovKey": "applyCCJobDataScreenBusinessFieldsProperti1"
          },
          {
            "lovValue": "Perdagangan, Export-Import, Hotel, Restaurant",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTrading",
            "lovKey": "applyCCJobDataScreenBusinessFieldsTrading1"
          },
          {
            "lovValue": "Angkutan, Informasi, Telekomunikasi",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsTransport",
            "lovKey": "applyCCJobDataScreenBusinessFieldsTransport1"
          },
          {
            "lovValue": "Perbankan, Hiburan, Asuransi, Konsultan, Travel(Profit)",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsBanking",
            "lovKey": "applyCCJobDataScreenBusinessFieldsBanking1"
          },
          {
            "lovValue": "Pemerintahan, Jasa(Non Profit)",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsGovernment",
            "lovKey": "applyCCJobDataScreenBusinessFieldsGovernment2"
          },
          {
            "lovValue": "Lainnya",
            "lovDisplay": "applyCCJobDataScreenBusinessFieldsOther",
            "lovKey": "applyCCJobDataScreenBusinessFieldsOther2"
          }
        ],
        "positionB": [
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBKomisaris",
            "lovValue": "Komisaris/Pemilik/Persero"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBDirekturUtama",
            "lovValue": "Direktur Utama/CEO"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBDirektur",
            "lovValue": "Direktur/Pejabat Eselon I"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBWakilDirektur",
            "lovValue": "Wakil Direktur"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBGeneralManager",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBManager",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionBAssistantManager",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionBKomisaris1",
            "lovDisplay": "applyCCJobDataScreenPositionPStaf",
            "lovValue": "Staf"
          },
        ],
        "positionS": [
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSDirektur"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "Wakil Direktur",
            "lovDisplay": "applyCCJobDataScreenPositionSWakilDirektur"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "General Manager/Kepala Biro",
            "lovDisplay": "applyCCJobDataScreenPositionSGeneralManager"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "Manager/Kepala Bagian",
            "lovDisplay": "applyCCJobDataScreenPositionSManager"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "Asisten Manager/Kepala Seksi",
            "lovDisplay": "applyCCJobDataScreenPositionSAsistenManager"
          },
          {
            "lovKey": "applyCCJobDataScreenPositionSDirektur1",
            "lovValue": "Staff",
            "lovDisplay": "applyCCJobDataScreenPositionSStaf"
          }
        ],
        "positionP": [
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Direktur/Pejabat Eselon I",
            "lovDisplay": "applyCCJobDataScreenPositionPDirektur"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "General Manager/Kepala Biro/Pejabat Eselon II",
            "lovDisplay": "applyCCJobDataScreenPositionPGeneralManager"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Manager/Kepala Bagian/Pejabat Eselon III",
            "lovDisplay": "applyCCJobDataScreenPositionPManager"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Assistant Manager/Kepala Seksi/Pejabat Eselon IV",
            "lovDisplay": "applyCCJobDataScreenPositionPAssistantManager"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Staff",
            "lovDisplay": "applyCCJobDataScreenPositionPStaf"
          }
        ],
        "positionN": [
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Kepala Pemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPKepalaPemerintahan"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Aparat Pemerintahan",
            "lovDisplay": "applyCCJobDataScreenPositionPAparatPemerintahan"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Anggota Lembaga Tinggi Negara",
            "lovDisplay": "applyCCJobDataScreenPositionPAnggotaLembagaTinggiNegara"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Menteri",
            "lovDisplay": "applyCCJobDataScreenPositionPMenteri"
          }
        ],
        "positionM": [
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Perwira Tinggi",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraTinggi"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Perwira Menengah",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraMenengah"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Perwira Pertama",
            "lovDisplay": "applyCCJobDataScreenPositionPPerwiraPertama"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Bintara",
            "lovDisplay": "applyCCJobDataScreenPositionPBintara"
          },
          {
            "lovKey": "dependents.count.more-than-four",
            "lovValue": "Tamtama",
            "lovDisplay": "applyCCJobDataScreenPositionPTamtama"
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
