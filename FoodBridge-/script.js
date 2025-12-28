const defaultConfig = {
  platform_title: "FoodBridge",
  tagline: "Turning Food Waste into Hope",
  donor_button_text: "Join as Donor",
  ngo_button_text: "Join as NGO",
  volunteer_button_text: "Join as Volunteer",
  footer_text: "© 2025 FoodBridge – For a Greener Tomorrow",
  primary_color: "#4CAF50",
  secondary_color: "#FF9800",
  accent_color: "#2196F3",
  text_color: "#333333",
  background_color: "#ffffff"
};

let config = { ...defaultConfig
};

// Translations
const translations = {
  en: {
    heroTitle: "FoodBridge – Turning Food Waste into Hope",
    donorBtn: "🍽️ Join as Food Donor",
    ngoBtn: "🏢 Join as NGO",
    volunteerBtn: "🚚 Join as Volunteer",
    footer: "© 2025 FoodBridge – For a Greener Tomorrow",
    aiWelcome: "Hello! I'm your FoodBridge AI Assistant. How can I help you today? 🌱"
  },
  kn: {
    heroTitle: "ಫುಡ್‌ಬ್ರಿಡ್ಜ್ – ಆಹಾರ ತ್ಯಾಜ್ಯವನ್ನು ಭರವಸೆಯಾಗಿ ಪರಿವರ್ತಿಸುವುದು",
    donorBtn: "🍽️ ದಾನಿಯಾಗಿ ಸೇರಿ",
    ngoBtn: "🏢 NGO ಆಗಿ ಸೇರಿ",
    volunteerBtn: "🚚 ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ",
    footer: "© 2025 ಫುಡ್‌ಬ್ರಿಡ್ಜ್ – ಹಸಿರು ನಾಳೆಗಾಗಿ",
    aiWelcome: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಫುಡ್‌ಬ್ರಿಡ್ಜ್ AI ಸಹಾಯಕ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? 🌱"
  },
  ta: {
    heroTitle: "ஃபுட்பிரிட்ஜ் – உணவு கழிவுகளை நம்பிக்கையாக மாற்றுதல்",
    donorBtn: "🍽️ நன்கொடையாளராக சேரவும்",
    ngoBtn: "🏢 NGO ஆக சேரவும்",
    volunteerBtn: "🚚 தன்னார்வலராக சேரவும்",
    footer: "© 2025 ஃபுட்பிரிட்ஜ் – பசுமையான நாளைக்காக",
    aiWelcome: "வணக்கம்! நான் உங்கள் ஃபுட்பிரிட்ஜ் AI உதவியாளன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்? 🌱"
  },
  te: {
    heroTitle: "ఫుడ్‌బ్రిడ్జ్ – ఆహార వ్యర్థాలను ఆశగా మార్చడం",
    donorBtn: "🍽️ దాతగా చేరండి",
    ngoBtn: "🏢 NGO గా చేరండి",
    volunteerBtn: "🚚 స్వచ్ఛంద సేవకునిగా చేరండి",
    footer: "© 2025 ఫుడ్‌బ్రిడ్జ్ – పచ్చని రేపటి కోసం",
    aiWelcome: "నమస్కారం! నేను మీ ఫుడ్‌బ్రిడ్జ్ AI సహాయకుడిని. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను? 🌱"
  },
  ml: {
    heroTitle: "ഫുഡ്ബ്രിഡ്ജ് – ഭക്ഷണ പാഴാക്കലിനെ പ്രതീക്ഷയാക്കി മാറ്റുന്നു",
    donorBtn: "🍽️ ദാതാവായി ചേരുക",
    ngoBtn: "🏢 NGO ആയി ചേരുക",
    volunteerBtn: "🚚 സന്നദ്ധപ്രവർത്തകനായി ചേരുക",
    footer: "© 2025 ഫുഡ്ബ്രിഡ്ജ് – പച്ചപ്പുള്ള നാളേക്കായി",
    aiWelcome: "ഹലോ! ഞാൻ നിങ്ങളുടെ ഫുഡ്ബ്രിഡ്ജ് AI സഹായകനാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും? 🌱"
  },
  hi: {
    heroTitle: "फूडब्रिज – खाद्य अपशिष्ट को आशा में बदलना",
    donorBtn: "🍽️ दाता के रूप में जुड़ें",
    ngoBtn: "🏢 NGO के रूप में जुड़ें",
    volunteerBtn: "🚚 स्वयंसेवक के रूप में जुड़ें",
    footer: "© 2025 फूडब्रिज – हरित कल के लिए",
    aiWelcome: "नमस्ते! मैं आपका फूडब्रिज AI सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं? 🌱"
  }
};

// User Profile State
let userProfile = {
  name: '',
  phone: '',
  email: 'john.doe@foodbridge.com',
  lat: null,
  lng: null,
  city: '',
  address: '',
  role: '', // 'donor', 'ngo', 'volunteer'
  donorType: '', // 'individual', 'business'
  orgName: '',
  regId: '',
  vehicleType: '',
  profileComplete: false
};

let currentUserRole = '';

// Sample data with location info
let donations = [{
    id: 1,
    title: "Fresh Vegetables",
    quantity: 15,
    category: "raw",
    dietaryType: "veg",
    expiry: new Date(Date.now() + 3 * 3600000),
    tags: "Organic, Seasonal",
    lat: 12.9716,
    lng: 77.5946,
    address: "123 MG Road, Bengaluru, Karnataka 560001",
    pickupInstructions: "Enter through the main gate",
    status: "available"
  },
  {
    id: 2,
    title: "Cooked Rice Meals",
    quantity: 25,
    category: "cooked",
    dietaryType: "veg",
    expiry: new Date(Date.now() + 2 * 3600000),
    tags: "Ready to eat, Hot",
    lat: 12.9352,
    lng: 77.6245,
    address: "456 Brigade Road, Bengaluru, Karnataka 560025",
    pickupInstructions: "Ring doorbell twice",
    status: "available"
  },
  {
    id: 3,
    title: "Bread & Bakery",
    quantity: 10,
    category: "packaged",
    dietaryType: "veg",
    expiry: new Date(Date.now() + 5 * 3600000),
    tags: "Fresh baked, Packaged",
    lat: 13.0358,
    lng: 77.5970,
    address: "789 Indiranagar, Bengaluru, Karnataka 560038",
    pickupInstructions: "Use back entrance near parking",
    status: "available"
  }
];

// Mock active volunteers with locations
let activeVolunteers = [{
    id: 1,
    name: "Priya Sharma",
    vehicle: "🚗 Car",
    rating: 4.8,
    deliveries: 47,
    distance: "1.2 km",
    lat: 12.9800,
    lng: 77.6000,
    status: "available"
  },
  {
    id: 2,
    name: "Rahul Patel",
    vehicle: "🏍️ Motorbike",
    rating: 4.9,
    deliveries: 63,
    distance: "2.3 km",
    lat: 12.9600,
    lng: 77.6100,
    status: "available"
  },
  {
    id: 3,
    name: "Ananya Kumar",
    vehicle: "🚐 Van",
    rating: 5.0,
    deliveries: 89,
    distance: "0.8 km",
    lat: 12.9750,
    lng: 77.5900,
    status: "available"
  },
  {
    id: 4,
    name: "Vikram Singh",
    vehicle: "🚗 Car",
    rating: 4.7,
    deliveries: 52,
    distance: "3.1 km",
    lat: 12.9400,
    lng: 77.6300,
    status: "available"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    vehicle: "🚲 Bicycle",
    rating: 4.6,
    deliveries: 34,
    distance: "1.5 km",
    lat: 12.9850,
    lng: 77.5850,
    status: "available"
  }
];

// Map instance
let map = null;
let selectedDonationForAssignment = null;
let activeRoute = null; // For storing the active polyline route

let donationHistory = [{
    title: "Fresh Vegetables",
    quantity: 15,
    date: "2025-01-15",
    status: "completed"
  },
  {
    title: "Rice Meals",
    quantity: 25,
    date: "2025-01-14",
    status: "completed"
  },
  {
    title: "Bread Items",
    quantity: 10,
    date: "2025-01-13",
    status: "completed"
  }
];

let claimedItems = [{
    title: "Fresh Vegetables",
    quantity: 15,
    date: "2025-01-15",
    status: "claimed",
    donor: "Green Restaurant"
  },
  {
    title: "Rice Meals",
    quantity: 25,
    date: "2025-01-14",
    status: "claimed",
    donor: "City Kitchen"
  },
  {
    title: "Bread Items",
    quantity: 10,
    date: "2025-01-13",
    status: "claimed",
    donor: "Fresh Bakery"
  }
];

let deliveryHistory = [{
    id: 1,
    pickup: "Downtown Restaurant",
    drop: "Hope Foundation",
    date: "2025-01-15",
    status: "completed"
  },
  {
    id: 2,
    pickup: "Fresh Market",
    drop: "Community Center",
    date: "2025-01-14",
    status: "completed"
  },
  {
    id: 3,
    pickup: "Cafe Verde",
    drop: "Shelter Home",
    date: "2025-01-13",
    status: "completed"
  }
];

let deliveries = [{
    id: 1,
    pickup: "Downtown Restaurant",
    drop: "Hope Foundation",
    distance: "3.2 km"
  },
  {
    id: 2,
    pickup: "Fresh Market",
    drop: "Community Center",
    distance: "1.8 km"
  },
  {
    id: 3,
    pickup: "Cafe Verde",
    drop: "Shelter Home",
    distance: "4.5 km"
  }
];

let leaderboardData = [{
    name: "Priya Sharma",
    level: "Expert 4",
    points: 2850
  },
  {
    name: "Rahul Patel",
    level: "Expert 3",
    points: 2340
  },
  {
    name: "Ananya Kumar",
    level: "Expert 3",
    points: 2120
  },
  {
    name: "Vikram Singh",
    level: "Master 2",
    points: 1890
  },
  {
    name: "Sneha Reddy",
    level: "Master 2",
    points: 1650
  },
  {
    name: "Amit Gupta",
    level: "Master 1",
    points: 1420
  },
  {
    name: "Kavya Menon",
    level: "Advanced 5",
    points: 1180
  },
  {
    name: "Rohan Das",
    level: "Advanced 4",
    points: 980
  },
  {
    name: "Meera Iyer",
    level: "Advanced 3",
    points: 850
  },
  {
    name: "Arjun Nair",
    level: "Advanced 2",
    points: 720
  }
];

// Screen Management
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// Dashboard Section Management
function showDashboardSection(dashboard, section) {
  // Hide all sections
  document.querySelectorAll('.dashboard-section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Remove active from all sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
  });

  // Show selected section
  const sectionId = dashboard + section.charAt(0).toUpperCase() + section.slice(1);
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.classList.add('active');
  }

  // Add active to clicked link
  const activeLink = document.querySelector(`[data-section="${section}"][data-dashboard="${dashboard}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Render content based on section
  if (section === 'history') {
    if (dashboard === 'donor') renderDonorHistory();
    else if (dashboard === 'ngo') renderNGOHistory();
    else if (dashboard === 'volunteer') renderVolunteerHistory();
  }
}

// Sidebar Link Handlers
document.querySelectorAll('.sidebar-link[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    const section = e.target.dataset.section;
    const dashboard = e.target.dataset.dashboard;
    showDashboardSection(dashboard, section);
  });
});

// Back Button Handlers
document.getElementById('donorBack').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('ngoBack').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('volunteerBack').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('impactBack').addEventListener('click', () => showScreen('landingScreen'));

// History Render Functions
function renderDonorHistory() {
  const list = document.getElementById('donorHistoryList');
  list.innerHTML = '';

  donationHistory.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
         <div class="history-item-header">
           <div class="history-item-title">${item.title}</div>
           <div class="history-item-status status-${item.status}">${item.status.toUpperCase()}</div>
         </div>
         <div class="history-item-details">
           <strong>Quantity:</strong> ${item.quantity} kg<br>
           <strong>Date:</strong> ${item.date}
         </div>
       `;
    list.appendChild(historyItem);
  });
}

function renderNGOHistory() {
  const list = document.getElementById('ngoHistoryList');
  list.innerHTML = '';

  claimedItems.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
         <div class="history-item-header">
           <div class="history-item-title">${item.title}</div>
           <div class="history-item-status status-${item.status}">${item.status.toUpperCase()}</div>
         </div>
         <div class="history-item-details">
           <strong>Quantity:</strong> ${item.quantity} kg<br>
           <strong>Donor:</strong> ${item.donor}<br>
           <strong>Date:</strong> ${item.date}
         </div>
       `;
    list.appendChild(historyItem);
  });
}

function renderVolunteerHistory() {
  const list = document.getElementById('volunteerHistoryList');
  list.innerHTML = '';

  deliveryHistory.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
         <div class="history-item-header">
           <div class="history-item-title">Delivery #${item.id}</div>
           <div class="history-item-status status-${item.status}">${item.status.toUpperCase()}</div>
         </div>
         <div class="history-item-details">
           <strong>Pickup:</strong> ${item.pickup}<br>
           <strong>Drop:</strong> ${item.drop}<br>
           <strong>Date:</strong> ${item.date}
         </div>
       `;
    list.appendChild(historyItem);
  });
}

// Language Change
document.getElementById('languageSelect').addEventListener('change', (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('ctaDonor').textContent = t.donorBtn;
  document.getElementById('ctaNgo').textContent = t.ngoBtn;
  document.getElementById('ctaVolunteer').textContent = t.volunteerBtn;
  document.getElementById('footerText').textContent = t.footer;

  const aiMessages = document.getElementById('aiMessages');
  if (aiMessages.children.length === 1) {
    aiMessages.children[0].textContent = t.aiWelcome;
  }
});

// AI Assistant
const aiToggle = document.getElementById('aiToggle');
const aiChatWindow = document.getElementById('aiChatWindow');
const aiClose = document.getElementById('aiClose');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');
const aiMessages = document.getElementById('aiMessages');

aiToggle.addEventListener('click', () => {
  aiChatWindow.classList.toggle('active');
});

aiClose.addEventListener('click', () => {
  aiChatWindow.classList.remove('active');
});

function addAIMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `ai-message ${isUser ? 'user' : 'bot'}`;
  messageDiv.textContent = message;
  aiMessages.appendChild(messageDiv);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function getAIResponse(question) {
  const lowerQuestion = question.toLowerCase();

  // FoodBridge specific responses
  const foodBridgeResponses = {
    // About FoodBridge
    "what is foodbridge": "FoodBridge is an innovative platform connecting food donors (restaurants, events, individuals) with NGOs and volunteers to reduce food waste and fight hunger. We use real-time mapping, gamification for volunteers, and blockchain receipts to make food redistribution efficient and transparent! 🌱",

    "how does foodbridge work": "FoodBridge works in 3 simple steps: 1) Donors list surplus food with location and expiry time. 2) NGOs browse available food on our interactive map and claim items. 3) Volunteers deliver food from donors to NGOs, earning points and rewards. Everything happens in real-time! 🚚",

    "why foodbridge": "40% of food is wasted globally while 800M people go hungry. FoodBridge tackles this by making food redistribution easy, transparent, and rewarding. We've already provided 125,847 meals and saved 45,320 kg of CO₂! Join us in making a difference! 🌍",

    // Donor related
    "how do i donate": "Easy! Click 'Join as Food Donor', create your account, complete your profile, and start listing food. Include details like quantity, category (cooked/raw/packaged), dietary type (veg/non-veg), expiry time, and pickup location. NGOs nearby will be notified instantly! 🍽️",

    "what can i donate": "You can donate: Cooked meals (fresh from restaurants/events), Raw ingredients (vegetables, grains, dairy), Packaged food (sealed items within expiry). Just ensure food is safe, fresh, and properly stored! 🥗",

    "donor benefits": "As a donor: ✅ Reduce food waste & carbon footprint, ✅ Get tax deduction receipts, ✅ Track your impact with blockchain receipts, ✅ Build community goodwill, ✅ Free GPS-based pickup coordination. Make every meal count! 💚",

    "pickup instructions": "When listing food, you can add special pickup instructions like 'Use back entrance', 'Ring doorbell twice', or 'Gate code: 1234'. Volunteers will see these instructions along with your GPS location for seamless pickup! 📍",

    // NGO related
    "how do ngos work": "NGOs can: 📍 View all available donations on an interactive map with real-time updates, 🔍 Filter by distance, food type, and quantity, 🎯 Claim food instantly with one click, 🚚 Get automatic volunteer assignment for delivery. Everything is tracked and transparent! 🏢",

    "ngo requirements": "To join as an NGO: You need a valid organization name, registration ID, contact details, and location. Once verified, you can start claiming food donations in your area immediately! 📋",

    "ngo benefits": "NGO benefits: ✅ Access to surplus food from restaurants & donors, ✅ Real-time map showing all available donations, ✅ Automatic volunteer assignment for deliveries, ✅ Track food received with blockchain receipts, ✅ Help feed your community efficiently! 🤝",

    // Volunteer related
    "how to volunteer": "Click 'Join as Volunteer', complete your profile with vehicle type (bicycle, motorbike, car, van), and start accepting delivery assignments! Pick up food from donors and deliver to NGOs. Earn points, level up, and compete on the leaderboard! 🏆",

    "volunteer rewards": "Volunteers earn: 🎮 XP points for each delivery, 📈 Level progression (Beginner → Advanced → Expert → Master), 🏆 Leaderboard rankings with top performers, 🎁 Badges and achievements, 🌟 Recognition certificates. Plus the satisfaction of helping your community! ⭐",

    "vehicle types": "You can volunteer with: 🚲 Bicycle (best for short distances), 🏍️ Motorbike (fast & efficient), 🚗 Car (comfortable for longer trips), 🚐 Van (large capacity for bulk deliveries). Choose what works best for you! 🚚",

    "volunteer requirements": "To volunteer: You need a valid vehicle, smartphone with GPS, willingness to help, and good communication skills. No age limit - anyone can make a difference! Age 18+ recommended for safety. 👏",

    // Technical features
    "gps location": "FoodBridge uses GPS to: 📍 Detect your exact location automatically, 🗺️ Show donations on an interactive map, 📏 Calculate distances between donors and NGOs, 🚗 Provide turn-by-turn navigation for volunteers. Everything is location-aware and real-time! 🌐",

    "map features": "Our interactive map shows: 🍽️ Red markers for available donations, 🚚 Blue markers for active volunteers, 🏢 Green markers for NGO locations. Click any marker to see details, photos, and take action! The map updates in real-time. 🗺️",

    "expiry timer": "Every food listing has a countdown timer showing hours and minutes until expiry. The freshness bar changes color: 🟢 Green (60%+ fresh), 🟠 Orange (30-60% fresh), 🔴 Red (below 30%). This ensures food safety and prioritizes urgent donations! ⏰",

    "blockchain receipts": "We use blockchain technology to: 📝 Create tamper-proof donation receipts, 🔐 Ensure transparency in food distribution, 📊 Track impact metrics accurately, 💰 Provide tax deduction documentation. Every transaction is recorded permanently! ⛓️",

    // Language support
    "languages": "FoodBridge supports 6 Indian languages: 🇮🇳 English, 🇮🇳 ಕನ್ನಡ (Kannada), 🇮🇳 தமிழ் (Tamil), 🇮🇳 తెలుగు (Telugu), 🇮🇳 മലയാളം (Malayalam), 🇮🇳 हिंदी (Hindi). Switch languages using the dropdown in the top-right corner! 🌏",

    // Impact & statistics
    "impact": "FoodBridge's impact so far: 🍽️ 125,847 meals provided to those in need, 🌍 45,320 kg of CO₂ emissions saved, 📋 89,542 blockchain receipts generated, 🤝 1000+ active users making a difference! View detailed statistics on our Impact Dashboard! 📊",

    "co2 savings": "Food waste produces methane in landfills, contributing 10% of global greenhouse gas emissions. By redistributing food, we prevent waste and save CO₂. Every 10 kg of food saved = ~5 kg CO₂ prevented! You're helping fight climate change! 🌱",

    "food waste facts": "Did you know? 🚨 40% of food is wasted globally, 😢 800 million people go hungry every day, 🌍 Food waste causes 10% of greenhouse gas emissions. FoodBridge helps solve this crisis by connecting surplus with need! 💡",

    // Account & profile
    "profile": "Your profile includes: 👤 Personal info (name, email, phone), 📍 Location (GPS coordinates & address), 🎯 Role-specific details (donor type, NGO registration, volunteer vehicle), 📊 Stats (donations/claims/deliveries completed). Keep it updated for best experience! ⚙️",

    "onboarding": "When you first join FoodBridge, we guide you through a 3-step onboarding: 1️⃣ Contact info (name, phone), 2️⃣ Location (GPS detection or manual entry), 3️⃣ Role-specific details (based on your role). This ensures smooth operations from day one! 🎯",

    // Safety & quality
    "food safety": "We ensure safety by: ✅ Real-time expiry tracking with countdown timers, ✅ Freshness indicators (color-coded bars), ✅ Dietary labels (veg/non-veg), ✅ Category tags (cooked/raw/packaged), ✅ GPS verification of locations. Safety first, always! 🛡️",

    "quality checks": "Donors must provide: 📝 Accurate food details, ⏰ Honest expiry times, 🏷️ Proper categorization, 📍 Correct pickup location, 🖼️ Optional food photos. NGOs verify food quality on receipt. We maintain high standards! ✨"
  };

  // Search for FoodBridge-specific matches first
  for (const [key, response] of Object.entries(foodBridgeResponses)) {
    if (lowerQuestion.includes(key.replace(/ /g, '')) ||
      lowerQuestion.includes(key) ||
      key.split(' ').some(word => lowerQuestion.includes(word) && word.length > 3)) {
      return response;
    }
  }

  // General knowledge responses
  const generalKnowledge = {
    // Greetings
    "hello": "Hello! 👋 Welcome to FoodBridge! I'm your AI assistant here to help you with anything about our platform or general questions. How can I assist you today? 🌱",
    "hi": "Hi there! 😊 I'm the FoodBridge AI assistant. Ask me about donating food, volunteering, NGO partnerships, or any general questions you have. What would you like to know?",
    "hey": "Hey! 🙌 Ready to make a difference? Ask me anything about FoodBridge or general topics. I'm here to help!",
    "good morning": "Good morning! ☀️ Hope you're having a great day! How can I help you with FoodBridge or answer any questions?",
    "good evening": "Good evening! 🌆 Welcome to FoodBridge! What can I help you with tonight?",

    // Gratitude
    "thank": "You're very welcome! 😊 If you have any more questions about FoodBridge or anything else, feel free to ask. Happy to help! 🌟",
    "thanks": "My pleasure! 🙏 Always here to help you make a positive impact through FoodBridge. Anything else you'd like to know?",

    // Help requests
    "help": "I'm here to help! I can answer questions about: 🍽️ Donating food on FoodBridge, 🏢 Joining as an NGO, 🚚 Volunteering & earning rewards, 📊 Viewing impact statistics, 🌍 General knowledge questions. What would you like to explore? 💡",

    "who are you": "I'm the FoodBridge AI Assistant! 🤖 I'm here 24/7 to help you navigate our platform, understand food redistribution, answer your questions, and guide you in making a positive impact. Think of me as your friendly guide to reducing food waste! 🌱",

    // General knowledge
    "what is ai": "AI (Artificial Intelligence) is computer technology that can learn, reason, and solve problems like humans. I'm an AI assistant powered by advanced algorithms to help you with FoodBridge and answer your questions! 🤖✨",

    "what is climate change": "Climate change refers to long-term shifts in global temperatures and weather patterns, primarily caused by human activities like burning fossil fuels. Food waste contributes 10% of greenhouse gases! That's why FoodBridge's mission to reduce food waste is so important for our planet. 🌍💚",

    "what is blockchain": "Blockchain is a secure digital ledger that records transactions permanently and transparently. FoodBridge uses blockchain to create tamper-proof donation receipts, ensuring every meal donated is tracked and verified. It's trust through technology! ⛓️🔐",

    "what is hunger": "Hunger is a critical global issue affecting 800+ million people who don't have reliable access to nutritious food. Paradoxically, 40% of food produced is wasted! FoodBridge bridges this gap by connecting surplus food with those in need. Together we can end hunger! 🤝💙",

    "what is food waste": "Food waste is food that's thrown away instead of being consumed. Globally, 1.3 billion tons of food is wasted annually while millions go hungry. Food waste also generates methane in landfills, contributing to climate change. FoodBridge helps prevent this waste! ♻️🌱",

    "what is gps": "GPS (Global Positioning System) uses satellites to determine your exact location on Earth. FoodBridge uses GPS to: 📍 Detect donor & NGO locations automatically, 📏 Calculate delivery distances, 🗺️ Show real-time maps, 🚗 Provide navigation for volunteers. Location intelligence at work! 🛰️",

    "what is ngo": "NGO stands for Non-Governmental Organization - a non-profit group working for social causes. On FoodBridge, NGOs receive donated food and distribute it to communities in need. They're our heroes on the ground making direct impact! 🏢❤️",

    // Fun facts
    "tell me a fact": "Here's a fact: Did you know a single food donation on FoodBridge can feed up to 20 people? And collectively, we've provided 125,847 meals! Every small action creates a ripple of positive change. 🌊✨",

    "fun fact": "Fun fact: If food waste were a country, it would be the 3rd largest emitter of greenhouse gases after USA and China! That's why every food donation you make through FoodBridge is literally saving the planet! 🌍💚",

    // Time & date
    "what time": `The current time is ${new Date().toLocaleTimeString()}. Perfect time to make a difference through FoodBridge! ⏰✨`,

    "what date": `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. A great day to reduce food waste! 📅🌟`,

    // Math (basic)
    "calculate": "I can help with basic calculations! Try asking me something like '2 + 2' or '10 * 5'. I'm here to help! 🔢✨"
  };

  // Check general knowledge
  for (const [key, response] of Object.entries(generalKnowledge)) {
    if (lowerQuestion.includes(key)) {
      return response;
    }
  }

  // Handle basic math calculations
  const mathMatch = lowerQuestion.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
  if (mathMatch) {
    const num1 = parseFloat(mathMatch[1]);
    const operator = mathMatch[2];
    const num2 = parseFloat(mathMatch[3]);
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
    }

    return `📊 ${num1} ${operator} ${num2} = ${result}`;
  }

  // Default helpful response
  const randomResponses = [
    "I'm here to help! 🌟 You can ask me about:\n\n🍽️ How to donate food on FoodBridge\n🏢 Joining as an NGO partner\n🚚 Becoming a volunteer\n📊 Viewing our impact statistics\n🌍 General questions about food waste, climate change, or anything else!\n\nWhat would you like to know?",

    "Great question! 💡 I can help you with FoodBridge features like:\n\n• Food donation process\n• NGO claiming system\n• Volunteer rewards & gamification\n• GPS & map features\n• Impact tracking & blockchain receipts\n\nOr ask me general questions about food waste, hunger, technology, or anything! What interests you?",

    "I'm your FoodBridge assistant! 🤖 Here's what I can help with:\n\n✨ Platform features & how-to guides\n📍 GPS and location services\n🎮 Volunteer gamification system\n🌱 Environmental impact & CO₂ savings\n💡 General knowledge questions\n\nWhat would you like to learn about today?"
  ];

  return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}

aiSend.addEventListener('click', () => {
  const message = aiInput.value.trim();
  if (message) {
    addAIMessage(message, true);
    aiInput.value = '';

    setTimeout(() => {
      const response = getAIResponse(message);
      addAIMessage(response);
    }, 500);
  }
});

aiInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    aiSend.click();
  }
});

document.querySelectorAll('.ai-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.dataset.question;
    addAIMessage(question, true);
    setTimeout(() => {
      const response = getAIResponse(question);
      addAIMessage(response);
    }, 500);
  });
});

// Auth Navigation
document.getElementById('goToLogin').addEventListener('click', () => showScreen('loginScreen'));
document.getElementById('goToRegister').addEventListener('click', () => showScreen('registerScreen'));

// Exit functionality
const exitModal = document.getElementById('exitModal');
document.getElementById('exitFromLanding').addEventListener('click', () => {
  exitModal.classList.add('active');
});

document.getElementById('confirmExit').addEventListener('click', () => {
  // Show farewell message
  addAIMessage("Thank you for using FoodBridge! Together we're making a difference. 🌱");
  aiChatWindow.classList.add('active');
  exitModal.classList.remove('active');

  // Redirect to login after a short delay
  setTimeout(() => {
    showScreen('loginScreen');
  }, 1500);
});

document.getElementById('cancelExit').addEventListener('click', () => {
  exitModal.classList.remove('active');
});

// Register Form
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    addAIMessage("Passwords don't match! Please try again.");
    aiChatWindow.classList.add('active');
    return;
  }

  showScreen('landingScreen');
  addAIMessage("Welcome to FoodBridge! Your account has been created successfully. 🎉");
  aiChatWindow.classList.add('active');
});

// Login Form
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showScreen('landingScreen');
  addAIMessage("Welcome back! You're now logged in. 👋");
  aiChatWindow.classList.add('active');
});

// Animated Counters
function animateCounter(elementId, target, suffix = '') {
  const element = document.getElementById(elementId);
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 30);
}

setTimeout(() => {
  animateCounter('wastePercent', 40);
  animateCounter('hungryPeople', 800);
  animateCounter('ghgPercent', 10);
}, 500);

// CTA Buttons with Onboarding Check
document.getElementById('ctaDonor').addEventListener('click', () => {
  currentUserRole = 'donor';
  showScreen('donorScreen');
  checkAndShowOnboarding();
});
document.getElementById('ctaNgo').addEventListener('click', () => {
  currentUserRole = 'ngo';
  showScreen('ngoScreen');
  checkAndShowOnboarding();
});
document.getElementById('ctaVolunteer').addEventListener('click', () => {
  currentUserRole = 'volunteer';
  showScreen('volunteerScreen');
  checkAndShowOnboarding();
});
document.getElementById('viewImpact').addEventListener('click', () => showScreen('impactScreen'));
document.getElementById('viewImpactFromLanding').addEventListener('click', () => showScreen('impactScreen'));

// Onboarding Flow Management
let currentOnboardingStep = 1;
const totalOnboardingSteps = 3;

function checkAndShowOnboarding() {
  if (!userProfile.profileComplete) {
    userProfile.role = currentUserRole;
    showOnboardingModal();
  }
}

function showOnboardingModal() {
  document.getElementById('onboardingModal').classList.add('active');
  currentOnboardingStep = 1;
  updateOnboardingStep();
  setupRoleSpecificFields();
}

function setupRoleSpecificFields() {
  // Hide all role-specific fields
  document.getElementById('donorFields').style.display = 'none';
  document.getElementById('ngoFields').style.display = 'none';
  document.getElementById('volunteerFields').style.display = 'none';

  // Show appropriate fields based on role
  if (currentUserRole === 'donor') {
    document.getElementById('donorFields').style.display = 'block';
    document.getElementById('roleSpecificTitle').textContent = '🍽️ Donor Information';
  } else if (currentUserRole === 'ngo') {
    document.getElementById('ngoFields').style.display = 'block';
    document.getElementById('roleSpecificTitle').textContent = '🏢 Organization Information';
  } else if (currentUserRole === 'volunteer') {
    document.getElementById('volunteerFields').style.display = 'block';
    document.getElementById('roleSpecificTitle').textContent = '🚚 Volunteer Information';
  }
}

function updateOnboardingStep() {
  // Update step visibility
  for (let i = 1; i <= totalOnboardingSteps; i++) {
    const step = document.getElementById(`onboardingStep${i}`);
    const progressStep = document.getElementById(`progressStep${i}`);

    if (i === currentOnboardingStep) {
      step.classList.add('active');
      progressStep.classList.add('active');
      progressStep.classList.remove('completed');
    } else if (i < currentOnboardingStep) {
      step.classList.remove('active');
      progressStep.classList.remove('active');
      progressStep.classList.add('completed');
    } else {
      step.classList.remove('active');
      progressStep.classList.remove('active');
      progressStep.classList.remove('completed');
    }
  }

  // Update progress lines
  for (let i = 1; i < totalOnboardingSteps; i++) {
    const line = document.getElementById(`progressLine${i}`);
    if (i < currentOnboardingStep) {
      line.classList.add('completed');
    } else {
      line.classList.remove('completed');
    }
  }

  // Update buttons
  const backBtn = document.getElementById('onboardingBack');
  const nextBtn = document.getElementById('onboardingNext');

  if (currentOnboardingStep === 1) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'block';
  }

  if (currentOnboardingStep === totalOnboardingSteps) {
    nextBtn.textContent = 'Save Profile ✓';
  } else {
    nextBtn.textContent = 'Next →';
  }
}

function validateCurrentStep() {
  if (currentOnboardingStep === 1) {
    const name = document.getElementById('onboardingName').value.trim();
    const phone = document.getElementById('onboardingPhone').value.trim();
    return name !== '' && phone !== '';
  } else if (currentOnboardingStep === 2) {
    const city = document.getElementById('onboardingCity').value.trim();
    return city !== '';
  } else if (currentOnboardingStep === 3) {
    if (currentUserRole === 'donor') {
      return document.querySelector('input[name="donorType"]:checked') !== null;
    } else if (currentUserRole === 'ngo') {
      const orgName = document.getElementById('orgName').value.trim();
      const regId = document.getElementById('regId').value.trim();
      return orgName !== '' && regId !== '';
    } else if (currentUserRole === 'volunteer') {
      return document.getElementById('vehicleType').value !== '';
    }
  }
  return false;
}

// Onboarding Navigation
document.getElementById('onboardingNext').addEventListener('click', () => {
  if (!validateCurrentStep()) {
    addAIMessage('Please fill in all required fields before proceeding.');
    aiChatWindow.classList.add('active');
    return;
  }

  if (currentOnboardingStep < totalOnboardingSteps) {
    currentOnboardingStep++;
    updateOnboardingStep();
  } else {
    // Save profile
    saveOnboardingProfile();
  }
});

document.getElementById('onboardingBack').addEventListener('click', () => {
  if (currentOnboardingStep > 1) {
    currentOnboardingStep--;
    updateOnboardingStep();
  }
});

function saveOnboardingProfile() {
  // Save all form data to userProfile
  userProfile.name = document.getElementById('onboardingName').value.trim();
  userProfile.phone = document.getElementById('onboardingPhone').value.trim();
  userProfile.lat = parseFloat(document.getElementById('onboardingLat').value) || null;
  userProfile.lng = parseFloat(document.getElementById('onboardingLng').value) || null;
  userProfile.city = document.getElementById('onboardingCity').value.trim();
  userProfile.address = document.getElementById('onboardingAddress').value.trim();

  if (currentUserRole === 'donor') {
    const donorTypeRadio = document.querySelector('input[name="donorType"]:checked');
    userProfile.donorType = donorTypeRadio ? donorTypeRadio.value : '';
  } else if (currentUserRole === 'ngo') {
    userProfile.orgName = document.getElementById('orgName').value.trim();
    userProfile.regId = document.getElementById('regId').value.trim();
  } else if (currentUserRole === 'volunteer') {
    userProfile.vehicleType = document.getElementById('vehicleType').value;
  }

  userProfile.profileComplete = true;

  // Update profile displays
  updateProfileDisplays();

  // Close modal
  document.getElementById('onboardingModal').classList.remove('active');

  // Show success message
  addAIMessage(`Welcome ${userProfile.name}! Your profile has been completed successfully. 🎉`);
  aiChatWindow.classList.add('active');
}

function updateProfileDisplays() {
  // Update donor profile
  if (document.getElementById('donorProfileName')) {
    document.getElementById('donorProfileName').textContent = userProfile.name || 'John Doe';
    document.getElementById('donorProfilePhone').textContent = userProfile.phone || 'Not set';
    document.getElementById('donorProfileType').textContent =
      userProfile.donorType === 'individual' ? 'Individual Donor' :
      userProfile.donorType === 'business' ? 'Restaurant/Event Donor' : 'Donor';
    document.getElementById('donorProfileLocation').textContent =
      userProfile.city ? `${userProfile.city}${userProfile.lat && userProfile.lng ? ` (${userProfile.lat.toFixed(4)}, ${userProfile.lng.toFixed(4)})` : ''}` : 'Not set';

    // Update location section
    if (userProfile.lat && userProfile.lng) {
      document.getElementById('donorLocationCoords').textContent = `Lat: ${userProfile.lat.toFixed(6)}, Lng: ${userProfile.lng.toFixed(6)}`;
    }
    document.getElementById('donorLocationAddress').textContent = userProfile.address || 'Not set';
  }

  // Update NGO profile
  if (document.getElementById('ngoProfileName')) {
    document.getElementById('ngoProfileName').textContent = userProfile.orgName || userProfile.name || 'Hope Foundation';
    document.getElementById('ngoProfilePhone').textContent = userProfile.phone || 'Not set';
    document.getElementById('ngoProfileRegId').textContent = userProfile.regId || 'Not set';
    document.getElementById('ngoProfileLocation').textContent =
      userProfile.city ? `${userProfile.city}${userProfile.lat && userProfile.lng ? ` (${userProfile.lat.toFixed(4)}, ${userProfile.lng.toFixed(4)})` : ''}` : 'Not set';
  }

  // Update Volunteer profile
  if (document.getElementById('volunteerProfileName')) {
    document.getElementById('volunteerProfileName').textContent = userProfile.name || 'Sarah Johnson';
    document.getElementById('volunteerProfilePhone').textContent = userProfile.phone || 'Not set';
    document.getElementById('volunteerProfileVehicle').textContent =
      userProfile.vehicleType ? userProfile.vehicleType.charAt(0).toUpperCase() + userProfile.vehicleType.slice(1) : 'Not set';
    document.getElementById('volunteerProfileLocation').textContent =
      userProfile.city ? `${userProfile.city}${userProfile.lat && userProfile.lng ? ` (${userProfile.lat.toFixed(4)}, ${userProfile.lng.toFixed(4)})` : ''}` : 'Not set';
  }
}

// Onboarding Location Detection
document.getElementById('onboardingDetectLocationBtn').addEventListener('click', () => {
  if (!navigator.geolocation) {
    addAIMessage("Geolocation is not supported by your browser. Please enter your location manually.");
    aiChatWindow.classList.add('active');
    return;
  }

  const btnText = document.getElementById('onboardingLocationBtnText');
  const spinner = document.getElementById('onboardingLocationSpinner');
  const btn = document.getElementById('onboardingDetectLocationBtn');

  btnText.style.display = 'none';
  spinner.style.display = 'flex';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);

      document.getElementById('onboardingLat').value = lat;
      document.getElementById('onboardingLng').value = lng;
      document.getElementById('onboardingCoordinates').value = `Lat: ${lat}, Lng: ${lng}`;

      const mockAddress = generateMockAddress(lat, lng);
      const city = mockAddress.split(',')[1].trim();

      document.getElementById('onboardingCity').value = city;
      document.getElementById('onboardingAddress').value = mockAddress;

      btnText.style.display = 'inline';
      spinner.style.display = 'none';
      btn.disabled = false;

      addAIMessage(`📍 Location detected: ${city}`);
      aiChatWindow.classList.add('active');
    },
    (error) => {
      btnText.style.display = 'inline';
      spinner.style.display = 'none';
      btn.disabled = false;

      addAIMessage("Unable to detect location. Please enter your location manually.");
      aiChatWindow.classList.add('active');
    }, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
});

// Radio Option Selection
document.getElementById('donorIndividual').addEventListener('click', function() {
  document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
  this.classList.add('selected');
  document.querySelector('input[name="donorType"][value="individual"]').checked = true;
});

document.getElementById('donorBusiness').addEventListener('click', function() {
  document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
  this.classList.add('selected');
  document.querySelector('input[name="donorType"][value="business"]').checked = true;
});

// Donor Location Section Detection
const donorDetectLocationBtn = document.getElementById('donorDetectLocationBtn');
if (donorDetectLocationBtn) {
  donorDetectLocationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      addAIMessage("Geolocation is not supported by your browser.");
      aiChatWindow.classList.add('active');
      return;
    }

    const btnText = document.getElementById('donorLocationBtnText');
    const spinner = document.getElementById('donorLocationSpinner');

    btnText.style.display = 'none';
    spinner.style.display = 'flex';
    donorDetectLocationBtn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);

        // Update profile
        userProfile.lat = parseFloat(lat);
        userProfile.lng = parseFloat(lng);

        const mockAddress = generateMockAddress(lat, lng);
        const city = mockAddress.split(',')[1].trim();

        userProfile.city = city;
        userProfile.address = mockAddress;

        // Update displays
        document.getElementById('donorLocationCoords').textContent = `Lat: ${lat}, Lng: ${lng}`;
        document.getElementById('donorLocationAddress').textContent = mockAddress;
        document.getElementById('donorProfileLocation').textContent =
          `${city} (${parseFloat(lat).toFixed(4)}, ${parseFloat(lng).toFixed(4)})`;

        btnText.style.display = 'inline';
        spinner.style.display = 'none';
        donorDetectLocationBtn.disabled = false;

        addAIMessage(`📍 Location updated: ${city}`);
        aiChatWindow.classList.add('active');
      },
      (error) => {
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
        donorDetectLocationBtn.disabled = false;

        addAIMessage("Unable to detect location. Please try again.");
        aiChatWindow.classList.add('active');
      }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

// Navigation to Landing
document.getElementById('donorToLanding').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('ngoToLanding').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('volunteerToLanding').addEventListener('click', () => showScreen('landingScreen'));
document.getElementById('impactToLanding').addEventListener('click', () => showScreen('landingScreen'));

// Logout
document.getElementById('donorLogout').addEventListener('click', () => showScreen('loginScreen'));
document.getElementById('ngoLogout').addEventListener('click', () => showScreen('loginScreen'));
document.getElementById('volunteerLogout').addEventListener('click', () => showScreen('loginScreen'));
document.getElementById('impactLogout').addEventListener('click', () => showScreen('loginScreen'));
document.getElementById('impactLogoutSidebar').addEventListener('click', () => showScreen('loginScreen'));

// Image Preview
const foodImageInput = document.getElementById('foodImage');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');

if (foodImageInput) {
  foodImageInput.addEventListener('input', (e) => {
    const url = e.target.value.trim();
    if (url) {
      previewImg.src = url;
      imagePreview.style.display = 'block';
      previewImg.onerror = () => {
        imagePreview.style.display = 'none';
      };
    } else {
      imagePreview.style.display = 'none';
    }
  });
}

// Geolocation Detection
const detectLocationBtn = document.getElementById('detectLocationBtn');
const locationBtnText = document.getElementById('locationBtnText');
const locationSpinner = document.getElementById('locationSpinner');
const coordinatesDisplay = document.getElementById('coordinatesDisplay');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const manualAddressInput = document.getElementById('manualAddress');

if (detectLocationBtn) {
  detectLocationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      addAIMessage("Geolocation is not supported by your browser. Please enter your address manually.");
      aiChatWindow.classList.add('active');
      return;
    }

    // Show loading state
    locationBtnText.style.display = 'none';
    locationSpinner.style.display = 'flex';
    detectLocationBtn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);

        // Update hidden inputs
        latitudeInput.value = lat;
        longitudeInput.value = lng;

        // Update display
        coordinatesDisplay.value = `Lat: ${lat}, Lng: ${lng}`;

        // Generate mock address based on coordinates
        const mockAddress = generateMockAddress(lat, lng);
        manualAddressInput.value = mockAddress;

        // Reset button state
        locationBtnText.style.display = 'inline';
        locationSpinner.style.display = 'none';
        detectLocationBtn.disabled = false;

        addAIMessage(`📍 Location detected successfully! ${mockAddress}`);
        aiChatWindow.classList.add('active');
      },
      (error) => {
        // Reset button state
        locationBtnText.style.display = 'inline';
        locationSpinner.style.display = 'none';
        detectLocationBtn.disabled = false;

        let errorMessage = "Unable to detect location. Please enter your address manually.";
        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = "Location permission denied. Please enable location access or enter your address manually.";
        }

        addAIMessage(errorMessage);
        aiChatWindow.classList.add('active');
      }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

// Mock address generator
function generateMockAddress(lat, lng) {
  const streets = ['MG Road', 'Brigade Road', 'Residency Road', 'Koramangala', 'Indiranagar', 'Whitefield Road', 'HSR Layout', 'Jayanagar'];
  const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Hyderabad'];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomNumber = Math.floor(Math.random() * 500) + 1;
  const pincode = Math.floor(Math.random() * 99999) + 500001;

  return `${randomNumber} ${randomStreet}, ${randomCity}, Karnataka ${pincode}`;
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance.toFixed(1);
}

// Donor Listing Form
document.getElementById('donorListingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const dietaryType = document.querySelector('input[name="dietaryType"]:checked').value;
  const lat = parseFloat(latitudeInput.value) || (Math.random() * 4 + 12); // Default to Bengaluru area
  const lng = parseFloat(longitudeInput.value) || (Math.random() * 4 + 77);

  const newDonation = {
    id: donations.length + 1,
    title: document.getElementById('foodTitle').value,
    quantity: parseInt(document.getElementById('foodQuantity').value),
    category: document.getElementById('foodCategory').value,
    dietaryType: dietaryType,
    expiry: new Date(document.getElementById('foodExpiry').value),
    tags: document.getElementById('foodTags').value,
    imageUrl: document.getElementById('foodImage').value,
    lat: lat,
    lng: lng,
    address: manualAddressInput.value || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
    pickupInstructions: document.getElementById('pickupInstructions').value,
    status: "available"
  };

  donations.push(newDonation);
  donationHistory.unshift({
    title: newDonation.title,
    quantity: newDonation.quantity,
    date: new Date().toISOString().split('T')[0],
    status: "pending"
  });
  renderDonations();
  e.target.reset();
  imagePreview.style.display = 'none';
  coordinatesDisplay.value = '';
  latitudeInput.value = '';
  longitudeInput.value = '';

  addAIMessage("Your food listing has been added successfully! NGOs in your area will be notified. 🎉");
  aiChatWindow.classList.add('active');
});

// Render Donations
function renderDonations() {
  const grid = document.getElementById('donationsGrid');
  grid.innerHTML = '';

  donations.forEach(donation => {
    const card = document.createElement('div');
    card.className = 'donation-card';

    const timeLeft = Math.max(0, Math.floor((donation.expiry - Date.now()) / 60000));
    const hours = Math.floor(timeLeft / 60);
    const minutes = timeLeft % 60;
    const freshness = Math.min(100, (timeLeft / 180) * 100);

    let freshnessColor = '#4CAF50';
    if (freshness < 30) freshnessColor = '#f44336';
    else if (freshness < 60) freshnessColor = '#FF9800';

    const categoryLabel = {
      'cooked': 'Cooked Meal',
      'raw': 'Raw Ingredients',
      'packaged': 'Packaged Food'
    } [donation.category] || donation.category;

    const dietaryIcon = donation.dietaryType === 'veg' ? '🥬' : '🍗';

    card.innerHTML = `
           ${donation.imageUrl ? `<img src="${donation.imageUrl}" alt="${donation.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;" onerror="this.style.display='none'">` : ''}
           <div class="donation-title">${donation.title} ${dietaryIcon}</div>
           <div class="donation-info">
             <strong>Category:</strong> ${categoryLabel}<br>
             <strong>Quantity:</strong> ${donation.quantity} kg<br>
             <strong>Location:</strong> ${donation.address || 'Not specified'}<br>
             ${donation.tags ? `<strong>Tags:</strong> ${donation.tags}<br>` : ''}
             ${donation.pickupInstructions ? `<strong>Instructions:</strong> ${donation.pickupInstructions}<br>` : ''}
           </div>
           <div class="countdown-timer">⏰ Expires in ${hours}h ${minutes}m</div>
           <div class="freshness-bar">
             <div class="freshness-fill" style="width: ${freshness}%; background: ${freshnessColor};"></div>
           </div>
         `;

    grid.appendChild(card);
  });
}

// Update timers every minute
setInterval(renderDonations, 60000);

// NGO Dashboard
function renderNGOListings() {
  const list = document.getElementById('ngoListings');
  list.innerHTML = '';

  // Mock NGO location (Bengaluru central area)
  const ngoLat = 12.9716;
  const ngoLng = 77.5946;

  donations.forEach(donation => {
    const item = document.createElement('div');
    item.className = 'donation-list-item';

    const timeLeft = Math.max(0, Math.floor((donation.expiry - Date.now()) / 60000));
    const hours = Math.floor(timeLeft / 60);
    const minutes = timeLeft % 60;

    // Calculate distance from NGO to donation
    const distance = calculateDistance(ngoLat, ngoLng, donation.lat, donation.lng);

    const categoryLabel = {
      'cooked': 'Cooked Meal',
      'raw': 'Raw Ingredients',
      'packaged': 'Packaged Food'
    } [donation.category] || donation.category;

    const dietaryIcon = donation.dietaryType === 'veg' ? '🥬' : '🍗';

    item.innerHTML = `
           ${donation.imageUrl ? `<img src="${donation.imageUrl}" alt="${donation.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;" onerror="this.style.display='none'">` : ''}
           <h4>${donation.title} ${dietaryIcon}</h4>
           <div class="donation-meta">
             <span>⚖️ ${donation.quantity} kg</span>
             <span>📍 ${distance} km away</span>
           </div>
           <div class="donation-meta">
             <span>🍽️ ${categoryLabel}</span>
             <span>⏰ ${hours}h ${minutes}m left</span>
           </div>
           <div class="donation-meta" style="font-size: 12px; color: #888; margin-top: 5px;">
             <span>📌 ${donation.address || 'Address not specified'}</span>
           </div>
           ${donation.pickupInstructions ? `<div style="font-size: 12px; color: #666; margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 5px;"><strong>Pickup:</strong> ${donation.pickupInstructions}</div>` : ''}
           <button class="btn-claim" data-id="${donation.id}">Claim Now</button>
         `;

    list.appendChild(item);
  });

  document.querySelectorAll('.btn-claim').forEach(btn => {
    btn.addEventListener('click', () => {
      currentClaimId = btn.dataset.id;
      document.getElementById('claimModal').classList.add('active');
    });
  });
}

let currentClaimId = null;

document.getElementById('confirmClaim').addEventListener('click', () => {
  document.getElementById('claimModal').classList.remove('active');
  const donation = donations.find(d => d.id == currentClaimId);
  if (donation) {
    claimedItems.unshift({
      title: donation.title,
      quantity: donation.quantity,
      date: new Date().toISOString().split('T')[0],
      status: "claimed",
      donor: "Various Donor"
    });
  }
  addAIMessage("Donation claimed successfully! A volunteer has been assigned for delivery. 🚚");
  aiChatWindow.classList.add('active');
});

document.getElementById('cancelClaim').addEventListener('click', () => {
  document.getElementById('claimModal').classList.remove('active');
});

// Initialize Leaflet Map
function initializeMap() {
  // Remove existing map instance if it exists
  if (map) {
    try {
      map.remove();
    } catch (e) {
      console.log('Error removing map:', e);
    }
    map = null;
  }

  // Wait for container to be visible and ready with longer delay
  setTimeout(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Map container not found');
      return;
    }

    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
      console.error('Leaflet library not loaded');
      mapContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; flex-direction: column; gap: 15px;"><p style="font-size: 18px;">📍 Loading map...</p><p style="font-size: 14px; color: #999;">Please wait a moment</p></div>';

      // Retry after Leaflet loads
      setTimeout(() => initializeMap(), 1000);
      return;
    }

    // Clear any existing content
    mapContainer.innerHTML = '';

    try {
      // Create map centered on Bengaluru
      map = L.map('map', {
        center: [12.9716, 77.5946],
        zoom: 13,
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: true,
        preferCanvas: false
      });

      // Add OpenStreetMap tiles
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
        errorTileUrl: ''
      });

      tileLayer.addTo(map);

      // Wait for tiles to start loading
      tileLayer.on('loading', () => {
        console.log('Map tiles loading...');
      });

      tileLayer.on('load', () => {
        console.log('Map tiles loaded successfully');
      });

      // Force map to refresh its size multiple times
      const refreshMap = () => {
        if (map) {
          map.invalidateSize();
        }
      };

      setTimeout(refreshMap, 100);
      setTimeout(refreshMap, 300);
      setTimeout(refreshMap, 600);
      setTimeout(refreshMap, 1000);

      // Add markers after map is ready
      setTimeout(() => {
        // Add donation markers
        donations.forEach(donation => {
          try {
            addDonationMarker(donation);
          } catch (e) {
            console.error('Error adding donation marker:', e);
          }
        });

        // Add volunteer markers
        activeVolunteers.forEach(volunteer => {
          try {
            addVolunteerMarker(volunteer);
          } catch (e) {
            console.error('Error adding volunteer marker:', e);
          }
        });

        // Add NGO marker (current location)
        try {
          const ngoIcon = L.divIcon({
            className: 'custom-div-icon',
            html: '<div class="custom-marker marker-ngo">🏢</div>',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
          });

          L.marker([12.9716, 77.5946], {
              icon: ngoIcon
            })
            .addTo(map)
            .bindPopup('<div style="text-align: center; padding: 10px;"><strong>Your NGO Location</strong><br>Hope Foundation</div>');
        } catch (e) {
          console.error('Error adding NGO marker:', e);
        }

        console.log('✅ Map initialized successfully with', donations.length, 'donations and', activeVolunteers.length, 'volunteers');
      }, 300);

    } catch (error) {
      console.error('Error initializing map:', error);
      mapContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; flex-direction: column; gap: 15px;"><p style="font-size: 18px;">⚠️ Map initialization failed</p><p style="font-size: 14px; color: #999;">Retrying in a moment...</p></div>';

      // Retry initialization after 2 seconds
      setTimeout(() => initializeMap(), 2000);
    }
  }, 800);
}

// Add donation marker with popup
function addDonationMarker(donation) {
  const timeLeft = Math.max(0, Math.floor((donation.expiry - Date.now()) / 60000));
  const hours = Math.floor(timeLeft / 60);
  const minutes = timeLeft % 60;

  const categoryLabel = {
    'cooked': 'Cooked Meal',
    'raw': 'Raw Ingredients',
    'packaged': 'Packaged Food'
  } [donation.category] || donation.category;

  const dietaryIcon = donation.dietaryType === 'veg' ? '🥬' : '🍗';

  const donationIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div class="custom-marker marker-donation">🍽️</div>',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const popupContent = `
         <div class="popup-card">
           <div class="popup-header">
             <h3>${donation.title} ${dietaryIcon}</h3>
             <p>${categoryLabel}</p>
           </div>
           <div class="popup-body">
             ${donation.imageUrl ? `<img src="${donation.imageUrl}" class="popup-image" alt="${donation.title}" onerror="this.style.display='none'">` : ''}
             <div class="popup-info">
               <strong>Quantity:</strong> ${donation.quantity} kg<br>
               <strong>Location:</strong> ${donation.address}<br>
               ${donation.pickupInstructions ? `<strong>Instructions:</strong> ${donation.pickupInstructions}<br>` : ''}
               ${donation.tags ? `<strong>Tags:</strong> ${donation.tags}` : ''}
             </div>
             <div class="popup-timer">⏰ Expires in ${hours}h ${minutes}m</div>
             <button class="popup-btn" onclick="openVolunteerSidebar(${donation.id})">
               🚚 Claim & Assign Volunteer
             </button>
           </div>
         </div>
       `;

  L.marker([donation.lat, donation.lng], {
      icon: donationIcon
    })
    .addTo(map)
    .bindPopup(popupContent, {
      maxWidth: 300,
      className: 'custom-popup'
    });
}

// Add volunteer marker
function addVolunteerMarker(volunteer) {
  const volunteerIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div class="custom-marker marker-volunteer">🚚</div>',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const popupContent = `
         <div style="text-align: center; padding: 15px;">
           <strong style="font-size: 16px;">${volunteer.name}</strong><br>
           <span style="color: #666; font-size: 13px;">${volunteer.vehicle}</span><br>
           <span style="color: #FF9800; font-size: 14px;">⭐ ${volunteer.rating}</span><br>
           <span style="color: #666; font-size: 12px;">${volunteer.deliveries} deliveries completed</span>
         </div>
       `;

  L.marker([volunteer.lat, volunteer.lng], {
      icon: volunteerIcon
    })
    .addTo(map)
    .bindPopup(popupContent);
}

// Open volunteer assignment sidebar
function openVolunteerSidebar(donationId) {
  selectedDonationForAssignment = donations.find(d => d.id === donationId);
  if (!selectedDonationForAssignment) return;

  const sidebar = document.getElementById('volunteerSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const content = document.getElementById('volunteerSidebarContent');

  // Sort volunteers by distance (mock - in real app would calculate actual distance)
  const sortedVolunteers = [...activeVolunteers].sort((a, b) => {
    const distA = parseFloat(a.distance);
    const distB = parseFloat(b.distance);
    return distA - distB;
  });

  // Render volunteer list
  content.innerHTML = sortedVolunteers.map(volunteer => `
         <div class="volunteer-item" onclick="assignDelivery(${donationId}, ${volunteer.id})">
           <div class="volunteer-item-header">
             <div class="volunteer-avatar">${volunteer.name.charAt(0)}</div>
             <div class="volunteer-info">
               <h4>${volunteer.name}</h4>
               <p>${volunteer.vehicle} • ${volunteer.distance} away</p>
             </div>
           </div>
           <div class="volunteer-stats">
             <span>⭐ ${volunteer.rating}</span>
             <span>🚚 ${volunteer.deliveries} deliveries</span>
           </div>
           <button class="volunteer-assign-btn">
             Assign to ${volunteer.name.split(' ')[0]}
           </button>
         </div>
       `).join('');

  sidebar.classList.add('active');
  overlay.classList.add('active');
}

// Close sidebar
document.getElementById('closeSidebar').addEventListener('click', () => {
  document.getElementById('volunteerSidebar').classList.remove('active');
  document.getElementById('sidebarOverlay').classList.remove('active');
});

document.getElementById('sidebarOverlay').addEventListener('click', () => {
  document.getElementById('volunteerSidebar').classList.remove('active');
  document.getElementById('sidebarOverlay').classList.remove('active');
});

// Assign delivery to volunteer
function assignDelivery(donationId, volunteerId) {
  const donation = donations.find(d => d.id === donationId);
  const volunteer = activeVolunteers.find(v => v.id === volunteerId);

  if (!donation || !volunteer) return;

  // Mock NGO location
  const ngoLocation = {
    lat: 12.9716,
    lng: 77.5946,
    address: "Hope Foundation, MG Road, Bengaluru"
  };

  // Create delivery assignment object
  const deliveryAssignment = {
    id: Date.now(),
    donationId: donation.id,
    volunteerId: volunteer.id,
    pickup: {
      lat: donation.lat,
      lng: donation.lng,
      address: donation.address,
      instructions: donation.pickupInstructions,
      foodTitle: donation.title,
      quantity: donation.quantity
    },
    drop: ngoLocation,
    assignedAt: new Date().toISOString(),
    status: 'assigned'
  };

  // In a real application, this would send the data to the backend
  console.log('📦 Delivery Assignment Created:', deliveryAssignment);
  console.log(`🚚 Volunteer ${volunteer.name} assigned to deliver ${donation.title}`);
  console.log(`📍 Pickup: ${donation.address}`);
  console.log(`📍 Drop: ${ngoLocation.address}`);

  // Add to claimed items
  claimedItems.unshift({
    title: donation.title,
    quantity: donation.quantity,
    date: new Date().toISOString().split('T')[0],
    status: "claimed",
    donor: "Various Donor",
    volunteer: volunteer.name
  });

  // Update volunteer status
  volunteer.status = 'assigned';

  // Close sidebar
  document.getElementById('volunteerSidebar').classList.remove('active');
  document.getElementById('sidebarOverlay').classList.remove('active');

  // Show success message
  addAIMessage(`🎉 Delivery assigned to ${volunteer.name}! They will pick up ${donation.title} (${donation.quantity} kg) from ${donation.address} and deliver to your NGO. 🚚`);
  aiChatWindow.classList.add('active');

  // Update the NGO listings view
  renderNGOListings();
}

// Make function available globally
window.openVolunteerSidebar = openVolunteerSidebar;
window.assignDelivery = assignDelivery;

// Volunteer Dashboard
function renderDeliveries() {
  const container = document.getElementById('deliveryAssignments');
  if (!container) {
    console.log('Delivery assignments container not found');
    return;
  }

  container.innerHTML = '';

  // Mock NGO locations
  const ngoLocations = [{
      name: 'Hope Foundation',
      lat: 12.9716,
      lng: 77.5946,
      address: 'MG Road, Bengaluru'
    },
    {
      name: 'Community Center',
      lat: 12.9352,
      lng: 77.6245,
      address: 'Brigade Road, Bengaluru'
    },
    {
      name: 'Shelter Home',
      lat: 13.0358,
      lng: 77.5970,
      address: 'Indiranagar, Bengaluru'
    }
  ];

  // If no donations, create sample deliveries
  let activeDeliveries = [];

  if (donations.length === 0) {
    // Create sample deliveries
    activeDeliveries = [{
        id: 1,
        pickup: '123 MG Road, Bengaluru, Karnataka 560001',
        pickupLat: 12.9716,
        pickupLng: 77.5946,
        pickupInstructions: 'Enter through the main gate',
        drop: 'Hope Foundation',
        dropLat: 12.9800,
        dropLng: 77.6000,
        distance: '3.2 km',
        foodTitle: 'Fresh Vegetables',
        quantity: 15
      },
      {
        id: 2,
        pickup: '456 Brigade Road, Bengaluru, Karnataka 560025',
        pickupLat: 12.9352,
        pickupLng: 77.6245,
        pickupInstructions: 'Ring doorbell twice',
        drop: 'Community Center',
        dropLat: 12.9450,
        dropLng: 77.6350,
        distance: '1.8 km',
        foodTitle: 'Cooked Rice Meals',
        quantity: 25
      },
      {
        id: 3,
        pickup: '789 Indiranagar, Bengaluru, Karnataka 560038',
        pickupLat: 13.0358,
        pickupLng: 77.5970,
        pickupInstructions: 'Use back entrance near parking',
        drop: 'Shelter Home',
        dropLat: 13.0450,
        dropLng: 77.6100,
        distance: '4.5 km',
        foodTitle: 'Bread & Bakery',
        quantity: 10
      }
    ];
  } else {
    // Generate deliveries from actual donations (max 3)
    activeDeliveries = donations.slice(0, 3).map((donation, index) => {
      const ngo = ngoLocations[index % ngoLocations.length];
      const distance = calculateDistance(donation.lat, donation.lng, ngo.lat, ngo.lng);

      return {
        id: index + 1,
        pickup: donation.address || `${donation.title} Location`,
        pickupLat: donation.lat,
        pickupLng: donation.lng,
        pickupInstructions: donation.pickupInstructions || '',
        drop: ngo.name,
        dropLat: ngo.lat,
        dropLng: ngo.lng,
        distance: `${distance} km`,
        foodTitle: donation.title,
        quantity: donation.quantity
      };
    });
  }

  // Render delivery cards
  activeDeliveries.forEach((delivery, index) => {
    const card = document.createElement('div');
    card.className = 'delivery-card';
    card.setAttribute('data-delivery-id', delivery.id);
    card.innerHTML = `
           <h4>🚚 Delivery #${delivery.id}</h4>
           <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
             <strong>${delivery.foodTitle}</strong> (${delivery.quantity} kg)
           </div>
           <div class="delivery-route">
             <p><strong>📍 Pickup:</strong> ${delivery.pickup}</p>
             ${delivery.pickupInstructions ? `<p style="font-size: 12px; color: #666; margin-left: 20px;">💡 ${delivery.pickupInstructions}</p>` : ''}
             <p><strong>📍 Drop:</strong> ${delivery.drop}</p>
             <p><strong>🚗 Distance:</strong> ${delivery.distance}</p>
           </div>
           <button class="btn-start-delivery" data-delivery-index="${index}" data-pickup-lat="${delivery.pickupLat}" data-pickup-lng="${delivery.pickupLng}" data-drop-lat="${delivery.dropLat}" data-drop-lng="${delivery.dropLng}" data-pickup="${delivery.pickup}" data-drop="${delivery.drop}" data-distance="${delivery.distance}">🚀 Show Route on Map</button>
           <a href="https://www.google.com/maps/dir/?api=1&origin=${delivery.pickupLat},${delivery.pickupLng}&destination=${delivery.dropLat},${delivery.dropLng}" 
              target="_blank" 
              rel="noopener noreferrer" 
              style="display: block; width: 100%; padding: 12px; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px; font-family: 'Poppins', sans-serif; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin-top: 10px; text-align: center;">
             🗺️ Navigate with Google Maps
           </a>
         `;
    container.appendChild(card);
  });

  // Store deliveries for route visualization
  window.activeDeliveries = activeDeliveries;

  // Add event listeners
  document.querySelectorAll('.btn-start-delivery').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      const delivery = {
        pickupLat: parseFloat(button.getAttribute('data-pickup-lat')),
        pickupLng: parseFloat(button.getAttribute('data-pickup-lng')),
        dropLat: parseFloat(button.getAttribute('data-drop-lat')),
        dropLng: parseFloat(button.getAttribute('data-drop-lng')),
        pickup: button.getAttribute('data-pickup'),
        drop: button.getAttribute('data-drop'),
        distance: button.getAttribute('data-distance')
      };

      // Show route on volunteer map if available
      showDeliveryRoute(delivery);

      // Highlight active card
      document.querySelectorAll('.delivery-card').forEach(c => {
        c.style.border = '2px solid #e0e0e0';
      });
      button.closest('.delivery-card').style.border = '3px solid #2196F3';

      addAIMessage(`📍 Route displayed! The path from ${delivery.pickup} to ${delivery.drop} is now shown on the map. Use Google Maps for turn-by-turn navigation. 🚚`);
      aiChatWindow.classList.add('active');
    });
  });

  console.log(`✅ Rendered ${activeDeliveries.length} delivery assignments`);
}

// Volunteer map instance
let volunteerMap = null;

// Initialize volunteer map
function initializeVolunteerMap() {
  // Remove existing map if present
  if (volunteerMap) {
    try {
      volunteerMap.remove();
    } catch (e) {
      console.log('Error removing volunteer map:', e);
    }
    volunteerMap = null;
  }

  setTimeout(() => {
    const mapContainer = document.getElementById('volunteerMap');
    if (!mapContainer) return;

    if (typeof L === 'undefined') {
      mapContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;"><p>📍 Loading map...</p></div>';
      setTimeout(() => initializeVolunteerMap(), 1000);
      return;
    }

    mapContainer.innerHTML = '';

    try {
      volunteerMap = L.map('volunteerMap', {
        center: [12.9716, 77.5946],
        zoom: 12,
        zoomControl: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(volunteerMap);

      // Refresh map size
      setTimeout(() => {
        if (volunteerMap) volunteerMap.invalidateSize();
      }, 100);
      setTimeout(() => {
        if (volunteerMap) volunteerMap.invalidateSize();
      }, 300);

      console.log('✅ Volunteer map initialized');
    } catch (error) {
      console.error('Error initializing volunteer map:', error);
    }
  }, 500);
}

// Show delivery route on volunteer map
function showDeliveryRoute(delivery) {
  if (!volunteerMap) {
    console.log('Volunteer map not initialized');
    return;
  }

  // Clear existing route if any
  if (activeRoute) {
    volunteerMap.removeLayer(activeRoute);
    activeRoute = null;
  }

  // Clear existing markers
  volunteerMap.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      volunteerMap.removeLayer(layer);
    }
  });

  // Pickup marker (Red/Orange)
  const pickupIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div class="custom-marker" style="background: linear-gradient(135deg, #f44336, #e91e63); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; border: 3px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">📍</div>',
    iconSize: [45, 45],
    iconAnchor: [22, 45]
  });

  L.marker([delivery.pickupLat, delivery.pickupLng], {
      icon: pickupIcon
    })
    .addTo(volunteerMap)
    .bindPopup(`<div style="text-align: center; padding: 10px;"><strong>🍽️ Pickup Location</strong><br>${delivery.pickup}</div>`);

  // Drop marker (Green)
  const dropIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div class="custom-marker" style="background: linear-gradient(135deg, #4CAF50, #66BB6A); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; border: 3px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">🏢</div>',
    iconSize: [45, 45],
    iconAnchor: [22, 45]
  });

  L.marker([delivery.dropLat, delivery.dropLng], {
      icon: dropIcon
    })
    .addTo(volunteerMap)
    .bindPopup(`<div style="text-align: center; padding: 10px;"><strong>🏢 Drop Location</strong><br>${delivery.drop}</div>`);

  // Draw route polyline (dashed blue line)
  const routeCoordinates = [
    [delivery.pickupLat, delivery.pickupLng],
    [delivery.dropLat, delivery.dropLng]
  ];

  activeRoute = L.polyline(routeCoordinates, {
    color: '#2196F3',
    weight: 5,
    opacity: 0.8,
    dashArray: '10, 10',
    lineJoin: 'round'
  }).addTo(volunteerMap);

  // Add direction arrow at midpoint
  const midLat = (delivery.pickupLat + delivery.dropLat) / 2;
  const midLng = (delivery.pickupLng + delivery.dropLng) / 2;

  const directionIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div style="width: 40px; height: 40px; background: #2196F3; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: white; border: 3px solid white; box-shadow: 0 4px 15px rgba(33,150,243,0.5); animation: pulse 2s infinite;">🚗</div>',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  L.marker([midLat, midLng], {
      icon: directionIcon
    })
    .addTo(volunteerMap)
    .bindPopup(`<div style="text-align: center; padding: 10px;"><strong>🚗 Delivery Route</strong><br>Distance: ${delivery.distance}</div>`);

  // Fit map bounds to show entire route
  const bounds = L.latLngBounds(routeCoordinates);
  volunteerMap.fitBounds(bounds, {
    padding: [50, 50]
  });

  // Add CSS for pulse animation
  if (!document.getElementById('pulse-animation-style')) {
    const style = document.createElement('style');
    style.id = 'pulse-animation-style';
    style.textContent = `
           @keyframes pulse {
             0%, 100% { transform: scale(1); opacity: 1; }
             50% { transform: scale(1.1); opacity: 0.8; }
           }
         `;
    document.head.appendChild(style);
  }

  console.log('✅ Route displayed on volunteer map');
}

// Leaderboard
function renderLeaderboard() {
  const container = document.getElementById('leaderboard');
  container.innerHTML = '';

  leaderboardData.forEach((volunteer, index) => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';

    let rankClass = 'regular';
    if (index === 0) rankClass = 'gold';
    else if (index === 1) rankClass = 'silver';
    else if (index === 2) rankClass = 'bronze';

    item.innerHTML = `
           <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
           <div class="leaderboard-info">
             <div class="leaderboard-name">${volunteer.name}</div>
             <div class="leaderboard-level">${volunteer.level}</div>
           </div>
           <div class="leaderboard-points">${volunteer.points}</div>
         `;

    container.appendChild(item);
  });
}

// Impact Dashboard
function renderImpactDashboard() {
  animateCounter('impactMeals', 125847);
  animateCounter('impactCO2', 45320);
  animateCounter('impactReceipts', 89542);

  const chartData = [{
      label: 'Jan',
      value: 8500
    },
    {
      label: 'Feb',
      value: 9200
    },
    {
      label: 'Mar',
      value: 10800
    },
    {
      label: 'Apr',
      value: 11500
    },
    {
      label: 'May',
      value: 13200
    },
    {
      label: 'Jun',
      value: 15000
    }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));
  const chart = document.getElementById('impactChart');
  chart.innerHTML = '';

  chartData.forEach((data, index) => {
    const barItem = document.createElement('div');
    barItem.className = 'bar-item';

    const height = (data.value / maxValue) * 100;

    barItem.innerHTML = `
           <div class="bar" style="height: 0%; position: relative;">
             <div class="bar-value">${data.value}</div>
           </div>
           <div class="bar-label">${data.label}</div>
         `;

    chart.appendChild(barItem);

    setTimeout(() => {
      const bar = barItem.querySelector('.bar');
      bar.style.height = `${height}%`;
    }, 200 + (index * 100));
  });
}

// Initialize dashboards when screens are shown
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      const target = mutation.target;
      if (target.classList.contains('active')) {
        if (target.id === 'donorScreen') {
          renderDonations();
        } else if (target.id === 'ngoScreen') {
          renderNGOListings();
          // Initialize map when NGO screen becomes active
          setTimeout(() => {
            initializeMap();
          }, 300);
        } else if (target.id === 'volunteerScreen') {
          renderDeliveries();
          renderLeaderboard();
          // Initialize volunteer map
          setTimeout(() => {
            initializeVolunteerMap();
          }, 300);
        } else if (target.id === 'impactScreen') {
          renderImpactDashboard();
        }
      }
    }
  });
});

document.querySelectorAll('.screen').forEach(screen => {
  observer.observe(screen, {
    attributes: true
  });
});

// Simulate real-time updates
setInterval(() => {
  const volunteerPoints = document.getElementById('volunteerPoints');
  const impactMeals = document.getElementById('impactMeals');

  if (volunteerPoints) {
    const current = parseInt(volunteerPoints.textContent);
    volunteerPoints.textContent = current + 5;
  }

  if (impactMeals && document.getElementById('impactScreen').classList.contains('active')) {
    const current = parseInt(impactMeals.textContent);
    impactMeals.textContent = current + 5;
  }
}, 5000);