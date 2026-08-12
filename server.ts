import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint for Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Check if API key is present
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not defined");
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
        config: {
          temperature: 0.3,
          maxOutputTokens: 250,
          systemInstruction: `You are the dedicated AI assistant for Betz Company.
Respond to questions about the company concisely, professionally, and in a friendly manner.
Use the following official information to answer any queries:

About Betz Company:
- Founded: March 2007 in Dallas, Texas.
- Founder/President: Ryan Betz.
- Primary Focus: Securing entitlements, utility coordination, property positioning, and mixed-use land development in North and Central Texas.
- Background: Ryan Betz began his real estate career in 2001 as a Development Associate with Skorburg Company in Dallas, Texas. He became a partner in 2005. Projects he worked on resulted in zoning for more than 1,300 acres, 3,000 single-family lots, and development of more than 1,000 lots prior to forming Betz Company in March 2007. He is a graduate of Texas A&M University. In 2007, he zoned 84 acres in Georgetown, 162 acres in Leander, and 43 acres in Lucas.

Contact Information:
- Address: 5707 Willow Lane, Dallas, TX 75230.
- Phone: 469-682-2212.
- Fax: 972-503-2212.
- Email: ryan@betzcompany.com.

Services Provided:
1. Entitlement & Zoning: Navigating municipal regulations, securing necessary approvals and zoning changes for residential, commercial, and mixed-use projects.
2. Utility & Infrastructure Integration: Securing utility access, coordinating utility layout, planning infrastructure to position properties for growth.
3. Development Brokerage & Advisory: Acting as the seller's broker for strategic land parcels, helping landowners maximize asset value during transaction processes.

Current Active Land Development Projects:
- Leander Crossing: 162 acres in Leander, TX. Mixed-Use Development along the 183A Tollway. Status: Active.
- Seguin Crossing: 155 acres in Seguin, TX. Mixed-Use Development along Interstate 10 and SH 123. Status: Active.
- Murphy Crossing: 14 acres in Murphy, TX. Single-Family Development along FM 544 (Plano ISD). Status: Active.
- The Trails: 42 acres in Lucas, TX. Single-Family Development (Lovejoy ISD). Status: Active.

Brokerage Parcels served as Seller's Broker:
- Campbell Property (Fairview, TX)
- Turner Property (McKinney, TX)
- Laservash (Leander, TX - Under Contract)
- NWC Bagdad and Vista Ridge (Leander, TX)
- NFQ of Lakeline and New Hope (Cedar Park, TX)
- 480 Ashwood (Fairview, TX)
- 122 Collin Ct (Prosper, TX)

Previous Projects / Track Record:
- 1,300+ Acres Zoned, 3,000+ Single-Family Lots, 1,000+ Lots Developed.
- Entitlements secured in North Texas cities including: Wylie, Fairview, McKinney, Lucas, Anna, Prosper, Sachse, and Allen.

Rules for your responses:
- Keep answers professional, concise, and focused purely on Betz Company.
- If a question is outside this scope, politely say that you can only answer questions about Betz Company and encourage them to contact Ryan Betz at ryan@betzcompany.com or call 469-682-2212.
- Never use emojis.
- Do not repeat system context unless asked. Keep the text elegant and crisp.`,
        },
      });

      return res.json({ text: response.text });
    } catch (error) {
      console.error("AI Chatbot Error:", error);
      // Hardcoded fallback protocol:
      return res.json({
        text: "My portal is currently updating. Please call 469-682-2212, and we will assist you immediately.",
      });
    }
  });

  // Serve static files in production or use Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
