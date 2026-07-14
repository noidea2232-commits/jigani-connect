/* ============ RSS Jigani — Portal JS ============ */
(function () {
  "use strict";

  // ---------- DATA (extracted from official Vasati document) ----------
  const VASATIS = [
    {
      id: 1,
      name: { en: "Pillaganahalli", kn: "ಪಿಲ್ಲಗನಹಳ್ಳಿ" },
      palakaru: { en: "Shri Bhimaray", kn: "ಶ್ರೀ ಭೀಮರಾಯ್" },
      phones: ["9008430163"],
      branches: [
        {
          type: "shakha",
          name: { en: "Pillaganahalli Shakha", kn: "ಪಿಲ್ಲಗನಹಳ್ಳಿ ಶಾಖಾ" },
          resp: {
            en: "Shri Preetham — 7348859447, Shri Pavan Kumar — 7338429124",
            kn: "ಶ್ರೀ ಪ್ರೀತಮ್ – 7348859447, ಶ್ರೀ ಪವನ್ ಕುಮಾರ್ – 7338429124",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "New Blossom School", kn: "ನ್ಯೂ ಬ್ಲಾಸಮ್ ಸ್ಕೂಲ್" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 2, name: { en: "Dundu Maramma Temple", kn: "ದುಂಡು ಮಾರಮ್ಮ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 3, name: { en: "Nava Bharata Nirmana School", kn: "ನವಭಾರತ ನಿರ್ಮಾಣ ಶಾಲೆ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 4, name: { en: "Vinayaka Nagar (Banashankari Temple)", kn: "ವಿನಾಯಕ ನಗರ(ಬನಶಂಕರಿ ದೇವಸ್ಥಾನ)" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 5, name: { en: "Ambedkar Nagar", kn: "ಅಂಬೇಡ್ಕರ್ ನಗರ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 6, name: { en: "Pillaganahalli Circle", kn: "ಪಿಲ್ಲಗನಹಳ್ಳಿ ಸರ್ಕಲ್" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 7, name: { en: "BMTC Depot", kn: "BMTC ಡಿಪೊ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 8, name: { en: "Kannada Rajyotsava Katte", kn: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಕಟ್ಟೆ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 9, name: { en: "Shani Mahatma Temple", kn: "ಶನಿ ಮಹಾತ್ಮ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 10, name: { en: "Jai Bheem Rao Ramji Upavasati", kn: "ಜೈ ಭೀಮ್ ರಾವ್ ರಾಮ್ ಜೀ ಉಪವಸತಿ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 11, name: { en: "Kaliyamma Upavasati", kn: "ಕಾಳಿಯಮ್ಮ ಉಪವಸತಿ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 12, name: { en: "Maruti Layout", kn: "ಮಾರುತಿ ಲೇಔಟ್" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
      ],
    },
    {
      id: 2,
      name: { en: "Weavers Colony", kn: "ವೀವರ್ಸ್ ಕಾಲೋನಿ" },
      palakaru: { en: "Shri Kishor", kn: "ಶ್ರೀ ಕಿಶೋರ್" },
      phones: ["9731134271"],
      branches: [
        {
          type: "shakha",
          name: { en: "Balarama Shakha", kn: "ಬಲರಾಮ ಶಾಖಾ" },
          resp: {
            en: "Shri Kumar — 8660355867, Shri Venkatesh — 9980636238",
            kn: "ಶ್ರೀ ಕುಮಾರ್ – 8660355867, ಶ್ರೀ ವೆಂಕಟೇಶ್ – 9980636238",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Chikkammana Halli", kn: "ಚಿಕ್ಕಮ್ಮನ ಹಳ್ಳಿ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 2, name: { en: "Meenakshi Layout", kn: "ಮೀನಾಕ್ಷಿ ಲೇಔಟ್" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 3, name: { en: "Pavan Colony", kn: "ಪವನ್ ಕಾಲೋನಿ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 4, name: { en: "Dasimayya Temple", kn: "ದಾಸಿಮಯ್ಯ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 5, name: { en: "Ashwatha Katte", kn: "ಅಶ್ವಥ್ಥ ಕಟ್ಟೆ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 6, name: { en: "Ganesha Temple (Circle)", kn: "ಗಣೇಶ ದೇವಸ್ಥಾನ (ಸರ್ಕಲ್)" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 7, name: { en: "Choudeshwari Temple", kn: "ಚೌಡೇಶ್ವರಿ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 8, name: { en: "Maramma Temple", kn: "ಮಾರಮ್ಮ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 9, name: { en: "Gayatri Sabhabhavan", kn: "ಗಾಯತ್ರಿ ಸಭಾಭವನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 10, name: { en: "Ramalingeshwara Temple", kn: "ರಾಮಲಿಂಗೇಶ್ವರ ದೇವಸ್ಥಾನ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 11, name: { en: "Vidyanjali Upavasati", kn: "ವಿದ್ಯಾಂಜಲಿ ಉಪವಸತಿ" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
      ],
    },
    {
      id: 3,
      name: { en: "Bhuthanahalli", kn: "ಭೂತಾನಹಳ್ಳಿ" },
      palakaru: { en: "Shri Maruti", kn: "ಶ್ರೀ ಮಾರುತಿ" },
      phones: ["8884267692"],
      branches: [],
      upavastis: [
        { no: 1, name: { en: "Bhuthanahalli", kn: "ಬೂತಾನಹಳ್ಳಿ" }, pramukh: { en: "Hemantha", kn: "ಹೇಮಂತ" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" } },
        { no: 2, name: { en: "Amruta Nagar", kn: "ಅಮೃತ ನಗರ" }, pramukh: { en: "Muniraj", kn: "ಮುನಿರಾಜ" }, sangh: { en: "Ayyappa Temple", kn: "ಅಯ್ಯಪ್ಪ ದೇವಾಲಯ" } },
        { no: 3, name: { en: "Sheelendra Doddi", kn: "ಶಿಲೀಂದ್ರ ದೊಡ್ಡಿ" }, pramukh: { en: "Raju", kn: "ರಾಜು" }, sangh: { en: "Anganwadi", kn: "ಅಂಗನವಾಡಿ" } },
        { no: 4, name: { en: "Hakkipikki Colony", kn: "ಹಕ್ಕಿಪಿಕ್ಕಿ ಕಾಲೋನಿ" }, pramukh: { en: "Vishnuvardhan", kn: "ವಿಷ್ಣುವರ್ಧನ್" }, sangh: { en: "Govt. School", kn: "ಸರ್ಕಾರಿ ಶಾಲೆ" } },
        { no: 5, name: { en: "Batarayana Doddi", kn: "ಬ್ಯಾಟರಾಯನ ದೊಡ್ಡಿ" }, pramukh: { en: "Ramachandra", kn: "ರಾಮಚಂದ್ರ" }, sangh: { en: "Play Ground", kn: "ಆಟದ ಮೈದಾನ" } },
        { no: 6, name: { en: "Kannanayaka Agrahara", kn: "ಕಣ್ಣನಾಯಕ ಅಗ್ರಹಾರ" }, pramukh: { en: "Tej", kn: "ತೇಜ್" }, sangh: { en: "Kabbalamma Temple", kn: "ಕಬ್ಬಳಮ್ಮ ದೇವಾಲಯ" } },
        { no: 7, name: { en: "Bilavarada Halli", kn: "ಬಿಲವಾರದ ಹಳ್ಳಿ" }, pramukh: { en: "Madesh", kn: "ಮಾದೇಶ್" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" } },
      ],
    },
    {
      id: 4,
      name: { en: "Bannerughatta", kn: "ಬನ್ನೇರುಘಟ್ಟ" },
      palakaru: {
        en: "Shri Vighnesh / Shri Dakshit Kumar",
        kn: "ಶ್ರೀ ವಿಘ್ನೇಶ್ / ಶ್ರೀ ದಕ್ಷಿತ್ ಕುಮಾರ್",
      },
      phones: ["9483276731", "8431615110"],
      branches: [
        {
          type: "shakha",
          name: { en: "Janna Shakha", kn: "ಜನ್ನ ಶಾಖಾ" },
          resp: {
            en: "Shri Ramesh — 9972778365, Shri Shrishail — 9742810120",
            kn: "ಶ್ರೀ ರಮೇಶ್ – 9972778365, ಶ್ರೀ ಶ್ರೀಶೈಲ – 9742810120",
          },
        },
        {
          type: "shakha",
          name: { en: "Kuvempu Shakha", kn: "ಕುವೆಂಪು ಶಾಖಾ" },
          resp: {
            en: "Shri Tejas — 8105742287, Shri Vinod — 6366228508",
            kn: "ಶ್ರೀ ತೇಜಸ್ – 8105742287, ಶ್ರೀ ವಿನೋದ್ – 6366228508",
          },
        },
        {
          type: "shakha",
          name: { en: "Gopala Krishna Adiga Shakha", kn: "ಗೋಪಾಲ ಕೃಷ್ಣ ಅಡಿಗ ಶಾಖಾ" },
          resp: {
            en: "Shri Neeraj — 9945541391, Shri Manish Reddy — 8105055737",
            kn: "ಶ್ರೀ ನೀರಜ್ – 9945541391, ಶ್ರೀ ಮನೀಶ್ ರೆಡ್ಡಿ – 8105055737",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Bannerughatta Circle", kn: "ಬನ್ನೇರುಘಟ್ಟ ಸರ್ಕಲ್" }, pramukh: { en: "Shri Prabhu", kn: "ಶ್ರೀ ಪ್ರಭು" }, sangh: { en: "Kuvempu Sanghasthana", kn: "ಕುವೆಂಪು ಸಂಘಸ್ಥಾನ" } },
        { no: 2, name: { en: "Champakadhama Layout", kn: "ಚಂಪಕಧಾಮ ಲೇಔಟ್" }, pramukh: { en: "Shri Niranjan Reddy", kn: "ಶ್ರೀ ನಿರಂಜನ ರೆಡ್ಡಿ" }, sangh: { en: "Shiva Temple", kn: "ಶಿವ ದೇವಾಲಯ" } },
        { no: 3, name: { en: "Byrappanahalli", kn: "ಬೈರಪ್ಪನಹಳ್ಳಿ" }, pramukh: { en: "Shri Ravi", kn: "ಶ್ರೀ ರವಿ" }, sangh: { en: "Muneshwara Temple", kn: "ಮುನೇಶ್ವರ ದೇವಾಲಯ" } },
        { no: 4, name: { en: "Sampigehalli", kn: "ಸಂಪಿಗೆಹಳ್ಳಿ" }, pramukh: { en: "Shri Yariswamy", kn: "ಶ್ರೀ ಯರಿಸ್ವಾಮಿ" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" } },
        { no: 5, name: { en: "Kempanayakanahalli", kn: "ಕೆಂಪನಾಯಕನಹಳ್ಳಿ" }, pramukh: { en: "Shri Lokesh", kn: "ಶ್ರೀ ಲೋಕೇಶ್" }, sangh: { en: "Gollahalli Hill Play Ground", kn: "ಗೊಳ್ಳಹಳ್ಳಿ ಗುಡ್ಡ ಆಟದ ಮೈದಾನ" } },
        { no: 6, name: { en: "Rathabeedhi", kn: "ರಥಬೀದಿ" }, pramukh: { en: "Shri Mallayya Choukimath", kn: "ಶ್ರೀ ಮಲ್ಲಯ್ಯ ಚೌಕಿಮಠ್" }, sangh: { en: "Champakadhama Temple", kn: "ಚಂಪಕಧಾಮ ದೇವಾಲಯ" } },
        { no: 7, name: { en: "Seepagere", kn: "ಸೀಪಗೆರೆ" }, pramukh: { en: "Shri Raghu", kn: "ಶ್ರೀ ರಘು" }, sangh: { en: "Golden School", kn: "ಗೋಲ್ಡನ್ ಶಾಲೆ" } },
        { no: 8, name: { en: "Janata Badavane", kn: "ಜನತಾ ಬಡಾವಣೆ" }, pramukh: { en: "Shri Basavaraj", kn: "ಶ್ರೀ ಬಸವರಾಜ್" }, sangh: { en: "Cashew Factory", kn: "ಗೋಡಂಬಿ ಫ್ಯಾಕ್ಟರೀ" } },
        { no: 9, name: { en: "Ranganath Layout", kn: "ರಂಗನಾಥ್ ಲೇಔಟ್" }, pramukh: { en: "Shashi", kn: "ಶಶಿ" }, sangh: { en: "Blooming School", kn: "Blooming School" } },
        { no: 10, name: { en: "Gollahalli", kn: "ಗೊಲ್ಲಹಳ್ಳಿ" }, pramukh: { en: "Shri Puttaraju", kn: "ಶ್ರೀ ಪುಟ್ಟರಾಜು" }, sangh: { en: "Anganwadi", kn: "ಅಂಗನವಾಡಿ" } },
        { no: 11, name: { en: "Narasimhaswamy Layout", kn: "ನರಸಿಂಹಸ್ವಾಮಿ ಲೇಔಟ್" }, pramukh: { en: "Shri Hanumantha Hyati", kn: "ಶ್ರೀ ಹನುಮಂತ ಹ್ಯಾಟಿ" }, sangh: { en: "Sai Sadbhavana School", kn: "ಸಾಯಿ ಸದ್ಭಾವನ ಶಾಲೆ" } },
        { no: 12, name: { en: "Narayana Raju Layout", kn: "ನಾರಾಯಣ ರಾಜು ಲೇಔಟ್" }, pramukh: { en: "Shri Ambarish", kn: "ಶ್ರೀ ಅಂಬರೀಶ್" }, sangh: { en: "Near Kalyani", kn: "ಕಲ್ಯಾಣಿ ಹತ್ತಿರ" } },
      ],
    },
    {
      id: 5,
      name: { en: "Mantapa", kn: "ಮಂಟಪ" },
      palakaru: {
        en: "Shri Raghavendra / Shri Venkatramana",
        kn: "ಶ್ರೀ ರಾಘವೇಂದ್ರ / ಶ್ರೀ ವೆಂಕಟರಮಣ",
      },
      phones: ["9900827082", "7676644612"],
      branches: [
        {
          type: "shakha",
          name: { en: "Nirman Yoga Shakha", kn: "ನಿರ್ಮಾಣ್ ಯೋಗ ಶಾಖಾ" },
          resp: {
            en: "Shri Srinivas — 9900180670, Shri Ravi Gowda",
            kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ್ – 9900180670, ಶ್ರೀ ರವಿ ಗೌಡ",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Mantapa 1", kn: "ಮಂಟಪ 1" }, pramukh: { en: "Manju", kn: "ಮಂಜು" }, sangh: { en: "Behind Sanjay Theatre", kn: "ಸಂಜಯ್ ಚಿತ್ರಮಂದಿರ ಹಿಂಬಾಗ" } },
        { no: 2, name: { en: "Mantapa 2", kn: "ಮಂಟಪ 2" }, pramukh: { en: "Dinesh CK Palya", kn: "ದಿನೇಶ್ c k ಪಾಳ್ಯ" }, sangh: { en: "Anganwadi", kn: "ಅಂಗನವಾಡಿ" } },
        { no: 3, name: { en: "Kalkere 1", kn: "ಕಲ್ಕೆರೆ 1" }, pramukh: { en: "Madan", kn: "ಮದನ್" }, sangh: { en: "Lake Area", kn: "ಕೆರೆ ಏರಿಯಾ" } },
        { no: 4, name: { en: "Kalkere 2", kn: "ಕಲ್ಕೆರೆ 2" }, pramukh: { en: "Dikshith", kn: "ದೀಕ್ಷಿತ್" }, sangh: { en: "Near PG", kn: "PG ಹತ್ತಿರ" } },
        { no: 5, name: { en: "Begihalli", kn: "ಬೇಗಿಹಳ್ಳಿ" }, pramukh: { en: "Sudarshan", kn: "ಸುದರ್ಶನ್" }, sangh: { en: "Lakshmi Temple", kn: "ಲಕ್ಷ್ಮಿ ದೇವಾಲಯ" } },
        { no: 6, name: { en: "Koppa Gate", kn: "ಕೊಪ್ಪ ಗೇಟ್" }, pramukh: { en: "Hemanth (Strides)", kn: "ಹೇಮಂತ್ strides" }, sangh: { en: "Govt. School", kn: "ಸರ್ಕಾರಿ ಶಾಲೆ" } },
        { no: 7, name: { en: "Lakshmipura", kn: "ಲಕ್ಷೀಪುರ" }, pramukh: { en: "Nagappa", kn: "ನಾಗಣ್ಣ" }, sangh: { en: "Play Ground", kn: "ಆಟದ ಮೈದಾನ" } },
      ],
    },
    {
      id: 6,
      name: { en: "Venugopala", kn: "ವೇಣುಗೋಪಾಲ" },
      palakaru: {
        en: "Shri Prashanth / Shri Nagesh K.H.",
        kn: "ಶ್ರೀ ಪ್ರಶಾಂತ್ / ಶ್ರೀ ನಾಗೇಶ್ ಕೆ.ಹೆಚ್",
      },
      phones: ["9620573094", "9036713306"],
      branches: [
        {
          type: "shakha",
          name: { en: "Bhairalingeshwara Shakha", kn: "ಭೈರಲಿಂಗೇಶ್ವರ ಶಾಖಾ" },
          resp: {
            en: "Shri Nagaraj Doddamani — 8431796194, Shri Prakash",
            kn: "ಶ್ರೀ ನಾಗರಾಜ್ ದೊಡ್ಡಮನಿ – 8431796194, ಶ್ರೀ ಪ್ರಕಾಶ್",
          },
        },
        {
          type: "shakha",
          name: { en: "Masti Shakha", kn: "ಮಾಸ್ತಿ ಶಾಖಾ" },
          resp: {
            en: "Shri Mohan — 9886315005",
            kn: "ಶ್ರೀ ಮೋಹನ್ – 9886315005",
          },
        },
        {
          type: "milan",
          name: { en: "Nisarga Milan", kn: "ನಿಸರ್ಗ ಮಿಲನ್" },
          resp: {
            en: "Shri Avinash Joshi — 8600022665, Shri Phadnavis",
            kn: "ಶ್ರೀ ಅವಿನಾಶ್ ಜೋಷಿ – 8600022665, ಶ್ರೀ ಫಡ್ನವೀಸ್",
          },
        },
        {
          type: "milan",
          name: { en: "Kuntal Reddy Layout Milan", kn: "ಕುಂಟಲರೆಡ್ಡಿ ಲೇಔಟ್ ಮಿಲನ್" },
          resp: {
            en: "Shri Shivam Tiwari",
            kn: "ಶ್ರೀ ಶಿವಂ ತಿವಾರಿ",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Itina Nagar", kn: "ಇಟಿನ ನಗರ" }, pramukh: { en: "Rai G", kn: "ರಾಯ್ ಜಿ" }, sangh: { en: "Shivashakti Dhama", kn: "ಶಿವಶಕ್ತಿ ಧಾಮ" } },
        { no: 2, name: { en: "Shivanagar", kn: "ಶಿವನಗರ" }, pramukh: { en: "Prakash Kotagi", kn: "ಪ್ರಕಾಶ್ ಕೋಟಗಿ" }, sangh: { en: "Bhairalingeshwara Shakha", kn: "ಬೈರಲಿಂಗೇಶ್ವರ ಶಾಖೆ" }, mapLink: "https://maps.app.goo.gl/v96a5NmAdFEJjWBg9" },
        { no: 3, name: { en: "Kuntlareddy Layout", kn: "ಕುಂಟ್ಲರೆಡ್ದಿ ಲೇಔಟ್" }, pramukh: { en: "Kote Rangappa", kn: "ಕೋಟೆ ರಂಗಪ್ಪ" }, sangh: { en: "Krishna Temple", kn: "ಕೃಷ್ಣ ದೇವಾಲಯ" }, mapLink: "https://maps.app.goo.gl/GX1oSKyc2Nagj2D9A" },
        { no: 4, name: { en: "Gangotri School", kn: "ಗಂಗೋತ್ರಿ ಸ್ಕೂಲ್" }, pramukh: { en: "Rudragowda", kn: "ರುದ್ರಗೌಡ" }, sangh: { en: "Gangotri School", kn: "ಗಂಗೋತ್ರಿ ಸ್ಕೂಲ್" }, mapLink: "https://maps.app.goo.gl/yD34Ee4tuWaUZmP47" },
        { no: 5, name: { en: "Delphi Residential Area", kn: "ಡೆಲ್ಪಿ ರೆಸಿಡೆನ್ಸಿಯಲ್ ಏರಿಯ" }, pramukh: { en: "Uday", kn: "ಉದಯ್" }, sangh: { en: "Gangotri School", kn: "ಗಂಗೋತ್ರಿ ಸ್ಕೂಲ್" } },
        { no: 6, name: { en: "Navodaya School Area", kn: "ನವೋದಯ ಸ್ಕೂಲ್ ಏರಿಯ" }, pramukh: { en: "Mallappa Natikar", kn: "ಮಲ್ಲಪ್ಪ ನಾಟಿಕರ್" }, sangh: { en: "Navodaya School", kn: "ನವೋದಯ ಸ್ಕೂಲ್" } },
        { no: 7, name: { en: "Brindavan School Area", kn: "ಬೃಂದಾವನ ಸ್ಕೂಲ್ ಏರಿಯ" }, pramukh: { en: "Lakshmikanth", kn: "ಲಕ್ಷ್ಮೀಕಾಂತ್" }, sangh: { en: "Brindavan School Ground", kn: "ಬೃಂದಾವನ ಶಾಲಾ ಮೈದಾನ" }, mapLink: "https://maps.app.goo.gl/g2qi1dJEyhSpeNtY9" },
        { no: 8, name: { en: "Harappanahalli", kn: "ಹರಪ್ಪನಹಳ್ಳಿ" }, pramukh: { en: "Someshekar", kn: "ಸೋಮಶೇಖರ್" }, sangh: { en: "Brindavan School Ground", kn: "ಬೃಂದಾವನ ಶಾಲಾ ಮೈದಾನ" } },
        { no: 9, name: { en: "Nisarga, Nandanavana", kn: "ನಿಸರ್ಗ,ನಂದನವನ" }, pramukh: { en: "Fadanavis", kn: "ಫಡನವೀಸ್" }, sangh: { en: "VLN Ground", kn: "VLN ground" }, mapLink: "https://maps.app.goo.gl/AZB1f9zMiKBXLFyL8" },
      ],
    },
    {
      id: 7,
      name: { en: "Someshwara", kn: "ಸೋಮೇಶ್ವರ" },
      palakaru: {
        en: "Shri Nagaraj Poojari / Shri Harish",
        kn: "ಶ್ರೀ ನಾಗರಾಜ್ ಪೂಜಾರಿ / ಶ್ರೀ ಹರೀಶ್",
      },
      phones: ["7411002694", "9845788931"],
      branches: [
        {
          type: "shakha",
          name: { en: "Madhumitra Layout Shakha", kn: "ಮಧುಮಿತ್ರ ಲೇಔಟ್ ಶಾಖಾ" },
          resp: {
            en: "Shri Appasaab Hareka — 9740620445, Shri Basavaraj — 9845691152",
            kn: "ಶ್ರೀ ಅಪ್ಪಾಸಾಬ್ ಹರೇಕ – 9740620445, ಶ್ರೀ ಬಸವರಾಜ್ – 9845691152",
          },
        },
        {
          type: "shakha",
          name: { en: "Golden Nest Shakha", kn: "ಗೋಲ್ಡನ್ ನೆಸ್ಟ್ ಶಾಖಾ" },
          resp: {
            en: "Shri Kedar — 8147546827, Shri Shankar — 8904881126",
            kn: "ಶ್ರೀ ಕೇದಾರ್ – 8147546827, ಶ್ರೀ ಶಂಕರ್ – 8904881126",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Krupanidhi School Area", kn: "ಕೃಪಾನಿಧಿ ಸ್ಕೂಲ್ ಏರಿಯಾ" }, pramukh: { en: "Lokesh Master", kn: "ಲೋಕೇಶ್ ಮಾಸ್ಟರ್" }, sangh: { en: "Krupanidhi School", kn: "ಕೃಪಾನಿಧಿ ಸ್ಕೂಲ್" } },
        { no: 2, name: { en: "Vinayak Nagar", kn: "ವಿನಾಯಕ್ ನಗರ" }, pramukh: { en: "Gold Merchant", kn: "ಗೋಲ್ಡ ಮರಚೆಂಟ್" }, sangh: { en: "Babu's House", kn: "ಬಾಬು ಮನೆ" } },
        { no: 3, name: { en: "Post Office Area", kn: "ಪೋಸ್ಟ ಆಫೀಸ್ ಏರಿಯಾ" }, pramukh: { en: "Arun Pavi Computers", kn: "ಅರುಣ್ ಪವಿ ಕಂಪ್ಯೂಟರ್" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" } },
        { no: 4, name: { en: "Madhumitra Layout", kn: "ಮಧುಮಿತ್ರ ಲೇಔಟ್" }, pramukh: { en: "Jagadish Patil", kn: "ಜಗದೀಶ್ ಪಾಟೀಲ್" }, sangh: { en: "Madhumitra Layout", kn: "ಮಧುಮಿತ್ರ ಲೇಔಟ್" } },
        { no: 5, name: { en: "Bandenallasandra", kn: "ಬಂಡೆನಲ್ಲಸಂದ್ರ" }, pramukh: { en: "Jaswant (Jaji)", kn: "ಜಸ್ವಂತ್(ಜಾಜಿ)" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" } },
        { no: 6, name: { en: "Government Hostel Area", kn: "ಗೌರ್ಮಂಟ್ ಹಾಸ್ಟೆಲ್ ಏರಿಯಾ" }, pramukh: { en: "Lingamurthy", kn: "ಲಿಂಗಮೂರ್ತಿ" }, sangh: { en: "Eshwara Temple", kn: "ಈಶ್ವರ ದೇವಾಲಯ" } },
        { no: 7, name: { en: "Nithyananda School Backside Area", kn: "ನಿತ್ಯಾನಂದ ಸ್ಕೂಲ್ ಬ್ಯಾಕ್ ಸೈಡ್ ಏರಿಯಾ" }, pramukh: { en: "Rudresh", kn: "ರುದ್ರೇಶ್" }, sangh: { en: "Nithyananda School", kn: "ನಿತ್ಯಾನಂದ ಶಾಲೆ" } },
        { no: 8, name: { en: "Modinagar", kn: "ಮೋದಿನಗರ" }, pramukh: { en: "Sharanu", kn: "ಶರಣು" }, sangh: { en: "Girish's House", kn: "ಗಿರೀಶ್ ಮನೆ" } },
      ],
    },
    {
      id: 8,
      name: { en: "Yarandahalli", kn: "ಯರಂಡಹಳ್ಳಿ" },
      palakaru: { en: "Shri Vishwanath", kn: "ಶ್ರೀ ವಿಶ್ವನಾಥ್" },
      phones: ["9739141376"],
      branches: [
        {
          type: "shakha",
          name: { en: "Radha Krishna Shakha", kn: "ರಾಧಾ ಕೃಷ್ಣ ಶಾಖಾ" },
          resp: {
            en: "Shri Vijay — 7411748881, Shri Madhu — 8660831992",
            kn: "ಶ್ರೀ ವಿಜಯ್ – 7411748881, ಶ್ರೀ ಮಧು – 8660831992",
          },
        },
        {
          type: "shakha",
          name: { en: "Chamundeshwari Shakha", kn: "ಚಾಮುಂಡೇಶ್ವರಿ ಶಾಖಾ" },
          resp: {
            en: "Shri Harish, Shri Jattappa — 9008875545",
            kn: "ಶ್ರೀ ಹರೀಶ್, ಶ್ರೀ ಜಟ್ಟಪ್ಪ – 9008875545",
          },
        },
        {
          type: "milan",
          name: { en: "Anjaneya Milan", kn: "ಅಂಜನೇಯ ಮಿಲನ್" },
          resp: {
            en: "Shri Amit — 9590662800",
            kn: "ಶ್ರೀ ಅಮಿತ್ – 9590662800",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Kachanayakanahalli Dinne", kn: "ಕಾಚನಾಯಕನಹಳ್ಳಿ ದಿಣ್ಣೆ" }, pramukh: { en: "Paramesh", kn: "ಪರಮೇಶ್" }, sangh: { en: "Chamundeshwari Temple", kn: "ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಾಲಯ" }, mapLink: "https://maps.app.goo.gl/5XrKxLVj6k8kkmc5A" },
        { no: 2, name: { en: "Kachanayakanahalli Eshwara Temple", kn: "ಕಾಚನಾಯಕನಹಳ್ಳಿ ಈಶ್ವರ ದೇವಾಲಯ" }, pramukh: { en: "Rajashekhar", kn: "ರಾಜಶೇಖರ" }, sangh: { en: "Temple Premises", kn: "ದೇವಾಲಯ ಆವರಣ" }, mapLink: "https://maps.app.goo.gl/84AWeZP8BVPyrptU9?g_st=aw" },
        { no: 3, name: { en: "Kachanayakanahalli Kaivara Temple", kn: "ಕಾಚನಾಯಕನಹಳ್ಳಿ ಕೈವಾರ ದೇವಾಲಯ" }, pramukh: { en: "Sandeep", kn: "ಸಂದೀಪ್" }, sangh: { en: "Temple Premises", kn: "ದೇವಾಲಯ ಆವರಣ" }, mapLink: "https://maps.app.goo.gl/84AWeZP8BVPyrptU9?g_st=aw" },
        { no: 4, name: { en: "Woodberry", kn: "ವುಡ್ ಬೆರಿ" }, pramukh: { en: "Kannappa", kn: "ಕಣ್ಣಪ್ಪ" }, sangh: { en: "Play Ground", kn: "ಆಟದ ಮೈದಾನ" }, mapLink: "https://maps.app.goo.gl/Dn3nnmGDBM3w7Cyp9?g_st=aw" },
        { no: 5, name: { en: "Icon Layout", kn: "ಐಕಾನ್ ಲೇಔಟ್" }, pramukh: { en: "Thirumalesh", kn: "ತಿರುಮಲೇಶ್" }, sangh: { en: "Basketball Court", kn: "ಬ್ಯಾಸ್ಕೆಟ್ ಬಾಲ್ ಅಂಗಣ" }, mapLink: "https://maps.app.goo.gl/1wRfLcprSKe5sg7T7" },
        { no: 6, name: { en: "NR Layout", kn: "ಎನ್ ಆರ್ ಲೇಔಟ್" }, pramukh: { en: "Jattappa", kn: "ಜಟ್ಟಪ್ಪ" }, sangh: { en: "Play Ground", kn: "ಆಟದ ಮೈದಾನ" }, mapLink: "https://maps.app.goo.gl/DZXTxzjTM7Y3zq6n7?g_st=aw" },
        { no: 7, name: { en: "Kailasana Halli", kn: "ಕ್ಯಾಲಾಸನ ಹಳ್ಳಿ" }, pramukh: { en: "Duryodhana", kn: "ದುರ್ಯೋಧನ" }, sangh: { en: "Layout", kn: "ಲೇಔಟ್" }, mapLink: "https://maps.app.goo.gl/DKxqk3piRq8zZhoc8?g_st=aw" },
        { no: 8, name: { en: "Yarandahalli - Anganwadi", kn: "ಯರಂಡಹಳ್ಳಿ - ಅಂಗನವಾಡಿ" }, pramukh: { en: "Jayan", kn: "ಜಯನ್" }, sangh: { en: "NR Mart", kn: "ಎನ್ ಆರ್ ಮಾರ್ಟ್" }, mapLink: "https://maps.app.goo.gl/cRurdZRA1gaqb5pC6?g_st=aw" },
        { no: 9, name: { en: "Yarandahalli - Streeshakti Bhavan", kn: "ಯರಂಡಹಳ್ಳಿ - ಸ್ತ್ರೀಶಕ್ತಿ ಭನ" }, pramukh: { en: "Lakshmikanth", kn: "ಲಕ್ಷ್ಮೀಕಾಂತ" }, sangh: { en: "RK Township", kn: "ಆರ್ ಕೆ ಟೌನ್ ಶಿಪ್" }, mapLink: "https://maps.app.goo.gl/4mHUU36rNtkjfGGp9?g_st=aw" },
        { no: 10, name: { en: "Shri Rampura", kn: "ಶ್ರೀ ರಾಂಪುರ" }, pramukh: { en: "Karunakara", kn: "ಕರುಣಾಕರ" }, sangh: { en: "Anjaneya Temple", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ" }, mapLink: "https://maps.app.goo.gl/uWZCBXMsDciUQ2L26?g_st=aw" },
      ],
    },
    {
      id: 9,
      name: { en: "Hennagara", kn: "ಹೆನ್ನಗರ" },
      palakaru: {
        en: "Shri Girish / Shri Krishna Sahu",
        kn: "ಶ್ರೀ ಗಿರೀಶ್ / ಶ್ರೀ ಕೃಷ್ಣ ಸಾಹು",
      },
      phones: ["9964124133", "7204486472"],
      branches: [
        {
          type: "milan",
          name: { en: "Icon Layout Milan", kn: "ಐಕಾನ್ ಲೇಔಟ್ ಮಿಲನ್" },
          resp: {
            en: "Shri Kiran, Shri Nanjundappa",
            kn: "ಶ್ರೀ ಕಿರಣ್, ಶ್ರೀ ನಂಜುಂಡಪ್ಪ",
          },
        },
        {
          type: "milan",
          name: { en: "Nemmadi Milan", kn: "ನೆಮ್ಮದಿ ಮಿಲನ್" },
          resp: { en: "Shri Shivanand", kn: "ಶ್ರೀ ಶಿವಾನಂದ್" },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Hennagar Panchayat", kn: "ಹೆನ್ನಾಗರ ಪಂಚಾಯ್ತಿ" }, pramukh: { en: "Someshekar", kn: "ಸೋಮಶೇಖರ" }, sangh: { en: "Anjaneya Temple Premises", kn: "ಆಂಜನೇಯ ದೇವಾಲಯ ಆವರಣ" } },
        { no: 2, name: { en: "Hennagar Dinne", kn: "ಹೆನ್ನಾಗರ ದಿಣ್ಣೆ" }, pramukh: { en: "Jagadish", kn: "ಜಗದೀಶ್" }, sangh: { en: "Play Ground", kn: "ಆಟದ ಮೈದಾನ" } },
        { no: 3, name: { en: "Rajapura", kn: "ರಾಜಾಪುರ" }, pramukh: { en: "Mahesh", kn: "ಮಹೇಶ್" }, sangh: { en: "Govt. School Premises", kn: "ಸರ್ಕಾರಿ ಶಾಲಾ ಆವರಣ" } },
        { no: 4, name: { en: "Mastenahalli", kn: "ಮಾಸ್ತೇನಹಳ್ಳಿ" }, pramukh: { en: "Manjunath", kn: "ಮಂಜುನಾಥ" }, sangh: { en: "Nemmadi Layout", kn: "ನೆಮ್ಮದಿ ಲೇಔಟ್" } },
        { no: 5, name: { en: "Mastenahalli Dinne", kn: "ಮಾಸ್ತೇನಹಳ್ಳಿ ದಿಣ್ಣೆ" }, pramukh: { en: "Deen Dayal Ji", kn: "ದೀನ್ ದಯಾಳ್ ಜಿ" }, sangh: { en: "DLF Ground", kn: "DLF ಮೈದಾನ" } },
        { no: 6, name: { en: "Ramakrishnapura", kn: "ರಾಮಕೃಷ್ಣಾಪುರ" }, pramukh: { en: "Ravi", kn: "ರವಿ" }, sangh: { en: "Venkateshwara Temple Ground", kn: "ವೆಂಕಟೇಶ್ವರ ದೇವಾಲಯ ಮೈದಾನ" } },
        { no: 7, name: { en: "Suryanagar 2nd Phase", kn: "ಸೂರ್ಯನಗರ ೨ ನೇ ಹಂತ" }, pramukh: { en: "Harish", kn: "ಹರೀಶ್" }, sangh: { en: "Layout Ground", kn: "ಲೇಔಟ್ ಮೈದಾನ" } },
        { no: 8, name: { en: "Hinnakki", kn: "ಹಿನ್ನಕ್ಕಿ" }, pramukh: { en: "Shreyas", kn: "ಶ್ರೇಯಸ್" }, sangh: { en: "Suryanagar Play Ground", kn: "ಸೂರ್ಯನಗರ ಆಟದ ಮೈದಾನ" } },
        { no: 9, name: { en: "H. Hosahalli", kn: "ಎಚ್ ಹೊಸಹಳ್ಳಿ" }, pramukh: { en: "Sunil", kn: "ಸುನಿಲ್" }, sangh: { en: "Govt. School", kn: "ಸರ್ಕಾರಿ ಶಾಲೆ" } },
      ],
    },
    {
      id: 10,
      name: { en: "Hulimangala", kn: "ಹುಲಿಮಂಗಲ" },
      palakaru: {
        en: "Shri Shivaputra / Shri Pradeep",
        kn: "ಶ್ರೀ ಶಿವಪುತ್ರ / ಶ್ರೀ ಪ್ರದೀಪ್",
      },
      phones: ["9902594559", "9164877454"],
      branches: [
        {
          type: "shakha",
          name: { en: "Matrudhama Shakha", kn: "ಮಾತೃಧಾಮ ಶಾಖಾ" },
          resp: {
            en: "Shri Abhishek, Shri Shreyas",
            kn: "ಶ್ರೀ ಅಭಿಷೇಕ್, ಶ್ರೀ ಶ್ರೇಯಸ್",
          },
        },
      ],
      upavastis: [
        { no: 1, name: { en: "Hulimangala Dinne", kn: "ಹುಲಿಮಂಗಲ ದಿಣ್ಣೆ" }, pramukh: { en: "Saugandha", kn: "ಸೌಗಂಧ" }, sangh: { en: "—", kn: "—" } },
        { no: 2, name: { en: "Hulimangala", kn: "ಹುಲಿಮಂಗಲ" }, pramukh: { en: "Anand", kn: "ಆನಂದ್" }, sangh: { en: "—", kn: "—" } },
        { no: 3, name: { en: "S. Bingipura", kn: "ಎಸ್ ಬಿಂಗಿಪುರ" }, pramukh: { en: "Suja Ram", kn: "ಸುಜಾ ರಾಮ್" }, sangh: { en: "—", kn: "—" } },
        { no: 4, name: { en: "Koppa", kn: "ಕೊಪ್ಪ" }, pramukh: { en: "Shankar", kn: "ಶಂಕರ್" }, sangh: { en: "—", kn: "—" } },
        { no: 5, name: { en: "Vabasandra", kn: "ವಾಬಸಂದ್ರ" }, pramukh: { en: "Loshith", kn: "ಲೋಷಿತ" }, sangh: { en: "—", kn: "—" } },
        { no: 6, name: { en: "Shikari Palya 1", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೧" }, pramukh: { en: "Dinesh", kn: "ದಿನೇಶ್" }, sangh: { en: "—", kn: "—" } },
        { no: 7, name: { en: "Shikari Palya 2", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೨" }, pramukh: { en: "Dushyanth", kn: "ದುಷ್ಯoತ್" }, sangh: { en: "—", kn: "—" } },
        { no: 8, name: { en: "Shikari Palya 3", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೩" }, pramukh: { en: "Anand Rao", kn: "ಆನಂದ್ ರಾವ್" }, sangh: { en: "—", kn: "—" } },
        { no: 9, name: { en: "Shikari Palya 4", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೪" }, pramukh: { en: "Sudhesh", kn: "ಸುಧೇಶ" }, sangh: { en: "—", kn: "—" } },
        { no: 10, name: { en: "Shikari Palya 5", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೫" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
        { no: 11, name: { en: "Shikari Palya 6", kn: "ಶಿಕಾರಿ ಪಾಳ್ಯ ೬" }, pramukh: { en: "—", kn: "—" }, sangh: { en: "—", kn: "—" } },
      ],
    },
  ];

  const SUMMARY = [
    { id: 1, loc: { en: "Pillaganahalli", kn: "ಪಿಲ್ಲಗನಹಳ್ಳಿ" }, s: 1, m: 0 },
    { id: 2, loc: { en: "Weavers Colony", kn: "ವೀವರ್ಸ್ ಕಾಲೋನಿ" }, s: 1, m: 0 },
    { id: 3, loc: { en: "Bhuthanahalli", kn: "ಬೂತಾನಹಳ್ಳಿ" }, s: 0, m: 0 },
    { id: 4, loc: { en: "Bannerughatta", kn: "ಬನ್ನೇರುಘಟ್ಟ" }, s: 3, m: 0 },
    { id: 5, loc: { en: "Mantapa", kn: "ಮಂಟಪ" }, s: 1, m: 0 },
    { id: 6, loc: { en: "Venugopala", kn: "ವೇಣುಗೋಪಾಲ" }, s: 2, m: 2 },
    { id: 7, loc: { en: "Someshwara", kn: "ಸೋಮೇಶ್ವರ" }, s: 2, m: 0 },
    { id: 8, loc: { en: "Yarandahalli", kn: "ಯರಂಡಹಳ್ಳಿ" }, s: 2, m: 1 },
    { id: 9, loc: { en: "Hennagara", kn: "ಹೆನ್ನಗರ" }, s: 0, m: 2 },
    { id: 10, loc: { en: "Hulimangala", kn: "ಹುಲಿಮಂಗಲ" }, s: 1, m: 0 },
  ];

  // Derive Upa Vasti count for each summary row from VASATIS data (single source of truth)
  SUMMARY.forEach((row) => {
    const v = VASATIS.find((x) => x.id === row.id);
    row.u = v && v.upavastis ? v.upavastis.length : 0;
  });

  const STATS = [
    { key: "vasati", value: 10, icon: "home" },
    { key: "shakha", value: 13, icon: "flag" },
    { key: "milan", value: 5, icon: "users" },
    { key: "total", value: 18, icon: "grid" },
    { key: "palakaru", value: 16, icon: "shield" },
    { key: "karyakartaru", value: 31, icon: "star" },
  ];

  // ---------- I18N ----------
  const I18N = {
    en: {
      brand: "RSS Jigani",
      hero_title: "RSS Jigani",
      hero_sub: "ರಾಷ್ಟ್ರೀಯ ಸ್ವಯಂಸೇವಕ ಸಂಘ",
      hero_tag: "Jigani",
      stats_title: "Statistics at a Glance",
      stats_sub: "Live snapshot from official Vasati records",
      vasati_title: "Vasati Directory",
      vasati_sub: "Search by Vasati, Palakaru, phone, Shakha, Milan or responsibility",
      search_placeholder: "Search Vasati, Palakaru, phone…",
      no_results: "No matching records found.",
      summary_title: "Shakha & Milan Summary",
      summary_sub: "Location-wise Shakha and Milan distribution",
      col_location: "Location",
      col_shakha: "Shakha",
      col_milan: "Milan",
      col_total: "Total",
      total_row: "Total",
      footer_note: "Designed for Internal Use",
      details: "View Details",
      hide_details: "Hide Details",
      lbl_palakaru: "Palakaru",
      lbl_phone: "Phone",
      lbl_branches: "Shakha / Milan",
      lbl_none: "No Shakha or Milan mapped",
      call: "Call",
      whatsapp: "WhatsApp",
      stat_vasati: "Total Vasati",
      stat_shakha: "Total Shakha",
      stat_milan: "Total Milan",
      stat_total: "Shakha + Milan",
      stat_palakaru: "Vasati Palakaru",
      stat_karyakartaru: "Karyakartaru",
      upavasti_btn: "Upa Vasti",
      upavasti_modal_title: "Upa Vasti List",
      upavasti_none: "No Upa Vasti records mapped for this Vasati.",
      col_no: "No.",
      col_upavasti: "Upa Vasti",
      col_pramukh: "Upa Vasti Pramukh",
      col_sangh: "Sangasthana",
      col_map: "Map",
      map_link: "Open Map",
      close: "Close",
      col_upavasti_count: "Upa Vasti",
    },
    kn: {
      brand: "ಆರ್‌ಎಸ್‌ಎಸ್ ಜಿಗಣಿ",
      hero_title: "ಆರ್‌ಎಸ್‌ಎಸ್ ಜಿಗಣಿ",
      hero_sub: "ರಾಷ್ಟ್ರೀಯ ಸ್ವಯಂಸೇವಕ ಸಂಘ",
      hero_tag: "ಜಿಗಣಿ",
      stats_title: "ಸಂಖ್ಯಾ ಸಂಗ್ರಹ",
      stats_sub: "ಅಧಿಕೃತ ವಸತಿ ದಾಖಲೆಗಳ ನೇರ ಚಿತ್ರಣ",
      vasati_title: "ವಸತಿ ಡೈರೆಕ್ಟರಿ",
      vasati_sub: "ವಸತಿ, ಪಾಲಕರು, ದೂರವಾಣಿ, ಶಾಖೆ, ಮಿಲನ್ ಅಥವಾ ಜವಾಬ್ದಾರಿಯಿಂದ ಹುಡುಕಿ",
      search_placeholder: "ವಸತಿ, ಪಾಲಕರು, ದೂರವಾಣಿ ಹುಡುಕಿ…",
      no_results: "ಯಾವುದೇ ಫಲಿತಾಂಶಗಳಿಲ್ಲ.",
      summary_title: "ಶಾಖೆ ಮತ್ತು ಮಿಲನ್ ಸಾರಾಂಶ",
      summary_sub: "ಸ್ಥಳವಾರು ಶಾಖೆ ಮತ್ತು ಮಿಲನ್ ವಿಭಾಗ",
      col_location: "ಸ್ಥಳ",
      col_shakha: "ಶಾಖೆ",
      col_milan: "ಮಿಲನ್",
      col_total: "ಒಟ್ಟು",
      total_row: "ಒಟ್ಟು",
      footer_note: "ಆಂತರಿಕ ಬಳಕೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",
      details: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      hide_details: "ವಿವರಗಳನ್ನು ಮುಚ್ಚಿ",
      lbl_palakaru: "ಪಾಲಕರು",
      lbl_phone: "ದೂರವಾಣಿ",
      lbl_branches: "ಶಾಖೆ / ಮಿಲನ್",
      lbl_none: "ಯಾವುದೇ ಶಾಖೆ ಅಥವಾ ಮಿಲನ್ ಇಲ್ಲ",
      call: "ಕರೆ ಮಾಡಿ",
      whatsapp: "ವಾಟ್ಸಾಪ್",
      stat_vasati: "ಒಟ್ಟು ವಸತಿ",
      stat_shakha: "ಒಟ್ಟು ಶಾಖೆ",
      stat_milan: "ಒಟ್ಟು ಮಿಲನ್",
      stat_total: "ಶಾಖೆ + ಮಿಲನ್",
      stat_palakaru: "ವಸತಿ ಪಾಲಕರು",
      stat_karyakartaru: "ಕಾರ್ಯಕರ್ತರು",
      upavasti_btn: "ಉಪವಸತಿ",
      upavasti_modal_title: "ಉಪವಸತಿ ಪಟ್ಟಿ",
      upavasti_none: "ಈ ವಸತಿಗೆ ಯಾವುದೇ ಉಪವಸತಿ ದಾಖಲೆಗಳಿಲ್ಲ.",
      col_no: "ಕ್ರ.ಸಂ",
      col_upavasti: "ಉಪವಸತಿ",
      col_pramukh: "ಉಪವಸತಿ ಪ್ರಮುಖ",
      col_sangh: "ಸಂಘಸ್ಥಾನ",
      col_map: "ಮ್ಯಾಪ್",
      map_link: "ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ",
      close: "ಮುಚ್ಚಿ",
      col_upavasti_count: "ಉಪವಸತಿ",
    },
  };

  const ICONS = {
    home:'<svg viewBox="0 0 24 24"><path d="M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3z"/></svg>',
    flag:'<svg viewBox="0 0 24 24"><path d="M5 21V4h9l1 2h5v10h-7l-1-2H7v7z"/></svg>',
    users:'<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C16.19 14 17 15.5 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    grid:'<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/></svg>',
    shield:'<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"/></svg>',
    star:'<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
    pin:'<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>',
    call:'<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02z"/></svg>',
    wa:'<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.55 4.13 1.6 5.93L2 22l4.32-1.13a9.87 9.87 0 004.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.83 14.02c-.25.7-1.44 1.34-1.99 1.4-.51.06-1.15.08-1.86-.12-.43-.13-.98-.31-1.68-.62-2.96-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37s.4 0 .57.01c.19.01.44-.07.68.52.25.6.85 2.06.93 2.21.07.15.13.32.03.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.53-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.09 1.32 2.39 1.47.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.29.15.49.22.56.35.07.13.07.74-.17 1.44z"/></svg>',
    chev:'<svg viewBox="0 0 24 24" class="chev"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    list:'<svg viewBox="0 0 24 24"><path d="M4 6h2v2H4zm4 0h12v2H8zM4 11h2v2H4zm4 0h12v2H8zM4 16h2v2H4zm4 0h12v2H8z"/></svg>',
    close:'<svg viewBox="0 0 24 24"><path d="M6.4 4.98L4.98 6.4 10.59 12l-5.6 5.6 1.4 1.4L12 13.4l5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6-1.4-1.4L12 10.59z"/></svg>',
    mapPin:'<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>',
  };

  // ---------- LANGUAGE ----------
  let currentLang = "en";

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    // Toggle UI
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelector(".lang-toggle").dataset.active = lang;
    // Replace all i18n text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr"); // "attr:key"
      const [attr, key] = spec.split(":");
      if (I18N[lang][key]) el.setAttribute(attr, I18N[lang][key]);
    });
    // Re-render dynamic parts
    renderStats();
    renderVasatis();
    renderSummary();
  }

  // ---------- RENDER STATS ----------
  function renderStats() {
    const grid = document.getElementById("statsGrid");
    grid.innerHTML = STATS.map(
      (s, i) => `
      <div class="stat-card" style="transition-delay:${i * 70}ms">
        <div class="stat-icon">${ICONS[s.icon]}</div>
        <div class="stat-num" data-target="${s.value}">0</div>
        <div class="stat-label">${I18N[currentLang]["stat_" + s.key]}</div>
      </div>`
    ).join("");
    observeIn(grid.querySelectorAll(".stat-card"));
  }

  function countUp(el) {
    const target = +el.dataset.target;
    const dur = 1200;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = val;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  // ---------- RENDER VASATIS ----------
  function renderVasatis(filter = "") {
    const grid = document.getElementById("vasatiGrid");
    const q = filter.trim().toLowerCase();
    const results = VASATIS.filter((v) => {
      if (!q) return true;
      const hay = [
        v.name.en, v.name.kn,
        v.palakaru.en, v.palakaru.kn,
        v.phones.join(" "),
        ...v.branches.flatMap((b) => [b.name.en, b.name.kn, b.resp.en, b.resp.kn, b.type]),
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });

    document.getElementById("noResults").hidden = results.length > 0;

    const t = I18N[currentLang];
    grid.innerHTML = results.map((v, i) => {
      const branches = v.branches.length
        ? `<div class="branches">${v.branches
            .map(
              (b) => `
              <div class="branch">
                <div class="branch-title">${b.name[currentLang]} <small style="opacity:.6;font-weight:500">· ${b.type === "shakha" ? (currentLang==='kn'?'ಶಾಖಾ':'Shakha') : (currentLang==='kn'?'ಮಿಲನ್':'Milan')}</small></div>
                <div class="branch-resp">${b.resp[currentLang]}</div>
              </div>`
            )
            .join("")}</div>`
        : `<p style="color:var(--text-muted);font-style:italic;margin-top:10px">${t.lbl_none}</p>`;

      const primaryPhone = v.phones[0];
      const actionBtns = v.phones
        .map(
          (p) => `
        <a class="btn btn-call" href="tel:${p}" aria-label="Call ${p}">${ICONS.call}<span>${t.call}</span></a>
        <a class="btn btn-wa" href="https://wa.me/91${p}" target="_blank" rel="noopener" aria-label="WhatsApp ${p}">${ICONS.wa}<span>${t.whatsapp}</span></a>`
        )
        .join("");
      const upaCount = v.upavastis ? v.upavastis.length : 0;

      return `
      <article class="vasati-card" data-id="${v.id}" style="transition-delay:${i * 60}ms">
        <div class="vasati-head">
          <div class="pin">${ICONS.pin}</div>
          <h3 class="vasati-name">${v.name[currentLang]}</h3>
        </div>
        <div class="vasati-meta">
          <span><b>${t.lbl_palakaru}:</b> ${v.palakaru[currentLang]}</span>
        </div>
        <button class="details-btn" aria-expanded="false">
          <span class="dt-label">${t.details}</span> ${ICONS.chev}
        </button>
        <div class="details-panel">
          <div class="details-inner">
            <div class="detail-row"><div class="detail-label">${t.lbl_palakaru}</div><div class="detail-val">${v.palakaru[currentLang]}</div></div>
            <div class="detail-row"><div class="detail-label">${t.lbl_phone}</div><div class="detail-val">${v.phones.join(" · ")}</div></div>
            <div class="detail-row"><div class="detail-label">${t.lbl_branches}</div><div class="detail-val">${v.branches.length ? v.branches.map(b=>b.name[currentLang]).join(", ") : "—"}</div></div>
            ${branches}
            <div class="action-btns" style="grid-template-columns:repeat(${v.phones.length*2>2?2:2},1fr)">${actionBtns}</div>
            <button class="btn btn-upavasti upavasti-open-btn" type="button" data-vasti-id="${v.id}" aria-haspopup="dialog">
              ${ICONS.list}<span>${t.upavasti_btn}${upaCount ? " (" + upaCount + ")" : ""}</span>
            </button>
          </div>
        </div>
      </article>`;
    }).join("");

    // Wire up accordion + ripple
    grid.querySelectorAll(".vasati-card").forEach((card) => {
      const btn = card.querySelector(".details-btn");
      btn.addEventListener("click", (e) => {
        addRipple(e, btn);
        const isOpen = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        btn.querySelector(".dt-label").textContent = isOpen ? I18N[currentLang].hide_details : I18N[currentLang].details;
      });
      card.querySelectorAll(".btn:not(.upavasti-open-btn)").forEach((b) => {
        b.addEventListener("click", (e) => addRipple(e, b));
      });
    });

    grid.querySelectorAll(".upavasti-open-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        addRipple(e, btn);
        openUpavastiModal(+btn.dataset.vastiId);
      });
    });

    observeIn(grid.querySelectorAll(".vasati-card"));
  }

  // ---------- UPA VASTI MODAL ----------
  function openUpavastiModal(vastiId) {
    const v = VASATIS.find((x) => x.id === vastiId);
    if (!v) return;
    const t = I18N[currentLang];
    const modal = document.getElementById("upavastiModal");
    const list = v.upavastis || [];

    document.getElementById("upavastiModalTitle").textContent = `${t.upavasti_modal_title} — ${v.name[currentLang]}`;

    const body = document.getElementById("upavastiModalBody");
    if (!list.length) {
      body.innerHTML = `<p class="no-results">${t.upavasti_none}</p>`;
    } else {
      body.innerHTML = `
        <div class="table-wrap glass upavasti-table-wrap">
          <table class="summary-table upavasti-table">
            <thead>
              <tr>
                <th>${t.col_no}</th>
                <th>${t.col_upavasti}</th>
                <th>${t.col_pramukh}</th>
                <th>${t.col_sangh}</th>
                <th>${t.col_map}</th>
              </tr>
            </thead>
            <tbody>
              ${list
                .map(
                  (u) => `
                <tr>
                  <td>${u.no}</td>
                  <td>${u.name[currentLang]}</td>
                  <td>${u.pramukh[currentLang]}</td>
                  <td>${u.sangh[currentLang]}</td>
                  <td>${u.mapLink ? `<a class="map-link" href="${u.mapLink}" target="_blank" rel="noopener">${ICONS.mapPin}<span>${t.map_link}</span></a>` : "—"}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>`;
    }

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add("open"));
    document.body.classList.add("modal-lock");
    modal.dataset.vastiId = vastiId;

    lastFocusedEl = document.activeElement;
    const closeBtn = document.getElementById("upavastiModalClose");
    setTimeout(() => closeBtn && closeBtn.focus(), 50);
  }

  let lastFocusedEl = null;

  function closeUpavastiModal() {
    const modal = document.getElementById("upavastiModal");
    modal.classList.remove("open");
    document.body.classList.remove("modal-lock");
    setTimeout(() => {
      modal.hidden = true;
    }, 320);
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
      lastFocusedEl = null;
    }
  }

  function trapModalFocus(e) {
    const modal = document.getElementById("upavastiModal");
    if (modal.hidden || e.key !== "Tab") return;
    const focusables = modal.querySelectorAll(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ---------- RENDER SUMMARY ----------
  function renderSummary() {
    const body = document.getElementById("summaryBody");
    const foot = document.getElementById("summaryFoot");
    let ts = 0, tm = 0, tu = 0;
    body.innerHTML = SUMMARY.map((r) => {
      ts += r.s; tm += r.m; tu += r.u;
      return `<tr>
        <td><button type="button" class="loc-link" data-vasti-id="${r.id}">${r.loc[currentLang]}</button></td>
        <td>${r.s}</td>
        <td>${r.m}</td>
        <td>${r.s + r.m}</td>
        <td>${r.u}</td>
      </tr>`;
    }).join("");
    foot.innerHTML = `<tr>
      <td>${I18N[currentLang].total_row}</td>
      <td>${ts}</td>
      <td>${tm}</td>
      <td>${ts + tm}</td>
      <td>${tu}</td>
    </tr>`;

    body.querySelectorAll(".loc-link").forEach((el) => {
      el.addEventListener("click", () => openVastiInDirectory(+el.dataset.vastiId));
    });
  }

  // Scroll to the Vasti Directory section, open its card, and highlight it
  function openVastiInDirectory(vastiId) {
    const search = document.getElementById("searchInput");
    if (search.value) {
      search.value = "";
      document.getElementById("clearSearch").classList.remove("show");
      renderVasatis("");
    }
    const card = document.querySelector(`.vasati-card[data-id="${vastiId}"]`);
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    if (!card.classList.contains("open")) {
      card.querySelector(".details-btn").click();
    }
    setTimeout(() => {
      card.classList.add("highlight");
      setTimeout(() => card.classList.remove("highlight"), 1800);
    }, 400);
  }

  // ---------- HELPERS ----------
  function addRipple(e, el) {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            const num = en.target.querySelector(".stat-num");
            if (num && !num.dataset.done) {
              num.dataset.done = "1";
              countUp(num);
            }
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.15 })
    : null;

  function observeIn(nodes) {
    if (io) nodes.forEach((n) => io.observe(n));
    else nodes.forEach((n) => n.classList.add("in"));
  }

  // ---------- INIT ----------
  function init() {
    document.getElementById("year").textContent = new Date().getFullYear();

    // Language toggle
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });

    // Search
    const search = document.getElementById("searchInput");
    const clear = document.getElementById("clearSearch");
    let t;
    search.addEventListener("input", (e) => {
      clear.classList.toggle("show", e.target.value.length > 0);
      clearTimeout(t);
      t = setTimeout(() => renderVasatis(e.target.value), 120);
    });
    clear.addEventListener("click", () => {
      search.value = "";
      clear.classList.remove("show");
      renderVasatis("");
      search.focus();
    });

    // Upa Vasti modal close handlers
    const modal = document.getElementById("upavastiModal");
    document.getElementById("upavastiModalClose").addEventListener("click", closeUpavastiModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("modal-backdrop")) closeUpavastiModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeUpavastiModal();
      trapModalFocus(e);
    });

    setLang("en");

    // Hide loader
    setTimeout(() => {
      document.getElementById("loader").classList.add("hide");
    }, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
