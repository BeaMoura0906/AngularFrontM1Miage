# Assignment App – Angular / Node / MongoDB / Render  

---

## 🔗 URLs du projet

| Service | URL |
|--------|-----|
| **Frontend Angular** | https://angular-25-26-beamoura0906.onrender.com/ |
| **Backend API Node** | https://api-angular-25-26-beamoura0906.onrender.com/api/assignments |
| **Base MongoDB Atlas** | Cluster personnel (assignments + 500+ données mockées) |
| **Backend Répertoire Git | https://github.com/BeaMoura0906/api-angular-25-26-BeaMoura0906 |

---

## 📝 Description du projet

Cette application est une Single Page App en **Angular** consommant une **API Node/Express** connectée à **MongoDB Atlas**.  
Elle permet de gérer des *assignments* (devoirs) avec :

- Affichage paginé  
- Détail d'un assignment  
- Ajout / Modification / Suppression  
- Marquage “rendu”  
- Authentification (admin / user)  
- Gestion des droits  
- Déploiement complet sur Render (front + back)

---

## 🎯 Fonctionnalités implémentées

- **CRUD complet** : affichage, détail, ajout, modification, suppression.
- **Pagination** : backend paginé (Mongoose paginate) + navigation front.
- **Authentification** : login/logout avec deux comptes (admin/user).
- **Gestion des rôles** :
  - Anonyme : lecture seule
  - User : lecture seule (+ marquer rendu si activé)
  - Admin : ajout, modification, suppression, peuplement
- **Guards Angular** : protection des routes réservées à l’admin (/add, /edit).
- **Peuplement de la base** : données Mockaroo + insertion massive via ForkJoin.
- **MongoDB Atlas** : base cloud contenant plusieurs centaines d'assignments.
- **Déploiement complet Render** : front Angular + back Node/Express.
- **UI Material Design** : navigation, formulaires, liste stylée.

---

## ▶️ Installation & exécution locale

### 1. Backend (API Node)

```bash
cd api
npm install
node server.js
```

### 2. Frontend (Angular)

### Mode développement

```bash
cd assignment-app
npm install
ng serve
```
Disponible sur http://localhost:4200

#### Mode production

```bash
npm run build
npm start
```
Disponible sur http://localhost:8081

---
## 🔐 Authentification

Identifiants disponibles :

``` bash
admin / admin
user / user
```

Comportement :

Anonyme → lecture seule

User → lecture seule

Admin → CRUD + peuplement de base

---

## 🏷️ Tag Git pour le rendu

Le dépôt est tagué :

```bash
Rendu2
```

Les précédents TP sont également taggués.

---

## 👥 Auteur

Beatriz MOURA | https://github.com/BeaMoura0906
M1 MIAGE 2025-2026 - Projet Angular
Université Cote d'Azur
