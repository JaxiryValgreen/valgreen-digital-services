# Valgreen Agency Template

Plantilla premium definitiva de **Valgreen Digital Services** para sitios de clientes.

## Personalizar un cliente

Edita un solo archivo:

```
src/data/site.ts
```

Cambia: marca, colores (`theme`), textos, servicios, proyectos, equipo, SEO, contacto e imágenes.

## Arquitectura

```
src/
  app/                 # Rutas + sitemap + robots
  components/
    ui/                # Primitivos reutilizables
    layout/            # Header / Footer / Shell
    sections/          # Secciones independientes (props)
    forms/             # Formularios
    animations/        # Framer Motion
  data/                # Contenido del cliente
  hooks/               # Hooks reutilizables
  lib/                 # SEO, theme, cn, validaciones, JSON-LD
  styles/              # CSS global + design tokens
  types/               # TypeScript estricto
public/                # Assets estáticos
```

## Principios

- Secciones independientes vía props (sin contenido hardcodeado)
- Sin duplicación: UI / forms / animations compartidos
- TypeScript strict (`noUncheckedIndexedAccess`, `verbatimModuleSyntax`)
- SEO: metadata, canonical, Open Graph, sitemap, robots, JSON-LD
- Performance: `next/image` (AVIF/WebP), fonts `display: swap`, compress

## Comandos

```bash
npm run dev
npm run build
npm run start
npm run lint
```
