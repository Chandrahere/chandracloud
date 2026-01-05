document.addEventListener("DOMContentLoaded", function() {
    // 1. DEFINE THE ICONIC CARD HTML (No Changes here)
    const iconicCardHTML = `
    <div class="premium-card" style="background: white; border: 2px solid #202124; border-radius: 12px; padding: 1.5rem; transition: 0.3s; box-shadow: 0 4px 10px rgba(0,0,0,0.05); display: flex; flex-direction: column; position: relative; overflow: hidden;">
        <div class="card-badge" style="position: absolute; top: 0; right: 0; background: #202124; color: white; padding: 5px 12px; border-bottom-left-radius: 10px; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px;">PROTOTYPE</div>
        <div style="height: 120px; background: #f8f9fa; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
           <i class="fas fa-laptop-code" style="font-size:3.5rem; color:#202124;"></i>
        </div>
        <h3>💼 Iconic Usecase</h3>
        <p style="color: #555; font-size: 0.95rem; margin-bottom: 10px;">Your Digital HQ. Download template, edit <code>user_data.js</code>, and deploy.</p>
        <ul style="font-size:0.85rem; color:#666; margin-bottom:1rem; list-style:none;">
            <li><i class="fas fa-check" style="color:#34a853;"></i> Pre-built SEO & Design</li>
            <li><i class="fas fa-check" style="color:#34a853;"></i> AI Agent Integration Ready</li>
        </ul>
        <div style="margin-top:auto; display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
            <button onclick="downloadRealTemplate()" class="hero-btn btn-outline" style="justify-content:center; font-size:0.9rem; border: 1px solid #ccc; background: transparent; padding: 8px; border-radius: 6px; cursor: pointer;">
                <i class="fas fa-download"></i> Download
            </button>
            <button onclick="goToSubscribe()" class="hero-btn btn-main" style="background:#202124; color: white; justify-content:center; font-size:0.9rem; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">
                <i class="fas fa-rocket"></i> Deploy
            </button>
        </div>
    </div>
    `;

    // 2. INJECT CARD INTO HUSTLE HUB
    const hustleGrid = document.querySelector("#hustle .grid");
    if(hustleGrid) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = iconicCardHTML;
        hustleGrid.insertBefore(tempDiv.firstElementChild, hustleGrid.firstChild);
    }
});

// === FUNCTION: REDIRECT TO SUBSCRIPTION ===
function goToSubscribe() {
    const computeSection = document.getElementById('compute');
    const navLinks = document.querySelectorAll('.section-content');
    navLinks.forEach(s => s.classList.remove('active'));
    computeSection.classList.add('active');
    setTimeout(() => {
        const card = document.getElementById('aiLaunchpadCard');
        if(card) {
            card.scrollIntoView({behavior: 'smooth', block: 'center'});
            card.style.transition = "border 0.3s";
            card.style.border = "4px solid #ea4335"; 
            setTimeout(() => card.style.border = "2px solid #1a73e8", 800);
        }
    }, 300);
}

// === FUNCTION: DOWNLOAD ZIP ===
function downloadRealTemplate() {
    var zip = new JSZip();

    // 1. UPDATED INDEX.HTML (Added AI Widget CSS/HTML/JS)
    var folioHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio | Powered by Chandracloud</title>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root { --primary: #00f2ff; --bg: #0f0c29; --glass: rgba(255, 255, 255, 0.05); --border: rgba(255, 255, 255, 0.1); }
        body { margin: 0; padding: 0; height: 100vh; background: radial-gradient(circle at center, #302b63, #0f0c29); font-family: 'Space Grotesk', sans-serif; color: white; display: flex; justify-content: center; align-items: center; overflow: hidden; perspective: 1000px; }
        .tilt-card { width: 90%; max-width: 1100px; height: 85vh; background: var(--glass); backdrop-filter: blur(20px); border: 1px solid var(--border); border-radius: 30px; display: grid; grid-template-columns: 1fr 1.5fr; box-shadow: 0 25px 50px rgba(0,0,0,0.5); transform-style: preserve-3d; transition: transform 0.1s ease-out; }
        .profile-side { padding: 50px; border-right: 1px solid var(--border); display: flex; flex-direction: column; justify-content: center; position: relative; }
        .img-wrapper { width: 180px; height: 180px; border-radius: 50%; overflow: hidden; border: 4px solid var(--primary); margin-bottom: 30px; transform: translateZ(50px); box-shadow: 0 0 30px rgba(0, 242, 255, 0.3); }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        h1 { font-size: 3.5rem; line-height: 1; margin: 0 0 10px 0; transform: translateZ(30px); }
        .role { color: var(--primary); font-size: 1.2rem; margin-bottom: 30px; transform: translateZ(25px); text-transform: uppercase; letter-spacing: 2px; }
        .socials { display: flex; gap: 20px; margin-top: auto; transform: translateZ(40px); }
        .socials a { color: white; font-size: 1.5rem; transition: 0.3s; }
        .socials a:hover { color: var(--primary); transform: scale(1.2); }
        .content-side { padding: 60px; overflow-y: auto; position: relative; }
        .ai-section { background: rgba(0,0,0,0.3); padding: 30px; border-radius: 20px; border-left: 4px solid var(--primary); margin-bottom: 30px; transform: translateZ(20px); }
        .ai-label { font-size: 0.8rem; color: #888; margin-bottom: 10px; display: block; font-family: monospace; }
        .ai-text { font-size: 1.1rem; line-height: 1.8; color: #ddd; }
        .attachments { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 20px; transform: translateZ(30px); }
        .btn-dl { padding: 12px 25px; background: white; color: black; text-decoration: none; border-radius: 50px; font-weight: bold; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-dl:hover { background: var(--primary); box-shadow: 0 0 20px var(--primary); }
        .watermark { position: absolute; bottom: 20px; right: 30px; font-size: 0.8rem; color: rgba(255,255,255,0.3); transform: translateZ(10px); }
        
        /* === AI WIDGET CSS === */
        .ai-widget-btn { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 0 20px rgba(0,242,255,0.4); z-index: 1000; transition: transform 0.2s; }
        .ai-widget-btn:hover { transform: scale(1.1); }
        .ai-chat-box { position: fixed; bottom: 100px; right: 30px; width: 350px; height: 450px; background: #1a1a2e; border: 1px solid var(--border); border-radius: 15px; display: none; flex-direction: column; overflow: hidden; z-index: 1000; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
        .chat-header { background: #0f0c29; padding: 15px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-weight: bold; }
        .chat-body { flex: 1; padding: 15px; overflow-y: auto; font-size: 0.9rem; }
        .chat-footer { padding: 15px; border-top: 1px solid var(--border); display: flex; gap: 10px; }
        .chat-input { flex: 1; background: rgba(255,255,255,0.1); border: none; padding: 10px; color: white; border-radius: 5px; }
        .msg { margin-bottom: 10px; padding: 10px; border-radius: 8px; max-width: 80%; }
        .msg.bot { background: rgba(0,242,255,0.1); align-self: flex-start; color: #fff; }
        .msg.user { background: var(--primary); color: #000; align-self: flex-end; margin-left: auto; }

        @media (max-width: 900px) { .tilt-card { grid-template-columns: 1fr; height: auto; margin: 20px 0; transform: none !important; } body { overflow-y: auto; height: auto; display: block; } .profile-side { border-right: none; border-bottom: 1px solid var(--border); align-items: center; text-align: center; } .ai-chat-box { width: 90%; right: 5%; bottom: 100px; } }
    </style>
</head>
<body>
    <div class="tilt-card" id="card">
        <div class="profile-side">
            <div class="img-wrapper"><img id="uImg" src="" alt="Profile"></div>
            <h1 id="uName">Loading...</h1>
            <div class="role" id="uRole">Loading...</div>
            <div class="socials" id="uSocials"></div>
        </div>
        <div class="content-side">
            <h2 style="margin-bottom: 20px;">My Expertise (AI Context)</h2>
            <div class="ai-section" id="ai-training-data">
                <span class="ai-label">// CORE COMPETENCIES & BIO</span>
                <p class="ai-text" id="uAiData">Loading...</p>
            </div>
            <h3 style="margin-top: 40px;">Professional Resources</h3>
            <div class="attachments" id="uAttachments"></div>
            <div class="watermark">Deployed via Chandracloud</div>
        </div>
    </div>

    <div class="ai-widget-btn" onclick="toggleChat()">
        <i class="fas fa-robot" style="font-size: 1.5rem; color: #000;"></i>
    </div>
    <div class="ai-chat-box" id="chatBox">
        <div class="chat-header">
            <span id="botNameTitle">AI Assistant</span>
            <i class="fas fa-times" style="cursor: pointer;" onclick="toggleChat()"></i>
        </div>
        <div class="chat-body" id="chatBody">
            <div class="msg bot" id="welcomeMsg">Hello! How can I help you?</div>
        </div>
        <div class="chat-footer">
            <input type="text" class="chat-input" id="chatInput" placeholder="Ask about this portfolio..." onkeypress="handleEnter(event)">
            <button class="btn-dl" style="padding: 5px 15px;" onclick="sendMsg()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <script src="user_data.js"></script>
    <script>
        // LOAD DATA
        if(typeof userData !== 'undefined') {
            document.getElementById('uName').innerText = userData.name;
            document.getElementById('uRole').innerText = userData.role;
            document.getElementById('uImg').src = userData.profile_image_url;
            document.getElementById('uAiData').innerText = userData.ai_knowledge_base;
            const sDiv = document.getElementById('uSocials');
            if(userData.social_links.instagram) sDiv.innerHTML += \`<a href="\${userData.social_links.instagram}"><i class="fab fa-instagram"></i></a>\`;
            if(userData.social_links.youtube) sDiv.innerHTML += \`<a href="\${userData.social_links.youtube}"><i class="fab fa-youtube"></i></a>\`;
            if(userData.social_links.linkedin) sDiv.innerHTML += \`<a href="\${userData.social_links.linkedin}"><i class="fab fa-linkedin"></i></a>\`;
            const aDiv = document.getElementById('uAttachments');
            userData.attachments.forEach(file => { aDiv.innerHTML += \`<a href="\${file.url}" class="btn-dl"><i class="fas fa-download"></i> \${file.name}</a>\`; });

            // CONFIGURE WIDGET
            if(userData.ai_agent_instructions && userData.ai_agent_instructions.enabled) {
                document.getElementById('botNameTitle').innerText = userData.ai_agent_instructions.agent_name;
                document.getElementById('welcomeMsg').innerText = userData.ai_agent_instructions.welcome_msg;
            } else {
                document.querySelector('.ai-widget-btn').style.display = 'none';
            }
        }

        // TILT EFFECT
        const card = document.getElementById('card');
        const container = document.body;
        if(window.innerWidth > 900) {
            container.addEventListener('mousemove', (e) => {
                let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
            });
            container.addEventListener('mouseenter', (e) => { card.style.transition = 'none'; });
            container.addEventListener('mouseleave', (e) => { card.style.transition = 'all 0.5s ease'; card.style.transform = \`rotateY(0deg) rotateX(0deg)\`; });
        }

        // CHAT FUNCTIONS
        function toggleChat() {
            const box = document.getElementById('chatBox');
            box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
        }
        function handleEnter(e) { if(e.key === 'Enter') sendMsg(); }
        
        async function sendMsg() {
            const input = document.getElementById('chatInput');
            const body = document.getElementById('chatBody');
            const txt = input.value;
            if(!txt) return;

            // User Msg
            body.innerHTML += \`<div class="msg user">\${txt}</div>\`;
            input.value = '';
            body.scrollTop = body.scrollHeight;

            // Simulate Loading
            const loadId = 'load'+Date.now();
            body.innerHTML += \`<div class="msg bot" id="\${loadId}">...</div>\`;
            body.scrollTop = body.scrollHeight;

            // HERE WE WOULD CALL CHANDRACLOUD BACKEND API
            // For Prototype, we simulate based on local context
            setTimeout(() => {
                document.getElementById(loadId).remove();
                // In production: fetch('https://api.chandracloud.net/chat', { method: 'POST', body: JSON.stringify({ context: userData, query: txt }) })
                body.innerHTML += \`<div class="msg bot">Thanks for asking about \${userData.name}. As an AI managed by Chandracloud, I would forward this query to the backend using the context provided in Section 5. (Backend Integration Ready)</div>\`;
                body.scrollTop = body.scrollHeight;
            }, 1000);
        }
    </script>
</body>
</html>`;

    // 2. UPDATED USER_DATA.JS (Added Section 5)
    var jsContent = `const userData = {
    // 1. BASIC DETAILS
    name: "Arjun",
    role: "Visual Storyteller",
    location: "Hyderabad, India",
    email: "arjun@example.com",
    profile_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",

    // 2. THE AI BRAIN (THEORY)
    ai_knowledge_base: "I am an expert in Candid Wedding Photography with 7 years of experience in South Indian traditions. My style is cinematic and natural, strictly avoiding artificial poses. I use Sony Alpha A7IV and G-Master lenses. I am available for destination weddings in Hyderabad, Bangalore, and Goa. My pricing starts from 1 Lakh per day.",

    // 3. SOCIAL LINKS
    social_links: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        linkedin: "https://linkedin.com"
    },

    // 4. ATTACHMENTS
    attachments: [
        { name: "Download Pricing PDF", url: "#" },
        { name: "View Best Shots", url: "#" }
    ],

    // 5. AI AGENT INSTRUCTIONS (NEW)
    // This controls how your Widget talks to visitors
    ai_agent_instructions: {
        enabled: true,
        agent_name: "Arjun's AI",
        welcome_msg: "Hi! I handle Arjun's bookings. Ask me about dates or pricing.",
        system_prompt: "You are a helpful assistant for a photographer. Use the 'ai_knowledge_base' to answer questions. Be polite and professional."
    }
};`;

    // 3. DOCKERFILE (No Change)
    var dockerContent = `FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]`;

    // 4. README (Updated)
    var readmeContent = `
CHANDRA CLOUD - ICONIC TEMPLATE
===============================
1. Open 'user_data.js' and edit your details.
2. SECTION 5 in user_data.js controls your AI Widget.
3. Upload this folder to Chandracloud AI Launchpad to Deploy.
    `;

    // Pack Zip
    zip.file("index.html", folioHtml);
    zip.file("user_data.js", jsContent);
    zip.file("Dockerfile", dockerContent);
    zip.file("README.txt", readmeContent);

    // Download
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "Chandracloud-Iconic-Portfolio.zip");
    });
}
