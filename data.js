/* =====================================================================
   data.js — এই ফাইলে আপনার সব তথ্য থাকবে। তিনটি অংশ আছে:
     ১) familyData   — বংশলতিকার মূল তালিকা
     ২) siteCredits  — সম্পাদক ও তথ্যদাতাদের তালিকা (ছবিসহ)
     ৩) siteSettings — ফোন/ঠিকানা লুকানোর সুইচ

   ⚠️ গুরুত্বপূর্ণ: নিচের familyData-র নমুনা অংশটি মুছে ফেলে, আপনার আগের
   ফাইল (পুরোনো index.html) থেকে  const familyData = {  থেকে শুরু করে
   শেষের  };  পর্যন্ত পুরোটা কপি করে এখানে বসিয়ে দিন।
   (prune/মেয়ের শাখার নিয়ম আর এখানে লাগবে না — index.html নিজেই সামলায়।)

   প্রতিটি ব্যক্তির জন্য ব্যবহারযোগ্য ফিল্ড:
     name, gender ("male"/"female"), birth, death (জীবিত হলে বাদ দিন),
     education, occupation, phone, address,
     extra (অন্যান্য/অতিরিক্ত তথ্য — আগের "অতিরিক্ত:" ফিল্ডও কাজ করবে),
     photo (ছবির ফাইলের পথ, যেমন "photos/hanif.jpg"),
     children
   ===================================================================== */

/* ---------- ১) মূল তালিকা (নমুনা — আপনার ডেটা দিয়ে বদলান) ---------- */
const familyData = {
  name: "হুনা ফকির",
  birth: "অজানা",
  death: "অজানা",
  gender: "male",
  occupation: "কবিরাজ",
  education: "প্রাতিষ্ঠানিক শিক্ষা অজানা",
  address: "",
  children: [
    {name: "মানিক ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "অজানা", education: "অজানা", address: "অজানা",
      children: [
        {name: "অজানা", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", address: "",},
      ]},    
    {name: "হানিফ ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা",  phone: "অজানা", address: "অজানা",
      children: [
        {name: "সংশের ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
            children: [
              {name: "মকসেদ ফকির", birth: "অজানা", death: "আনুমানিক: 2003", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "",
                children: [
                  {name: "কালাম ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                    children: [
                      {name: "সিরাজুল ইসলাম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                        children: [
                          {name: "সুমাইয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                          {name: "তাসিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                          {name: "তুবা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                        ]
                      },
                      {name: "জাহাঙ্গির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                        children: [
                          {name: "ওমর", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                        ]
                      },
                    ]
                  },
                  {name: "আকাব্বর ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                    children: [
                      {name: "তানভীর", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                      {name: "আয়েশা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                      {name: "👩", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    ]
                  },
                ]},
      ]},
        {name: "আফসর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
            children: [
              {name: "সালাম ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা", অতিরিক্ত: "তিনি বিয়ের আগেই মারা গিয়েছিলেন",},
              {name: "আহমেদ ফকির (নিখুজ)", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",অতিরিক্ত: "তথ্যানুযায়ী তিনি নিখোজ",},
            ]},
        {name: "কুদ্দুস ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
            children: [
              {name: "শামছুদ্দিন (ফটু)", birth: "", death: "২০১৩ (আনু.)", gender: "male", occupation: "কৃষি", education: "প্রাতিষ্ঠানিক শিক্ষা নেই!", phone: "অজানা", address: "পারকাল", 
                  children: [
                  {name: "ছাবিনা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "মাধ্যমিক", phone: "অজানা", address: "",},
                  {name: "লিমা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "মাধ্যমিক", phone: "অজানা", address: "",},
                  {name: "ছামিউল", birth: "", death: "", gender: "male", occupation: "শ্রমিক", education: "প্রাথমিক", phone: "অজানা", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "ছাদেকুল", birth: "", death: "", gender: "male", occupation: "শ্রমিক", education: "মাধ্যমিক", phone: "অজানা", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "ছাদিয়া আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "মাধ্যমিক", phone: "অজানা", address: "",},
                  {name: "সাঈম", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "মাধ্যমিক", phone: "অজানা", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                ]},
              {name: "মোঃ বকুল হোসেন", birth: "৩০ জুন, ১৯৭১", death: "", gender: "male", occupation: "কৃষি", education: "প্রাতিষ্ঠানিক শিক্ষা নেই!", phone: "+8801924421069", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo:"photos/md-bakul-hossain.jpg", 
                  children: [              
                  {name: "মোঃ আমির হামজা", birth: "০১ ফেব্রুয়ারি, ২০০৪", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "স্নাতক পাস (তৃতীয় বর্ষ)", phone: "+8801920823710", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "তাহমিনা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "মাধ্যমিক", phone: "অজানা", address: "",},
                  {name: "আসমাউল হোসনা", birth: "", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "স্নাতক পাস (প্রথম বর্ষ)", phone: "অজানা", address: "",},
                ]},
              {name: "মুঞ্জুরুল", birth: "", death: "", gender: "male", occupation: "কৃষি", education: "প্রাতিষ্ঠানিক শিক্ষা নেই!", phone: "+880197796472", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                  {name: "মোঃ নায়িম", birth: "", death: "", gender: "male", occupation: "সরকারী চাকরিজীবী", education: "স্নাতক পাস", phone: "+8801581452935, +8801935676846", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "মোঃ নাজমুল ইসলাম", birth: "", death: "", gender: "male", occupation: "ক্ষুদ্র ব্যবসায়ী", education: "মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", 
                        children: [
                          {name: "উম্মে নাজিফা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                ]},
              ]},
            ]},           
        {name: "খালেক ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "", education: "অজানা", phone: "অজানা", address: "অজানা",
              children: [
              {name: "নুরুল আমিন (পেছন)", birth: "", death: "অজানা", gender: "male", occupation: "মোদি দোকনী", education: "", phone: "", address: "",
                  children: [
                  {name: "নুরুন্নাহার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
                  {name: "হাফসা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},            
                  {name: "এজমুল", birth: "", death: "", gender: "male", occupation: "আত্ম কর্মসংস্থান", education: "প্রাথমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "লিপা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},            
                  ]},
              {name: "জুলহাস (জুলু)", birth: "", death: "অজানা", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "", 
                  children: [
                  {name: "ঝুমা আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
                  {name: "ঊর্মি আক্তার", birth: "", death: "", gender: "female", occupation: "চাকরিজীবী", education: "", phone: "", address: "",},
                  {name: "মুমিনুল ইসলাম", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক (অধ্যয়নরত)", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "নুজাত", birth: "", death: "২০১১", gender: "female", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  ]},
              {name: "জালাল", birth: "", death: "", gender: "male", occupation: "মোদি দোকানী", education: "", phone: "", address: "", 
              children: [                  
                  {name: "নোমান", birth: "", death: "", gender: "male", occupation: "কৃষক", education: "প্রথমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "জাকিয়া", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "উচ্চ মাধ্যমিক", phone: "", address: "",},
                  {name: "খাদিজা", birth: "", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক", phone: "", address: "",},
                  ]},
              {name: "শওকত", birth: "", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "",
              children: [                  
                  {name: "মোঃ সাদিকুর রহমান শুভ", birth: "", death: "", gender: "male", occupation: "কৃষি উদ্যোক্তা", education: "হাফেজ", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  {name: "সয়িফ", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক (অধ্যয়নরত)", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  ]},
            ]},
      ]},
    {name: "শহর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
      children: [
        {name: "মৈছা ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
             children: [
              {name: "ওয়ারেজ ফকির", birth: "অজানা", death: "", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children: [                  
                  {name: "মোঃ শফিউল আলম সোহাগ", birth: "", death: "", gender: "male", occupation: "প্রবাসী", education: "উচ্চ মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                  {name: "সাবিয়া জান্নাত", birth: "", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "প্রাথমিক", phone: "", address: "",},
                  ]},
                  {name: "ওয়ালিউল্লাহ সুমন", birth: "", death: "", gender: "male", occupation: "", education: "ফাজিল", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                  {name: "ওমাইজা ইসলাম সিনফা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                  ]},
                  {name: "মোঃ অহিদুল হাসান সাকিব", birth: "০৩ মার্চ, ২০০৩", death: "", gender: "male", occupation: "সৈনিক", education: "স্নাতক (অধ্যয়নরত)", phone: "+8801812-403585", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo: "photos/whedul-hasan-shakib.jpg",},
                  ]},
              ]},
        {name: "ইদ্দিছ ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
        children: [
              {name: "মোঃ বজলুর রহমান", birth: "১৮ জুন, ১৯৬৪", death: "", gender: "male", occupation: "শিক্ষক", education: "", phone: "+8801924-569863", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children: [
            {name: "ফাহমিদা ইয়াসমিন", birth: "", death: "", gender: "female", occupation: "সাবেক সিনিয়র অফিসার, সোনালী ব্যাংক | শিক্ষক", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "ইশরাত সাদিয়া", birth: "", death: "", gender: "female", occupation: "শিক্ষক", education: "", phone: "", address: "",},
            {name: "তাহমিদুর রহমান তন্ময়", birth: "০৭ এপ্রিল, ২০০২", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "স্নতক সম্মান (অধ্যয়নরত)", phone: "+8801404-529824", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo:"photos/tonmoy.jpg"},
          ]},
              {name: "মুঞ্জুরুল ফকির", birth: "অজানা", death: "", gender: "male", occupation: "কৃষক", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children: [
            {name: "মিনহা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            {name: "সিনহা", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "সিনথিয়া", birth: "", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
          ]},
              {name: "মোঃ আব্দুস সামাদ", birth: "অজানা", death: "", gender: "male", occupation: "সাবেক সেনা সদস্য | কৃষি উদ্যোক্তা", education: "", phone: "+8801967-303091", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
            children: [
            {name: "মোঃ মুশফিকুর রহমান সানি", birth: "১৫ অক্টোবর, ইইইই", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "স্নাতক", phone: "+880164-6745154", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo: "photos/sunny.jpg"},
            {name: "মোঃ সাজিদ আল হাসান", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "মোঃ জাহিন আল সাবিত", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            ]},
              {name: "আব্দুল আহাদ", birth: "০৬ জুন, ১৯৭৭", death: "", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                children: [            
            {name: "আনিকা তাবাসসুম", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "সিউল, দক্ষিণ কোরিয়া",},
            {name: "তানভীর আহমেদ আফ্রিদি", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
          ]
              },
              ]},
        {name: "সিদ্দিক ফকির (মিঠু ফকির)", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
        children: [
          {name: "রুহুল আমিন", birth: "অজানা", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
            children: [
              {name: "👩অজানা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            ]
          },
          {name: "লিলি", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
          {name: "আনারুল", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",},
          {name: "এনামুল", birth: "", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
          {name: "রেশেনা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
          {name: "তাছলি আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
          {name: "আতিক", birth: "", death: "", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
            children: [
              {name: "👩অজানা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
              {name: "👩অজানা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            ]},
        ]},
      ]},
    {name: "বুইদ্দা ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
      children: [
        {name: "👨 (অজানা)", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",},
        {name: "নেকবর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "জহির উদ্দিন", birth: "অজানা", death: "", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children: [
            {name: "উম্মে সালমা", birth: "অজানা", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
            {name: "জাহানারা খাতুন", birth: "অজানা", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
            {name: "মোঃ জাকারিয়া", birth: "অজানা", death: "", gender: "male", occupation: "চাকুরিজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "জাহিদুল ইসলাম", birth: "অজানা", death: "", gender: "male", occupation: "ইমাম", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "জাহাঙ্গির আলম", birth: "অজানা", death: "", gender: "male", occupation: "প্রবাসী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "উম্মে তামিমা ইয়াসমিন সাদিয়া", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "", phone: "", address: "",},
            ]},
            {name: "মো: হারেজ আলী ফকির", birth: "অজানা", death: "", gender: "male", occupation: "ব্যবসা", education: "", phone: "01736-151132", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children: [
            {name: "সাবরিনা জান্নাত ঈশিকা", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "স্নাতক সম্মান", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
            {name: "সাজ্জাদ আহমেদ সিহাদ", birth: "০২ আগস্ট, বছর", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "স্নাতক সম্মান", phone: "01920-780536", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo: "photos/shihad.jpg",},
            ]},
          ]},
        {name: "শেখবর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",},
      ]},
    {name: "লুচন ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
      children: [
        {name: "ময়দান কেরানি", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "নুরল ইসলাম", birth: "অজানা", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "", 
              children: [
                {name: "হাসমত", birth: "অজানা", death: "", gender: "male", occupation: "দলিল লেখক", education: "", phone: "01920-823747, 01724-226100", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                    {name: "মেরাজুল ইসলাম", birth: "অজানা", death: "", gender: "male", occupation: "ব্যবসায়ী", education: "", phone: "", address: "মিতিঝিল, ঢাকা",
                      children: [
                        {name: "ঐশী ইসলাম", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                        {name: "নোজাইফা", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                      ]},
                    {name: "নাজমুল ইসলাম", birth: "অজানা", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "01926-212801", address: "আফতাবনগর, বাড্ডা, ঢাকা (উত্তর)-1212, ঢাকা",
                      children: [
                        {name: "নওসিন", birth: "অজানা", death: "অজানা", gender: "female", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                        {name: "মুগ্ধ", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                      ]},
                    {name: "রিয়াদ", birth: "অজানা", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "স্নাতকোত্তর (অধ্যয়নরত)", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                    {name: "রাশিদুল ইসলাম রাহাত", birth: "অজানা", death: "", gender: "male", occupation: "দলিল লেখক", education: "স্নাতক পাস", phone: "01968-129777", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                      children: [
                        {name: "রিদ্দিকা", birth: "অজানা", death: "অজানা", gender: "female", occupation: "", education: "", phone: "", address: "",},
                        {name: "ওয়াসিফ ইসলাম মিনহাজ", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                      ]},                    
                  ]
                },
                {name: "মুস্তফা", birth: "অজানা", death: "", gender: "male", occupation: "ব্যবসায়ী", education: "", phone: "", address: "ঢাকা",
                  children: [
                    {name: "রাফিন", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ঢাকা",},
                    {name: "রাফা", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ঢাকা",},
                  ]},
                {name: "ফারুক", birth: "অজানা", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "মিরপুর, ঢাকা",
                  children: [
                    {name: "মুনমুন", birth: "অজানা", death: "", gender: "female", occupation: "", education: "", phone: "", address: "ঢাকা",},
                    {name: "👨", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ঢাকা",},
                  ]},
              ]},
            {name: "নজরুল ইসলাম (বুলু)", birth: "অজানা", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "দুলাল ফকির", birth: "অজানা", death: "", gender: "male", occupation: "চাকুরজীবী", education: "", phone: "", address: "ঢাকা",
                  children: [
                    {name: "সুবর্ণা", birth: "অজানা", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
                    {name: "কণিকা কণা", birth: "অজানা", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
                    {name: "অনন্যা", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "", phone: "", address: "",},
                  ]},
                {name: "মুকুল ফকির", birth: "অজানা", death: "", gender: "male", occupation: "চাকুরজীবী", education: "", phone: "", address: "ঢাকা",
                  children: [
                   {name: "শাকিল আহমেদ", birth: "অজানা", death: "", gender: "male", occupation: "চাকুরজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo: "photos/shakil.jpg",
                    children: [
                      {name: "নিহানুর রহমান সায়ান", birth: "৩১ জুলাই, ২০২০", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                      {name: "মুক্তাদির হাসান", birth: "১৭ মার্চ, ২০২৫", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                    ]}, 
                   {name: "স্মৃতি", birth: "অজানা", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
                  ]
                },
                {name: "কামরুল ফকির", birth: "অজানা", death: "", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                    {name: "নাঈম", birth: "অজানা", death: "অজানা", gender: "male", occupation: "শিক্ষার্থী", education: "স্নাতক সম্মান (অধ্যয়নরত)", phone: "01996-830753", address: "খিলগাঁও, ঢাকা",},
                    {name: "নিশাত", birth: "অজানা", death: "অজানা", gender: "male", occupation: "শিক্ষার্থী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  ]
                },
              ]},
            {name: "সিরাজুল ইসলাম (কালু)", birth: "অজানা", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "শহীদ", birth: "অজানা", death: "", gender: "male", occupation: "ব্যবসায়ী", education: "", phone: "01747-627070", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                {name: "শাপলা আক্তার", birth: "অজানা", death: "", gender: "female", occupation: "নার্স", education: "", phone: "", address: "",},
                {name: "সুমা আক্তার", birth: "অজানা", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "", phone: "", address: "",},
                {name: "মোঃ সাজ্জাদ হোসেন সাজিদ", birth: "০৭ ফেব্রুয়ারি, ২০০৭", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "উচ্চ মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
              ]},
                {name: "বারেক", birth: "অজানা", death: "", gender: "male", occupation: "চাকুরজীবী", education: "", phone: "", address: "মিরপুর, ঢাকা",
                  children: [
                    {name: "অপি", birth: "", death: "", gender: "female", occupation: "শিক্ষার্থী", education: "মাধ্যমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                    {name: "ছামিম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                    {name: "সামিয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  ]},
              ]},
            {name: "রফিকুল ইসলাম (সুরুজ)", birth: "অজানা", death: "১৪ সেপ্টেম্বর, ২০২৫", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "জহিরুল ইসলাম", birth: "", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "01992-683157", address: "ঢাকা",},
                {name: "রেজাউল করিম (রেজা)", birth: "", death: "", gender: "male", occupation: "কৃষক", education: "", phone: "01918-984431", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                    {name: "জুনায়েদ হোসেন আবির", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "প্রাথমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                    {name: "জুবায়েদ হোসেন আদিত", birth: "", death: "", gender: "male", occupation: "শিক্ষার্থী", education: "প্রাথমিক", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",},
                  ]},
                {name: "সাবেকুন্নাহার রেখা", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "হাজীর মোর, নারায়ণখোলা বাজার, নাকলা, শেরপুর",},
                ]},
            {name: "আসাদুল ইসলাম (আসাদ)", birth: "অজানা", death: "", gender: "male", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",
              children: [
                {name: "আশরাফুল ইসলাম (সবুজ)", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",
                  children: [
                    {name: "সাফায়েত ইসলাম আয়মান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",},
                    {name: "👨", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",},
                  ]},
                {name: "বৃষ্টি আহমেদ", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",},
                {name: "সজল ইসলাম (সরল)", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "মিরপুর, ঢাকা",},
              ]},
          ]},
        {name: "আগজর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "মোফাজ্জল", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
            {name: "দেলুয়ার হোসেন (দেলু)", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "দিনা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},                
                {name: "দ্রিপ্তি আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "👨নাম জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]},
            {name: "আমিরুল হোসেন", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",},
            {name: "মেহেরুন্নেসা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
              ]},
            {name: "তোফাজ্জল", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "কাজলি বেগম", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},  
                {name: "নাজমুন নাহার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},  
                {name: "রঞ্জু ফকির", birth: "", death: "", gender: "male", occupation: "কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [
                    {name: "রাইসা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},  
                    {name: "রেদওয়ান হোসেন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "👨নাম জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]},
                {name: "রহিম ফকির", birth: "", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                  children: [                    
                    {name: "👨নাম জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "👨নাম জনা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]},
                {name: "তানজিনা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},  
                {name: "তাহমিনা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},  
              ]
            },
            {name: "আজিজুল হক (বাবুই)", birth: "", death: "", gender: "male", occupation: "টিউশনি | কৃষি", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
              children:[
                {name: "মারিয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "👨নাম জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]},
          ]},
        {name: "নবাব আলী ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "তালেব ফকির", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "বুলি", birth: "", death: "অজানা", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "রাশিদা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "মাহবুবুর রহমান", birth: "", death: "১৮ মার্চ, ২০১৮", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "রোজিনা (রোজি)", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "শিরিনা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "সানজিদা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "মোফাক খারুল", birth: "", death: "", gender: "male", occupation: "সরকারী চাকরিজীবী", education: "", phone: "", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।",
                      children: [
                        {name: "মেহেনাজ জারিন", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                      ]},
                    {name: "তানভীর ফাহাদ (শরীফ)", birth: "", death: "", gender: "male", occupation: "শিক্ষার্রী", education: "স্নাতক সম্মান (অধ্যয়নরত)", phone: "01732-728898", address: "সাইলামপুর, বিবির চর-২১৫০, ওর্য়ার্ড: ০৮, নকলা, শেরপুর।", photo: "photos/tanvir-fahad.jpg",},
                  ]},
                {name: "আলম ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "শান্তা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "শাপলা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "👩", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "সিয়াম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]},
                {name: "মুন্তাজ (মুন্তু ফকির)", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "মুক্তা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "জ্যোতি", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "👩", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "👩", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "মজনু ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "মোমিনুন নাহার জুঁই", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "মারিয়া আক্তার জয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "ইবনে আরাবী জিদান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]},
                {name: "হাসি", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
              ]},
            {name: "হবিবুর (হবি)", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "মজিবর", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "শাহিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                      children: [
                        {name: "আহনাফ", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                        {name: "সারা", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                        {name: "আরাফ", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                      ]
                    },
                    {name: "মমতা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "ছাইফুল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "তাঞ্জিনা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "তামিম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "তনয়", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "এন্দাদুল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]
            },
            {name: "শামছল ফকির", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "বিল্লাল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "সোনিয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "হিমেল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "আলি", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "আরফিয়া সুলতানা অনন্যা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "আরাফাত", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "ইউসুফ (ইছু)", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "মাহিম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "মাবিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "সুন্দরী", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "ইসরাফিল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "ইভা খাতুন", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "আবির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "আয়াত", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "সোহেল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "সাওদা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "আব্দুল্লাহ আল-মামুন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "আরিসা ইবনাত মরিয়ম", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                    {name: "মাদিহা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
              ]
            },
            {name: "হাবিবুর (হাফেজ)", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "রুবেল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "লামিম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "জুয়েল", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "মুবাশশির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "মুমিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "মাওয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
                {name: "মণি", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
                  children: [
                    {name: "সিমরান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "ইমরান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                    {name: "রায়ান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  ]
                },
              ]
            },            
          ]},
      ]},
    {name: "জবেদ ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
      children: [
        {name: "ফজল ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "গিয়াস উদ্দিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ময়মনসিংহ",
              children: [
                {name: "সৌরভ হাসান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ময়মনসিংহ",},
                {name: "রাব্বি হাসান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "ময়মনসিংহ",},
              ]
            },
            {name: "শরাফ উদ্দিন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
            children:[
              {name: "রাকিব হাসান", birth: "", death: "", gender: "male", occupation: "ক্রীড়াব্যক্তিত্ব", education: "", phone: "", address: "",
                children: [
                  {name: "মোঃ আইমান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                  {name: "আয়েশা আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                ]},
              {name: "রবিন মিয়া", birth: "", death: "", gender: "male", occupation: "চাকরিজীবী", education: "", phone: "", address: "", photo: "photos/robin-mia.jpg",
                children: [
                  {name: "রাফসানা", birth: "০৩ ডিসেম্বর, ২০২৫", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                ]},
              {name: "মোছাম্মৎ শারমিন আক্তার", birth: "", death: "", gender: "female", occupation: "গৃহিণী", education: "", phone: "", address: "",},
              {name: "সাবিকুন নাহার অর্পিতা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            ]},
          ]},
        {name: "আবেদ আলী ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "আফাজ উদ্দিন", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children:[
                {name: "স্বপন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                {name: "মুক্তার", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                {name: "মৃদুল ইসলাম (ঝিনুক)", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]
            },
            {name: "শাহজাহান", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "শাকিলা", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "শ্রাবণ", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]
            },
          ]
        },
        {name: "আবু বক্কর ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "খোকা", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "জসিম", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                {name: "জরিফ হোসেন", birth: "", death: "", gender: "male", occupation: "সরকারি চাকরিজীবী", education: "স্নাতক সম্মান", phone: "", address: "",},
              ]
            },
            {name: "সাইদুল", birth: "", death: "অজানা", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "রুমন মিয়া", birth: "", death: "", gender: "male", occupation: "ক্রীড়াব্যক্তিত্ব", education: "", phone: "", address: "",},
                {name: "সুমাইয়া", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
              ]
            },
            {name: "বাবুল ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "মরিয়ম বিথী", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
                {name: "বাধন", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                {name: "বৃষ্টি", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
              ]
            },
            {name: "রুবেল ফকির", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
          ]},
        {name: "আবুল ফকির", birth: "অজানা", death: "অজানা", gender: "male", occupation: "কৃষি", education: "অজানা", phone: "অজানা", address: "অজানা",
          children: [
            {name: "শাহনাজ আক্তার শিমু", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            {name: "খেজুর", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",
              children: [
                {name: "জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
                {name: "জানা নেই", birth: "", death: "", gender: "male", occupation: "", education: "", phone: "", address: "",},
              ]
            },
            {name: "পারুল আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
            {name: "শিবলি আক্তার", birth: "", death: "", gender: "female", occupation: "", education: "", phone: "", address: "",},
          ]
        },
      ]
    },
    
  ]
};

/* ---------- ২) সম্পাদক ও তথ্যদাতা ----------
   photo: ছবির পথ (photos/ ফোল্ডারে রাখুন)। ছবি না থাকলে নামের প্রথম অক্ষর দেখাবে।
   নিচের নামগুলো নমুনা — আপনাদের আসল নাম দিয়ে বদলান। তথ্যদাতা যত খুশি যোগ করতে পারেন। */
const siteCredits = {
  intro: "এই বংশলতিকা পরিবারের সদস্যদের সম্মিলিত তথ্য ও স্মৃতির ভিত্তিতে তৈরি। কোনো তথ্য ভুল বা অসম্পূর্ণ থাকলে সম্পাদকের সাথে যোগাযোগ করুন।",
  editors: [
    { name: "মোঃ আমির হামজা", role: "সংকলক ও সম্পাদক", info: "বংশলতিকা প্রস্তুত ও সম্পাদনা", photo: "photos/amir.jpg" }
  ],
  contributors: [
    { name: "মোঃ বকুল হোসেন", role: "তথ্যদাতা", info: "পুরো তালিকা করতে সর্বোচ্চ সহযোগিতা করেছেন", photo: "photos/md-bakul-hossain.jpg" },
    { name: "সাব্বির আহমেদ", role: "তথ্যদাতা", info: "৩ থেকে ৪টি শাখার তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/sabbir.jpg" },
    { name: "তাহমিদ তন্ময়", role: "তথ্যদাতা", info: "তার পরিবার ও শাখার তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/tonmoy.jpg" },
    { name: "জাহানারা খাতুন", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/zahanara-khatun.jpg"},
    { name: "মোঃ অহিদুল হাসান সাকিব", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/whedul-hasan-shakib.jpg"},
    { name: "মোঃ মুশফিকুর রহমান সানি", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/sunny.jpg" },
    { name: "তানভীর ফাহাদ (শরীফ)", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/tanvir-fahad.jpg" },
    { name: "শাকিল আহমেদ", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/shakil.jpg" },
    { name: "সাজ্জাদ আহমেদ সিহাদ", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/shihad.jpg" },
    { name: "রবিন মিয়া", role: "তথ্যদাতা", info: "তার পরিবারের তথ্য দিয়ে সহযোগিতা করেছেন", photo: "photos/robin-mia.jpg" },
  ]
};

/* ---------- ৩) গোপনীয়তা সুইচ ----------
   ওয়েবসাইট সবার জন্য খোলা থাকলে ফোন নম্বর ও ঠিকানা লুকাতে চাইলে true করুন। */
const siteSettings = {
  hidePhone: false,
  hideAddress: false
};
