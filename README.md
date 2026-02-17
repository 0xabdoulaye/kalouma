# Kalouma Market - Site Web Officiel

Site web officiel de **Kalouma Market**, la marketplace N°1 en Guinée pour acheter et vendre facilement.

🌐 **URL**: [https://kalouma.com](https://kalouma.com)

---

## 📁 Structure du Projet

```
kalouma/
├── index.html          # Page principale
├── privacy.html        # Politique de confidentialité
├── terms.html          # Conditions d'utilisation (à créer)
├── CNAME               # Configuration domaine personnalisé
├── README.md           # Ce fichier
├── css/
│   └── style.css       # Styles (responsive, moderne)
├── js/
│   └── main.js         # JavaScript (animations, interactions)
└── images/             # Assets visuels
    ├── favicon.png
    ├── app-screenshot.png
    ├── screen-*.png
    └── ...
```

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1: Push vers GitHub

```bash
cd /home/bloman/Desktop/MobileAPP/kalouma
git add .
git commit -m "Initial landing page"
git push origin main
```

### Étape 2: Activer GitHub Pages

1. Aller sur GitHub → Repository → **Settings**
2. Section **Pages** (dans le menu gauche)
3. Source: **Deploy from a branch**
4. Branch: `main` / `/ (root)`
5. Cliquer **Save**

Le site sera accessible sur: `https://votre-username.github.io/kalouma/`

### Étape 3: Configurer le Domaine Personnalisé

1. Dans GitHub Pages, section "Custom domain"
2. Entrer: `kalouma.com`
3. Cocher "Enforce HTTPS"
4. Sauvegarder

---

## 🌐 Configuration DNS (Cloudflare)

Après avoir acheté le domaine `kalouma.com`, configurer les DNS sur Cloudflare:

### Enregistrements DNS Requis

| Type | Nom | Contenu | Proxy | TTL |
|------|-----|---------|-------|-----|
| CNAME | `@` | `votre-username.github.io` | ✅ Oui | Auto |
| CNAME | `www` | `kalouma.com` | ✅ Oui | Auto |

### Pour le Backend (api.kalouma.com)

| Type | Nom | Contenu | Proxy | TTL |
|------|-----|---------|-------|-----|
| A | `api` | `IP_DU_VPS` | ✅ Oui | Auto |

### Configuration SSL/TLS Cloudflare

1. SSL/TLS → Overview → Mode: **Full (strict)**
2. Edge Certificates → Always Use HTTPS: **On**
3. Edge Certificates → Automatic HTTPS Rewrites: **On**

---

## 🖼️ Images à Ajouter

Placer ces images dans le dossier `images/`:

### Obligatoires

| Fichier | Dimensions | Description |
|---------|------------|-------------|
| `favicon.png` | 32x32 px | Icône onglet navigateur |
| `apple-touch-icon.png` | 180x180 px | Icône iOS |
| `og-image.png` | 1200x630 px | Image partage réseaux sociaux |
| `app-screenshot.png` | 300x600 px | Screenshot principal (hero) |

### Screenshots de l'App

| Fichier | Dimensions | Description |
|---------|------------|-------------|
| `screen-home.png` | 250x500 px | Screenshot page d'accueil |
| `screen-search.png` | 250x500 px | Screenshot recherche |
| `screen-chat.png` | 250x500 px | Screenshot messagerie |
| `screen-profile.png` | 250x500 px | Screenshot profil |

### Optionnels

| Fichier | Dimensions | Description |
|---------|------------|-------------|
| `phones-mockup.png` | 500x400 px | Mockup 2 téléphones |
| `qr-code.png` | 200x200 px | QR code Play Store |
| `logo.svg` | - | Logo vectoriel |

### Générer les Screenshots

Tu peux utiliser ces outils:
- **Figma** - Pour créer des mockups
- **Shotsnapp** - https://shotsnapp.com (mockups gratuits)
- **Previewed** - https://previewed.app
- **MockuPhone** - https://mockuphone.com

---

## ✏️ Personnalisation

### Mettre à Jour le Lien Play Store

Quand l'app sera publiée sur le Play Store, modifier dans `js/main.js`:

```javascript
// Ligne ~87
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.kalouma.market';

// Et décommenter:
window.open(playStoreUrl, '_blank');
```

### Mettre à Jour les Réseaux Sociaux

Dans `index.html`, section footer (~ligne 350):

```html
<div class="social-links">
    <a href="https://facebook.com/kalouma" aria-label="Facebook">...</a>
    <a href="https://instagram.com/kalouma" aria-label="Instagram">...</a>
    <a href="https://twitter.com/kalouma" aria-label="Twitter">...</a>
    <a href="https://wa.me/224XXXXXXXX" aria-label="WhatsApp">...</a>
</div>
```

### Modifier les Statistiques

Dans `index.html`, section hero (~ligne 75):

```html
<div class="stat">
    <span class="stat-number" data-count="10000">0</span>
    <span class="stat-label">Utilisateurs</span>
</div>
```

---

## 🎨 Fonctionnalités du Site

- ✅ Design moderne et professionnel
- ✅ 100% responsive (mobile, tablette, desktop)
- ✅ Animations au scroll (fade-in, slide)
- ✅ Statistiques animées (compteur)
- ✅ FAQ accordéon interactif
- ✅ Menu mobile hamburger
- ✅ Boutons téléchargement Play Store / App Store
- ✅ SEO optimisé (meta tags, Open Graph)
- ✅ Performance optimisée (lazy loading)

---

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Flexbox, Grid, Variables CSS, Animations
- **JavaScript ES6+** - IntersectionObserver, modules
- **Font Awesome 6** - Icônes
- **Google Fonts** - Police Inter

---

## 📱 Aperçu

### Desktop
![Desktop Preview](images/preview-desktop.png)

### Mobile
![Mobile Preview](images/preview-mobile.png)

---

## 🔗 Liens Utiles

- **Play Store**: [À venir]
- **App Store**: [À venir]
- **API Backend**: https://api.kalouma.com
- **Support**: staff@kalouma.com

---

## 📄 Fichiers Légaux

- `privacy.html` - Politique de confidentialité ✅
- `terms.html` - Conditions d'utilisation (à créer)
- `cookies.html` - Politique cookies (optionnel)

---

## 🇬🇳 À Propos

**Kalouma Market** est une application mobile qui permet aux Guinéens d'acheter et vendre des produits et services facilement. Notre mission est de connecter les acheteurs et vendeurs à travers toute la Guinée.

---

## 📞 Contact

- **Email**: staff@kalouma.com
- **Localisation**: Conakry, Guinée

---

*Fait avec ❤️ en Guinée*
