# EasyLog – Final Version

## ✔ Funktionen:
- Login-System (Admin / Staff)
- Redirect von `/` → `/auth/login`
- Admin- & Staff-Dashboards mit Logout + Zurück
- Journal-Seite (bereit für GPT + Sprache)
- ChangeBoard pro Kunde
- MongoDB-Verbindung vorbereitet
- Vercel-Deploy ready

## 🚀 Deploy-Hinweise:
1. Projekt auf GitHub hochladen
2. In Vercel importieren → Preset: "Other"
3. Build Command: npm run build
4. Output Directory: .next
5. Env Variablen setzen:
   - MONGODB_URI=
   - JWT_SECRET=