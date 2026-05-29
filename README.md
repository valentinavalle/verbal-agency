# VerBal Marketing Agency — Sitio Web

Sitio web oficial de VerBal Marketing Agency. SPA (single-page) en HTML + CSS + JS vanilla. Deploy en GitHub Pages.

---

## Checklist post-deploy

### Obligatorio antes de lanzar

- [ ] **Formspree**: Registrarse gratis en [formspree.io](https://formspree.io), crear un nuevo form y reemplazar `XXXXXXXX` en `index.html` (atributo `action` del `<form>`) con el endpoint real. Ej: `https://formspree.io/f/abc12345`
- [ ] **Instagram**: Reemplazar `@verbal` y `https://instagram.com/verbal` con el handle real de la agencia. Buscar en `index.html` el comentario `<!-- INSTAGRAM: reemplazar "verbal" -->` (2 lugares: sección Contacto y Footer)
- [ ] **GitHub Pages**: En el repositorio → Settings → Pages → Source: seleccionar branch `main` y carpeta `/root`. La URL será `https://valentinavalle.github.io/verbal-agency/`

### Recomendado

- [ ] **Fotos del equipo**: Ver sección "Cómo cambiar fotos" más abajo
- [ ] **Portfolio**: Agregar casos reales de clientes (ver sección "Cómo agregar trabajos")
- [ ] **Dominio personalizado**: En GitHub Pages → Custom domain, agregar tu dominio (ej: `verbal.agency`)

---

## Cómo editar el contenido

### Cambiar fotos del equipo

En `index.html`, buscá el comentario `<!-- Team member: Valentina -->` y reemplazá el bloque `<div class="team-avatar">` por:

```html
<img src="foto-valentina.jpg" alt="Valentina Valle" class="team-photo" />
