// ==========================================
// CORE APPLICATION LOGIC & DATASET
// ==========================================

// Mathematicians Dataset 
const mathematiciansData = [
  {
    id: 1,
    name: "भास्कराचार्य",
    years: "1114 – 1185",
    country: "भारत",
    emoji: "📐",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50/50 dark:bg-orange-900/10",
    title: "सिद्धांत शिरोमणि और लीलावती के रचयिता",
    born: "विज्जलविड (आधुनिक कर्नाटक)",
    education: "परंपरागत भारतीय खगोलशास्त्र और गणित",
    about: "भास्कराचार्य प्राचीन भारत के सबसे प्रसिद्ध गणितज्ञ और खगोलशास्त्री थे। उन्होंने मात्र 36 वर्ष की आयु में 'सिद्धांत शिरोमणि' ग्रंथ लिखा, जिसके चार भाग हैं: लीलावती, बीजगणित, ग्रहगणित और गोलाध्याय।",
    contributions: [
      { title: "शून्य का गणित", detail: "उन्होंने स्पष्ट किया कि किसी संख्या को शून्य से विभाजित करने पर अनंत (अनंत राशि) प्राप्त होता है।" },
      { title: "चक्रवाल विधि", detail: "अनिर्णित द्विघात समीकरणों (जैसे Nx² + 1 = y²) को हल करने की अद्भुत वैश्विक विधि दी।" }
    ],
    quotes: ['"जैसे सूर्य अपने तेज से तारों को दूर करता है, वैसे गणित अज्ञान को।" — भास्कराचार्य'],
    legacy: '"लीलावती" का फ़ारसी, अरबी और यूरोपीय भाषाओं में अनुवाद हुआ। उज्जैन में जय सिंह वेधशाला उनकी परंपरा पर बनी।',
    funFacts: ['लीलावती को "भारतीय गणित की मोज़ा लिसा" कहा जाता है।', "न्यूटन से 500 साल पहले गुरुत्वाकर्षण का स्पष्ट संकेत दिया था।"]
  },
  {
    id: 2,
    name: "Maryam Mirzakhani",
    years: "1977 – 2017",
    country: "इरान / अमेरिका",
    emoji: "🧠",
    color: "from-purple-500 to-indigo-600",
    bg: "bg-purple-50/50 dark:bg-purple-900/10",
    title: "प्रथम महिला फील्ड्स मेडल विजेता",
    born: "तेहरान, ईरान",
    education: "शरीफ यूनिवर्सिटी ऑफ़ टेक्नोलॉजी, हार्वर्ड यूनिवर्सिटी",
    about: "मरियम मिर्ज़ाखानी एक असाधारण गणितज्ञ थीं, जिन्होंने रीमान सरफेसेस (Riemann Surfaces) की ज्यामिति और उनके डायनेमिक्स की जटिलताओं को सुलझाया।",
    contributions: [
      { title: "Teichmüller Space Dynamics", detail: "जटिल ज्यामितीय आकृतियों के मोशन और उनके स्पेस वॉल्यूम की गणना की।" },
      { title: "Fields Medal 2014", detail: "गणित का सर्वोच्च सम्मान जीतने वाली दुनिया की पहली महिला बनीं।" }
    ],
    quotes: ['"हर दिन कुछ नया सीखो और आगे बढ़ो।"'],
    legacy: "Stanford University में Maryam Mirzakhani Hall बनाया गया। हर साल उनके नाम पर अंतरराष्ट्रीय पुरस्कार दिए जाते हैं।",
    funFacts: ["बचपन में लेखक बनना चाहती थीं, बाद में गणितज्ञ बन गईं।", "10वीं कक्षा में शुरुआती दिनों में खुद को गणित में बहुत कमज़ोर समझती थीं।"]
  }
];

// Interactive Math Models Dataset
const mathModelsData = [
  {
    id: 1,
    title: "घन (Cube) का मॉडल",
    cat: "ज्यामिति",
    class: "6-9",
    diff: "आसान",
    materials: "कार्डबोर्ड, कैंची, गोंद",
    emoji: "🧊",
    working: "एक वर्ग की 6 प्रतियाँ काटें (सभी एक ही साइज़ की)। उन्हें Net की तरह जोड़ें — 1 बीच में, 4 उसके आसपास, 1 ऊपर। गोंद से सब जोड़ें। V = a³, SA = 6a² लिखें।",
    concept: "आयतन, पृष्ठीय क्षेत्रफल, फलक=6, कोने=8, किनारे=12"
  },
  {
    id: 2,
    title: "पाइथागोरस प्रमेय बोर्ड",
    cat: "ज्यामिति",
    class: "7-9",
    diff: "मध्यम",
    materials: "थर्माकोल, रंगीन कागज़, पिन",
    emoji: "📐",
    working: "थर्माकोल पर 3-4-5 का समकोण त्रिभुज बनाएं। तीनों भुजाओं पर वर्ग बनाएं (9, 16, 25 खाने)। रंगीन कागज़ से खाने भरें। दिखाएं: 9+16=25 यानी a²+b²=c²",
    concept: "c² = a² + b², समकोण त्रिभुज, कर्ण"
  },
  {
    id: 3,
    title: "वृत्त के भाग का मॉडल",
    cat: "ज्यामिति",
    class: "5-8",
    diff: "आसान",
    materials: "रणीय कागज़, कम्पास, कैंची",
    emoji: "⭕",
    working: "बड़ा वृत्त काटें। 8 बराबर sectors में काटें। Sector को reshape करके आयत बनाएं — लंबाई = πr, चौड़ाई = r। Area = πr² सिद्ध!",
    concept: "π, त्रिज्या, क्षेत्रफल = πr²"
  },
  {
    id: 4,
    title: "Fibonacci Spiral Board",
    cat: "ज्यामिति",
    class: "6-9",
    diff: "मध्यम",
    materials: "ग्राफ पेपर, कम्पास",
    emoji: "🌀",
    working: "1×1, 1×1, 2×2, 3×3, 5×5, 8×8 वर्ग बनाएं। हर वर्ग में quarter-circle खींचें। spiral बनती है — यही Golden Ratio! प्रकृति में शंख, फूल इसी pattern में होते हैं।",
    concept: "Fibonacci: 1,1,2,3,5,8,13... Golden Ratio φ=1.618"
  }
];

// Simple Dynamic UI Renderer Function (Zero Dependencies Initialization)
function renderApp() {
  const root = document.getElementById('root');
  if(!root) return;

  let htmlContent = `
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <header class="text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl">
        <h1 class="text-3xl md:text-5xl font-bold mb-3">🎓 Interactive Mathematics Portal</h1>
        <p class="text-blue-100 text-sm md:text-lg">महान गणितज्ञों की जीवनी और लाइव वर्किंग मैथ मॉडल्स का अद्भुत संग्रह</p>
      </header>

      <section class="mb-14">
        <h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <span>🧑‍🔬</span> महान गणितज्ञों की गैलरी
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${mathematiciansData.map(m => `
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all">
              <div class="bg-gradient-to-r ${m.color} p-5 text-white">
                <div class="flex items-center gap-4">
                  <span class="text-4xl bg-white/10 p-2 rounded-xl">${m.emoji}</span>
                  <div>
                    <h3 class="text-xl font-bold">${m.name}</h3>
                    <p class="text-xs opacity-90">${m.years} · ${m.country}</p>
                  </div>
                </div>
                <div class="mt-3 text-xs font-semibold bg-black/10 inline-block px-3 py-1 rounded-full">${m.title}</div>
              </div>
              <div class="p-5 space-y-4">
                <div>
                  <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">📝 जीवनी:</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${m.about}</p>
                </div>
                <div class="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h4 class="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">🏆 प्रमुख योगदान:</h4>
                  <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    ${m.contributions.map(c => `<li><strong>${c.title}:</strong> ${c.detail}</li>`).join('')}
                  </ul>
                </div>
                <div class="text-xs italic text-slate-500 dark:text-slate-400 border-l-2 border-indigo-500 pl-3">
                  ${m.quotes[0]}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <span>🎮</span> Interactive Math Models (छूकर सीखो)
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${mathModelsData.map(model => `
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-5 flex flex-col justify-between hover:-translate-y-1 transition-all hover:shadow-md">
              <div>
                <div class="text-3xl mb-3">${model.emoji}</div>
                <span class="text-[10px] uppercase font-bold tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">कक्षा ${model.class}</span>
                <h3 class="text-base font-bold mt-2 mb-1 text-slate-800 dark:text-slate-100">${model.title}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-3"><strong>सामग्री:</strong> ${model.materials}</p>
                <div class="text-xs bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 mb-2">
                  <strong>वर्किंग विधि:</strong> ${model.working}
                </div>
              </div>
              <div class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-md mt-2 border border-emerald-100 dark:border-emerald-900/30">
                🎯 <strong>मैथ कांसेप्ट:</strong> ${model.concept}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;

  root.innerHTML = htmlContent;
}

// Initialize Application on Window Load
window.addEventListener('DOMContentLoaded', renderApp);
