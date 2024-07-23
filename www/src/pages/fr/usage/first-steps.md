---
title: Premiers pas
description: Premiers pas avec votre nouvelle application T3
layout: ../../../layouts/docs.astro
lang: fr
---

Vous venez de créer une nouvelle application T3 et vous êtes prêt à démarrer. Voici le strict minimum pour que votre application puisse fonctionner.

## Base de données

### MySQL, PostgreSQL

Si vous avez choisi MySQL ou PostgreSQL comme base de données, votre application T3 sera livrée avec un script bash `start-database.sh` qui peut créer un conteneur docker avec une base de données pour le développement local. Si vous avez déjà une base de données, n’hésitez pas à supprimer ce fichier et à mettre vos identifiants de base de données dans `.env`. Sur macOS, vous pouvez également utiliser [DBngin](https://dbngin.com/) si vous ne souhaitez pas utiliser docker.

### Prisma

Si votre application inclut Prisma, assurez vous de lancer la commande `npx prisma db push` depuis la racine de votre application
Cette commande va synchroniser votre schéma Prisma avec votre base de données et va générer les types TypeScript sur lequel se base le client Prisma. Notez que vous devez redémarrer le serveur TypeScript afin qu'il puisse détecter les nouveaux types générés.

### Drizzle

Si votre application inclut Drizzle, vérifiez le fichier `.env` pour obtenir des instructions sur la façon de construire votre variable d’environnement `DATABASE_URL`. Une fois que votre fichier d’environnement est prêt, exécutez `pnpm db:push` (ou l’équivalent pour d’autres gestionnaires de paquets) pour pousser votre schéma.

## Authentification

Si votre application inclut NextAuth.js, nous vous aidons à démarrer avec le `DiscordProvider`. C'est l'un des fournisseurs les plus simples proposés par NextAuth.js, mais il nécessite encore un peu de configuration initiale de votre part.

Bien sûr, si vous préférez utiliser un autre fournisseur d'authentification, vous pouvez également utiliser l'un des [nombreux fournisseurs](https://next-auth.js.org/providers/) proposés par NextAuth.js.

1. Vous aurez besoin d'un compte Discord, créez-en un si vous ne l'avez pas déjà fait.
2. Accédez à https://discord.com/developers/applications et cliquez sur "New Application" dans le coin supérieur droit. Nommez votre application et acceptez les conditions d'utilisation.
3. Une fois votre application créée, accédez à "Settings → OAuth2 → General".
4. Copiez le "Client ID" et ajoutez-le à votre `.env` en tant que `DISCORD_CLIENT_ID`.
5. Cliquez sur "Reset Secret", copiez le nouveau secret et ajoutez-le à votre `.env` en tant que `DISCORD CLIENT_SECRET`.
6. Cliquez sur "Add Redirect" et saisissez `http://localhost:3000/api/auth/callback/discord`.
   - Pour le déploiement en production, suivez les étapes précédentes pour créer une autre application Discord, mais cette fois remplacez `http://localhost:3000` par l'URL vers laquelle vous déployez.
7. Sauvegarder les modifications.
8. Définissez `NEXTAUTH_SECRET` dans `.env`. En développement, n'importe quelle chaîne fonctionnera, pour la production, voir la note dans `.env` sur la génération d'un secret sécurisé.

Vous devriez maintenant pouvoir vous connecter.

## Configuration de l’éditeur

Les extensions suivantes sont recommandées pour une expérience de développement optimale. Les liens ci-dessous fournissent un plugin spécifique à chaque éditeur.

- [Prisma Extension](https://www.prisma.io/docs/guides/development-environment/editor-setup)
- [Tailwind CSS IntelliSense Extension](https://tailwindcss.com/docs/editor-setup)
- [Prettier Extension](https://prettier.io/docs/en/editors.html)

## Prochaines étapes

- Si votre application inclut tRPC, consultez `src/pages/index.tsx` et `src/server/api/routers/post.ts` pour voir comment fonctionnent les requêtes tRPC.
- Consultez la documentation Create T3 App, ainsi que la documentation des packages inclus dans votre application.
- Rejoignez notre [Discord](https://t3.gg/discord) et donnez-nous une étoile sur [GitHub](https://github.com/t3-oss/create-t3-app) ! :)
