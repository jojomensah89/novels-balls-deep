Directory structure:
└── hanadigital-novelscraper/
    ├── README.md
    ├── components.json
    ├── index.html
    ├── LICENSE.md
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── .editorconfig
    ├── src/
    │   ├── App.css
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── routeTree.gen.ts
    │   ├── vite-env.d.ts
    │   ├── components/
    │   │   ├── app-sidebar.tsx
    │   │   ├── breadcrumbs.tsx
    │   │   ├── card.tsx
    │   │   ├── cloudflare-resolver.tsx
    │   │   ├── dialog.tsx
    │   │   ├── loader.tsx
    │   │   ├── page.tsx
    │   │   ├── search-bar.tsx
    │   │   ├── tooltip.tsx
    │   │   ├── typography.tsx
    │   │   └── ui/
    │   │       ├── alert-dialog.tsx
    │   │       ├── badge.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── dialog.tsx
    │   │       ├── input.tsx
    │   │       ├── progress.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── tabs.tsx
    │   │       └── tooltip.tsx
    │   ├── lib/
    │   │   ├── deprecated.ts
    │   │   ├── firebase.ts
    │   │   ├── routes.ts
    │   │   ├── store.ts
    │   │   ├── utils.ts
    │   │   ├── library/
    │   │   │   ├── epub.ts
    │   │   │   └── library.ts
    │   │   └── sources/
    │   │       ├── novelbin.ts
    │   │       ├── novelfull.ts
    │   │       ├── novgo.ts
    │   │       ├── sources.ts
    │   │       ├── template.ts
    │   │       └── types.ts
    │   └── routes/
    │       ├── __root.tsx
    │       ├── index.tsx
    │       ├── library.tsx
    │       ├── novel.tsx
    │       ├── settings.tsx
    │       └── sources/
    │           ├── $sourceId.tsx
    │           └── index.tsx
    ├── src-tauri/
    │   ├── build.rs
    │   ├── Cargo.toml
    │   ├── tauri.conf.json
    │   ├── capabilities/
    │   │   ├── default.json
    │   │   └── desktop.json
    │   ├── icons/
    │   │   ├── icon.icns
    │   │   └── Square310x310Logo.psd
    │   └── src/
    │       ├── docker.rs
    │       ├── lib.rs
    │       ├── main.rs
    │       └── source/
    │           ├── mod.rs
    │           ├── novelbin.rs
    │           ├── novelfull.rs
    │           ├── novgo.rs
    │           └── types.rs
    └── .github/
        ├── FUNDING.yml
        ├── ISSUE_TEMPLATE/
        │   ├── bug_report.md
        │   └── feature_request.md
        └── workflows/
            └── publish.yml

Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================

FILE: README.md
================================================

<p align="center">
   <img width="100%" src="https://user-images.githubusercontent.com/41040912/95695886-f5becc00-0c49-11eb-9f01-15d2b4e70b1c.png">
</p>

<p align="center">
   <a href="https://github.com/HanaDigital/NovelScraper/releases"><img width="200" src="https://user-images.githubusercontent.com/41040912/95695097-80053100-0c46-11eb-8393-2f97d5f1e63c.png" alt="Windows"></a>
 <a href="https://github.com/HanaDigital/NovelScraper/releases"><img width="200" src="https://github.com/user-attachments/assets/569b3f75-2642-4ece-a6d9-fbb0b8c73149" alt="MacOS"></a>
 <a href="https://github.com/HanaDigital/NovelScraper/releases"><img width="200" src="https://user-images.githubusercontent.com/41040912/95696675-218f8100-0c4d-11eb-82b9-cddddbe94758.png" alt="Linux"></a>
</p>

---

<p align="center">
 <a href="https://hanadigital.github.io/grev/?user=hanadigital&repo=novelscraper"><img src="https://img.shields.io/github/downloads/HanaDigital/NovelScraper/total.svg?style=for-the-badge"></a>
   <a href="https://github.com/HanaDigital/NovelScraper/stargazers"><img src="https://img.shields.io/github/stars/HanaDigital/NovelScraper?style=for-the-badge"></a>
 <a href="https://github.com/HanaDigital/NovelScraper/stargazers"><img src="https://img.shields.io/github/forks/HanaDigital/NovelScraper?style=for-the-badge"></a>
 <a href="https://github.com/HanaDigital/NovelScraper/stargazers"><img src="https://img.shields.io/github/issues/HanaDigital/NovelScraper?style=for-the-badge"></a>
</p>

---

## TABLE OF CONTENTS

1. [About](#about)
2. [Featrues](#features)
3. [Contribute](#contribute)
4. [Attribution](#attribution)
5. [License](#license)

## ABOUT

Download and update translated web/light novels from a list of sites.
List of supported sites:

- [NovelFull](https://novelfull.com/)
- [NovelBin](https://novelbin.com/)
- [Novgo](https://novgo.co)

Author: [@dr-nyt](https://github.com/dr-nyt)
Contributors: [@webdagger](https://github.com/webdagger), [@jiskim](https://github.com/jiskim)
Version: 3.1.2

## FEATURES

<p align="center">
 <img src="https://user-images.githubusercontent.com/41040912/95752018-74e6eb00-0cb0-11eb-8acb-2cc6fd790ffc.png">
   <img src="https://user-images.githubusercontent.com/41040912/95752022-76181800-0cb0-11eb-9e9c-2627334b0779.png">
</p>

## LICENSE

```
MIT License

Copyright (c) 2020 dr-nyt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

================================================
FILE: components.json
================================================

{
  "$schema": "<https://ui.shadcn.com/schema.json>",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/App.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}

================================================
FILE: index.html
================================================

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tauri + React + Typescript</title>
</head>

<body class="dark bg-background">
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>

================================================
FILE: LICENSE.md
================================================

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Novel Scraper</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/dr-nyt/Translated-Novel-Downloader" property="cc:attributionName" rel="cc:attributionURL">dr_nyt</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

================================================
FILE: package.json
================================================

{
 "name": "novelscraper",
 "private": true,
 "version": "3.1.2",
 "type": "module",
 "scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "tauri": "tauri"
 },
 "dependencies": {
  "@mynaui/icons-react": "^0.3.2",
  "@radix-ui/react-alert-dialog": "^1.1.14",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-progress": "^1.1.1",
  "@radix-ui/react-separator": "^1.1.0",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-tabs": "^1.1.3",
  "@radix-ui/react-tooltip": "^1.1.4",
  "@tanstack/react-router": "^1.82.1",
  "@tauri-apps/api": "^2",
  "@tauri-apps/plugin-dialog": "~2",
  "@tauri-apps/plugin-fs": "~2",
  "@tauri-apps/plugin-opener": "^2.2.6",
  "@tauri-apps/plugin-os": "~2",
  "@tauri-apps/plugin-shell": "^2.0.1",
  "@tauri-apps/plugin-store": "~2",
  "@tauri-apps/plugin-updater": "~2",
  "cheerio": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "clone": "^2.1.2",
  "clsx": "^2.1.1",
  "firebase": "^11.4.0",
  "immer": "^10.1.1",
  "jotai": "^2.10.3",
  "jotai-immer": "^0.4.1",
  "jszip": "^3.10.1",
  "lucide-react": "^0.460.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-markdown": "^10.1.0",
  "remark-gfm": "^4.0.1",
  "tailwind-merge": "^2.5.4",
  "tailwindcss-animate": "^1.0.7"
 },
 "devDependencies": {
  "@tanstack/router-devtools": "^1.82.1",
  "@tanstack/router-plugin": "^1.81.9",
  "@tauri-apps/cli": "^2",
  "@types/clone": "^2.1.4",
  "@types/node": "^22.9.0",
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "typescript": "^5.8.2",
  "vite": "^5.4.12"
 }
}

================================================
FILE: pnpm-lock.yaml
================================================

lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@mynaui/icons-react':
        specifier: ^0.3.2
        version: 0.3.2(react@18.3.1)
      '@radix-ui/react-alert-dialog':
        specifier: ^1.1.14
        version: 1.1.14(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-dialog':
        specifier: ^1.1.2
        version: 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-progress':
        specifier: ^1.1.1
        version: 1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-separator':
        specifier: ^1.1.0
        version: 1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot':
        specifier: ^1.1.0
        version: 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-tabs':
        specifier: ^1.1.3
        version: 1.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-tooltip':
        specifier: ^1.1.4
        version: 1.1.4(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@tanstack/react-router':
        specifier: ^1.82.1
        version: 1.82.1(@tanstack/router-generator@1.81.9)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@tauri-apps/api':
        specifier: ^2
        version: 2.1.1
      '@tauri-apps/plugin-dialog':
        specifier: ~2
        version: 2.0.1
      '@tauri-apps/plugin-fs':
        specifier: ~2
        version: 2.0.2
      '@tauri-apps/plugin-opener':
        specifier: ^2.2.6
        version: 2.2.6
      '@tauri-apps/plugin-os':
        specifier: ~2
        version: 2.2.1
      '@tauri-apps/plugin-shell':
        specifier: ^2.0.1
        version: 2.0.1
      '@tauri-apps/plugin-store':
        specifier: ~2
        version: 2.1.0
      '@tauri-apps/plugin-updater':
        specifier: ~2
        version: 2.5.1
      cheerio:
        specifier: ^1.0.0
        version: 1.0.0
      class-variance-authority:
        specifier: ^0.7.0
        version: 0.7.0
      clone:
        specifier: ^2.1.2
        version: 2.1.2
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      firebase:
        specifier: ^11.4.0
        version: 11.4.0
      immer:
        specifier: ^10.1.1
        version: 10.1.1
      jotai:
        specifier: ^2.10.3
        version: 2.10.3(@types/react@18.3.12)(react@18.3.1)
      jotai-immer:
        specifier: ^0.4.1
        version: 0.4.1(immer@10.1.1)(jotai@2.10.3(@types/react@18.3.12)(react@18.3.1))
      jszip:
        specifier: ^3.10.1
        version: 3.10.1
      lucide-react:
        specifier: ^0.460.0
        version: 0.460.0(react@18.3.1)
      react:
        specifier: ^18.2.0
        version: 18.3.1
      react-dom:
        specifier: ^18.2.0
        version: 18.3.1(react@18.3.1)
      react-markdown:
        specifier: ^10.1.0
        version: 10.1.0(@types/react@18.3.12)(react@18.3.1)
      remark-gfm:
        specifier: ^4.0.1
        version: 4.0.1
      tailwind-merge:
        specifier: ^2.5.4
        version: 2.5.4
      tailwindcss-animate:
        specifier: ^1.0.7
        version: 1.0.7(tailwindcss@3.4.15)
    devDependencies:
      '@tanstack/router-devtools':
        specifier: ^1.82.1
        version: 1.82.1(@tanstack/react-router@1.82.1(@tanstack/router-generator@1.81.9)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(csstype@3.1.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@tanstack/router-plugin':
        specifier: ^1.81.9
        version: 1.81.9(vite@5.4.12(@types/node@22.9.0))
      '@tauri-apps/cli':
        specifier: ^2
        version: 2.1.0
      '@types/clone':
        specifier: ^2.1.4
        version: 2.1.4
      '@types/node':
        specifier: ^22.9.0
        version: 22.9.0
      '@types/react':
        specifier: ^18.2.15
        version: 18.3.12
      '@types/react-dom':
        specifier: ^18.2.7
        version: 18.3.1
      '@vitejs/plugin-react':
        specifier: ^4.2.1
        version: 4.3.3(vite@5.4.12(@types/node@22.9.0))
      autoprefixer:
        specifier: ^10.4.20
        version: 10.4.20(postcss@8.4.49)
      postcss:
        specifier: ^8.4.49
        version: 8.4.49
      tailwindcss:
        specifier: ^3.4.15
        version: 3.4.15
      typescript:
        specifier: ^5.8.2
        version: 5.8.2
      vite:
        specifier: ^5.4.12
        version: 5.4.12(@types/node@22.9.0)

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@babel/code-frame@7.26.2':
    resolution: {integrity: sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.26.2':
    resolution: {integrity: sha512-Z0WgzSEa+aUcdiJuCIqgujCshpMWgUpgOxXotrYPSA53hA3qopNaqcJpyr0hVb1FeWdnqFA35/fUtXgBK8srQg==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.26.0':
    resolution: {integrity: sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.26.2':
    resolution: {integrity: sha512-zevQbhbau95nkoxSq3f/DC/SC+EEOUZd3DYqfSkMhY2/wfSeaHV1Ew4vk8e+x8lja31IbyuUa2uQ3JONqKbysw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.25.9':
    resolution: {integrity: sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.25.9':
    resolution: {integrity: sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.26.0':
    resolution: {integrity: sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.25.9':
    resolution: {integrity: sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.25.9':
    resolution: {integrity: sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.25.9':
    resolution: {integrity: sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.25.9':
    resolution: {integrity: sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.26.0':
    resolution: {integrity: sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.26.2':
    resolution: {integrity: sha512-DWMCZH9WA4Maitz2q21SRKHo9QXZxkDsbNZoVD62gusNtNBBqDg9i7uOhASfTfIGNzW+O+r7+jAlM8dwphcJKQ==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-jsx@7.25.9':
    resolution: {integrity: sha512-ld6oezHQMZsZfp6pWtbjaNDF2tiiCYYDqQszHt5VV437lewP9aSi2Of99CK0D0XB21k7FLgnLcmQKyKzynfeAA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.25.9':
    resolution: {integrity: sha512-hjMgRy5hb8uJJjUcdWunWVcoi9bGpJp8p5Ol1229PoN6aytsLwNMgmdftO23wnCLMfVmTwZDWMPNq/D1SY60JQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-self@7.25.9':
    resolution: {integrity: sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-source@7.25.9':
    resolution: {integrity: sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/template@7.25.9':
    resolution: {integrity: sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.25.9':
    resolution: {integrity: sha512-ZCuvfwOwlz/bawvAuvcj8rrithP2/N55Tzz342AkTvq4qaWbGfmCk/tKhNaV2cthijKrPAA8SRJV5WWe7IBMJw==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.26.0':
    resolution: {integrity: sha512-Z/yiTPj+lDVnF7lWeKCIJzaIkI0vYO87dMpZ4bg4TDrFe4XXLFWL1TbXU27gBP3QccxV9mZICCrnjnYlJjXHOA==}
    engines: {node: '>=6.9.0'}

  '@esbuild/aix-ppc64@0.21.5':
    resolution: {integrity: sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/aix-ppc64@0.23.1':
    resolution: {integrity: sha512-6VhYk1diRqrhBAqpJEdjASR/+WVRtfjpqKuNw11cLiaWpAT/Uu+nokB+UJnevzy/P9C/ty6AOe0dwueMrGh/iQ==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.21.5':
    resolution: {integrity: sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm64@0.23.1':
    resolution: {integrity: sha512-xw50ipykXcLstLeWH7WRdQuysJqejuAGPd30vd1i5zSyKK3WE+ijzHmLKxdiCMtH1pHz78rOg0BKSYOSB/2Khw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.21.5':
    resolution: {integrity: sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-arm@0.23.1':
    resolution: {integrity: sha512-uz6/tEy2IFm9RYOyvKl88zdzZfwEfKZmnX9Cj1BHjeSGNuGLuMD1kR8y5bteYmwqKm1tj8m4cb/aKEorr6fHWQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.21.5':
    resolution: {integrity: sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/android-x64@0.23.1':
    resolution: {integrity: sha512-nlN9B69St9BwUoB+jkyU090bru8L0NA3yFvAd7k8dNsVH8bi9a8cUAUSEcEEgTp2z3dbEDGJGfP6VUnkQnlReg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.21.5':
    resolution: {integrity: sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-arm64@0.23.1':
    resolution: {integrity: sha512-YsS2e3Wtgnw7Wq53XXBLcV6JhRsEq8hkfg91ESVadIrzr9wO6jJDMZnCQbHm1Guc5t/CdDiFSSfWP58FNuvT3Q==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.21.5':
    resolution: {integrity: sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/darwin-x64@0.23.1':
    resolution: {integrity: sha512-aClqdgTDVPSEGgoCS8QDG37Gu8yc9lTHNAQlsztQ6ENetKEO//b8y31MMu2ZaPbn4kVsIABzVLXYLhCGekGDqw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.21.5':
    resolution: {integrity: sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-arm64@0.23.1':
    resolution: {integrity: sha512-h1k6yS8/pN/NHlMl5+v4XPfikhJulk4G+tKGFIOwURBSFzE8bixw1ebjluLOjfwtLqY0kewfjLSrO6tN2MgIhA==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.21.5':
    resolution: {integrity: sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.23.1':
    resolution: {integrity: sha512-lK1eJeyk1ZX8UklqFd/3A60UuZ/6UVfGT2LuGo3Wp4/z7eRTRYY+0xOu2kpClP+vMTi9wKOfXi2vjUpO1Ro76g==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.21.5':
    resolution: {integrity: sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm64@0.23.1':
    resolution: {integrity: sha512-/93bf2yxencYDnItMYV/v116zff6UyTjo4EtEQjUBeGiVpMmffDNUyD9UN2zV+V3LRV3/on4xdZ26NKzn6754g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.21.5':
    resolution: {integrity: sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-arm@0.23.1':
    resolution: {integrity: sha512-CXXkzgn+dXAPs3WBwE+Kvnrf4WECwBdfjfeYHpMeVxWE0EceB6vhWGShs6wi0IYEqMSIzdOF1XjQ/Mkm5d7ZdQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.21.5':
    resolution: {integrity: sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-ia32@0.23.1':
    resolution: {integrity: sha512-VTN4EuOHwXEkXzX5nTvVY4s7E/Krz7COC8xkftbbKRYAl96vPiUssGkeMELQMOnLOJ8k3BY1+ZY52tttZnHcXQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.21.5':
    resolution: {integrity: sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-loong64@0.23.1':
    resolution: {integrity: sha512-Vx09LzEoBa5zDnieH8LSMRToj7ir/Jeq0Gu6qJ/1GcBq9GkfoEAoXvLiW1U9J1qE/Y/Oyaq33w5p2ZWrNNHNEw==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.21.5':
    resolution: {integrity: sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-mips64el@0.23.1':
    resolution: {integrity: sha512-nrFzzMQ7W4WRLNUOU5dlWAqa6yVeI0P78WKGUo7lg2HShq/yx+UYkeNSE0SSfSure0SqgnsxPvmAUu/vu0E+3Q==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.21.5':
    resolution: {integrity: sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-ppc64@0.23.1':
    resolution: {integrity: sha512-dKN8fgVqd0vUIjxuJI6P/9SSSe/mB9rvA98CSH2sJnlZ/OCZWO1DJvxj8jvKTfYUdGfcq2dDxoKaC6bHuTlgcw==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.21.5':
    resolution: {integrity: sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-riscv64@0.23.1':
    resolution: {integrity: sha512-5AV4Pzp80fhHL83JM6LoA6pTQVWgB1HovMBsLQ9OZWLDqVY8MVobBXNSmAJi//Csh6tcY7e7Lny2Hg1tElMjIA==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.21.5':
    resolution: {integrity: sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-s390x@0.23.1':
    resolution: {integrity: sha512-9ygs73tuFCe6f6m/Tb+9LtYxWR4c9yg7zjt2cYkjDbDpV/xVn+68cQxMXCjUpYwEkze2RcU/rMnfIXNRFmSoDw==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.21.5':
    resolution: {integrity: sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/linux-x64@0.23.1':
    resolution: {integrity: sha512-EV6+ovTsEXCPAp58g2dD68LxoP/wK5pRvgy0J/HxPGB009omFPv3Yet0HiaqvrIrgPTBuC6wCH1LTOY91EO5hQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-x64@0.21.5':
    resolution: {integrity: sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.23.1':
    resolution: {integrity: sha512-aevEkCNu7KlPRpYLjwmdcuNz6bDFiE7Z8XC4CPqExjTvrHugh28QzUXVOZtiYghciKUacNktqxdpymplil1beA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.23.1':
    resolution: {integrity: sha512-3x37szhLexNA4bXhLrCC/LImN/YtWis6WXr1VESlfVtVeoFJBRINPJ3f0a/6LV8zpikqoUg4hyXw0sFBt5Cr+Q==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.21.5':
    resolution: {integrity: sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.23.1':
    resolution: {integrity: sha512-aY2gMmKmPhxfU+0EdnN+XNtGbjfQgwZj43k8G3fyrDM/UdZww6xrWxmDkuz2eCZchqVeABjV5BpildOrUbBTqA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.21.5':
    resolution: {integrity: sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/sunos-x64@0.23.1':
    resolution: {integrity: sha512-RBRT2gqEl0IKQABT4XTj78tpk9v7ehp+mazn2HbUeZl1YMdaGAQqhapjGTCe7uw7y0frDi4gS0uHzhvpFuI1sA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.21.5':
    resolution: {integrity: sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-arm64@0.23.1':
    resolution: {integrity: sha512-4O+gPR5rEBe2FpKOVyiJ7wNDPA8nGzDuJ6gN4okSA1gEOYZ67N8JPk58tkWtdtPeLz7lBnY6I5L3jdsr3S+A6A==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.21.5':
    resolution: {integrity: sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-ia32@0.23.1':
    resolution: {integrity: sha512-BcaL0Vn6QwCwre3Y717nVHZbAa4UBEigzFm6VdsVdT/MbZ38xoj1X9HPkZhbmaBGUD1W8vxAfffbDe8bA6AKnQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.21.5':
    resolution: {integrity: sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@esbuild/win32-x64@0.23.1':
    resolution: {integrity: sha512-BHpFFeslkWrXWyUPnbKm+xYYVYruCinGcftSBaa8zoF9hZO4BcSCFUvHVTtzpIY6YzUnYtuEhZ+C9iEXjxnasg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@firebase/analytics-compat@0.2.18':
    resolution: {integrity: sha512-Hw9mzsSMZaQu6wrTbi3kYYwGw9nBqOHr47pVLxfr5v8CalsdrG5gfs9XUlPOZjHRVISp3oQrh1j7d3E+ulHPjQ==}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/analytics-types@0.8.3':
    resolution: {integrity: sha512-VrIp/d8iq2g501qO46uGz3hjbDb8xzYMrbu8Tp0ovzIzrvJZ2fvmj649gTjge/b7cCCcjT0H37g1gVtlNhnkbg==}

  '@firebase/analytics@0.10.12':
    resolution: {integrity: sha512-iDCGnw6qdFqwI5ywkgece99WADJNoymu+nLIQI4fZM/vCZ3bEo4wlpEetW71s1HqGpI0hQStiPhqVjFxDb2yyw==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/app-check-compat@0.3.19':
    resolution: {integrity: sha512-G8FMiqhrKc4gEEujrBDBBrbRav8MGqoLObWj1hy/riCSg4XlRYhpnq3ev8E9HTirqU1tAGH6oJl7vr+jfM7YNA==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/app-check-interop-types@0.3.3':
    resolution: {integrity: sha512-gAlxfPLT2j8bTI/qfe3ahl2I2YcBQ8cFIBdhAQA4I2f3TndcO+22YizyGYuttLHPQEpWkhmpFW60VCFEPg4g5A==}

  '@firebase/app-check-types@0.5.3':
    resolution: {integrity: sha512-hyl5rKSj0QmwPdsAxrI5x1otDlByQ7bvNvVt8G/XPO2CSwE++rmSVf3VEhaeOR4J8ZFaF0Z0NDSmLejPweZ3ng==}

  '@firebase/app-check@0.8.12':
    resolution: {integrity: sha512-LxjcoIFOU4sgK07ZWb8XDHxuVB+UKs41vPK+Sg9PeZMvEoz84fndFAx8Nz2nipiya2EmyxBgVhff8Hi6GBt+XA==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/app-compat@0.2.51':
    resolution: {integrity: sha512-pxF1+coABt+ugqNI0YXDlmkKv4kh3pjI5BqIJJ1VXBo42OZbKMsQbFeos14YBrWwiqqSjUvQ70FBNsv5E2wuxg==}
    engines: {node: '>=18.0.0'}

  '@firebase/app-types@0.9.3':
    resolution: {integrity: sha512-kRVpIl4vVGJ4baogMDINbyrIOtOxqhkZQg4jTq3l8Lw6WSk0xfpEYzezFu+Kl4ve4fbPl79dvwRtaFqAC/ucCw==}

  '@firebase/app@0.11.2':
    resolution: {integrity: sha512-bFee0hPJZBzNtiizRxdgsu8C9DW3mn1y0OJJ4zHQsccjDYzGOfvN0G3CMGyBIiwNctsFpQa8orbp2IKywoUeqA==}
    engines: {node: '>=18.0.0'}

  '@firebase/auth-compat@0.5.19':
    resolution: {integrity: sha512-v898POphOIBJliKF76SiGOXh4EdhO5fM6S9a2ZKf/8wHdBea/qwxwZoVVya4DW6Mi7vWyp1lIzHbFgwRz8G9TA==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/auth-interop-types@0.2.4':
    resolution: {integrity: sha512-JPgcXKCuO+CWqGDnigBtvo09HeBs5u/Ktc2GaFj2m01hLarbxthLNm7Fk8iOP1aqAtXV+fnnGj7U28xmk7IwVA==}

  '@firebase/auth-types@0.13.0':
    resolution: {integrity: sha512-S/PuIjni0AQRLF+l9ck0YpsMOdE8GO2KU6ubmBB7P+7TJUCQDa3R1dlgYm9UzGbbePMZsp0xzB93f2b/CgxMOg==}
    peerDependencies:
      '@firebase/app-types': 0.x
      '@firebase/util': 1.x

  '@firebase/auth@1.9.1':
    resolution: {integrity: sha512-9KKo5SNVkyJzftsW+daS+PGDbeJ+MFJWXQFHDqqPPH3acWHtiNnGHH5HGpIJErEELrsm9xMPie5zfZ0XpGU8+w==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x
      '@react-native-async-storage/async-storage': ^1.18.1
    peerDependenciesMeta:
      '@react-native-async-storage/async-storage':
        optional: true

  '@firebase/component@0.6.13':
    resolution: {integrity: sha512-I/Eg1NpAtZ8AAfq8mpdfXnuUpcLxIDdCDtTzWSh+FXnp/9eCKJ3SNbOCKrUCyhLzNa2SiPJYruei0sxVjaOTeg==}
    engines: {node: '>=18.0.0'}

  '@firebase/data-connect@0.3.1':
    resolution: {integrity: sha512-PNlfAJ2mcbyRlWfm41nfk8EksTuvMFTFIX+puNzeUa6OTIDtyp1IX1NJVc7n6WpfbErN7tNqcOEMe6BMtpcjVA==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/database-compat@2.0.4':
    resolution: {integrity: sha512-4qsptwZ3DTGNBje56ETItZQyA/HMalOelnLmkC3eR0M6+zkzOHjNHyWUWodW2mqxRKAM0sGkn+aIwYHKZFJXug==}
    engines: {node: '>=18.0.0'}

  '@firebase/database-types@1.0.9':
    resolution: {integrity: sha512-uCntrxPbJHhZsNRpMhxNCm7GzhYWX+7J2e57wq1ZZ4NJrQw5DORgkAzJMByYZcVAjgADnCxxhK/GkoypH+XpvQ==}

  '@firebase/database@1.0.13':
    resolution: {integrity: sha512-cdc+LuseKdJXzlrCx8ePMXyctSWtYS9SsP3y7EeA85GzNh/IL0b7HOq0eShridL935iQ0KScZCj5qJtKkGE53g==}
    engines: {node: '>=18.0.0'}

  '@firebase/firestore-compat@0.3.44':
    resolution: {integrity: sha512-4Lv2TyHEW+FugXPgmQ0ZylSbh9uFuKDP0lCL1hX9cbxXaafhC/Nww+DWokUQ2zZcynjc8fxFunw6Xbd3QHAlgA==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/firestore-types@3.0.3':
    resolution: {integrity: sha512-hD2jGdiWRxB/eZWF89xcK9gF8wvENDJkzpVFb4aGkzfEaKxVRD1kjz1t1Wj8VZEp2LCB53Yx1zD8mrhQu87R6Q==}
    peerDependencies:
      '@firebase/app-types': 0.x
      '@firebase/util': 1.x

  '@firebase/firestore@4.7.9':
    resolution: {integrity: sha512-uq/bUtHDqJ5ZqPHAJIlNzHpXUtcVYcASz2V6y7UmP1WLlRKEt1yf1OcQW5u8pY2yq7162OnCl5J5mkOdMTMLZw==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/functions-compat@0.3.20':
    resolution: {integrity: sha512-iIudmYDAML6n3c7uXO2YTlzra2/J6lnMzmJTXNthvrKVMgNMaseNoQP1wKfchK84hMuSF8EkM4AvufwbJ+Juew==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/functions-types@0.6.3':
    resolution: {integrity: sha512-EZoDKQLUHFKNx6VLipQwrSMh01A1SaL3Wg6Hpi//x6/fJ6Ee4hrAeswK99I5Ht8roiniKHw4iO0B1Oxj5I4plg==}

  '@firebase/functions@0.12.3':
    resolution: {integrity: sha512-Wv7JZMUkKLb1goOWRtsu3t7m97uK6XQvjQLPvn8rncY91+VgdU72crqnaYCDI/ophNuBEmuK8mn0/pAnjUeA6A==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/installations-compat@0.2.13':
    resolution: {integrity: sha512-f/o6MqCI7LD/ulY9gvgkv6w5k6diaReD8BFHd/y/fEdpsXmFWYS/g28GXCB72bRVBOgPpkOUNl+VsMvDwlRKmw==}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/installations-types@0.5.3':
    resolution: {integrity: sha512-2FJI7gkLqIE0iYsNQ1P751lO3hER+Umykel+TkLwHj6plzWVxqvfclPUZhcKFVQObqloEBTmpi2Ozn7EkCABAA==}
    peerDependencies:
      '@firebase/app-types': 0.x

  '@firebase/installations@0.6.13':
    resolution: {integrity: sha512-6ZpkUiaygPFwgVneYxuuOuHnSPnTA4KefLEaw/sKk/rNYgC7X6twaGfYb0sYLpbi9xV4i5jXsqZ3WO+yaguNgg==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/logger@0.4.4':
    resolution: {integrity: sha512-mH0PEh1zoXGnaR8gD1DeGeNZtWFKbnz9hDO91dIml3iou1gpOnLqXQ2dJfB71dj6dpmUjcQ6phY3ZZJbjErr9g==}
    engines: {node: '>=18.0.0'}

  '@firebase/messaging-compat@0.2.17':
    resolution: {integrity: sha512-5Q+9IG7FuedusdWHVQRjpA3OVD9KUWp/IPegcv0s5qSqRLBjib7FlAeWxN+VL0Ew43tuPJBY2HKhEecuizmO1Q==}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/messaging-interop-types@0.2.3':
    resolution: {integrity: sha512-xfzFaJpzcmtDjycpDeCUj0Ge10ATFi/VHVIvEEjDNc3hodVBQADZ7BWQU7CuFpjSHE+eLuBI13z5F/9xOoGX8Q==}

  '@firebase/messaging@0.12.17':
    resolution: {integrity: sha512-W3CnGhTm6Nx8XGb6E5/+jZTuxX/EK8Vur4QXvO1DwZta/t0xqWMRgO9vNsZFMYBqFV4o3j4F9qK/iddGYwWS6g==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/performance-compat@0.2.14':
    resolution: {integrity: sha512-/crPg0fDqHIx+FjFoEqWxNp+lJSF40ZG7x43AAJGRaUaWLJDncQm3UJB5/mABaRZb7obs1CQAcRtd4phZFkmZg==}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/performance-types@0.2.3':
    resolution: {integrity: sha512-IgkyTz6QZVPAq8GSkLYJvwSLr3LS9+V6vNPQr0x4YozZJiLF5jYixj0amDtATf1X0EtYHqoPO48a9ija8GocxQ==}

  '@firebase/performance@0.7.1':
    resolution: {integrity: sha512-SkEUurawojCjav2V2AXo6BQLDtv02NxgXPLCiAvrkn95IAKI4W/UbLKYQvMbEez/nqvmnucLyklcMlB0Q5a1iw==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/remote-config-compat@0.2.13':
    resolution: {integrity: sha512-UmHoO7TxAEJPIZf8e1Hy6CeFGMeyjqSCpgoBkQZYXFI2JHhzxIyDpr8jVKJJN1dmAePKZ5EX7dC13CmcdTOl7Q==}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/remote-config-types@0.4.0':
    resolution: {integrity: sha512-7p3mRE/ldCNYt8fmWMQ/MSGRmXYlJ15Rvs9Rk17t8p0WwZDbeK7eRmoI1tvCPaDzn9Oqh+yD6Lw+sGLsLg4kKg==}

  '@firebase/remote-config@0.6.0':
    resolution: {integrity: sha512-Yrk4l5+6FJLPHC6irNHMzgTtJ3NfHXlAXVChCBdNFtgmzyGmufNs/sr8oA0auEfIJ5VpXCaThRh3P4OdQxiAlQ==}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/storage-compat@0.3.17':
    resolution: {integrity: sha512-CBlODWEZ5b6MJWVh21VZioxwxNwVfPA9CAdsk+ZgVocJQQbE2oDW1XJoRcgthRY1HOitgbn4cVrM+NlQtuUYhw==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app-compat': 0.x

  '@firebase/storage-types@0.8.3':
    resolution: {integrity: sha512-+Muk7g9uwngTpd8xn9OdF/D48uiQ7I1Fae7ULsWPuKoCH3HU7bfFPhxtJYzyhjdniowhuDpQcfPmuNRAqZEfvg==}
    peerDependencies:
      '@firebase/app-types': 0.x
      '@firebase/util': 1.x

  '@firebase/storage@0.13.7':
    resolution: {integrity: sha512-FkRyc24rK+Y6EaQ1tYFm3TevBnnfSNA0VyTfew2hrYyL/aYfatBg7HOgktUdB4kWMHNA9VoTotzZTGoLuK92wg==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x

  '@firebase/util@1.11.0':
    resolution: {integrity: sha512-PzSrhIr++KI6y4P6C/IdgBNMkEx0Ex6554/cYd0Hm+ovyFSJtJXqb/3OSIdnBoa2cpwZT1/GW56EmRc5qEc5fQ==}
    engines: {node: '>=18.0.0'}

  '@firebase/vertexai@1.1.0':
    resolution: {integrity: sha512-K8CgIFKJrfrf5lYhKnDXOu08FEmIzVExK+ApUZx4Bw2GAmLEA3wDVrsjuupuvpXZSp8QlzvEiXwqshqqc4v0pA==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      '@firebase/app': 0.x
      '@firebase/app-types': 0.x

  '@firebase/webchannel-wrapper@1.0.3':
    resolution: {integrity: sha512-2xCRM9q9FlzGZCdgDMJwc0gyUkWFtkosy7Xxr6sFgQwn+wMNIWd7xIvYNauU1r64B5L5rsGKy/n9TKJ0aAFeqQ==}

  '@floating-ui/core@1.6.8':
    resolution: {integrity: sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==}

  '@floating-ui/dom@1.6.12':
    resolution: {integrity: sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==}

  '@floating-ui/react-dom@2.1.2':
    resolution: {integrity: sha512-06okr5cgPzMNBy+Ycse2A6udMi4bqwW/zgBF/rwjcNqWkyr82Mcg8b0vjX8OJpZFy/FKjJmw6wV7t44kK6kW7A==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.8':
    resolution: {integrity: sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig==}

  '@grpc/grpc-js@1.9.15':
    resolution: {integrity: sha512-nqE7Hc0AzI+euzUwDAy0aY5hCp10r734gMGRdU+qOPX0XSceI2ULrcXB5U2xSc5VkWwalCj4M7GzCAygZl2KoQ==}
    engines: {node: ^8.13.0 || >=10.10.0}

  '@grpc/proto-loader@0.7.13':
    resolution: {integrity: sha512-AiXO/bfe9bmxBjxxtYxFAXGZvMaN5s8kO+jBHAJCON8rJoB5YS/D6X7ZNc6XQkuHNmyl4CYaMI1fJ/Gn27RGGw==}
    engines: {node: '>=6'}
    hasBin: true

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.5':
    resolution: {integrity: sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@mynaui/icons-react@0.3.2':
    resolution: {integrity: sha512-uf6DUCNLHsvZzBFBBKZYCAXaF7jcapB5RNjs+w1v1vY8EO/Pu+Rvz819DWwsnrOA09dyKRalql23H0Sz5WvCQA==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@protobufjs/aspromise@1.1.2':
    resolution: {integrity: sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==}

  '@protobufjs/base64@1.1.2':
    resolution: {integrity: sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==}

  '@protobufjs/codegen@2.0.4':
    resolution: {integrity: sha512-YyFaikqM5sH0ziFZCN3xDC7zeGaB/d0IUb9CATugHWbd1FRFwWwt4ld4OYMPWu5a3Xe01mGAULCdqhMlPl29Jg==}

  '@protobufjs/eventemitter@1.1.0':
    resolution: {integrity: sha512-j9ednRT81vYJ9OfVuXG6ERSTdEL1xVsNgqpkxMsbIabzSo3goCjDIveeGv5d03om39ML71RdmrGNjG5SReBP/Q==}

  '@protobufjs/fetch@1.1.0':
    resolution: {integrity: sha512-lljVXpqXebpsijW71PZaCYeIcE5on1w5DlQy5WH6GLbFryLUrBD4932W/E2BSpfRJWseIL4v/KPgBFxDOIdKpQ==}

  '@protobufjs/float@1.0.2':
    resolution: {integrity: sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==}

  '@protobufjs/inquire@1.1.0':
    resolution: {integrity: sha512-kdSefcPdruJiFMVSbn801t4vFK7KB/5gd2fYvrxhuJYg8ILrmn9SKSX2tZdV6V+ksulWqS7aXjBcRXl3wHoD9Q==}

  '@protobufjs/path@1.1.2':
    resolution: {integrity: sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==}

  '@protobufjs/pool@1.1.0':
    resolution: {integrity: sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==}

  '@protobufjs/utf8@1.1.0':
    resolution: {integrity: sha512-Vvn3zZrhQZkkBE8LSuW3em98c0FwgO4nxzv6OdSxPKJIEKY2bGbHn+mhGIPerzI4twdxaP8/0+06HBpwf345Lw==}

  '@radix-ui/primitive@1.1.0':
    resolution: {integrity: sha512-4Z8dn6Upk0qk4P74xBhZ6Hd/w0mPEzOOLxy4xiPXOXqjF7jZS0VAKk7/x/H6FyY2zCkYJqePf1G5KmkmNJ4RBA==}

  '@radix-ui/primitive@1.1.1':
    resolution: {integrity: sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA==}

  '@radix-ui/primitive@1.1.2':
    resolution: {integrity: sha512-XnbHrrprsNqZKQhStrSwgRUQzoCI1glLzdw79xiZPoofhGICeZRSQ3dIxAKH1gb3OHfNf4d6f+vAv3kil2eggA==}

  '@radix-ui/react-alert-dialog@1.1.14':
    resolution: {integrity: sha512-IOZfZ3nPvN6lXpJTBCunFQPRSvK8MDgSc1FB85xnIpUKOw9en0dJj8JmCAxV7BiZdtYlUpmrQjoTFkVYtdoWzQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-arrow@1.1.0':
    resolution: {integrity: sha512-FmlW1rCg7hBpEBwFbjHwCW6AmWLQM6g/v0Sn8XbP9NvmSZ2San1FpQeyPtufzOMSIx7Y4dzjlHoifhp+7NkZhw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.2':
    resolution: {integrity: sha512-9z54IEKRxIa9VityapoEYMuByaG42iSy1ZXlY2KcuLSEtq8x4987/N6m15ppoMffgZX72gER2uHe1D9Y6Unlcw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.0':
    resolution: {integrity: sha512-b4inOtiaOnYf9KWyO3jAeeCG6FeyfY6ldiEPanbUjWd+xIk5wZeHa8yVwmrJ2vderhu/BQvzCrJI0lHd+wIiqw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-compose-refs@1.1.1':
    resolution: {integrity: sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.0':
    resolution: {integrity: sha512-OKrckBy+sMEgYM/sMmqmErVn0kZqrHPJze+Ql3DzYsDDp0hl0L62nx/2122/Bvps1qz645jlcu2tD9lrRSdf8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.1':
    resolution: {integrity: sha512-UASk9zi+crv9WteK/NU4PLvOoL3OuE6BWVKNF6hPRBtYBDXQ2u5iu3O59zUlJiTVvkyuycnqrztsHVJwcK9K+Q==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.2':
    resolution: {integrity: sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.14':
    resolution: {integrity: sha512-+CpweKjqpzTmwRwcYECQcNYbI8V9VSQt0SNFKeEBLgfucbsLssU6Ppq7wUdNXEGb573bMjFhVjKVll8rmV6zMw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dialog@1.1.2':
    resolution: {integrity: sha512-Yj4dZtqa2o+kG61fzB0H2qUvmwBA2oyQroGLyNtBj1beo1khoQ3q1a2AO8rrQYjd8256CO9+N8L9tvsS+bnIyA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.0':
    resolution: {integrity: sha512-BUuBvgThEiAXh2DWu93XsT+a3aWrGqolGlqqw5VU1kG7p/ZH2cuDlM1sRLNnY3QcBS69UIz2mcKhMxDsdewhjg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.1':
    resolution: {integrity: sha512-QSxg29lfr/xcev6kSz7MAlmDnzbP1eI/Dwn3Tp1ip0KT5CUELsxkekFEMVBEoykI3oV39hKT4TKZzBNMbcTZYQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.10':
    resolution: {integrity: sha512-IM1zzRV4W3HtVgftdQiiOmA0AdJlCtMLe00FXaHwgt3rAnNsIyDqshvkIW3hj/iu5hu8ERP7KIYki6NkqDxAwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.1':
    resolution: {integrity: sha512-pSIwfrT1a6sIoDASCSpFwOasEwKTZWDw/iBdtnqKO7v6FeOzYJ7U53cPzYFVR3geGGXgVHaH+CdngrrAzqUGxg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-guards@1.1.2':
    resolution: {integrity: sha512-fyjAACV62oPV925xFCrH8DR5xWhg9KYtJT4s3u54jxp+L/hbpTY2kIeEFFbFe+a/HCE94zGQMZLIpVTPVZDhaA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.0':
    resolution: {integrity: sha512-200UD8zylvEyL8Bx+z76RJnASR2gRMuxlgFCPAe/Q/679a/r0eK3MBVYMb7vZODZcffZBdob1EGnky78xmVvcA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-scope@1.1.7':
    resolution: {integrity: sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.0':
    resolution: {integrity: sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-popper@1.2.0':
    resolution: {integrity: sha512-ZnRMshKF43aBxVWPWvbj21+7TQCvhuULWJ4gNIKYpRlQt5xGRhLx66tMp8pya2UkGHTSlhpXwmjqltDYHhw7Vg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.2':
    resolution: {integrity: sha512-WeDYLGPxJb/5EGBoedyJbT0MpoULmwnIPMJMSldkuiMsBAv7N1cRdsTWZWht9vpPOiN3qyiGAtbK2is47/uMFg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.9':
    resolution: {integrity: sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.1':
    resolution: {integrity: sha512-IeFXVi4YS1K0wVZzXNrbaaUvIJ3qdY+/Ih4eHFhWA9SwGR9UDX7Ck8abvL57C4cv3wwMvUE0OG69Qc3NCcTe/A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.2':
    resolution: {integrity: sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.4':
    resolution: {integrity: sha512-ueDqRbdc4/bkaQT3GIpLQssRlFgWaL/U2z/S31qRwwLWoxHLgry3SIfCwhxeQNbirEUXFa+lq3RL3oBYXtcmIA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.0':
    resolution: {integrity: sha512-ZSpFm0/uHa8zTvKBDjLFWLo8dkr4MBsiDLz0g3gMUwqgLHz9rTaRRGYDgvZPtBJgYCBKXkS9fzmoySgr8CO6Cw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.1':
    resolution: {integrity: sha512-sHCWTtxwNn3L3fH8qAfnF3WbUZycW93SM1j3NFDzXBiz8D6F5UTTy8G1+WFEaiCdvCVRJWj6N2R4Xq6HdiHmDg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.2':
    resolution: {integrity: sha512-Ec/0d38EIuvDF+GZjcMU/Ze6MxntVJYO/fRlCPhCaVUyPY9WTalHJw54tp9sXeJo3tlShWpy41vQRgLRGOuz+w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-progress@1.1.1':
    resolution: {integrity: sha512-6diOawA84f/eMxFHcWut0aE1C2kyE9dOyCTQOMRR2C/qPiXz/X0SaiA/RLbapQaXUCmy0/hLMf9meSccD1N0pA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.2':
    resolution: {integrity: sha512-zgMQWkNO169GtGqRvYrzb0Zf8NhMHS2DuEB/TiEmVnpr5OqPU3i8lfbxaAmC2J/KYuIQxyoQQ6DxepyXp61/xw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.0':
    resolution: {integrity: sha512-3uBAs+egzvJBDZAzvb/n4NxxOYpnspmWxO2u5NbZ8Y6FM/NdrGSF9bop3Cf6F6C71z1rTSn8KV0Fo2ZVd79lGA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.1.0':
    resolution: {integrity: sha512-FUCf5XMfmW4dtYl69pdS4DbxKy8nj4M7SafBgPllysxmdachynNflAdp/gCsnYWNDnge6tI9onzMp5ARYc1KNw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.1.1':
    resolution: {integrity: sha512-RApLLOcINYJA+dMVbOju7MYv1Mb2EBp2nH4HdDzXTSyaR5optlm6Otrz1euW3HbdOR8UmmFK06TD+A9frYWv+g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.1.2':
    resolution: {integrity: sha512-YAKxaiGsSQJ38VzKH86/BPRC4rh+b1Jpa+JneA5LRE7skmLPNAyeG8kPJj/oo4STLvlrs8vkf/iYyc3A5stYCQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-tabs@1.1.3':
    resolution: {integrity: sha512-9mFyI30cuRDImbmFF6O2KUJdgEOsGh9Vmx9x/Dh9tOhL7BngmQPQfwW4aejKm5OHpfWIdmeV6ySyuxoOGjtNng==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tooltip@1.1.4':
    resolution: {integrity: sha512-QpObUH/ZlpaO4YgHSaYzrLO2VuO+ZBFFgGzjMUPwtiYnAzzNNDPJeEGRrT7qNOrWm/Jr08M1vlp+vTHtnSQ0Uw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.0':
    resolution: {integrity: sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.1':
    resolution: {integrity: sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.1.0':
    resolution: {integrity: sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.2.2':
    resolution: {integrity: sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-effect-event@0.0.2':
    resolution: {integrity: sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.0':
    resolution: {integrity: sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.1':
    resolution: {integrity: sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.0':
    resolution: {integrity: sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.0':
    resolution: {integrity: sha512-0Fmkebhr6PiseyZlYAOtLS+nb7jLmpqTrJyv61Pe68MKYW6OWdRE2kI70TaYY27u7H0lajqM3hSMMLFq18Z7nQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.0':
    resolution: {integrity: sha512-XW3/vWuIXHa+2Uwcc2ABSfcCledmXhhQPlGbfcRXbiUQI5Icjcg19BGCZVKKInYbvUCut/ufbbLLPFC5cbb1hw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.1.0':
    resolution: {integrity: sha512-N8MDZqtgCgG5S3aV60INAB475osJousYpZ4cTJ2cFbMpdHS5Y6loLTH8LPtkj2QN0x93J30HT/M3qJXM0+lyeQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.0':
    resolution: {integrity: sha512-A9+lCBZoaMJlVKcRBz2YByCG+Cp2t6nAnMnNba+XiWxnj6r4JUFqfsgwocMBZU9LPtdxC6wB56ySYpc7LQIoJg==}

  '@rollup/rollup-android-arm-eabi@4.35.0':
    resolution: {integrity: sha512-uYQ2WfPaqz5QtVgMxfN6NpLD+no0MYHDBywl7itPYd3K5TjjSghNKmX8ic9S8NU8w81NVhJv/XojcHptRly7qQ==}
    cpu: [arm]
    os: [android]

  '@rollup/rollup-android-arm64@4.35.0':
    resolution: {integrity: sha512-FtKddj9XZudurLhdJnBl9fl6BwCJ3ky8riCXjEw3/UIbjmIY58ppWwPEvU3fNu+W7FUsAsB1CdH+7EQE6CXAPA==}
    cpu: [arm64]
    os: [android]

  '@rollup/rollup-darwin-arm64@4.35.0':
    resolution: {integrity: sha512-Uk+GjOJR6CY844/q6r5DR/6lkPFOw0hjfOIzVx22THJXMxktXG6CbejseJFznU8vHcEBLpiXKY3/6xc+cBm65Q==}
    cpu: [arm64]
    os: [darwin]

  '@rollup/rollup-darwin-x64@4.35.0':
    resolution: {integrity: sha512-3IrHjfAS6Vkp+5bISNQnPogRAW5GAV1n+bNCrDwXmfMHbPl5EhTmWtfmwlJxFRUCBZ+tZ/OxDyU08aF6NI/N5Q==}
    cpu: [x64]
    os: [darwin]

  '@rollup/rollup-freebsd-arm64@4.35.0':
    resolution: {integrity: sha512-sxjoD/6F9cDLSELuLNnY0fOrM9WA0KrM0vWm57XhrIMf5FGiN8D0l7fn+bpUeBSU7dCgPV2oX4zHAsAXyHFGcQ==}
    cpu: [arm64]
    os: [freebsd]

  '@rollup/rollup-freebsd-x64@4.35.0':
    resolution: {integrity: sha512-2mpHCeRuD1u/2kruUiHSsnjWtHjqVbzhBkNVQ1aVD63CcexKVcQGwJ2g5VphOd84GvxfSvnnlEyBtQCE5hxVVw==}
    cpu: [x64]
    os: [freebsd]

  '@rollup/rollup-linux-arm-gnueabihf@4.35.0':
    resolution: {integrity: sha512-mrA0v3QMy6ZSvEuLs0dMxcO2LnaCONs1Z73GUDBHWbY8tFFocM6yl7YyMu7rz4zS81NDSqhrUuolyZXGi8TEqg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm-musleabihf@4.35.0':
    resolution: {integrity: sha512-DnYhhzcvTAKNexIql8pFajr0PiDGrIsBYPRvCKlA5ixSS3uwo/CWNZxB09jhIapEIg945KOzcYEAGGSmTSpk7A==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm64-gnu@4.35.0':
    resolution: {integrity: sha512-uagpnH2M2g2b5iLsCTZ35CL1FgyuzzJQ8L9VtlJ+FckBXroTwNOaD0z0/UF+k5K3aNQjbm8LIVpxykUOQt1m/A==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-arm64-musl@4.35.0':
    resolution: {integrity: sha512-XQxVOCd6VJeHQA/7YcqyV0/88N6ysSVzRjJ9I9UA/xXpEsjvAgDTgH3wQYz5bmr7SPtVK2TsP2fQ2N9L4ukoUg==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-loongarch64-gnu@4.35.0':
    resolution: {integrity: sha512-5pMT5PzfgwcXEwOaSrqVsz/LvjDZt+vQ8RT/70yhPU06PTuq8WaHhfT1LW+cdD7mW6i/J5/XIkX/1tCAkh1W6g==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-powerpc64le-gnu@4.35.0':
    resolution: {integrity: sha512-c+zkcvbhbXF98f4CtEIP1EBA/lCic5xB0lToneZYvMeKu5Kamq3O8gqrxiYYLzlZH6E3Aq+TSW86E4ay8iD8EA==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-gnu@4.35.0':
    resolution: {integrity: sha512-s91fuAHdOwH/Tad2tzTtPX7UZyytHIRR6V4+2IGlV0Cej5rkG0R61SX4l4y9sh0JBibMiploZx3oHKPnQBKe4g==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-s390x-gnu@4.35.0':
    resolution: {integrity: sha512-hQRkPQPLYJZYGP+Hj4fR9dDBMIM7zrzJDWFEMPdTnTy95Ljnv0/4w/ixFw3pTBMEuuEuoqtBINYND4M7ujcuQw==}
    cpu: [s390x]
    os: [linux]

  '@rollup/rollup-linux-x64-gnu@4.35.0':
    resolution: {integrity: sha512-Pim1T8rXOri+0HmV4CdKSGrqcBWX0d1HoPnQ0uw0bdp1aP5SdQVNBy8LjYncvnLgu3fnnCt17xjWGd4cqh8/hA==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-linux-x64-musl@4.35.0':
    resolution: {integrity: sha512-QysqXzYiDvQWfUiTm8XmJNO2zm9yC9P/2Gkrwg2dH9cxotQzunBHYr6jk4SujCTqnfGxduOmQcI7c2ryuW8XVg==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-win32-arm64-msvc@4.35.0':
    resolution: {integrity: sha512-OUOlGqPkVJCdJETKOCEf1mw848ZyJ5w50/rZ/3IBQVdLfR5jk/6Sr5m3iO2tdPgwo0x7VcncYuOvMhBWZq8ayg==}
    cpu: [arm64]
    os: [win32]

  '@rollup/rollup-win32-ia32-msvc@4.35.0':
    resolution: {integrity: sha512-2/lsgejMrtwQe44glq7AFFHLfJBPafpsTa6JvP2NGef/ifOa4KBoglVf7AKN7EV9o32evBPRqfg96fEHzWo5kw==}
    cpu: [ia32]
    os: [win32]

  '@rollup/rollup-win32-x64-msvc@4.35.0':
    resolution: {integrity: sha512-PIQeY5XDkrOysbQblSW7v3l1MDZzkTEzAfTPkj5VAu3FW8fS4ynyLg2sINp0fp3SjZ8xkRYpLqoKcYqAkhU1dw==}
    cpu: [x64]
    os: [win32]

  '@tanstack/history@1.81.9':
    resolution: {integrity: sha512-9MPknhhnvZKifK4jSvva6NDqYQwsNaptrRzO4ejk6yCLyi4koVG4u3C4VCeClYZY5etLEQbO8wXU9knEFZpMeg==}
    engines: {node: '>=12'}

  '@tanstack/react-router@1.82.1':
    resolution: {integrity: sha512-C3+itdLVvEA3dOd/dYOrFSpqVBhWt/WUfjMWfda5lAGIxGkPM8Cv+7IE6P6LI80JOnUPGLpup23SShPD+cv3kw==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/router-generator': 1.81.9
      react: '>=18'
      react-dom: '>=18'
    peerDependenciesMeta:
      '@tanstack/router-generator':
        optional: true

  '@tanstack/react-store@0.5.6':
    resolution: {integrity: sha512-SitIpS5jTj28DajjLpWbIX+YetmJL+6PRY0DKKiCGBKfYIqj3ryODQYF3jB3SNoR9ifUA/jFkqbJdBKFtWd+AQ==}
    peerDependencies:
      react: ^17.0.0 || ^18.0.0
      react-dom: ^17.0.0 || ^18.0.0

  '@tanstack/router-devtools@1.82.1':
    resolution: {integrity: sha512-sIPuoqrnnFmAGMuCMuw9kMMbIdzZW6ecipTD87xk44VusLtm7Rb4IAIAc2Kr8e4rrKlbOmieQ1Qihte9/KVrrA==}
    engines: {node: '>=12'}
    peerDependencies:
      '@tanstack/react-router': ^1.82.1
      react: '>=18'
      react-dom: '>=18'

  '@tanstack/router-generator@1.81.9':
    resolution: {integrity: sha512-HiInbc11+E65tg5xlgg0z/hqQJkQBUpr4RCEQeEoortlgQ38Yi+PSuoc2IO+n03XPGSqPMhCS6Q1MiMgfRfwZw==}
    engines: {node: '>=12'}

  '@tanstack/router-plugin@1.81.9':
    resolution: {integrity: sha512-u12ibRFI/RpWzUmuFEy8HeyjRObkH8NqzOqEGt8xNa/mSQK3sFQLvfXf+lEFwIqg+C5lnrZtl2RvdmoQpRLwHw==}
    engines: {node: '>=12'}
    peerDependencies:
      '@rsbuild/core': '>=1.0.2'
      vite: '>=5.0.0'
      webpack: '>=5.92.0'
    peerDependenciesMeta:
      '@rsbuild/core':
        optional: true
      vite:
        optional: true
      webpack:
        optional: true

  '@tanstack/store@0.5.5':
    resolution: {integrity: sha512-EOSrgdDAJExbvRZEQ/Xhh9iZchXpMN+ga1Bnk8Nmygzs8TfiE6hbzThF+Pr2G19uHL6+DTDTHhJ8VQiOd7l4tA==}

  '@tanstack/virtual-file-routes@1.81.9':
    resolution: {integrity: sha512-jV5mWJrsh3QXHpb/by6udSqwva0qK50uYHpIXvKsLaxnlbjbLfflfPjFyRWXbMtZsnzCjSUqp5pm5/p+Wpaerg==}
    engines: {node: '>=12'}

  '@tauri-apps/api@2.1.1':
    resolution: {integrity: sha512-fzUfFFKo4lknXGJq8qrCidkUcKcH2UHhfaaCNt4GzgzGaW2iS26uFOg4tS3H4P8D6ZEeUxtiD5z0nwFF0UN30A==}

  '@tauri-apps/cli-darwin-arm64@2.1.0':
    resolution: {integrity: sha512-ESc6J6CE8hl1yKH2vJ+ALF+thq4Be+DM1mvmTyUCQObvezNCNhzfS6abIUd3ou4x5RGH51ouiANeT3wekU6dCw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@tauri-apps/cli-darwin-x64@2.1.0':
    resolution: {integrity: sha512-TasHS442DFs8cSH2eUQzuDBXUST4ECjCd0yyP+zZzvAruiB0Bg+c8A+I/EnqCvBQ2G2yvWLYG8q/LI7c87A5UA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@tauri-apps/cli-linux-arm-gnueabihf@2.1.0':
    resolution: {integrity: sha512-aP7ZBGNL4ny07Cbb6kKpUOSrmhcIK2KhjviTzYlh+pPhAptxnC78xQGD3zKQkTi2WliJLPmBYbOHWWQa57lQ9w==}
    engines: {node: '>= 10'}
    cpu: [arm]
    os: [linux]

  '@tauri-apps/cli-linux-arm64-gnu@2.1.0':
    resolution: {integrity: sha512-ZTdgD5gLeMCzndMT2f358EkoYkZ5T+Qy6zPzU+l5vv5M7dHVN9ZmblNAYYXmoOuw7y+BY4X/rZvHV9pcGrcanQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tauri-apps/cli-linux-arm64-musl@2.1.0':
    resolution: {integrity: sha512-NzwqjUCilhnhJzusz3d/0i0F1GFrwCQbkwR6yAHUxItESbsGYkZRJk0yMEWkg3PzFnyK4cWTlQJMEU52TjhEzA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tauri-apps/cli-linux-x64-gnu@2.1.0':
    resolution: {integrity: sha512-TyiIpMEtZxNOQmuFyfJwaaYbg3movSthpBJLIdPlKxSAB2BW0VWLY3/ZfIxm/G2YGHyREkjJvimzYE0i37PnMA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tauri-apps/cli-linux-x64-musl@2.1.0':
    resolution: {integrity: sha512-/dQd0TlaxBdJACrR72DhynWftzHDaX32eBtS5WBrNJ+nnNb+znM3gON6nJ9tSE9jgDa6n1v2BkI/oIDtypfUXw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tauri-apps/cli-win32-arm64-msvc@2.1.0':
    resolution: {integrity: sha512-NdQJO7SmdYqOcE+JPU7bwg7+odfZMWO6g8xF9SXYCMdUzvM2Gv/AQfikNXz5yS7ralRhNFuW32i5dcHlxh4pDg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@tauri-apps/cli-win32-ia32-msvc@2.1.0':
    resolution: {integrity: sha512-f5h8gKT/cB8s1ticFRUpNmHqkmaLutT62oFDB7N//2YTXnxst7EpMIn1w+QimxTvTk2gcx6EcW6bEk/y2hZGzg==}
    engines: {node: '>= 10'}
    cpu: [ia32]
    os: [win32]

  '@tauri-apps/cli-win32-x64-msvc@2.1.0':
    resolution: {integrity: sha512-P/+LrdSSb5Xbho1LRP4haBjFHdyPdjWvGgeopL96OVtrFpYnfC+RctB45z2V2XxqFk3HweDDxk266btjttfjGw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@tauri-apps/cli@2.1.0':
    resolution: {integrity: sha512-K2VhcKqBhAeS5pNOVdnR/xQRU6jwpgmkSL2ejHXcl0m+kaTggT0WRDQnFtPq6NljA7aE03cvwsbCAoFG7vtkJw==}
    engines: {node: '>= 10'}
    hasBin: true

  '@tauri-apps/plugin-dialog@2.0.1':
    resolution: {integrity: sha512-fnUrNr6EfvTqdls/ufusU7h6UbNFzLKvHk/zTuOiBq01R3dTODqwctZlzakdbfSp/7pNwTKvgKTAgl/NAP/Z0Q==}

  '@tauri-apps/plugin-fs@2.0.2':
    resolution: {integrity: sha512-4YZaX2j7ta81M5/DL8aN10kTnpUkEpkPo1FTYPT8Dd0ImHe3azM8i8MrtjrDGoyBYLPO3zFv7df/mSCYF8oA0Q==}

  '@tauri-apps/plugin-opener@2.2.6':
    resolution: {integrity: sha512-bSdkuP71ZQRepPOn8BOEdBKYJQvl6+jb160QtJX/i2H9BF6ZySY/kYljh76N2Ne5fJMQRge7rlKoStYQY5Jq1w==}

  '@tauri-apps/plugin-os@2.2.1':
    resolution: {integrity: sha512-cNYpNri2CCc6BaNeB6G/mOtLvg8dFyFQyCUdf2y0K8PIAKGEWdEcu8DECkydU2B+oj4OJihDPD2de5K6cbVl9A==}

  '@tauri-apps/plugin-shell@2.0.1':
    resolution: {integrity: sha512-akU1b77sw3qHiynrK0s930y8zKmcdrSD60htjH+mFZqv5WaakZA/XxHR3/sF1nNv9Mgmt/Shls37HwnOr00aSw==}

  '@tauri-apps/plugin-store@2.1.0':
    resolution: {integrity: sha512-GADqrc17opUKYIAKnGHIUgEeTZ2wJGu1ZITKQ1WMuOFdv8fvXRFBAqsqPjE3opgWohbczX6e1NpwmZK1AnuWVw==}

  '@tauri-apps/plugin-updater@2.5.1':
    resolution: {integrity: sha512-7fNJraKRbKkxguMY5lG2W20pBvAUkLu+cqnbu0UcK7DqeZgrAnNECcGBIDG6fJ6C+0fAp2V2dMIgznhffOBCcg==}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.6.8':
    resolution: {integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.6':
    resolution: {integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==}

  '@types/clone@2.1.4':
    resolution: {integrity: sha512-NKRWaEGaVGVLnGLB2GazvDaZnyweW9FJLLFL5LhywGJB3aqGMT9R/EUoJoSRP4nzofYnZysuDmrEJtJdAqUOtQ==}

  '@types/debug@4.1.12':
    resolution: {integrity: sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==}

  '@types/estree-jsx@1.0.5':
    resolution: {integrity: sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==}

  '@types/estree@1.0.6':
    resolution: {integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==}

  '@types/hast@3.0.4':
    resolution: {integrity: sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==}

  '@types/mdast@4.0.4':
    resolution: {integrity: sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/node@22.9.0':
    resolution: {integrity: sha512-vuyHg81vvWA1Z1ELfvLko2c8f34gyA0zaic0+Rllc5lbCnbSyuvb2Oxpm6TAUAC/2xZN3QGqxBNggD1nNR2AfQ==}

  '@types/prop-types@15.7.13':
    resolution: {integrity: sha512-hCZTSvwbzWGvhqxp/RqVqwU999pBf2vp7hzIjiYOsl8wqOmUxkQ6ddw1cV3l8811+kdUFus/q4d1Y3E3SyEifA==}

  '@types/react-dom@18.3.1':
    resolution: {integrity: sha512-qW1Mfv8taImTthu4KoXgDfLuk4bydU6Q/TkADnDWWHwi4NX4BR+LWfTp2sVmTqRrsHvyDDTelgelxJ+SsejKKQ==}

  '@types/react@18.3.12':
    resolution: {integrity: sha512-D2wOSq/d6Agt28q7rSI3jhU7G6aiuzljDGZ2hTZHIkrTLUI+AF3WMeKkEZ9nN2fkBAlcktT6vcZjDFiIhMYEQw==}

  '@types/unist@2.0.11':
    resolution: {integrity: sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==}

  '@types/unist@3.0.3':
    resolution: {integrity: sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==}

  '@ungap/structured-clone@1.3.0':
    resolution: {integrity: sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==}

  '@vitejs/plugin-react@4.3.3':
    resolution: {integrity: sha512-NooDe9GpHGqNns1i8XDERg0Vsg5SSYRhRxxyTGogUdkdNt47jal+fbuYi+Yfq6pzRCKXyoPcWisfxE6RIM3GKA==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      vite: ^4.2.0 || ^5.0.0

  acorn@8.14.0:
    resolution: {integrity: sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  aria-hidden@1.2.4:
    resolution: {integrity: sha512-y+CcFFwelSXpLZk/7fMB2mUbGtX9lKycf1MWJ7CaTIERyitVlyQx6C+sxcROU2BAJ24OiZyK+8wj2i8AlBoS3A==}
    engines: {node: '>=10'}

  autoprefixer@10.4.20:
    resolution: {integrity: sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  babel-dead-code-elimination@1.0.6:
    resolution: {integrity: sha512-JxFi9qyRJpN0LjEbbjbN8g0ux71Qppn9R8Qe3k6QzHg2CaKsbUQtbn307LQGiDLGjV6JCtEFqfxzVig9MyDCHQ==}

  bail@2.0.2:
    resolution: {integrity: sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  boolbase@1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.24.2:
    resolution: {integrity: sha512-ZIc+Q62revdMcqC6aChtW4jz3My3klmCO1fEmINZY/8J3EpBg5/A/D0AKmBveUh6pgoeycoMkVMko84tuYS+Gg==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  caniuse-lite@1.0.30001680:
    resolution: {integrity: sha512-rPQy70G6AGUMnbwS1z6Xg+RkHYPAi18ihs47GH0jcxIG7wArmPgY3XbS2sRdBbxJljp3thdT8BIqv9ccCypiPA==}

  ccount@2.0.1:
    resolution: {integrity: sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==}

  character-entities-html4@2.1.0:
    resolution: {integrity: sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==}

  character-entities-legacy@3.0.0:
    resolution: {integrity: sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==}

  character-entities@2.0.2:
    resolution: {integrity: sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==}

  character-reference-invalid@2.0.1:
    resolution: {integrity: sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==}

  cheerio-select@2.1.0:
    resolution: {integrity: sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==}

  cheerio@1.0.0:
    resolution: {integrity: sha512-quS9HgjQpdaXOvsZz82Oz7uxtXiy6UIsIQcpBj7HRw2M63Skasm9qlDocAM7jNuaxdhpPU7c4kJN+gA5MCu4ww==}
    engines: {node: '>=18.17'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  class-variance-authority@0.7.0:
    resolution: {integrity: sha512-jFI8IQw4hczaL4ALINxqLEXQbWcNjoSkloa4IaufXCJr6QawJyw7tuRysRsrE8w2p/4gGaxKIt/hX3qz/IbD1A==}

  cliui@8.0.1:
    resolution: {integrity: sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==}
    engines: {node: '>=12'}

  clone@2.1.2:
    resolution: {integrity: sha512-3Pe/CF1Nn94hyhIYpjtiLhdCoEoz0DqQ+988E9gmeEdQZlojxnOb74wctFyuwWQHzqyf9X7C7MG8juUpqBJT8w==}
    engines: {node: '>=0.8'}

  clsx@2.0.0:
    resolution: {integrity: sha512-rQ1+kcj+ttHG0MKVGBUXwayCCF1oh39BF5COIpRzuCEv8Mwjv0XucrI2ExNTOn9IlLifGClWQcU9BrZORvtw6Q==}
    engines: {node: '>=6'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  comma-separated-tokens@2.0.3:
    resolution: {integrity: sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  core-util-is@1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  css-select@5.1.0:
    resolution: {integrity: sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==}

  css-what@6.1.0:
    resolution: {integrity: sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==}
    engines: {node: '>= 6'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  debug@4.3.7:
    resolution: {integrity: sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decode-named-character-reference@1.1.0:
    resolution: {integrity: sha512-Wy+JTSbFThEOXQIR2L6mxJvEs+veIzpmqD7ynWxMXGpnk3smkHQOp6forLdHsKpAMW9iJpaBBIxz285t1n1C3w==}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  devlop@1.1.0:
    resolution: {integrity: sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  dom-serializer@2.0.0:
    resolution: {integrity: sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==}

  domelementtype@2.3.0:
    resolution: {integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==}

  domhandler@5.0.3:
    resolution: {integrity: sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==}
    engines: {node: '>= 4'}

  domutils@3.1.0:
    resolution: {integrity: sha512-H78uMmQtI2AhgDJjWeQmHwJJ2bLPD3GMmO7Zja/ZZh84wkm+4ut+IUnUdRa8uCGX88DiVx1j6FRe1XfxEgjEZA==}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  electron-to-chromium@1.5.63:
    resolution: {integrity: sha512-ddeXKuY9BHo/mw145axlyWjlJ1UBt4WK3AlvkT7W2AbqfRQoacVoRUCF6wL3uIx/8wT9oLKXzI+rFqHHscByaA==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  encoding-sniffer@0.2.0:
    resolution: {integrity: sha512-ju7Wq1kg04I3HtiYIOrUrdfdDvkyO9s5XM8QAj/bN61Yo/Vb4vgJxy5vi4Yxk01gWHbrofpPtpxM8bKger9jhg==}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  esbuild@0.21.5:
    resolution: {integrity: sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==}
    engines: {node: '>=12'}
    hasBin: true

  esbuild@0.23.1:
    resolution: {integrity: sha512-VVNz/9Sa0bs5SELtn3f7qhJCDPCF5oMEl5cO9/SSinpE9hbPVvxbd572HH5AKiP7WD8INO53GgfDDhRjkylHEg==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@5.0.0:
    resolution: {integrity: sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==}
    engines: {node: '>=12'}

  estree-util-is-identifier-name@3.0.0:
    resolution: {integrity: sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}

  fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}

  faye-websocket@0.11.4:
    resolution: {integrity: sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==}
    engines: {node: '>=0.8.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  firebase@11.4.0:
    resolution: {integrity: sha512-Z6kwhWIPDgIm0+NUEQxwjH14hMP7t42WSFnf/78R0Vh59VovLYTOCTM3MIdY3jlSZ9uKz56FhXrvsNXNhAn/Xg==}

  foreground-child@3.3.0:
    resolution: {integrity: sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==}
    engines: {node: '>=14'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.*|| 8.* || >= 10.*}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-tsconfig@4.8.1:
    resolution: {integrity: sha512-k9PN+cFBmaLWtVz29SkUoqU5O0slLuHJXt/2P+tMVFT+phsSGXGkp9t3rQIqdz0e+06EHNGs3oM6ZX1s2zHxRg==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  goober@2.1.16:
    resolution: {integrity: sha512-erjk19y1U33+XAMe1VTvIONHYoSqE4iS7BYUZfHaqeohLmnC0FdxEh7rQU+6MZ4OajItzjZFSRtVANrQwNq6/g==}
    peerDependencies:
      csstype: ^3.0.10

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  hast-util-to-jsx-runtime@2.3.6:
    resolution: {integrity: sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==}

  hast-util-whitespace@3.0.0:
    resolution: {integrity: sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==}

  html-url-attributes@3.0.1:
    resolution: {integrity: sha512-ol6UPyBWqsrO6EJySPz2O7ZSr856WDrEzM5zMqp+FJJLGMW35cLYmmZnl0vztAZxRUoNZJFTCohfjuIJ8I4QBQ==}

  htmlparser2@9.1.0:
    resolution: {integrity: sha512-5zfg6mHUoaer/97TxnGpxmbR7zJtPwIYFMZ/H5ucTlPZhKvtum05yiPK3Mgai3a0DyVxv7qYqoweaEd2nrYQzQ==}

  http-parser-js@0.5.9:
    resolution: {integrity: sha512-n1XsPy3rXVxlqxVioEWdC+0+M+SQw0DpJynwtOPo1X+ZlvdzTLtDBIJJlDQTnwZIFJrZSzSGmIOUdP8tu+SgLw==}

  iconv-lite@0.6.3:
    resolution: {integrity: sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==}
    engines: {node: '>=0.10.0'}

  idb@7.1.1:
    resolution: {integrity: sha512-gchesWBzyvGHRO9W8tzUWFDycow5gwjvFKfyV9FF32Y7F50yZMp7mP+T2mJIWFx49zicqyC4uefHM17o6xKIVQ==}

  immediate@3.0.6:
    resolution: {integrity: sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==}

  immer@10.1.1:
    resolution: {integrity: sha512-s2MPrmjovJcoMaHtx6K11Ra7oD05NT97w1IC5zpMkT6Atjr7H8LjaDd81iIxUYpMKSRRNMJE703M1Fhr/TctHw==}

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  inline-style-parser@0.2.4:
    resolution: {integrity: sha512-0aO8FkhNZlj/ZIbNi7Lxxr12obT7cL1moPfE4tg1LkX7LlLfC6DeX4l2ZEud1ukP9jNQyNnfzQVqwbwmAATY4Q==}

  invariant@2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}

  is-alphabetical@2.0.1:
    resolution: {integrity: sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==}

  is-alphanumerical@2.0.1:
    resolution: {integrity: sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-core-module@2.15.1:
    resolution: {integrity: sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==}
    engines: {node: '>= 0.4'}

  is-decimal@2.0.1:
    resolution: {integrity: sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-hexadecimal@2.0.1:
    resolution: {integrity: sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  isarray@1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jiti@1.21.6:
    resolution: {integrity: sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==}
    hasBin: true

  jotai-immer@0.4.1:
    resolution: {integrity: sha512-nQTt1HBKie/5OJDck1qLpV1PeBA6bjJLAczEYAx70PD8R4Mbu7gtexfBUCzJh6W6ecsOfwHksAYAesVth6SN9A==}
    peerDependencies:
      immer: '>=9.0.0'
      jotai: '>=2.0.0'

  jotai@2.10.3:
    resolution: {integrity: sha512-Nnf4IwrLhNfuz2JOQLI0V/AgwcpxvVy8Ec8PidIIDeRi4KCFpwTFIpHAAcU+yCgnw/oASYElq9UY0YdUUegsSA==}
    engines: {node: '>=12.20.0'}
    peerDependencies:
      '@types/react': '>=17.0.0'
      react: '>=17.0.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true
      react:
        optional: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  jsesc@3.0.2:
    resolution: {integrity: sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==}
    engines: {node: '>=6'}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jszip@3.10.1:
    resolution: {integrity: sha512-xXDvecyTpGLrqFrvkrUSoxxfJI5AH7U8zxxtVclpsUtMCq4JQ290LY8AW5c7Ggnr/Y/oK+bQMbqK2qmtk3pN4g==}

  lie@3.3.0:
    resolution: {integrity: sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==}

  lilconfig@2.1.0:
    resolution: {integrity: sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==}
    engines: {node: '>=10'}

  lilconfig@3.1.2:
    resolution: {integrity: sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  lodash.camelcase@4.3.0:
    resolution: {integrity: sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==}

  long@5.3.1:
    resolution: {integrity: sha512-ka87Jz3gcx/I7Hal94xaN2tZEOPoUOEVftkQqZx2EeQRN7LGdfLlI3FvZ+7WDplm+vK2Urx9ULrvSowtdCieng==}

  longest-streak@3.1.0:
    resolution: {integrity: sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@0.460.0:
    resolution: {integrity: sha512-BVtq/DykVeIvRTJvRAgCsOwaGL8Un3Bxh8MbDxMhEWlZay3T4IpEKDEpwt5KZ0KJMHzgm6jrltxlT5eXOWXDHg==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0-rc

  markdown-table@3.0.4:
    resolution: {integrity: sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==}

  mdast-util-find-and-replace@3.0.2:
    resolution: {integrity: sha512-Tmd1Vg/m3Xz43afeNxDIhWRtFZgM2VLyaf4vSTYwudTyeuTneoL3qtWMA5jeLyz/O1vDJmmV4QuScFCA2tBPwg==}

  mdast-util-from-markdown@2.0.2:
    resolution: {integrity: sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==}

  mdast-util-gfm-autolink-literal@2.0.1:
    resolution: {integrity: sha512-5HVP2MKaP6L+G6YaxPNjuL0BPrq9orG3TsrZ9YXbA3vDw/ACI4MEsnoDpn6ZNm7GnZgtAcONJyPhOP8tNJQavQ==}

  mdast-util-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-sqpDWlsHn7Ac9GNZQMeUzPQSMzR6Wv0WKRNvQRg0KqHh02fpTz69Qc1QSseNX29bhz1ROIyNyxExfawVKTm1GQ==}

  mdast-util-gfm-strikethrough@2.0.0:
    resolution: {integrity: sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==}

  mdast-util-gfm-table@2.0.0:
    resolution: {integrity: sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==}

  mdast-util-gfm-task-list-item@2.0.0:
    resolution: {integrity: sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==}

  mdast-util-gfm@3.1.0:
    resolution: {integrity: sha512-0ulfdQOM3ysHhCJ1p06l0b0VKlhU0wuQs3thxZQagjcjPrlFRqY215uZGHHJan9GEAXd9MbfPjFJz+qMkVR6zQ==}

  mdast-util-mdx-expression@2.0.1:
    resolution: {integrity: sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==}

  mdast-util-mdx-jsx@3.2.0:
    resolution: {integrity: sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==}

  mdast-util-mdxjs-esm@2.0.1:
    resolution: {integrity: sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==}

  mdast-util-phrasing@4.1.0:
    resolution: {integrity: sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==}

  mdast-util-to-hast@13.2.0:
    resolution: {integrity: sha512-QGYKEuUsYT9ykKBCMOEDLsU5JRObWQusAolFMeko/tYPufNkRffBAQjIE+99jbA87xv6FgmjLtwjh9wBWajwAA==}

  mdast-util-to-markdown@2.1.2:
    resolution: {integrity: sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==}

  mdast-util-to-string@4.0.0:
    resolution: {integrity: sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromark-core-commonmark@2.0.3:
    resolution: {integrity: sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==}

  micromark-extension-gfm-autolink-literal@2.1.0:
    resolution: {integrity: sha512-oOg7knzhicgQ3t4QCjCWgTmfNhvQbDDnJeVu9v81r7NltNCVmhPy1fJRX27pISafdjL+SVc4d3l48Gb6pbRypw==}

  micromark-extension-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-/yPhxI1ntnDNsiHtzLKYnE3vf9JZ6cAisqVDauhp4CEHxlb4uoOTxOCJ+9s51bIB8U1N1FJ1RXOKTIlD5B/gqw==}

  micromark-extension-gfm-strikethrough@2.1.0:
    resolution: {integrity: sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==}

  micromark-extension-gfm-table@2.1.1:
    resolution: {integrity: sha512-t2OU/dXXioARrC6yWfJ4hqB7rct14e8f7m0cbI5hUmDyyIlwv5vEtooptH8INkbLzOatzKuVbQmAYcbWoyz6Dg==}

  micromark-extension-gfm-tagfilter@2.0.0:
    resolution: {integrity: sha512-xHlTOmuCSotIA8TW1mDIM6X2O1SiX5P9IuDtqGonFhEK0qgRI4yeC6vMxEV2dgyr2TiD+2PQ10o+cOhdVAcwfg==}

  micromark-extension-gfm-task-list-item@2.1.0:
    resolution: {integrity: sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==}

  micromark-extension-gfm@3.0.0:
    resolution: {integrity: sha512-vsKArQsicm7t0z2GugkCKtZehqUm31oeGBV/KVSorWSy8ZlNAv7ytjFhvaryUiCUJYqs+NoE6AFhpQvBTM6Q4w==}

  micromark-factory-destination@2.0.1:
    resolution: {integrity: sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==}

  micromark-factory-label@2.0.1:
    resolution: {integrity: sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==}

  micromark-factory-space@2.0.1:
    resolution: {integrity: sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==}

  micromark-factory-title@2.0.1:
    resolution: {integrity: sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==}

  micromark-factory-whitespace@2.0.1:
    resolution: {integrity: sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==}

  micromark-util-character@2.1.1:
    resolution: {integrity: sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==}

  micromark-util-chunked@2.0.1:
    resolution: {integrity: sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==}

  micromark-util-classify-character@2.0.1:
    resolution: {integrity: sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==}

  micromark-util-combine-extensions@2.0.1:
    resolution: {integrity: sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==}

  micromark-util-decode-numeric-character-reference@2.0.2:
    resolution: {integrity: sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==}

  micromark-util-decode-string@2.0.1:
    resolution: {integrity: sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==}

  micromark-util-encode@2.0.1:
    resolution: {integrity: sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==}

  micromark-util-html-tag-name@2.0.1:
    resolution: {integrity: sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==}

  micromark-util-normalize-identifier@2.0.1:
    resolution: {integrity: sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==}

  micromark-util-resolve-all@2.0.1:
    resolution: {integrity: sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==}

  micromark-util-sanitize-uri@2.0.1:
    resolution: {integrity: sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==}

  micromark-util-subtokenize@2.1.0:
    resolution: {integrity: sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==}

  micromark-util-symbol@2.0.1:
    resolution: {integrity: sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==}

  micromark-util-types@2.0.2:
    resolution: {integrity: sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==}

  micromark@4.0.2:
    resolution: {integrity: sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  node-releases@2.0.18:
    resolution: {integrity: sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  nth-check@2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  pako@1.0.11:
    resolution: {integrity: sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==}

  parse-entities@4.0.2:
    resolution: {integrity: sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==}

  parse5-htmlparser2-tree-adapter@7.1.0:
    resolution: {integrity: sha512-ruw5xyKs6lrpo9x9rCZqZZnIUntICjQAd0Wsmp396Ul9lN/h+ifgVV1x1gZHi8euej6wTfpqX8j+BFQxF0NS/g==}

  parse5-parser-stream@7.1.2:
    resolution: {integrity: sha512-JyeQc9iwFLn5TbvvqACIF/VXG6abODeB3Fwmv/TGdLk2LfbWkaySGY72at4+Ty7EkPZj854u4CrICqNk2qIbow==}

  parse5@7.2.1:
    resolution: {integrity: sha512-BuBYQYlv1ckiPdQi/ohiivi9Sagc9JG+Ozs0r7b/0iK3sKmrb0b9FdWdBbOdx6hBCM/F9Ir82ofnBhtZOjCRPQ==}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.49:
    resolution: {integrity: sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==}
    engines: {node: ^10 || ^12 || >=14}

  prettier@3.3.3:
    resolution: {integrity: sha512-i2tDNA0O5IrMO757lfrdQZCc2jPNDVntV0m/+4whiDfWaTKfMNgR7Qz0NAeGz/nRqF4m5/6CLzbP4/liHt12Ew==}
    engines: {node: '>=14'}
    hasBin: true

  process-nextick-args@2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  property-information@7.0.0:
    resolution: {integrity: sha512-7D/qOz/+Y4X/rzSB6jKxKUsQnphO046ei8qxG59mtM3RG3DHgTK81HrxrmoDVINJb8NKT5ZsRbwHvQ6B68Iyhg==}

  protobufjs@7.4.0:
    resolution: {integrity: sha512-mRUWCc3KUU4w1jU8sGxICXH/gNS94DvI1gxqDvBzhj1JpcsimQkYiOJfwsPUykUI5ZaspFbSgmBLER8IrQ3tqw==}
    engines: {node: '>=12.0.0'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@18.3.1:
    resolution: {integrity: sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==}
    peerDependencies:
      react: ^18.3.1

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-markdown@10.1.0:
    resolution: {integrity: sha512-qKxVopLT/TyA6BX3Ue5NwabOsAzm0Q7kAPwq6L+wWDwisYs7R8vZ0nRXqq6rkueboxpkjvLGU9fWifiX/ZZFxQ==}
    peerDependencies:
      '@types/react': '>=18'
      react: '>=18'

  react-refresh@0.14.2:
    resolution: {integrity: sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==}
    engines: {node: '>=0.10.0'}

  react-remove-scroll-bar@2.3.6:
    resolution: {integrity: sha512-DtSYaao4mBmX+HDo5YWYdBWQwYIQQshUV/dVxFxK+KM26Wjwp1gZ6rv6OC3oujI6Bfu6Xyg3TwK533AQutsn/g==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.6.0:
    resolution: {integrity: sha512-I2U4JVEsQenxDAKaVa3VZ/JeJZe0/2DxPWL8Tj8yLKctQJQiZM52pn/GWFpSp8dftjM3pSAHVJZscAnC/y+ySQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.0:
    resolution: {integrity: sha512-sGsQtcjMqdQyijAHytfGEELB8FufGbfXIsvUTe+NLx1GDRJCXtCFLBLUI1eyZCKXXvbEU2C6gai0PZKoIE9Vbg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.1:
    resolution: {integrity: sha512-ZWj0fHEMyWkHzKYUr2Bs/4zU6XLmq9HsgBURm7g5pAVfyn49DgUiNgY2d4lXRlYSiCif9YBGpQleewkcqddc7g==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@2.3.8:
    resolution: {integrity: sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  remark-gfm@4.0.1:
    resolution: {integrity: sha512-1quofZ2RQ9EWdeN34S79+KExV1764+wCUGop5CPL1WGdD0ocPpu91lzPGbwWMECpEpd42kJGQwzRfyov9j4yNg==}

  remark-parse@11.0.0:
    resolution: {integrity: sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==}

  remark-rehype@11.1.1:
    resolution: {integrity: sha512-g/osARvjkBXb6Wo0XvAeXQohVta8i84ACbenPpoSsxTOQH/Ae0/RGP4WZgnMH5pMLpsj4FG7OHmcIcXxpza8eQ==}

  remark-stringify@11.0.0:
    resolution: {integrity: sha512-1OSmLd3awB/t8qdoEOMazZkNsfVTeY4fTsgzcQFdXNq8ToTN4ZGwrMnlda4K6smTFKD+GRV6O48i6Z4iKgPPpw==}

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve@1.22.8:
    resolution: {integrity: sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==}
    hasBin: true

  reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rollup@4.35.0:
    resolution: {integrity: sha512-kg6oI4g+vc41vePJyO6dHt/yl0Rz3Thv0kJeVQ3D1kS3E5XSuKbPc29G4IpT/Kv1KQwgHVcN+HtyS+HYLNSvQg==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-buffer@5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  setimmediate@1.0.5:
    resolution: {integrity: sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  space-separated-tokens@2.0.2:
    resolution: {integrity: sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string_decoder@1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}

  stringify-entities@4.0.4:
    resolution: {integrity: sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  style-to-js@1.1.16:
    resolution: {integrity: sha512-/Q6ld50hKYPH3d/r6nr117TZkHR0w0kGGIVfpG9N6D8NymRPM9RqCUv4pRpJ62E5DqOYx2AFpbZMyCPnjQCnOw==}

  style-to-object@1.0.8:
    resolution: {integrity: sha512-xT47I/Eo0rwJmaXC4oilDGDWLohVhR6o/xAQcPQN8q6QBuZVL8qMYL85kLmST5cPjAorwvqIA4qXTRQoYHaL6g==}

  sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tailwind-merge@2.5.4:
    resolution: {integrity: sha512-0q8cfZHMu9nuYP/b5Shb7Y7Sh1B7Nnl5GqNr1U+n2p6+mybvRtayrQ+0042Z5byvTA8ihjlP8Odo8/VnHbZu4Q==}

  tailwindcss-animate@1.0.7:
    resolution: {integrity: sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders'

  tailwindcss@3.4.15:
    resolution: {integrity: sha512-r4MeXnfBmSOuKUWmXe6h2CcyfzJCEk4F0pptO5jlnYSIViUkVmsawj80N5h2lO3gwcmSb4n3PuN+e+GC1Guylw==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  tiny-invariant@1.3.3:
    resolution: {integrity: sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==}

  tiny-warning@1.0.3:
    resolution: {integrity: sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  trim-lines@3.0.1:
    resolution: {integrity: sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==}

  trough@2.2.0:
    resolution: {integrity: sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==}

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tsx@4.19.2:
    resolution: {integrity: sha512-pOUl6Vo2LUq/bSa8S5q7b91cgNSjctn9ugq/+Mvow99qW6x/UZYwzxy/3NmqoT66eHYfCVvFvACC58UBPFf28g==}
    engines: {node: '>=18.0.0'}
    hasBin: true

  typescript@5.8.2:
    resolution: {integrity: sha512-aJn6wq13/afZp/jT9QZmwEjDqqvSGp1VT5GVg+f/t6/oVyrgXM6BY1h9BRh/O5p3PlUPAe+WuiEZOmb/49RqoQ==}
    engines: {node: '>=14.17'}
    hasBin: true

  undici-types@6.19.8:
    resolution: {integrity: sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==}

  undici@6.21.0:
    resolution: {integrity: sha512-BUgJXc752Kou3oOIuU1i+yZZypyZRqNPW0vqoMPl8VaoalSfeR0D8/t4iAS3yirs79SSMTxTag+ZC86uswv+Cw==}
    engines: {node: '>=18.17'}

  unified@11.0.5:
    resolution: {integrity: sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==}

  unist-util-is@6.0.0:
    resolution: {integrity: sha512-2qCTHimwdxLfz+YzdGfkqNlH0tLi9xjTnHddPmJwtIG9MGsdbutfTc4P+haPD7l7Cjxf/WZj+we5qfVPvvxfYw==}

  unist-util-position@5.0.0:
    resolution: {integrity: sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==}

  unist-util-stringify-position@4.0.0:
    resolution: {integrity: sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==}

  unist-util-visit-parents@6.0.1:
    resolution: {integrity: sha512-L/PqWzfTP9lzzEa6CKs0k2nARxTdZduw3zyh8d2NVBnsyvHjSX4TWse388YrrQKbvI8w20fGjGlhgT96WwKykw==}

  unist-util-visit@5.0.0:
    resolution: {integrity: sha512-MR04uvD+07cwl/yhVuVWAtw+3GOR/knlL55Nd/wAdblk27GCVt3lqpTivy/tkJcZoNPzTwS1Y+KMojlLDhoTzg==}

  unplugin@1.16.0:
    resolution: {integrity: sha512-5liCNPuJW8dqh3+DM6uNM2EI3MLLpCKp/KY+9pB5M2S2SR2qvvDHhKgBOaTWEbZTAws3CXfB0rKTIolWKL05VQ==}
    engines: {node: '>=14.0.0'}

  update-browserslist-db@1.1.1:
    resolution: {integrity: sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  use-callback-ref@1.3.2:
    resolution: {integrity: sha512-elOQwe6Q8gqZgDA8mrh44qRTQqpIHDcZ3hXTLjBe1i4ph8XpNJnO+aQf3NaG+lriLopI4HMx9VjQLfPQ6vhnoA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.2:
    resolution: {integrity: sha512-epTbsLuzZ7lPClpz2TyryBfztm7m+28DlEv2ZCQ3MDr5ssiwyOwGH/e5F9CkfWjJ1t4clvI58yF822/GUkjjhw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.9.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sync-external-store@1.2.2:
    resolution: {integrity: sha512-PElTlVMwpblvbNqQ82d2n6RjStvdSoNe9FG28kNfz3WiXilJm4DdNkEzRhCZuIDwY8U08WVihhGR5iRqAwfDiw==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  vfile-message@4.0.2:
    resolution: {integrity: sha512-jRDZ1IMLttGj41KcZvlrYAaI3CfqpLpfpf+Mfig13viT6NKvRzWZ+lXz0Y5D60w6uJIBAOGq9mSHf0gktF0duw==}

  vfile@6.0.3:
    resolution: {integrity: sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==}

  vite@5.4.12:
    resolution: {integrity: sha512-KwUaKB27TvWwDJr1GjjWthLMATbGEbeWYZIbGZ5qFIsgPP3vWzLu4cVooqhm5/Z2SPDUMjyPVjTztm5tYKwQxA==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^18.0.0 || >=20.0.0
      less: '*'
      lightningcss: ^1.21.0
      sass: '*'
      sass-embedded: '*'
      stylus: '*'
      sugarss: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      '@types/node':
        optional: true
      less:
        optional: true
      lightningcss:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true

  web-vitals@4.2.4:
    resolution: {integrity: sha512-r4DIlprAGwJ7YM11VZp4R884m0Vmgr6EAKe3P+kO0PPj3Unqyvv59rczf6UiGcb9Z8QxZVcqKNwv/g0WNdWwsw==}

  webpack-virtual-modules@0.6.2:
    resolution: {integrity: sha512-66/V2i5hQanC51vBQKPH4aI8NMAcBW59FVBs+rC7eGHupMyfn34q7rZIE+ETlJ+XTevqfUhVVBgSUNSW2flEUQ==}

  websocket-driver@0.7.4:
    resolution: {integrity: sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==}
    engines: {node: '>=0.8.0'}

  websocket-extensions@0.1.4:
    resolution: {integrity: sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==}
    engines: {node: '>=0.8.0'}

  whatwg-encoding@3.1.1:
    resolution: {integrity: sha512-6qN4hJdMwfYBtE3YBTTHhoeuUrDBPZmbQaxWAqSALV/MeEnR5z1xd8UKud2RAkFoPkmB+hli1TZSnyi84xz1vQ==}
    engines: {node: '>=18'}

  whatwg-mimetype@4.0.0:
    resolution: {integrity: sha512-QaKxh0eNIi2mE9p2vEdzfagOKHCcj1pJ56EEHGQOVxp8r9/iszLUUV7v89x9O1p/T+NlTM5W7jW6+cz4Fq1YVg==}
    engines: {node: '>=18'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  y18n@5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yaml@2.6.1:
    resolution: {integrity: sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==}
    engines: {node: '>= 14'}
    hasBin: true

  yargs-parser@21.1.1:
    resolution: {integrity: sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==}
    engines: {node: '>=12'}

  yargs@17.7.2:
    resolution: {integrity: sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==}
    engines: {node: '>=12'}

  zod@3.23.8:
    resolution: {integrity: sha512-XBx9AXhXktjUqnepgTiE5flcKIYWi/rme0Eaj+5Y0lftuGBq+jyRu/md4WnuxqgP1ubdpNCsYEYPxrzVHD8d6g==}

  zwitch@2.0.4:
    resolution: {integrity: sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@ampproject/remapping@2.3.0':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.5
      '@jridgewell/trace-mapping': 0.3.25

  '@babel/code-frame@7.26.2':
    dependencies:
      '@babel/helper-validator-identifier': 7.25.9
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.26.2': {}

  '@babel/core@7.26.0':
    dependencies:
      '@ampproject/remapping': 2.3.0
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.2
      '@babel/helper-compilation-targets': 7.25.9
      '@babel/helper-module-transforms': 7.26.0(@babel/core@7.26.0)
      '@babel/helpers': 7.26.0
      '@babel/parser': 7.26.2
      '@babel/template': 7.25.9
      '@babel/traverse': 7.25.9
      '@babel/types': 7.26.0
      convert-source-map: 2.0.0
      debug: 4.3.7
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.26.2':
    dependencies:
      '@babel/parser': 7.26.2
      '@babel/types': 7.26.0
      '@jridgewell/gen-mapping': 0.3.5
      '@jridgewell/trace-mapping': 0.3.25
      jsesc: 3.0.2

  '@babel/helper-compilation-targets@7.25.9':
    dependencies:
      '@babel/compat-data': 7.26.2
      '@babel/helper-validator-option': 7.25.9
      browserslist: 4.24.2
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-module-imports@7.25.9':
    dependencies:
      '@babel/traverse': 7.25.9
      '@babel/types': 7.26.0
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.26.0(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-module-imports': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9
      '@babel/traverse': 7.25.9
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-plugin-utils@7.25.9': {}

  '@babel/helper-string-parser@7.25.9': {}

  '@babel/helper-validator-identifier@7.25.9': {}

  '@babel/helper-validator-option@7.25.9': {}

  '@babel/helpers@7.26.0':
    dependencies:
      '@babel/template': 7.25.9
      '@babel/types': 7.26.0

  '@babel/parser@7.26.2':
    dependencies:
      '@babel/types': 7.26.0

  '@babel/plugin-syntax-jsx@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-typescript@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-transform-react-jsx-self@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-transform-react-jsx-source@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/template@7.25.9':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/parser': 7.26.2
      '@babel/types': 7.26.0

  '@babel/traverse@7.25.9':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.2
      '@babel/parser': 7.26.2
      '@babel/template': 7.25.9
      '@babel/types': 7.26.0
      debug: 4.3.7
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.26.0':
    dependencies:
      '@babel/helper-string-parser': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9

  '@esbuild/aix-ppc64@0.21.5':
    optional: true

  '@esbuild/aix-ppc64@0.23.1':
    optional: true

  '@esbuild/android-arm64@0.21.5':
    optional: true

  '@esbuild/android-arm64@0.23.1':
    optional: true

  '@esbuild/android-arm@0.21.5':
    optional: true

  '@esbuild/android-arm@0.23.1':
    optional: true

  '@esbuild/android-x64@0.21.5':
    optional: true

  '@esbuild/android-x64@0.23.1':
    optional: true

  '@esbuild/darwin-arm64@0.21.5':
    optional: true

  '@esbuild/darwin-arm64@0.23.1':
    optional: true

  '@esbuild/darwin-x64@0.21.5':
    optional: true

  '@esbuild/darwin-x64@0.23.1':
    optional: true

  '@esbuild/freebsd-arm64@0.21.5':
    optional: true

  '@esbuild/freebsd-arm64@0.23.1':
    optional: true

  '@esbuild/freebsd-x64@0.21.5':
    optional: true

  '@esbuild/freebsd-x64@0.23.1':
    optional: true

  '@esbuild/linux-arm64@0.21.5':
    optional: true

  '@esbuild/linux-arm64@0.23.1':
    optional: true

  '@esbuild/linux-arm@0.21.5':
    optional: true

  '@esbuild/linux-arm@0.23.1':
    optional: true

  '@esbuild/linux-ia32@0.21.5':
    optional: true

  '@esbuild/linux-ia32@0.23.1':
    optional: true

  '@esbuild/linux-loong64@0.21.5':
    optional: true

  '@esbuild/linux-loong64@0.23.1':
    optional: true

  '@esbuild/linux-mips64el@0.21.5':
    optional: true

  '@esbuild/linux-mips64el@0.23.1':
    optional: true

  '@esbuild/linux-ppc64@0.21.5':
    optional: true

  '@esbuild/linux-ppc64@0.23.1':
    optional: true

  '@esbuild/linux-riscv64@0.21.5':
    optional: true

  '@esbuild/linux-riscv64@0.23.1':
    optional: true

  '@esbuild/linux-s390x@0.21.5':
    optional: true

  '@esbuild/linux-s390x@0.23.1':
    optional: true

  '@esbuild/linux-x64@0.21.5':
    optional: true

  '@esbuild/linux-x64@0.23.1':
    optional: true

  '@esbuild/netbsd-x64@0.21.5':
    optional: true

  '@esbuild/netbsd-x64@0.23.1':
    optional: true

  '@esbuild/openbsd-arm64@0.23.1':
    optional: true

  '@esbuild/openbsd-x64@0.21.5':
    optional: true

  '@esbuild/openbsd-x64@0.23.1':
    optional: true

  '@esbuild/sunos-x64@0.21.5':
    optional: true

  '@esbuild/sunos-x64@0.23.1':
    optional: true

  '@esbuild/win32-arm64@0.21.5':
    optional: true

  '@esbuild/win32-arm64@0.23.1':
    optional: true

  '@esbuild/win32-ia32@0.21.5':
    optional: true

  '@esbuild/win32-ia32@0.23.1':
    optional: true

  '@esbuild/win32-x64@0.21.5':
    optional: true

  '@esbuild/win32-x64@0.23.1':
    optional: true

  '@firebase/analytics-compat@0.2.18(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/analytics': 0.10.12(@firebase/app@0.11.2)
      '@firebase/analytics-types': 0.8.3
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/analytics-types@0.8.3': {}

  '@firebase/analytics@0.10.12(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/app-check-compat@0.3.19(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-check': 0.8.12(@firebase/app@0.11.2)
      '@firebase/app-check-types': 0.5.3
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/app-check-interop-types@0.3.3': {}

  '@firebase/app-check-types@0.5.3': {}

  '@firebase/app-check@0.8.12(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/app-compat@0.2.51':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/app-types@0.9.3': {}

  '@firebase/app@0.11.2':
    dependencies:
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      idb: 7.1.1
      tslib: 2.8.1

  '@firebase/auth-compat@0.5.19(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/auth': 1.9.1(@firebase/app@0.11.2)
      '@firebase/auth-types': 0.13.0(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)
      '@firebase/component': 0.6.13
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'
      - '@firebase/app-types'
      - '@react-native-async-storage/async-storage'

  '@firebase/auth-interop-types@0.2.4': {}

  '@firebase/auth-types@0.13.0(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)':
    dependencies:
      '@firebase/app-types': 0.9.3
      '@firebase/util': 1.11.0

  '@firebase/auth@1.9.1(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/component@0.6.13':
    dependencies:
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/data-connect@0.3.1(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/auth-interop-types': 0.2.4
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/database-compat@2.0.4':
    dependencies:
      '@firebase/component': 0.6.13
      '@firebase/database': 1.0.13
      '@firebase/database-types': 1.0.9
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/database-types@1.0.9':
    dependencies:
      '@firebase/app-types': 0.9.3
      '@firebase/util': 1.11.0

  '@firebase/database@1.0.13':
    dependencies:
      '@firebase/app-check-interop-types': 0.3.3
      '@firebase/auth-interop-types': 0.2.4
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      faye-websocket: 0.11.4
      tslib: 2.8.1

  '@firebase/firestore-compat@0.3.44(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/firestore': 4.7.9(@firebase/app@0.11.2)
      '@firebase/firestore-types': 3.0.3(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'
      - '@firebase/app-types'

  '@firebase/firestore-types@3.0.3(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)':
    dependencies:
      '@firebase/app-types': 0.9.3
      '@firebase/util': 1.11.0

  '@firebase/firestore@4.7.9(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      '@firebase/webchannel-wrapper': 1.0.3
      '@grpc/grpc-js': 1.9.15
      '@grpc/proto-loader': 0.7.13
      tslib: 2.8.1

  '@firebase/functions-compat@0.3.20(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/functions': 0.12.3(@firebase/app@0.11.2)
      '@firebase/functions-types': 0.6.3
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/functions-types@0.6.3': {}

  '@firebase/functions@0.12.3(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/app-check-interop-types': 0.3.3
      '@firebase/auth-interop-types': 0.2.4
      '@firebase/component': 0.6.13
      '@firebase/messaging-interop-types': 0.2.3
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/installations-compat@0.2.13(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/installations-types': 0.5.3(@firebase/app-types@0.9.3)
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'
      - '@firebase/app-types'

  '@firebase/installations-types@0.5.3(@firebase/app-types@0.9.3)':
    dependencies:
      '@firebase/app-types': 0.9.3

  '@firebase/installations@0.6.13(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/util': 1.11.0
      idb: 7.1.1
      tslib: 2.8.1

  '@firebase/logger@0.4.4':
    dependencies:
      tslib: 2.8.1

  '@firebase/messaging-compat@0.2.17(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/messaging': 0.12.17(@firebase/app@0.11.2)
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/messaging-interop-types@0.2.3': {}

  '@firebase/messaging@0.12.17(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/messaging-interop-types': 0.2.3
      '@firebase/util': 1.11.0
      idb: 7.1.1
      tslib: 2.8.1

  '@firebase/performance-compat@0.2.14(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/performance': 0.7.1(@firebase/app@0.11.2)
      '@firebase/performance-types': 0.2.3
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/performance-types@0.2.3': {}

  '@firebase/performance@0.7.1(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1
      web-vitals: 4.2.4

  '@firebase/remote-config-compat@0.2.13(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/remote-config': 0.6.0(@firebase/app@0.11.2)
      '@firebase/remote-config-types': 0.4.0
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'

  '@firebase/remote-config-types@0.4.0': {}

  '@firebase/remote-config@0.6.0(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/storage-compat@0.3.17(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app-compat': 0.2.51
      '@firebase/component': 0.6.13
      '@firebase/storage': 0.13.7(@firebase/app@0.11.2)
      '@firebase/storage-types': 0.8.3(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)
      '@firebase/util': 1.11.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@firebase/app'
      - '@firebase/app-types'

  '@firebase/storage-types@0.8.3(@firebase/app-types@0.9.3)(@firebase/util@1.11.0)':
    dependencies:
      '@firebase/app-types': 0.9.3
      '@firebase/util': 1.11.0

  '@firebase/storage@0.13.7(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/component': 0.6.13
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/util@1.11.0':
    dependencies:
      tslib: 2.8.1

  '@firebase/vertexai@1.1.0(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)':
    dependencies:
      '@firebase/app': 0.11.2
      '@firebase/app-check-interop-types': 0.3.3
      '@firebase/app-types': 0.9.3
      '@firebase/component': 0.6.13
      '@firebase/logger': 0.4.4
      '@firebase/util': 1.11.0
      tslib: 2.8.1

  '@firebase/webchannel-wrapper@1.0.3': {}

  '@floating-ui/core@1.6.8':
    dependencies:
      '@floating-ui/utils': 0.2.8

  '@floating-ui/dom@1.6.12':
    dependencies:
      '@floating-ui/core': 1.6.8
      '@floating-ui/utils': 0.2.8

  '@floating-ui/react-dom@2.1.2(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@floating-ui/dom': 1.6.12
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)

  '@floating-ui/utils@0.2.8': {}

  '@grpc/grpc-js@1.9.15':
    dependencies:
      '@grpc/proto-loader': 0.7.13
      '@types/node': 22.9.0

  '@grpc/proto-loader@0.7.13':
    dependencies:
      lodash.camelcase: 4.3.0
      long: 5.3.1
      protobufjs: 7.4.0
      yargs: 17.7.2

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@jridgewell/gen-mapping@0.3.5':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.5.0
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/sourcemap-codec@1.5.0': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@mynaui/icons-react@0.3.2(react@18.3.1)':
    dependencies:
      prop-types: 15.8.1
      react: 18.3.1

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@protobufjs/aspromise@1.1.2': {}

  '@protobufjs/base64@1.1.2': {}

  '@protobufjs/codegen@2.0.4': {}

  '@protobufjs/eventemitter@1.1.0': {}

  '@protobufjs/fetch@1.1.0':
    dependencies:
      '@protobufjs/aspromise': 1.1.2
      '@protobufjs/inquire': 1.1.0

  '@protobufjs/float@1.0.2': {}

  '@protobufjs/inquire@1.1.0': {}

  '@protobufjs/path@1.1.2': {}

  '@protobufjs/pool@1.1.0': {}

  '@protobufjs/utf8@1.1.0': {}

  '@radix-ui/primitive@1.1.0': {}

  '@radix-ui/primitive@1.1.1': {}

  '@radix-ui/primitive@1.1.2': {}

  '@radix-ui/react-alert-dialog@1.1.14(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-dialog': 1.1.14(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.2.3(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-arrow@1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-collection@1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-compose-refs@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-compose-refs@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-compose-refs@1.1.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-context@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-context@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-context@1.1.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-dialog@1.1.14(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-dismissable-layer': 1.1.10(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-focus-guards': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-id': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-presence': 1.1.4(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.2.3(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@18.3.12)(react@18.3.1)
      aria-hidden: 1.2.4
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      react-remove-scroll: 2.7.0(@types/react@18.3.12)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-dialog@1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.0
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-dismissable-layer': 1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-focus-scope': 1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-portal': 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-presence': 1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      aria-hidden: 1.2.4
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      react-remove-scroll: 2.6.0(@types/react@18.3.12)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-direction@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-dismissable-layer@1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.0
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-escape-keydown': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-dismissable-layer@1.1.10(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-escape-keydown': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-focus-guards@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-focus-guards@1.1.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-focus-scope@1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-focus-scope@1.1.7(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-id@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-id@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-popper@1.2.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@floating-ui/react-dom': 2.1.2(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-arrow': 1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-rect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/rect': 1.1.0
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-portal@1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-portal@1.1.9(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-presence@1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-presence@1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-presence@1.1.4(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-primitive@2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-slot': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-primitive@2.0.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-slot': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-primitive@2.0.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-primitive@2.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-slot': 1.2.3(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-progress@1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-roving-focus@1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-separator@1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-slot@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-slot@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-slot@1.1.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-slot@1.2.3(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-tabs@1.1.3(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-tooltip@1.1.4(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.0
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-dismissable-layer': 1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-popper': 1.2.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-portal': 1.1.2(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-presence': 1.1.1(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-visually-hidden': 1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/react-use-callback-ref@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-callback-ref@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-controllable-state@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-controllable-state@1.2.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-effect-event': 0.0.2(@types/react@18.3.12)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-effect-event@0.0.2(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-escape-keydown@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-escape-keydown@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-layout-effect@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-layout-effect@1.1.1(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-rect@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/rect': 1.1.0
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-use-size@1.1.0(@types/react@18.3.12)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.12)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.12

  '@radix-ui/react-visually-hidden@1.1.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.1)(@types/react@18.3.12)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12
      '@types/react-dom': 18.3.1

  '@radix-ui/rect@1.1.0': {}

  '@rollup/rollup-android-arm-eabi@4.35.0':
    optional: true

  '@rollup/rollup-android-arm64@4.35.0':
    optional: true

  '@rollup/rollup-darwin-arm64@4.35.0':
    optional: true

  '@rollup/rollup-darwin-x64@4.35.0':
    optional: true

  '@rollup/rollup-freebsd-arm64@4.35.0':
    optional: true

  '@rollup/rollup-freebsd-x64@4.35.0':
    optional: true

  '@rollup/rollup-linux-arm-gnueabihf@4.35.0':
    optional: true

  '@rollup/rollup-linux-arm-musleabihf@4.35.0':
    optional: true

  '@rollup/rollup-linux-arm64-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-arm64-musl@4.35.0':
    optional: true

  '@rollup/rollup-linux-loongarch64-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-powerpc64le-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-riscv64-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-s390x-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-x64-gnu@4.35.0':
    optional: true

  '@rollup/rollup-linux-x64-musl@4.35.0':
    optional: true

  '@rollup/rollup-win32-arm64-msvc@4.35.0':
    optional: true

  '@rollup/rollup-win32-ia32-msvc@4.35.0':
    optional: true

  '@rollup/rollup-win32-x64-msvc@4.35.0':
    optional: true

  '@tanstack/history@1.81.9': {}

  '@tanstack/react-router@1.82.1(@tanstack/router-generator@1.81.9)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@tanstack/history': 1.81.9
      '@tanstack/react-store': 0.5.6(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      jsesc: 3.0.2
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      tiny-invariant: 1.3.3
      tiny-warning: 1.0.3
    optionalDependencies:
      '@tanstack/router-generator': 1.81.9

  '@tanstack/react-store@0.5.6(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@tanstack/store': 0.5.5
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      use-sync-external-store: 1.2.2(react@18.3.1)

  '@tanstack/router-devtools@1.82.1(@tanstack/react-router@1.82.1(@tanstack/router-generator@1.81.9)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(csstype@3.1.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@tanstack/react-router': 1.82.1(@tanstack/router-generator@1.81.9)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      clsx: 2.1.1
      goober: 2.1.16(csstype@3.1.3)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    transitivePeerDependencies:
      - csstype

  '@tanstack/router-generator@1.81.9':
    dependencies:
      '@tanstack/virtual-file-routes': 1.81.9
      prettier: 3.3.3
      tsx: 4.19.2
      zod: 3.23.8

  '@tanstack/router-plugin@1.81.9(vite@5.4.12(@types/node@22.9.0))':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/generator': 7.26.2
      '@babel/parser': 7.26.2
      '@babel/plugin-syntax-jsx': 7.25.9(@babel/core@7.26.0)
      '@babel/plugin-syntax-typescript': 7.25.9(@babel/core@7.26.0)
      '@babel/template': 7.25.9
      '@babel/traverse': 7.25.9
      '@babel/types': 7.26.0
      '@tanstack/router-generator': 1.81.9
      '@tanstack/virtual-file-routes': 1.81.9
      '@types/babel__core': 7.20.5
      '@types/babel__generator': 7.6.8
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.20.6
      babel-dead-code-elimination: 1.0.6
      chokidar: 3.6.0
      unplugin: 1.16.0
      zod: 3.23.8
    optionalDependencies:
      vite: 5.4.12(@types/node@22.9.0)
    transitivePeerDependencies:
      - supports-color

  '@tanstack/store@0.5.5': {}

  '@tanstack/virtual-file-routes@1.81.9': {}

  '@tauri-apps/api@2.1.1': {}

  '@tauri-apps/cli-darwin-arm64@2.1.0':
    optional: true

  '@tauri-apps/cli-darwin-x64@2.1.0':
    optional: true

  '@tauri-apps/cli-linux-arm-gnueabihf@2.1.0':
    optional: true

  '@tauri-apps/cli-linux-arm64-gnu@2.1.0':
    optional: true

  '@tauri-apps/cli-linux-arm64-musl@2.1.0':
    optional: true

  '@tauri-apps/cli-linux-x64-gnu@2.1.0':
    optional: true

  '@tauri-apps/cli-linux-x64-musl@2.1.0':
    optional: true

  '@tauri-apps/cli-win32-arm64-msvc@2.1.0':
    optional: true

  '@tauri-apps/cli-win32-ia32-msvc@2.1.0':
    optional: true

  '@tauri-apps/cli-win32-x64-msvc@2.1.0':
    optional: true

  '@tauri-apps/cli@2.1.0':
    optionalDependencies:
      '@tauri-apps/cli-darwin-arm64': 2.1.0
      '@tauri-apps/cli-darwin-x64': 2.1.0
      '@tauri-apps/cli-linux-arm-gnueabihf': 2.1.0
      '@tauri-apps/cli-linux-arm64-gnu': 2.1.0
      '@tauri-apps/cli-linux-arm64-musl': 2.1.0
      '@tauri-apps/cli-linux-x64-gnu': 2.1.0
      '@tauri-apps/cli-linux-x64-musl': 2.1.0
      '@tauri-apps/cli-win32-arm64-msvc': 2.1.0
      '@tauri-apps/cli-win32-ia32-msvc': 2.1.0
      '@tauri-apps/cli-win32-x64-msvc': 2.1.0

  '@tauri-apps/plugin-dialog@2.0.1':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-fs@2.0.2':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-opener@2.2.6':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-os@2.2.1':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-shell@2.0.1':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-store@2.1.0':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@tauri-apps/plugin-updater@2.5.1':
    dependencies:
      '@tauri-apps/api': 2.1.1

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.26.2
      '@babel/types': 7.26.0
      '@types/babel__generator': 7.6.8
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.20.6

  '@types/babel__generator@7.6.8':
    dependencies:
      '@babel/types': 7.26.0

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.26.2
      '@babel/types': 7.26.0

  '@types/babel__traverse@7.20.6':
    dependencies:
      '@babel/types': 7.26.0

  '@types/clone@2.1.4': {}

  '@types/debug@4.1.12':
    dependencies:
      '@types/ms': 2.1.0

  '@types/estree-jsx@1.0.5':
    dependencies:
      '@types/estree': 1.0.6

  '@types/estree@1.0.6': {}

  '@types/hast@3.0.4':
    dependencies:
      '@types/unist': 3.0.3

  '@types/mdast@4.0.4':
    dependencies:
      '@types/unist': 3.0.3

  '@types/ms@2.1.0': {}

  '@types/node@22.9.0':
    dependencies:
      undici-types: 6.19.8

  '@types/prop-types@15.7.13': {}

  '@types/react-dom@18.3.1':
    dependencies:
      '@types/react': 18.3.12

  '@types/react@18.3.12':
    dependencies:
      '@types/prop-types': 15.7.13
      csstype: 3.1.3

  '@types/unist@2.0.11': {}

  '@types/unist@3.0.3': {}

  '@ungap/structured-clone@1.3.0': {}

  '@vitejs/plugin-react@4.3.3(vite@5.4.12(@types/node@22.9.0))':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/plugin-transform-react-jsx-self': 7.25.9(@babel/core@7.26.0)
      '@babel/plugin-transform-react-jsx-source': 7.25.9(@babel/core@7.26.0)
      '@types/babel__core': 7.20.5
      react-refresh: 0.14.2
      vite: 5.4.12(@types/node@22.9.0)
    transitivePeerDependencies:
      - supports-color

  acorn@8.14.0: {}

  ansi-regex@5.0.1: {}

  ansi-regex@6.1.0: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@6.2.1: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  arg@5.0.2: {}

  aria-hidden@1.2.4:
    dependencies:
      tslib: 2.8.1

  autoprefixer@10.4.20(postcss@8.4.49):
    dependencies:
      browserslist: 4.24.2
      caniuse-lite: 1.0.30001680
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.1.1
      postcss: 8.4.49
      postcss-value-parser: 4.2.0

  babel-dead-code-elimination@1.0.6:
    dependencies:
      '@babel/core': 7.26.0
      '@babel/parser': 7.26.2
      '@babel/traverse': 7.25.9
      '@babel/types': 7.26.0
    transitivePeerDependencies:
      - supports-color

  bail@2.0.2: {}

  balanced-match@1.0.2: {}

  binary-extensions@2.3.0: {}

  boolbase@1.0.0: {}

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.24.2:
    dependencies:
      caniuse-lite: 1.0.30001680
      electron-to-chromium: 1.5.63
      node-releases: 2.0.18
      update-browserslist-db: 1.1.1(browserslist@4.24.2)

  camelcase-css@2.0.1: {}

  caniuse-lite@1.0.30001680: {}

  ccount@2.0.1: {}

  character-entities-html4@2.1.0: {}

  character-entities-legacy@3.0.0: {}

  character-entities@2.0.2: {}

  character-reference-invalid@2.0.1: {}

  cheerio-select@2.1.0:
    dependencies:
      boolbase: 1.0.0
      css-select: 5.1.0
      css-what: 6.1.0
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.1.0

  cheerio@1.0.0:
    dependencies:
      cheerio-select: 2.1.0
      dom-serializer: 2.0.0
      domhandler: 5.0.3
      domutils: 3.1.0
      encoding-sniffer: 0.2.0
      htmlparser2: 9.1.0
      parse5: 7.2.1
      parse5-htmlparser2-tree-adapter: 7.1.0
      parse5-parser-stream: 7.1.2
      undici: 6.21.0
      whatwg-mimetype: 4.0.0

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  class-variance-authority@0.7.0:
    dependencies:
      clsx: 2.0.0

  cliui@8.0.1:
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0

  clone@2.1.2: {}

  clsx@2.0.0: {}

  clsx@2.1.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  comma-separated-tokens@2.0.3: {}

  commander@4.1.1: {}

  convert-source-map@2.0.0: {}

  core-util-is@1.0.3: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  css-select@5.1.0:
    dependencies:
      boolbase: 1.0.0
      css-what: 6.1.0
      domhandler: 5.0.3
      domutils: 3.1.0
      nth-check: 2.1.1

  css-what@6.1.0: {}

  cssesc@3.0.0: {}

  csstype@3.1.3: {}

  debug@4.3.7:
    dependencies:
      ms: 2.1.3

  decode-named-character-reference@1.1.0:
    dependencies:
      character-entities: 2.0.2

  dequal@2.0.3: {}

  detect-node-es@1.1.0: {}

  devlop@1.1.0:
    dependencies:
      dequal: 2.0.3

  didyoumean@1.2.2: {}

  dlv@1.1.3: {}

  dom-serializer@2.0.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      entities: 4.5.0

  domelementtype@2.3.0: {}

  domhandler@5.0.3:
    dependencies:
      domelementtype: 2.3.0

  domutils@3.1.0:
    dependencies:
      dom-serializer: 2.0.0
      domelementtype: 2.3.0
      domhandler: 5.0.3

  eastasianwidth@0.2.0: {}

  electron-to-chromium@1.5.63: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  encoding-sniffer@0.2.0:
    dependencies:
      iconv-lite: 0.6.3
      whatwg-encoding: 3.1.1

  entities@4.5.0: {}

  esbuild@0.21.5:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.21.5
      '@esbuild/android-arm': 0.21.5
      '@esbuild/android-arm64': 0.21.5
      '@esbuild/android-x64': 0.21.5
      '@esbuild/darwin-arm64': 0.21.5
      '@esbuild/darwin-x64': 0.21.5
      '@esbuild/freebsd-arm64': 0.21.5
      '@esbuild/freebsd-x64': 0.21.5
      '@esbuild/linux-arm': 0.21.5
      '@esbuild/linux-arm64': 0.21.5
      '@esbuild/linux-ia32': 0.21.5
      '@esbuild/linux-loong64': 0.21.5
      '@esbuild/linux-mips64el': 0.21.5
      '@esbuild/linux-ppc64': 0.21.5
      '@esbuild/linux-riscv64': 0.21.5
      '@esbuild/linux-s390x': 0.21.5
      '@esbuild/linux-x64': 0.21.5
      '@esbuild/netbsd-x64': 0.21.5
      '@esbuild/openbsd-x64': 0.21.5
      '@esbuild/sunos-x64': 0.21.5
      '@esbuild/win32-arm64': 0.21.5
      '@esbuild/win32-ia32': 0.21.5
      '@esbuild/win32-x64': 0.21.5

  esbuild@0.23.1:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.23.1
      '@esbuild/android-arm': 0.23.1
      '@esbuild/android-arm64': 0.23.1
      '@esbuild/android-x64': 0.23.1
      '@esbuild/darwin-arm64': 0.23.1
      '@esbuild/darwin-x64': 0.23.1
      '@esbuild/freebsd-arm64': 0.23.1
      '@esbuild/freebsd-x64': 0.23.1
      '@esbuild/linux-arm': 0.23.1
      '@esbuild/linux-arm64': 0.23.1
      '@esbuild/linux-ia32': 0.23.1
      '@esbuild/linux-loong64': 0.23.1
      '@esbuild/linux-mips64el': 0.23.1
      '@esbuild/linux-ppc64': 0.23.1
      '@esbuild/linux-riscv64': 0.23.1
      '@esbuild/linux-s390x': 0.23.1
      '@esbuild/linux-x64': 0.23.1
      '@esbuild/netbsd-x64': 0.23.1
      '@esbuild/openbsd-arm64': 0.23.1
      '@esbuild/openbsd-x64': 0.23.1
      '@esbuild/sunos-x64': 0.23.1
      '@esbuild/win32-arm64': 0.23.1
      '@esbuild/win32-ia32': 0.23.1
      '@esbuild/win32-x64': 0.23.1

  escalade@3.2.0: {}

  escape-string-regexp@5.0.0: {}

  estree-util-is-identifier-name@3.0.0: {}

  extend@3.0.2: {}

  fast-glob@3.3.2:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fastq@1.17.1:
    dependencies:
      reusify: 1.0.4

  faye-websocket@0.11.4:
    dependencies:
      websocket-driver: 0.7.4

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  firebase@11.4.0:
    dependencies:
      '@firebase/analytics': 0.10.12(@firebase/app@0.11.2)
      '@firebase/analytics-compat': 0.2.18(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/app': 0.11.2
      '@firebase/app-check': 0.8.12(@firebase/app@0.11.2)
      '@firebase/app-check-compat': 0.3.19(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/app-compat': 0.2.51
      '@firebase/app-types': 0.9.3
      '@firebase/auth': 1.9.1(@firebase/app@0.11.2)
      '@firebase/auth-compat': 0.5.19(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)
      '@firebase/data-connect': 0.3.1(@firebase/app@0.11.2)
      '@firebase/database': 1.0.13
      '@firebase/database-compat': 2.0.4
      '@firebase/firestore': 4.7.9(@firebase/app@0.11.2)
      '@firebase/firestore-compat': 0.3.44(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)
      '@firebase/functions': 0.12.3(@firebase/app@0.11.2)
      '@firebase/functions-compat': 0.3.20(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/installations': 0.6.13(@firebase/app@0.11.2)
      '@firebase/installations-compat': 0.2.13(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)
      '@firebase/messaging': 0.12.17(@firebase/app@0.11.2)
      '@firebase/messaging-compat': 0.2.17(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/performance': 0.7.1(@firebase/app@0.11.2)
      '@firebase/performance-compat': 0.2.14(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/remote-config': 0.6.0(@firebase/app@0.11.2)
      '@firebase/remote-config-compat': 0.2.13(@firebase/app-compat@0.2.51)(@firebase/app@0.11.2)
      '@firebase/storage': 0.13.7(@firebase/app@0.11.2)
      '@firebase/storage-compat': 0.3.17(@firebase/app-compat@0.2.51)(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)
      '@firebase/util': 1.11.0
      '@firebase/vertexai': 1.1.0(@firebase/app-types@0.9.3)(@firebase/app@0.11.2)
    transitivePeerDependencies:
      - '@react-native-async-storage/async-storage'

  foreground-child@3.3.0:
    dependencies:
      cross-spawn: 7.0.6
      signal-exit: 4.1.0

  fraction.js@4.3.7: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  gensync@1.0.0-beta.2: {}

  get-caller-file@2.0.5: {}

  get-nonce@1.0.1: {}

  get-tsconfig@4.8.1:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@10.4.5:
    dependencies:
      foreground-child: 3.3.0
      jackspeak: 3.4.3
      minimatch: 9.0.5
      minipass: 7.1.2
      package-json-from-dist: 1.0.1
      path-scurry: 1.11.1

  globals@11.12.0: {}

  goober@2.1.16(csstype@3.1.3):
    dependencies:
      csstype: 3.1.3

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  hast-util-to-jsx-runtime@2.3.6:
    dependencies:
      '@types/estree': 1.0.6
      '@types/hast': 3.0.4
      '@types/unist': 3.0.3
      comma-separated-tokens: 2.0.3
      devlop: 1.1.0
      estree-util-is-identifier-name: 3.0.0
      hast-util-whitespace: 3.0.0
      mdast-util-mdx-expression: 2.0.1
      mdast-util-mdx-jsx: 3.2.0
      mdast-util-mdxjs-esm: 2.0.1
      property-information: 7.0.0
      space-separated-tokens: 2.0.2
      style-to-js: 1.1.16
      unist-util-position: 5.0.0
      vfile-message: 4.0.2
    transitivePeerDependencies:
      - supports-color

  hast-util-whitespace@3.0.0:
    dependencies:
      '@types/hast': 3.0.4

  html-url-attributes@3.0.1: {}

  htmlparser2@9.1.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      domutils: 3.1.0
      entities: 4.5.0

  http-parser-js@0.5.9: {}

  iconv-lite@0.6.3:
    dependencies:
      safer-buffer: 2.1.2

  idb@7.1.1: {}

  immediate@3.0.6: {}

  immer@10.1.1: {}

  inherits@2.0.4: {}

  inline-style-parser@0.2.4: {}

  invariant@2.2.4:
    dependencies:
      loose-envify: 1.4.0

  is-alphabetical@2.0.1: {}

  is-alphanumerical@2.0.1:
    dependencies:
      is-alphabetical: 2.0.1
      is-decimal: 2.0.1

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-core-module@2.15.1:
    dependencies:
      hasown: 2.0.2

  is-decimal@2.0.1: {}

  is-extglob@2.1.1: {}

  is-fullwidth-code-point@3.0.0: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-hexadecimal@2.0.1: {}

  is-number@7.0.0: {}

  is-plain-obj@4.1.0: {}

  isarray@1.0.0: {}

  isexe@2.0.0: {}

  jackspeak@3.4.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jiti@1.21.6: {}

  jotai-immer@0.4.1(immer@10.1.1)(jotai@2.10.3(@types/react@18.3.12)(react@18.3.1)):
    dependencies:
      immer: 10.1.1
      jotai: 2.10.3(@types/react@18.3.12)(react@18.3.1)

  jotai@2.10.3(@types/react@18.3.12)(react@18.3.1):
    optionalDependencies:
      '@types/react': 18.3.12
      react: 18.3.1

  js-tokens@4.0.0: {}

  jsesc@3.0.2: {}

  json5@2.2.3: {}

  jszip@3.10.1:
    dependencies:
      lie: 3.3.0
      pako: 1.0.11
      readable-stream: 2.3.8
      setimmediate: 1.0.5

  lie@3.3.0:
    dependencies:
      immediate: 3.0.6

  lilconfig@2.1.0: {}

  lilconfig@3.1.2: {}

  lines-and-columns@1.2.4: {}

  lodash.camelcase@4.3.0: {}

  long@5.3.1: {}

  longest-streak@3.1.0: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@10.4.3: {}

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@0.460.0(react@18.3.1):
    dependencies:
      react: 18.3.1

  markdown-table@3.0.4: {}

  mdast-util-find-and-replace@3.0.2:
    dependencies:
      '@types/mdast': 4.0.4
      escape-string-regexp: 5.0.0
      unist-util-is: 6.0.0
      unist-util-visit-parents: 6.0.1

  mdast-util-from-markdown@2.0.2:
    dependencies:
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      mdast-util-to-string: 4.0.0
      micromark: 4.0.2
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-decode-string: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2
      unist-util-stringify-position: 4.0.0
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-autolink-literal@2.0.1:
    dependencies:
      '@types/mdast': 4.0.4
      ccount: 2.0.1
      devlop: 1.1.0
      mdast-util-find-and-replace: 3.0.2
      micromark-util-character: 2.1.1

  mdast-util-gfm-footnote@2.1.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
      micromark-util-normalize-identifier: 2.0.1
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-strikethrough@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-table@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      markdown-table: 3.0.4
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-task-list-item@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm@3.1.0:
    dependencies:
      mdast-util-from-markdown: 2.0.2
      mdast-util-gfm-autolink-literal: 2.0.1
      mdast-util-gfm-footnote: 2.1.0
      mdast-util-gfm-strikethrough: 2.0.0
      mdast-util-gfm-table: 2.0.0
      mdast-util-gfm-task-list-item: 2.0.0
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-mdx-expression@2.0.1:
    dependencies:
      '@types/estree-jsx': 1.0.5
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-mdx-jsx@3.2.0:
    dependencies:
      '@types/estree-jsx': 1.0.5
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      ccount: 2.0.1
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
      parse-entities: 4.0.2
      stringify-entities: 4.0.4
      unist-util-stringify-position: 4.0.0
      vfile-message: 4.0.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-mdxjs-esm@2.0.1:
    dependencies:
      '@types/estree-jsx': 1.0.5
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-phrasing@4.1.0:
    dependencies:
      '@types/mdast': 4.0.4
      unist-util-is: 6.0.0

  mdast-util-to-hast@13.2.0:
    dependencies:
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      '@ungap/structured-clone': 1.3.0
      devlop: 1.1.0
      micromark-util-sanitize-uri: 2.0.1
      trim-lines: 3.0.1
      unist-util-position: 5.0.0
      unist-util-visit: 5.0.0
      vfile: 6.0.3

  mdast-util-to-markdown@2.1.2:
    dependencies:
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      longest-streak: 3.1.0
      mdast-util-phrasing: 4.1.0
      mdast-util-to-string: 4.0.0
      micromark-util-classify-character: 2.0.1
      micromark-util-decode-string: 2.0.1
      unist-util-visit: 5.0.0
      zwitch: 2.0.4

  mdast-util-to-string@4.0.0:
    dependencies:
      '@types/mdast': 4.0.4

  merge2@1.4.1: {}

  micromark-core-commonmark@2.0.3:
    dependencies:
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      micromark-factory-destination: 2.0.1
      micromark-factory-label: 2.0.1
      micromark-factory-space: 2.0.1
      micromark-factory-title: 2.0.1
      micromark-factory-whitespace: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-chunked: 2.0.1
      micromark-util-classify-character: 2.0.1
      micromark-util-html-tag-name: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-subtokenize: 2.1.0
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-autolink-literal@2.1.0:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-footnote@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-core-commonmark: 2.0.3
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-strikethrough@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-util-chunked: 2.0.1
      micromark-util-classify-character: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-table@2.1.1:
    dependencies:
      devlop: 1.1.0
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-tagfilter@2.0.0:
    dependencies:
      micromark-util-types: 2.0.2

  micromark-extension-gfm-task-list-item@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm@3.0.0:
    dependencies:
      micromark-extension-gfm-autolink-literal: 2.1.0
      micromark-extension-gfm-footnote: 2.1.0
      micromark-extension-gfm-strikethrough: 2.1.0
      micromark-extension-gfm-table: 2.1.1
      micromark-extension-gfm-tagfilter: 2.0.0
      micromark-extension-gfm-task-list-item: 2.1.0
      micromark-util-combine-extensions: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-destination@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-label@2.0.1:
    dependencies:
      devlop: 1.1.0
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-space@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-types: 2.0.2

  micromark-factory-title@2.0.1:
    dependencies:
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-whitespace@2.0.1:
    dependencies:
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-character@2.1.1:
    dependencies:
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-chunked@2.0.1:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-classify-character@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-combine-extensions@2.0.1:
    dependencies:
      micromark-util-chunked: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-decode-numeric-character-reference@2.0.2:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-decode-string@2.0.1:
    dependencies:
      decode-named-character-reference: 1.1.0
      micromark-util-character: 2.1.1
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-symbol: 2.0.1

  micromark-util-encode@2.0.1: {}

  micromark-util-html-tag-name@2.0.1: {}

  micromark-util-normalize-identifier@2.0.1:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-resolve-all@2.0.1:
    dependencies:
      micromark-util-types: 2.0.2

  micromark-util-sanitize-uri@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-encode: 2.0.1
      micromark-util-symbol: 2.0.1

  micromark-util-subtokenize@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-util-chunked: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-symbol@2.0.1: {}

  micromark-util-types@2.0.2: {}

  micromark@4.0.2:
    dependencies:
      '@types/debug': 4.1.12
      debug: 4.3.7
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      micromark-core-commonmark: 2.0.3
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-chunked: 2.0.1
      micromark-util-combine-extensions: 2.0.1
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-encode: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-subtokenize: 2.1.0
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2
    transitivePeerDependencies:
      - supports-color

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.1

  minipass@7.1.2: {}

  ms@2.1.3: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nanoid@3.3.7: {}

  node-releases@2.0.18: {}

  normalize-path@3.0.0: {}

  normalize-range@0.1.2: {}

  nth-check@2.1.1:
    dependencies:
      boolbase: 1.0.0

  object-assign@4.1.1: {}

  object-hash@3.0.0: {}

  package-json-from-dist@1.0.1: {}

  pako@1.0.11: {}

  parse-entities@4.0.2:
    dependencies:
      '@types/unist': 2.0.11
      character-entities-legacy: 3.0.0
      character-reference-invalid: 2.0.1
      decode-named-character-reference: 1.1.0
      is-alphanumerical: 2.0.1
      is-decimal: 2.0.1
      is-hexadecimal: 2.0.1

  parse5-htmlparser2-tree-adapter@7.1.0:
    dependencies:
      domhandler: 5.0.3
      parse5: 7.2.1

  parse5-parser-stream@7.1.2:
    dependencies:
      parse5: 7.2.1

  parse5@7.2.1:
    dependencies:
      entities: 4.5.0

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.4.3
      minipass: 7.1.2

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  pify@2.3.0: {}

  pirates@4.0.6: {}

  postcss-import@15.1.0(postcss@8.4.49):
    dependencies:
      postcss: 8.4.49
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.8

  postcss-js@4.0.1(postcss@8.4.49):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.4.49

  postcss-load-config@4.0.2(postcss@8.4.49):
    dependencies:
      lilconfig: 3.1.2
      yaml: 2.6.1
    optionalDependencies:
      postcss: 8.4.49

  postcss-nested@6.2.0(postcss@8.4.49):
    dependencies:
      postcss: 8.4.49
      postcss-selector-parser: 6.1.2

  postcss-selector-parser@6.1.2:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.49:
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prettier@3.3.3: {}

  process-nextick-args@2.0.1: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  property-information@7.0.0: {}

  protobufjs@7.4.0:
    dependencies:
      '@protobufjs/aspromise': 1.1.2
      '@protobufjs/base64': 1.1.2
      '@protobufjs/codegen': 2.0.4
      '@protobufjs/eventemitter': 1.1.0
      '@protobufjs/fetch': 1.1.0
      '@protobufjs/float': 1.0.2
      '@protobufjs/inquire': 1.1.0
      '@protobufjs/path': 1.1.2
      '@protobufjs/pool': 1.1.0
      '@protobufjs/utf8': 1.1.0
      '@types/node': 22.9.0
      long: 5.3.1

  queue-microtask@1.2.3: {}

  react-dom@18.3.1(react@18.3.1):
    dependencies:
      loose-envify: 1.4.0
      react: 18.3.1
      scheduler: 0.23.2

  react-is@16.13.1: {}

  react-markdown@10.1.0(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      '@types/react': 18.3.12
      devlop: 1.1.0
      hast-util-to-jsx-runtime: 2.3.6
      html-url-attributes: 3.0.1
      mdast-util-to-hast: 13.2.0
      react: 18.3.1
      remark-parse: 11.0.0
      remark-rehype: 11.1.1
      unified: 11.0.5
      unist-util-visit: 5.0.0
      vfile: 6.0.3
    transitivePeerDependencies:
      - supports-color

  react-refresh@0.14.2: {}

  react-remove-scroll-bar@2.3.6(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-style-singleton: 2.2.1(@types/react@18.3.12)(react@18.3.1)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  react-remove-scroll-bar@2.3.8(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-style-singleton: 2.2.3(@types/react@18.3.12)(react@18.3.1)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  react-remove-scroll@2.6.0(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-remove-scroll-bar: 2.3.6(@types/react@18.3.12)(react@18.3.1)
      react-style-singleton: 2.2.1(@types/react@18.3.12)(react@18.3.1)
      tslib: 2.8.1
      use-callback-ref: 1.3.2(@types/react@18.3.12)(react@18.3.1)
      use-sidecar: 1.1.2(@types/react@18.3.12)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12

  react-remove-scroll@2.7.0(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-remove-scroll-bar: 2.3.8(@types/react@18.3.12)(react@18.3.1)
      react-style-singleton: 2.2.3(@types/react@18.3.12)(react@18.3.1)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@18.3.12)(react@18.3.1)
      use-sidecar: 1.1.3(@types/react@18.3.12)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.12

  react-style-singleton@2.2.1(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      get-nonce: 1.0.1
      invariant: 2.2.4
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  react-style-singleton@2.2.3(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      get-nonce: 1.0.1
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  react@18.3.1:
    dependencies:
      loose-envify: 1.4.0

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readable-stream@2.3.8:
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  remark-gfm@4.0.1:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-gfm: 3.1.0
      micromark-extension-gfm: 3.0.0
      remark-parse: 11.0.0
      remark-stringify: 11.0.0
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  remark-parse@11.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-from-markdown: 2.0.2
      micromark-util-types: 2.0.2
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  remark-rehype@11.1.1:
    dependencies:
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      mdast-util-to-hast: 13.2.0
      unified: 11.0.5
      vfile: 6.0.3

  remark-stringify@11.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-to-markdown: 2.1.2
      unified: 11.0.5

  require-directory@2.1.1: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@1.22.8:
    dependencies:
      is-core-module: 2.15.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.0.4: {}

  rollup@4.35.0:
    dependencies:
      '@types/estree': 1.0.6
    optionalDependencies:
      '@rollup/rollup-android-arm-eabi': 4.35.0
      '@rollup/rollup-android-arm64': 4.35.0
      '@rollup/rollup-darwin-arm64': 4.35.0
      '@rollup/rollup-darwin-x64': 4.35.0
      '@rollup/rollup-freebsd-arm64': 4.35.0
      '@rollup/rollup-freebsd-x64': 4.35.0
      '@rollup/rollup-linux-arm-gnueabihf': 4.35.0
      '@rollup/rollup-linux-arm-musleabihf': 4.35.0
      '@rollup/rollup-linux-arm64-gnu': 4.35.0
      '@rollup/rollup-linux-arm64-musl': 4.35.0
      '@rollup/rollup-linux-loongarch64-gnu': 4.35.0
      '@rollup/rollup-linux-powerpc64le-gnu': 4.35.0
      '@rollup/rollup-linux-riscv64-gnu': 4.35.0
      '@rollup/rollup-linux-s390x-gnu': 4.35.0
      '@rollup/rollup-linux-x64-gnu': 4.35.0
      '@rollup/rollup-linux-x64-musl': 4.35.0
      '@rollup/rollup-win32-arm64-msvc': 4.35.0
      '@rollup/rollup-win32-ia32-msvc': 4.35.0
      '@rollup/rollup-win32-x64-msvc': 4.35.0
      fsevents: 2.3.3

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-buffer@5.1.2: {}

  safer-buffer@2.1.2: {}

  scheduler@0.23.2:
    dependencies:
      loose-envify: 1.4.0

  semver@6.3.1: {}

  setimmediate@1.0.5: {}

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  signal-exit@4.1.0: {}

  source-map-js@1.2.1: {}

  space-separated-tokens@2.0.2: {}

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  string_decoder@1.1.1:
    dependencies:
      safe-buffer: 5.1.2

  stringify-entities@4.0.4:
    dependencies:
      character-entities-html4: 2.1.0
      character-entities-legacy: 3.0.0

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.1.0

  style-to-js@1.1.16:
    dependencies:
      style-to-object: 1.0.8

  style-to-object@1.0.8:
    dependencies:
      inline-style-parser: 0.2.4

  sucrase@3.35.0:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.5
      commander: 4.1.1
      glob: 10.4.5
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.6
      ts-interface-checker: 0.1.13

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwind-merge@2.5.4: {}

  tailwindcss-animate@1.0.7(tailwindcss@3.4.15):
    dependencies:
      tailwindcss: 3.4.15

  tailwindcss@3.4.15:
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.2
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.6
      lilconfig: 2.1.0
      micromatch: 4.0.8
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.1.1
      postcss: 8.4.49
      postcss-import: 15.1.0(postcss@8.4.49)
      postcss-js: 4.0.1(postcss@8.4.49)
      postcss-load-config: 4.0.2(postcss@8.4.49)
      postcss-nested: 6.2.0(postcss@8.4.49)
      postcss-selector-parser: 6.1.2
      resolve: 1.22.8
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  tiny-invariant@1.3.3: {}

  tiny-warning@1.0.3: {}

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  trim-lines@3.0.1: {}

  trough@2.2.0: {}

  ts-interface-checker@0.1.13: {}

  tslib@2.8.1: {}

  tsx@4.19.2:
    dependencies:
      esbuild: 0.23.1
      get-tsconfig: 4.8.1
    optionalDependencies:
      fsevents: 2.3.3

  typescript@5.8.2: {}

  undici-types@6.19.8: {}

  undici@6.21.0: {}

  unified@11.0.5:
    dependencies:
      '@types/unist': 3.0.3
      bail: 2.0.2
      devlop: 1.1.0
      extend: 3.0.2
      is-plain-obj: 4.1.0
      trough: 2.2.0
      vfile: 6.0.3

  unist-util-is@6.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-position@5.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-stringify-position@4.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-visit-parents@6.0.1:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.0

  unist-util-visit@5.0.0:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.0
      unist-util-visit-parents: 6.0.1

  unplugin@1.16.0:
    dependencies:
      acorn: 8.14.0
      webpack-virtual-modules: 0.6.2

  update-browserslist-db@1.1.1(browserslist@4.24.2):
    dependencies:
      browserslist: 4.24.2
      escalade: 3.2.0
      picocolors: 1.1.1

  use-callback-ref@1.3.2(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  use-callback-ref@1.3.3(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  use-sidecar@1.1.2(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      detect-node-es: 1.1.0
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  use-sidecar@1.1.3(@types/react@18.3.12)(react@18.3.1):
    dependencies:
      detect-node-es: 1.1.0
      react: 18.3.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.12

  use-sync-external-store@1.2.2(react@18.3.1):
    dependencies:
      react: 18.3.1

  util-deprecate@1.0.2: {}

  vfile-message@4.0.2:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-stringify-position: 4.0.0

  vfile@6.0.3:
    dependencies:
      '@types/unist': 3.0.3
      vfile-message: 4.0.2

  vite@5.4.12(@types/node@22.9.0):
    dependencies:
      esbuild: 0.21.5
      postcss: 8.4.49
      rollup: 4.35.0
    optionalDependencies:
      '@types/node': 22.9.0
      fsevents: 2.3.3

  web-vitals@4.2.4: {}

  webpack-virtual-modules@0.6.2: {}

  websocket-driver@0.7.4:
    dependencies:
      http-parser-js: 0.5.9
      safe-buffer: 5.1.2
      websocket-extensions: 0.1.4

  websocket-extensions@0.1.4: {}

  whatwg-encoding@3.1.1:
    dependencies:
      iconv-lite: 0.6.3

  whatwg-mimetype@4.0.0: {}

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  y18n@5.0.8: {}

  yallist@3.1.1: {}

  yaml@2.6.1: {}

  yargs-parser@21.1.1: {}

  yargs@17.7.2:
    dependencies:
      cliui: 8.0.1
      escalade: 3.2.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 21.1.1

  zod@3.23.8: {}

  zwitch@2.0.4: {}

================================================
FILE: postcss.config.js
================================================

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

================================================
FILE: tailwind.config.js
================================================

/** @type {import('tailwindcss').Config} */

import * as tailwindAnimate from "tailwindcss-animate"

export default {
 darkMode: ["class"],
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)'
   },
   boxShadow: {
    dark: '0px 0px 15px -5px rgba(255, 255, 255, 0.05), -0px -0px 6px -2px rgba(255, 255, 255, 0.05)'
   },
   colors: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: {
     DEFAULT: 'hsl(var(--card))',
     foreground: 'hsl(var(--card-foreground))'
    },
    popover: {
     DEFAULT: 'hsl(var(--popover))',
     foreground: 'hsl(var(--popover-foreground))'
    },
    primary: {
     DEFAULT: 'hsl(var(--primary))',
     foreground: 'hsl(var(--primary-foreground))'
    },
    secondary: {
     DEFAULT: 'hsl(var(--secondary))',
     foreground: 'hsl(var(--secondary-foreground))'
    },
    muted: {
     DEFAULT: 'hsl(var(--muted))',
     foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
     DEFAULT: 'hsl(var(--accent))',
     foreground: 'hsl(var(--accent-foreground))'
    },
    destructive: {
     DEFAULT: 'hsl(var(--destructive))',
     foreground: 'hsl(var(--destructive-foreground))'
    },
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    chart: {
     '1': 'hsl(var(--chart-1))',
     '2': 'hsl(var(--chart-2))',
     '3': 'hsl(var(--chart-3))',
     '4': 'hsl(var(--chart-4))',
     '5': 'hsl(var(--chart-5))'
    },
    sidebar: {
     DEFAULT: 'hsl(var(--sidebar-background))',
     foreground: 'hsl(var(--sidebar-foreground))',
     primary: 'hsl(var(--sidebar-primary))',
     'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
     accent: 'hsl(var(--sidebar-accent))',
     'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
     border: 'hsl(var(--sidebar-border))',
     ring: 'hsl(var(--sidebar-ring))'
    }
   }
  }
 },
 plugins: [tailwindAnimate],
}

================================================
FILE: tsconfig.json
================================================

{
 "compilerOptions": {
  "target": "ES2020",
  "useDefineForClassFields": true,
  "lib": [
   "ES2020",
   "DOM",
   "DOM.Iterable"
  ],
  "module": "ESNext",
  "skipLibCheck": true,
  /*Bundler mode */
  "moduleResolution": "bundler",
  "allowImportingTsExtensions": true,
  "resolveJsonModule": true,
  "isolatedModules": true,
  "noEmit": true,
  "jsx": "react-jsx",
  /* Linting */
  "strict": true,
  "noUnusedLocals": false,
  "noUnusedParameters": false,
  "noFallthroughCasesInSwitch": true,
  /* ShadeCN */
  "baseUrl": ".",
  "paths": {
   "@/*": [
    "./src/*"
   ]
  }
 },
 "include": [
  "src"
 ],
 "references": [
  {
   "path": "./tsconfig.node.json"
  }
 ]
}

================================================
FILE: tsconfig.node.json
================================================

{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

================================================
FILE: vite.config.ts
================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// <https://vitejs.dev/config/>
export default defineConfig(async () => ({
 plugins: [TanStackRouterVite(), react({
  babel: {
   plugins: [
    "jotai/babel/plugin-react-refresh"
   ],
  }
 })],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },

 // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
 //
 // 1. prevent vite from obscuring rust errors
 clearScreen: false,
 // 2. tauri expects a fixed port, fail if that port is not available
 server: {
  port: 1420,
  strictPort: true,
  host: host || false,
  hmr: host
   ? {
    protocol: "ws",
    host,
    port: 1421,
   }
   : undefined,
  watch: {
   // 3. tell vite to ignore watching `src-tauri`
   ignored: ["**/src-tauri/**"],
  },
 },
}));

================================================
FILE: .editorconfig
================================================

root = true

[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.ts]
quote_type = double

================================================
FILE: src/App.css
================================================

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 142.1 76.2% 36.3%;
    --radius: 0.3rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 240 10% 3.9%;
    --sidebar-primary: 142.1 76.2% 36.3%;
    --sidebar-primary-foreground: 355.7 100% 97.3%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 240 5.9% 90%;
    --sidebar-ring: 142.1 76.2% 36.3%;
  }

  .dark {
    --background: 20 6% 8%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144.9 80.4% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 142.4 71.8% 29.2%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 24 9.8% 10%;
    --sidebar-foreground: 0 0% 95%;
    --sidebar-primary: 142.1 70.6% 45.3%;
    --sidebar-primary-foreground: 144.9 80.4% 10%;
    --sidebar-accent: 12 6.5% 15.1%;
    --sidebar-accent-foreground: 0 0% 98%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 142.4 71.8% 29.2%;
  }
}

@layer base {

- {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  background-color: hsl(240 3.8% 46.1%);
  border-radius: 10px;
}

# markdown ul {
  list-style: disc !important;
  padding-left: 1.2rem;
}

# markdown ol {
  list-style: decimal !important;
  padding-left: 1.2rem;
}

================================================
FILE: src/App.tsx
================================================

import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { getFirebaseAnalytics } from "./lib/firebase";

function App() {
 return (
  <SidebarProvider defaultOpen={true}>
   <AppSidebar />
   <main className="bg-background w-full h-screen">
   </main>
  </SidebarProvider>
 );
}

export default App;

================================================
FILE: src/main.tsx
================================================

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import "./App.css";

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
 interface Register {
  router: typeof router
 }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
 const root = ReactDOM.createRoot(rootElement)
 root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
 )
}

================================================
FILE: src/routeTree.gen.ts
================================================

/*eslint-disable*/

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as NovelImport } from './routes/novel'
import { Route as LibraryImport } from './routes/library'
import { Route as IndexImport } from './routes/index'
import { Route as SourcesIndexImport } from './routes/sources/index'
import { Route as SourcesSourceIdImport } from './routes/sources/$sourceId'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const NovelRoute = NovelImport.update({
  id: '/novel',
  path: '/novel',
  getParentRoute: () => rootRoute,
} as any)

const LibraryRoute = LibraryImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SourcesIndexRoute = SourcesIndexImport.update({
  id: '/sources/',
  path: '/sources/',
  getParentRoute: () => rootRoute,
} as any)

const SourcesSourceIdRoute = SourcesSourceIdImport.update({
  id: '/sources/$sourceId',
  path: '/sources/$sourceId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/library': {
      id: '/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof LibraryImport
      parentRoute: typeof rootRoute
    }
    '/novel': {
      id: '/novel'
      path: '/novel'
      fullPath: '/novel'
      preLoaderRoute: typeof NovelImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/sources/$sourceId': {
      id: '/sources/$sourceId'
      path: '/sources/$sourceId'
      fullPath: '/sources/$sourceId'
      preLoaderRoute: typeof SourcesSourceIdImport
      parentRoute: typeof rootRoute
    }
    '/sources/': {
      id: '/sources/'
      path: '/sources'
      fullPath: '/sources'
      preLoaderRoute: typeof SourcesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources': typeof SourcesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources': typeof SourcesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/novel': typeof NovelRoute
  '/settings': typeof SettingsRoute
  '/sources/$sourceId': typeof SourcesSourceIdRoute
  '/sources/': typeof SourcesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources'
  id:
    | '__root__'
    | '/'
    | '/library'
    | '/novel'
    | '/settings'
    | '/sources/$sourceId'
    | '/sources/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LibraryRoute: typeof LibraryRoute
  NovelRoute: typeof NovelRoute
  SettingsRoute: typeof SettingsRoute
  SourcesSourceIdRoute: typeof SourcesSourceIdRoute
  SourcesIndexRoute: typeof SourcesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LibraryRoute: LibraryRoute,
  NovelRoute: NovelRoute,
  SettingsRoute: SettingsRoute,
  SourcesSourceIdRoute: SourcesSourceIdRoute,
  SourcesIndexRoute: SourcesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/*ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/library",
        "/novel",
        "/settings",
        "/sources/$sourceId",
        "/sources/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/library": {
      "filePath": "library.tsx"
    },
    "/novel": {
      "filePath": "novel.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/sources/$sourceId": {
      "filePath": "sources/$sourceId.tsx"
    },
    "/sources/": {
      "filePath": "sources/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END*/

================================================
FILE: src/vite-env.d.ts
================================================

/// <reference types="vite/client" />

================================================
FILE: src/components/app-sidebar.tsx
================================================

import {
 Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import { ChevronDoubleRight, CircleNotch, DownloadSolid, FileTextSolid, SquareSolid } from "@mynaui/icons-react";
import { LargeP, P, SmallP, TinyP } from "./typography";
import { Button } from "./ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { app } from "@tauri-apps/api";
import { useAtom, useSetAtom } from "jotai/react";
import { appStateAtom } from "@/lib/store";
import { routes } from "@/lib/routes";
import { invoke } from "@tauri-apps/api/core";
import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { fetchGithubRelease } from "@/lib/utils";
import DialogUI from "./dialog";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";

const analytics = getFirebaseAnalytics();

export function AppSidebar() {
 const { resolvedLocation } = useRouterState();
 const [appState, setAppState] = useAtom(appStateAtom);

 const { toggleSidebar, open } = useSidebar();
 const [version, setVersion] = useState("");
 const [releaseNotes, setReleaseNotes] = useState("");
 const [newVersion, setNewVersion] = useState("");
 const [isUpdating, setIsUpdating] = useState(false);
 const [viewedNotes, setViewedNotes] = useState(true);

 useEffect(() => {
  app.getVersion().then(v => setVersion(v));
  handleCheckForUpdates();
 }, []);

 useEffect(() => {
  if (!version) return;
  logEvent(analytics, "started_app", { version });
  getReleaseNotes(version);
 }, [version]);

 useEffect(() => {
  setAppState((state) => {
   state.isSidePanelOpen = open;
   return state;
  });
 }, [open]);

 const handleCheckForUpdates = async () => {
  try {
   const newVersion = await invoke<string>("check_for_update");
   if (newVersion) {
    setNewVersion(newVersion);
    logEvent(analytics, "version_update_request", { version: newVersion });
   }
  } catch (e) {
   console.error(e);
  }
 }

 const handleInstallUpdate = async () => {
  setIsUpdating(true);
  try {
   await invoke("install_update");
  } catch (e) {
   console.error(e);
  }
  setIsUpdating(false);
 }

 const getReleaseNotes = async (tag: string) => {
  const release = await fetchGithubRelease(`v${tag}`);
  if (release) {
   const body = release.body as string;
   const notes = body.replace(/^(.|\n|\r)*### Release Notes\r\n/g, "");
   setReleaseNotes(notes);
  }
 }

 const handleSetReleaseNotesAsViewed = (isOpen: boolean) => {
  if (appState.viewedNotesForVersion === version) return;
  setAppState(state => {
   state.viewedNotesForVersion = version;
  });
 }

 return (
  <Sidebar collapsible="icon">
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem className="flex gap-2 justify-center items-center">
      <SidebarMenuButton size="lg" className="!bg-card !cursor-default">
       <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <SquareSolid className="size-7" />
       </div>
       <div className="grid flex-1 text-left text-sm leading-tight">
        <LargeP className="truncate">NovelScraper</LargeP>
        <TinyP className="truncate">v{version}</TinyP>
       </div>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>
   <SidebarContent>
    <SidebarGroup>
     <SidebarGroupContent>
      <SidebarMenu>
       {routes.map((item) => (
        <SidebarMenuItem key={item.url}>
         <SidebarMenuButton asChild isActive={resolvedLocation.pathname === "/"
          ? item.url === "/"
          : resolvedLocation.pathname.includes(item.url) && item.url !== "/"
         }>
          <Link href={item.url}>
           <item.icon width={24} height={24} />
           <span>{item.title}</span>
          </Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       ))}
      </SidebarMenu>
     </SidebarGroupContent>
    </SidebarGroup>
   </SidebarContent>
   <SidebarFooter className="flex flex-col items-end gap-4">
    <SidebarMenu className="flex flex-col gap-2">
     {(version && releaseNotes) &&
      <SidebarMenuItem className="flex gap-2 justify-center items-center shadow-lg">
       <DialogUI
        title={`Release Notes (v${version})`}
        trigger={
         <SidebarMenuButton size="lg" className="!bg-card border">
          <FileTextSolid className={`transition-all ml-[0.41rem] ${open && "!size-7 ml-0"}`} />
          <div className="flex-1 text-sm leading-tight flex-col gap-1">
           <P className="truncate">Release Notes</P>
           <TinyP className="truncate">v{version}</TinyP>
          </div>
         </SidebarMenuButton>
        }
        defaultOpen={appState.viewedNotesForVersion !== version}
        onOpenChange={handleSetReleaseNotesAsViewed}
       >
        <div id="markdown">
         <Markdown remarkPlugins={[remarkGfm]}>{releaseNotes}</Markdown>
        </div>
       </DialogUI>
      </SidebarMenuItem>
     }
     {newVersion &&
      <SidebarMenuItem className="flex gap-2 justify-center items-center shadow-lg shadow-green-600 animate-pulse">
       <SidebarMenuButton size="lg" className="!bg-card border border-green-900" onClick={handleInstallUpdate} disabled={isUpdating}>
        {isUpdating
         ? <CircleNotch className={`transition-all animate-spin ml-[0.4rem] ${open && "!size-7 ml-0"}`} />
         : <DownloadSolid className={`transition-all ml-[0.41rem] ${open && "!size-7 ml-0"}`} />
        }
        <div className="flex-1 text-sm leading-tight flex-col gap-1">
         <P className="truncate">New Update</P>
         <TinyP className="truncate">v{newVersion}</TinyP>
        </div>
       </SidebarMenuButton>
      </SidebarMenuItem>
     }
    </SidebarMenu>
    <Button className="size-8" variant="outline" size="icon" onClick={toggleSidebar}>
     <ChevronDoubleRight className={`transition-transform ${open ? "rotate-180" : ""}`} />
    </Button>
   </SidebarFooter>
  </Sidebar>
 )
}

================================================
FILE: src/components/breadcrumbs.tsx
================================================

import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { H4 } from "./typography";
import { routes } from "@/lib/routes";
import { SourceIDsT, SOURCES } from "@/lib/sources/sources";
import { Button } from "./ui/button";
import { ChevronLeft } from "@mynaui/icons-react";
import { useAtomValue } from "jotai/react";
import { activeNovelAtom } from "@/lib/store";

export default function Breadcrumbs() {
 const location = useLocation();
 const { history } = useRouter();
 const activeNovel = useAtomValue(activeNovelAtom);

 const routeURLs = routes.map((r) => r.url);

 if (location.pathname === "/novel")
  return <div className="flex items-center gap-2">
   <Button variant="ghost" size="icon" onClick={() => history.go(-1)}><ChevronLeft /></Button>
   <H4 className="text-ellipsis text-nowrap overflow-hidden flex-1">{activeNovel?.title}</H4>
  </div>

 if (routeURLs.includes(location.pathname))
  return <H4>{routes.find((r) => r.url === location.pathname)!.title}</H4>;

 const locationSplit = location.pathname.split("/");
 locationSplit.shift();
 if (locationSplit.length === 2) {
  if (locationSplit[0] === "sources") {
   const source = SOURCES[locationSplit[1] as SourceIDsT];
   if (!source) throw new Error("Source not found");
   return (
    <div className="flex items-center gap-2">
     <Link href="/sources">
      <H4 className="text-muted-foreground hover:underline">Sources</H4>
     </Link>
     <H4 className="text-muted-foreground">/</H4>
     <H4>{source.name}</H4>
    </div>
   );
  } else if (locationSplit[0] === "library") {
   return (
    <div className="flex items-center gap-2">
     <Link href="/library">
      <H4 className="text-muted-foreground hover:underline">Library</H4>
     </Link>
     <H4 className="text-muted-foreground">/</H4>
     <H4>{locationSplit[1]}</H4>
    </div>
   );
  }
 }
 return <H4 className="bg-red-500">UNHANDLED BREADCRUMB ROUTE</H4>
}

================================================
FILE: src/components/card.tsx
================================================

import { Link } from "@tanstack/react-router";
import { SmallP, TinyP } from "./typography";
import { ReactNode } from "react";
import MissingImageBanner from "@/assets/ui/missing-image-banner.jpg";
import { RefreshSolid } from "@mynaui/icons-react";

type CardUIProps = {
 href: string;
 imageURL: string;
 title: string;
 subTitle: string;
 badges?: ReactNode[];
 onClick?: () => void;
}
export function CardUI({ href, imageURL, title, subTitle, badges, onClick = () => { } }: CardUIProps) {
 return (
  <Link
   className={`relative flex flex-col gap-3 group rounded-lg bg-card border p-2 pb-3 hover:border-primary`}
   href={href}
   onClick={onClick}
  >
   <div className="flex gap-2 items-center absolute top-3 right-3 z-20">
    {badges && badges?.map((badge, i) => <span key={i}>{badge}</span>)}
   </div>
   <div className="rounded-lg overflow-hidden w-full aspect-auto flex-1 grid place-items-center bg-background border">
    <object className="group-hover:scale-[1.05] transition-transform w-full" data={imageURL} type="image/jpg">
     <img src={MissingImageBanner} alt={`${title}`} />
    </object>
   </div>
   <div className="flex flex-col gap-1">
    <SmallP className="text-ellipsis text-nowrap overflow-hidden">{title}</SmallP>
    <TinyP className="text-muted-foreground text-ellipsis text-nowrap overflow-hidden pb-1">{subTitle}</TinyP>
   </div>
  </Link>
 )
}

type CardGridUIProps = {
 children: ReactNode;
 className?: string;
}
export function CardGridUI({ children, className = "" }: CardGridUIProps) {
 return (
  <div className={`grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 ${className}`}>
   {children}
  </div>
 )
}

export type RemainingChaptersBadgeProps = {
 remainingChapters: number;
}
export function RemainingChaptersBadge({ remainingChapters }: RemainingChaptersBadgeProps) {
 if (remainingChapters <= 0) return null;
 return <span className="text-xs p-1 px-2 bg-blue-800 rounded-lg">{remainingChapters}</span>
}

export type NovelUpdatingBadgeProps = {
 isUpdating: boolean;
}
export function NovelUpdatingBadge({ isUpdating }: NovelUpdatingBadgeProps) {
 if (!isUpdating) return null;
 return <span className="text-xs p-1 px-2 bg-green-800 rounded-lg"><RefreshSolid className="size-4" /></span>
}

================================================
FILE: src/components/cloudflare-resolver.tsx
================================================

import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { CheckSolid, CircleNotch, ExternalLink, InfoCircle, PlaySolid, StopSolid, XSolid } from "@mynaui/icons-react";
import { useAtom } from "jotai/react";
import { appStateAtom, dockerAtom } from "@/lib/store";
import { Button } from "./ui/button";
import { TooltipUI } from "./tooltip";
import DialogUI from "./dialog";
import { SmallP } from "./typography";
import { openUrl } from "@tauri-apps/plugin-opener";
import { DialogClose } from "@radix-ui/react-dialog";

export function CloudflareResolverStatus() {
 const [appState, setAppState] = useAtom(appStateAtom);
 const [docker, setDocker] = useAtom(dockerAtom);

 const [isDockerInitializing, setIsDockerInitializing] = useState(false);
 const [isLoadingDocker, setIsLoadingDocker] = useState(false);
 const [isLoadingCloudflareResolver, setIsLoadingCloudflareResolver] = useState(false);

 useEffect(() => {
  // setAppState(state => {
  //  state.cfDockerInitialized = false;
  // });
  // if (appState.cfDockerInitialized) initCloudflareResolver();
 }, []);

 const initCloudflareResolver = async () => {
  setIsDockerInitializing(true);
  await new Promise((resolve) => setTimeout(resolve, 500));
  const status = await handleCheckDockerStatus() && await handleStartCloudflareResolver();
  setIsDockerInitializing(false);
  return status;
 }

 const handleCheckDockerStatus = async () => {
  setIsLoadingDocker(true);
  try {
   const res = await invoke<boolean>("check_docker_status");
   setDocker(d => { d.engineStatus = res });
   setIsLoadingDocker(false);
   return res;
  } catch (e) {
   console.error(e);
   setDocker(d => { d.engineStatus = false });
   setIsLoadingDocker(false);
   return false;
  }
 }

 const handleStartCloudflareResolver = async () => {
  setIsLoadingCloudflareResolver(true);
  try {
   const res = await invoke<boolean>("start_cloudflare_resolver", {
    port: 3148,
   });
   setDocker(d => { d.cfResolverStatus = res });
   setIsLoadingCloudflareResolver(false);
   return res;
  } catch (e) {
   console.error(e);
   setDocker(d => { d.cfResolverStatus = false });
   handleCheckDockerStatus();
   setIsLoadingCloudflareResolver(false);
   return false;
  }
 }

 const handleStopCloudflareResolver = async () => {
  setIsLoadingCloudflareResolver(true);
  try {
   const isClosed = await invoke<boolean>("stop_cloudflare_resolver");
   setDocker(d => { d.cfResolverStatus = !isClosed });
  } catch (e) {
   console.error(e);
   await initCloudflareResolver();
  }
  setIsLoadingCloudflareResolver(false);
 }

 const handleOpenDockerURL = async () => {
  try {
   openUrl("https://www.docker.com/")
  } catch (e) {
   console.error(e);
  }
 }

 return (
  <div className="flex gap-2 items-center">
   {(!docker.engineStatus || !docker.cfResolverStatus)
    ? <TooltipUI content="Start Docker" side="bottom">
     <Button size="icon" className="flex items-center gap-1" onClick={initCloudflareResolver} disabled={isDockerInitializing}>
      {isDockerInitializing
       ? <CircleNotch className="animate-spin" />
       : <PlaySolid />
      }
     </Button>
    </TooltipUI>
    : <DialogUI
     title="Stop Cloudflare Resolver"
     description="Are you sure you want to do this?"
     className="flex flex-col gap-4"
     trigger={
      <Button size="icon" variant="destructive" className="flex items-center gap-1" disabled={isLoadingCloudflareResolver}>
       {isLoadingCloudflareResolver
        ? <CircleNotch className="animate-spin" />
        : <StopSolid />
       }
      </Button>
     }
     footer={
      <div className="flex gap-3">
       <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
       </DialogClose>
       <DialogClose asChild>
        <Button variant="destructive" onClick={handleStopCloudflareResolver}>Stop Service</Button>
       </DialogClose>
      </div>
     }
    >
     <SmallP className="font-normal text-red-500">This may corrupt any novels currently using this service</SmallP>
    </DialogUI>
   }
   <StatusBadge
    isLoading={isLoadingDocker}
    isActive={docker.engineStatus}
    // isDisabled={isLoadingDocker || isLoadingCloudflareResolver || !appState.cfDockerInitialized}
    // onCheckStatus={handleCheckDockerStatus}
    text="Docker"
   />
   <StatusBadge
    isLoading={isLoadingCloudflareResolver}
    isActive={docker.engineStatus && docker.cfResolverStatus}
    // isDisabled={isLoadingDocker || isLoadingCloudflareResolver || !appState.cfDockerInitialized}
    // onCheckStatus={handleStartCloudflareResolver}
    text="CloudFlare Resolver"
   />
   <DialogUI
    title="Docker Info"
    trigger={
     <Button variant="outline" size="icon" className="flex gap-1 items-center text-xs">
      <InfoCircle className="size-4 cursor-pointer" />
     </Button>
    }
   >
    <SmallP className="leading-6 font-normal">This source uses Cloudflare to guard against bots. To access this source, you must install Docker to bypass Cloudflare.</SmallP>
    <SmallP className="leading-6 font-normal text-red-500">Be sure to run the Docker app after installing.</SmallP>
    <DialogClose asChild>
     <Button onClick={handleOpenDockerURL}>
      <ExternalLink />
      Download
     </Button>
    </DialogClose>
   </DialogUI>
  </div>
 )
}

type StatusBadgeProps = {
 isLoading: boolean;
 isActive: boolean;
 isDisabled?: boolean;
 onCheckStatus?: () => void;
 text: string;
}
const StatusBadge = ({ isLoading, isActive, isDisabled = false, onCheckStatus, text }: StatusBadgeProps) => {
 return (
  <button
   className={`h-full ${onCheckStatus ? "cursor-pointer" : "cursor-default"}`}
   onClick={() => onCheckStatus && onCheckStatus()}
   disabled={isLoading || isDisabled}
  >
   <Badge
    className={`h-full font-bold ${(isLoading || isDisabled)
     ? "bg-gray-500 text-gray-900 hover:bg-gray-500"
     : isActive
      ? "bg-green-300 text-green-900 hover:bg-green-400"
      : "bg-red-300 font-bold text-red-900 hover:bg-red-400"
     }`
    }>
    {isLoading
     ? <CircleNotch className="w-4 animate-spin" />
     : isActive
      ? <CheckSolid className="w-4" />
      : <XSolid className="w-4" />
    }
    {text}
   </Badge>
  </button>
 )
}

================================================
FILE: src/components/dialog.tsx
================================================

import { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type DialogUIProps = {
    children: ReactNode;
    trigger: ReactNode;
    title: string;
    description?: string;
    footer?: ReactNode;
    className?: string;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}
export default function DialogUI({ children, trigger, title, description, footer, className = "", defaultOpen = false, onOpenChange }: DialogUIProps) {

    return (
        <Dialog defaultOpen={defaultOpen} onOpenChange={(isOpen) => onOpenChange && onOpenChange(isOpen)}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[425px] ${className}`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>
                        {description}
                    </DialogDescription>}
                </DialogHeader>
                {children}
                {footer && <DialogFooter>
                    {footer}
                </DialogFooter>}
            </DialogContent>
        </Dialog>
    )
}

================================================
FILE: src/components/loader.tsx
================================================

import { CircleDashed } from "@mynaui/icons-react";
import { LargeP } from "./typography";

export default function Loader() {
 return (
  <div className="flex items-center justify-center gap-1 w-full h-screen text-primary">
   <CircleDashed className="animate-spin" />
   <LargeP>Loading...</LargeP>
  </div>
 )
}

================================================
FILE: src/components/page.tsx
================================================

import { ReactNode } from 'react';
import Breadcrumbs from "./breadcrumbs";

type PageProps = {
 children?: ReactNode;
 className?: string;
 titleBarContent?: ReactNode;
}
export default function Page({ children, className, titleBarContent }: PageProps) {
 return (
  <main className="w-full h-screen flex flex-col gap-2 overflow-hidden">
   <div className="px-4 pr-6 pt-3 flex justify-between items-center">
    <Breadcrumbs />
    {titleBarContent ? titleBarContent : null}
   </div>
   <div className={`px-4 pt-2 pb-6 overflow-auto flex flex-col gap-5 ${className}`}>
    {children}
   </div>
  </main>
 )
}

================================================
FILE: src/components/search-bar.tsx
================================================

import { CircleDashed, Search, X } from "@mynaui/icons-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

type SearchBarProps = {
 handleSearch: (query: string) => void;
 handleClear: () => void;
 showClear?: boolean;
 loading?: boolean;
 disabled?: boolean;
 searchOnType?: boolean;
}
export default function SearchBar({ handleSearch, handleClear, showClear = false, loading = false, disabled = false, searchOnType }: SearchBarProps) {
 const [searchQuery, setSearchQuery] = useState('');
 const [searched, setSearched] = useState(false);

 return (
  <div className="flex items-center">
   <div className="relative w-full">
    <Input
     className="pr-14 rounded-lg bg-card"
     value={searchQuery}
     onChange={e => {
      setSearchQuery(e.target.value)
      if (searchOnType) {
       handleSearch(e.target.value);
       setSearched(true);
      }
      if (!e.target.value) {
       setSearched(false);
      }
     }}
     onKeyDown={e => {
      if (e.key === 'Enter') {
       handleSearch(searchQuery);
       setSearched(true);
      }
     }}
     type="text"
     placeholder='Search'
     disabled={disabled || loading}
    />
    <Button className={`h-full absolute right-0 top-0 disabled:bg-muted disabled:text-foreground`} onClick={() => handleSearch(searchQuery)} disabled={loading || disabled}>
     {loading ? <CircleDashed className="animate-spin" /> : <Search />}
    </Button>
   </div>
   <div className={`overflow-hidden transition-all ${(showClear || searched) ? "w-max pr-2 ml-2" : "w-0"}`}>
    <Button
     variant="secondary"
     onClick={() => {
      setSearchQuery("");
      setSearched(false);
      handleClear();
     }}
     disabled={disabled || loading}
    >
     <X />
    </Button>
   </div>
  </div>
 )
}

================================================
FILE: src/components/tooltip.tsx
================================================

import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type TooltipUIProps = {
 children: ReactNode;
 content: ReactNode;
 side?: "top" | "right" | "bottom" | "left";
 sideOffset?: number;
 className?: string;
}
export function TooltipUI({ children, content, side, sideOffset, className = "" }: TooltipUIProps) {
 return (
  <TooltipProvider delayDuration={200}>
   <Tooltip>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipContent
     className={`bg-background border shadow-lg text-gray-500 font-medium ${className}`}
     side={side} sideOffset={sideOffset}
    >{content}</TooltipContent>
   </Tooltip>
  </TooltipProvider>
 )
}

================================================
FILE: src/components/typography.tsx
================================================

type TypographyProps = {
    children: React.ReactNode
    className?: string
}

export function H1({ children, className }: TypographyProps) {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
            {children}
        </h1>
    )
}

export function H2({ children, className }: TypographyProps) {
    return (
        <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight ${className}`}>
            {children}
        </h2>
    )
}

export function H3({ children, className }: TypographyProps) {
    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {children}
        </h3>
    )
}

export function H4({ children, className }: TypographyProps) {
    return (
        <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
            {children}
        </h4>
    )
}

export function P({ children, className }: TypographyProps) {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    )
}

export function BlockQuote({ children, className }: TypographyProps) {
    return (
        <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
            {children}
        </blockquote>
    )
}

export function InlineCode({ children, className }: TypographyProps) {
    return (
        <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}>
            {children}
        </code>
    )
}

export function LeadP({ children, className }: TypographyProps) {
    return (
        <p className={`text-xl text-muted-foreground ${className}`}>
            {children}
        </p>
    )
}

export function LargeP({ children, className }: TypographyProps) {
    return (
        <div className={`text-lg font-semibold ${className}`}>
            {children}
        </div>
    )
}

export function SmallP({ children, className }: TypographyProps) {
    return (
        <small className={`text-sm font-medium leading-none ${className}`}>
            {children}
        </small>
    )
}

export function TinyP({ children, className }: TypographyProps) {
    return (
        <small className={`text-xs font-medium leading-none ${className}`}>
            {children}
        </small>
    )
}

export function MutedP({ children, className }: TypographyProps) {
    return (
        <p className={`text-sm text-muted-foreground ${className}`}>
            {children}
        </p>
    )
}

export function CodeP({ children, className }: TypographyProps) {
    return (
        <code className={`px-1 py-1 bg-gray-800 rounded-md ${className}`}>
            {children}
        </code>
    )
}

================================================
FILE: src/components/ui/alert-dialog.tsx
================================================

import *as React from "react"
import* as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

================================================
FILE: src/components/ui/badge.tsx
================================================

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

================================================
FILE: src/components/ui/button.tsx
================================================

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

================================================
FILE: src/components/ui/card.tsx
================================================

import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

================================================
FILE: src/components/ui/dialog.tsx
================================================

import *as React from "react"
import* as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

================================================
FILE: src/components/ui/input.tsx
================================================

import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

================================================
FILE: src/components/ui/progress.tsx
================================================

import *as React from "react"
import* as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

================================================
FILE: src/components/ui/separator.tsx
================================================

import *as React from "react"
import* as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

================================================
FILE: src/components/ui/sheet.tsx
================================================

"use client"

import *as React from "react"
import* as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

================================================
FILE: src/components/ui/sidebar.tsx
================================================

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 *60* 24 * 7
const SIDEBAR_WIDTH = "12rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]*&]:cursor-w-resize [[data-side=right]*&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]*&]:cursor-e-resize [[data-side=right][data-state=collapsed]*&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]*&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]*&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
        "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

================================================
FILE: src/components/ui/skeleton.tsx
================================================

import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }

================================================
FILE: src/components/ui/tabs.tsx
================================================

import *as React from "react"
import* as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.C
