# Portfolio Développeur Full Stack

Un portfolio moderne, responsive et esthétique créé avec React, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Interface épurée qui s'adapte à tous les écrans
- **Mode sombre/clair** - Toggle automatique selon les préférences système
- **Animations fluides** - Animations au scroll avec Framer Motion
- **Navigation fluide** - Défilement doux entre les sections
- **Formulaire de contact** - Formulaire fonctionnel (prêt pour Formspree ou autre service)
- **Optimisé pour le SEO** - Meta tags et structure sémantique

## 📋 Sections

1. **Hero Section** - Présentation avec photo, nom et boutons d'action
2. **À propos** - Bio et compétences techniques avec icônes
3. **Projets** - Grille de projets avec captures d'écran et liens
4. **Parcours** - Timeline des expériences et formations
5. **Contact** - Formulaire et informations de contact

## 🛠️ Technologies utilisées

- **React 18** - Framework frontend
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **React Icons** - Icônes SVG
- **Lucide React** - Icônes modernes

## 🚀 Installation et démarrage

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

4. **Construire pour la production**
   ```bash
   npm run build
   ```

## 📝 Personnalisation

### Informations personnelles
Modifiez les fichiers suivants pour personnaliser votre portfolio :

- `src/components/Hero.jsx` - Nom, titre et description
- `src/components/About.jsx` - Bio et compétences
- `src/components/Projects.jsx` - Vos projets
- `src/components/Experience.jsx` - Parcours professionnel
- `src/components/Contact.jsx` - Coordonnées et liens sociaux

### Couleurs et thème
Modifiez `tailwind.config.js` pour changer les couleurs principales :

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... autres nuances
    900: '#1e3a8a',
  },
}
```

### Formulaire de contact
Pour rendre le formulaire fonctionnel, remplacez la simulation dans `Contact.jsx` par un service comme :

- **Formspree** : Service gratuit pour formulaires statiques
- **Netlify Forms** : Intégré si déployé sur Netlify
- **EmailJS** : Envoi d'emails côté client

## 🌐 Déploiement

### Netlify (Recommandé)
1. Connectez votre repo GitHub à Netlify
2. Configurez les paramètres de build :
   - Build command : `npm run build`
   - Publish directory : `dist`
3. Déployez !

### Vercel
1. Importez votre projet sur Vercel
2. Vercel détectera automatiquement Vite
3. Déployez en un clic !

### GitHub Pages
1. Ajoutez `"homepage": "https://votre-username.github.io/votre-repo"` dans `package.json`
2. Installez `gh-pages` : `npm install --save-dev gh-pages`
3. Ajoutez le script : `"deploy": "gh-pages -d dist"`
4. Déployez : `npm run build && npm run deploy`

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Mobile-first** approach
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation mobile** avec menu hamburger
- **Grilles adaptatives** pour les projets et compétences

## 🎨 Animations

- **Framer Motion** pour les animations au scroll
- **Transitions fluides** entre les sections
- **Hover effects** sur les cartes et boutons
- **Loading states** pour le formulaire

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit pour la production
- `npm run preview` - Prévisualise la build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📄 Structure du projet

```
src/
├── components/
│   ├── Header.jsx          # Navigation et toggle dark mode
│   ├── Hero.jsx           # Section d'accueil
│   ├── About.jsx          # Bio et compétences
│   ├── Projects.jsx       # Liste des projets
│   ├── ProjectCard.jsx    # Carte de projet individuelle
│   ├── Experience.jsx     # Timeline du parcours
│   ├── Contact.jsx        # Formulaire et infos contact
│   └── Footer.jsx         # Pied de page
├── App.jsx                # Composant principal
├── main.jsx              # Point d'entrée
└── index.css             # Styles globaux et Tailwind
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 📞 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Fait avec ❤️ et React** 