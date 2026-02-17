# Kalouma Market - Landing Page

Site web officiel de Kalouma Market, la marketplace N°1 en Guinee.

## Structure

```
kalouma/
├── index.html          # Page principale
├── privacy.html        # Politique de confidentialite
├── terms.html          # Conditions d'utilisation
├── CNAME               # Configuration domaine (kalouma.com)
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # JavaScript
└── images/             # Assets (screenshots, logo, etc.)
```

## Deploiement

Ce site est heberge sur GitHub Pages.

### Configuration DNS (Cloudflare)

```
Type    Name    Content                 Proxy
CNAME   @       username.github.io     Yes
CNAME   www     kalouma.com            Yes
```

### Configuration GitHub Pages

1. Aller dans Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / root
4. Custom domain: kalouma.com

## Images Requises

Placez ces images dans le dossier `images/`:

- `favicon.png` - Favicon 32x32
- `apple-touch-icon.png` - Icon iOS 180x180
- `og-image.png` - Image Open Graph 1200x630
- `app-screenshot.png` - Screenshot principal de l'app
- `screen-home.png` - Screenshot accueil
- `screen-search.png` - Screenshot recherche
- `screen-chat.png` - Screenshot chat
- `screen-profile.png` - Screenshot profil
- `phones-mockup.png` - Mockup telephones
- `qr-code.png` - QR code Play Store (optionnel)

## Liens a Mettre a Jour

Dans `index.html` et `js/main.js`, mettre a jour :

1. **Lien Play Store** - Quand l'app sera publiee
2. **Liens reseaux sociaux** - Facebook, Instagram, Twitter
3. **URL de l'API** - api.kalouma.com

## Fonctionnalites

- Design responsive (mobile-first)
- Animations au scroll
- FAQ accordeon
- Statistiques animees
- Menu mobile
- SEO optimise (meta tags, Open Graph)

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, Variables CSS)
- JavaScript (ES6+, IntersectionObserver)
- Font Awesome (icons)
- Google Fonts (Inter)

## Contact

Email: staff@kalouma.com
