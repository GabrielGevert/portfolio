<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,27&height=200&section=header&text=Gabriel%20Gevert&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Full%20Stack%20Developer%20%E2%80%A2%20AWS%20Specialist&descSize=18&descAlignY=58" alt="header banner" />
</p>

<p align="center">
  <a href="https://gabrielgevert.github.io/portfolio/">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&center=true&vCenter=true&width=620&lines=Full+Stack+%26+Cloud+Developer;AWS+Specialist;React+%E2%80%A2+Next.js+%E2%80%A2+Node.js+%E2%80%A2+AWS+Amplify" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://gabrielgevert.github.io/portfolio/"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/gabrielgevert/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:gevertlolz@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

### 👨‍💻 About me

Full Stack & Cloud Developer based in Curitiba, Brazil, building software end to end since 2020, from front-end to back-end and cloud infrastructure. My specialty is the **AWS** ecosystem, with a strong focus on **AWS Amplify (Gen 2)**, designing serverless, scalable and production grade applications. I also work daily with **React, Next.js, Node.js and TypeScript**, and build with **AI (RAG, agents)**, **mobile (Flutter)** and **games (Unity)**.

- 🎓 Bachelor's degree in Information Systems at **PUCPR**
- ☁️ **AWS Amplify specialist**: Lambda, AppSync, DynamoDB, Cognito, S3, EventBridge, CloudFormation, CloudFront
- 🌎 Contributed to projects for global brands like **Coca-Cola** and **McKinsey**, plus high impact national projects such as a body worn camera platform for Rio de Janeiro's police force
- 🚀 Two of my own products live in production: **Inefavel Academy** and **Coach Guaxi**
- 💬 Portuguese (native) and English (intermediate, conversational: comfortable discussing topics I know well)

---

### 🚀 Where I work

- **SAMPI** · Full Stack Developer on an AI marketing platform: AI agent orchestration, knowledge base with RAG and semantic search (Neo4j), video processing, integrations with social media APIs and AI models (Claude and Gemini), Node.js backend on Google Cloud Run with Redis and security layers (rate limiting, CAPTCHA, JWT)
- **Form&Fun Studio** · Full Stack & Game Developer: immersive web, AR/VR, games and web3 experiences for global clients, across the full AWS stack (EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline)
- **L8 Group** · Full Stack Developer: tailored web applications focused on performance and scalability

---

### 🏆 My products in production

> Built and maintained by me, end to end, and serving real users today.

#### ⭐ [Inefavel Academy](https://www.inefavelacademy.com) · my flagship project

<p align="center">
  <a href="https://www.inefavelacademy.com"><img src="https://gabrielgevert.github.io/portfolio/inefavel.png" width="540" alt="Inefavel Academy" /></a>
</p>

League of Legends courses and coaching platform running in production with **1,000+ sales**, built end to end on **AWS Amplify (Gen 2)** with a serverless architecture of **70+ Lambda functions**. Robustness is the whole point here:

- 🔒 **Security first**: Cognito (RS256 JWT), Cloudflare **Turnstile**, **rate limiting** on payments, login and coupons (atomic counters on DynamoDB with TTL), server side pricing and granular **field level authorization**
- 💳 **Two payment gateways** (**Stripe** and **Asaas**) with PIX, card and installments scheduled via **EventBridge**, full **idempotency** on payments and webhooks, and signature verified webhooks (Stripe HMAC, Asaas token, Discord Ed25519)
- 🤖 **Discord integration**: OAuth login plus a slash command bot (API Gateway + Lambda + DynamoDB) with Ed25519 verified interactions
- 🎥 **Protected content**: signed video URLs on **Cloudflare Stream** and S3 presigned uploads
- 🔎 **Dynamic SEO**: per page `generateMetadata` and `sitemap`
- 📅 **Class scheduling** with automatic rescheduling, coupons, chargeback handling and analytics dashboards
- ✅ **Quality**: automated test suite (Vitest) with race condition coverage and a documented pentest analysis

`AWS Amplify` `Lambda` `AppSync` `DynamoDB` `Cognito` `Stripe` `Asaas` `Cloudflare Stream` `Next.js 15` `React 19`

#### 🎮 [Coach Guaxi](https://www.guaxilolcoach.com)

<img src="https://gabrielgevert.github.io/portfolio/guaxi-card.png" width="230" align="right" alt="Coach Guaxi" />

League of Legends coaching platform with class scheduling and **Asaas** payments (PIX and installments, with idempotency and fee pass-through). It also features a **Champions Roulette** built on canvas that loads 170+ champions from Riot's API, with win streak and revive token mechanics.

`AWS Amplify` `Next.js` `Riot API` `Asaas` `Canvas`

---

### 🛠️ Tech Stack

**🖥️ Front-end**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**⚙️ Back-end**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

**🗄️ Databases**

![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)
![Neo4j](https://img.shields.io/badge/Neo4j-018BFF?style=for-the-badge&logo=neo4j&logoColor=white)

**🚀 Cloud, DevOps & More**

![AWS Specialist](https://img.shields.io/badge/AWS_Specialist-232F3E?style=for-the-badge&logoColor=FF9900)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white)

---

### 📊 GitHub Stats

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=GabrielGevert&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true" alt="GitHub stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=GabrielGevert&layout=compact&theme=tokyonight&hide_border=true" alt="Top languages" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=GabrielGevert&theme=tokyonight&hide_border=true" alt="GitHub streak" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=GabrielGevert&theme=tokyo-night&hide_border=true&bg_color=00000000&color=58A6FF&line=5A4FCF&point=FF9900" alt="Activity graph" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/GabrielGevert/GabrielGevert/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />
</p>

---

### ⭐ Fun fact

I solved the world's oldest question with a single line of JavaScript:

```javascript
// Which came first: the chicken or the egg?
console.log(['🐣', '🐔', '🐥', '🥚'].sort())

// >>> [ '🥚', '🐣', '🐥', '🐔' ]
```

---

<p align="center">
  <i>Aiming to build great products and conquer the world, one commit at a time. 🚀</i>
</p>
