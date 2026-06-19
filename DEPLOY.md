# Guía de Deploy — ForjaTech Landing

Stack: React 18 + Vite 5 + Tailwind CSS 3  
Hosting recomendado: **Vercel** (gratis en plan Hobby, custom domain incluido)

---

## Opción 1: Vercel (Recomendada)

### Requisitos previos
- Cuenta en [vercel.com](https://vercel.com) (podés entrar con tu cuenta de GitHub)
- Repositorio del proyecto subido a GitHub / GitLab / Bitbucket

### Pasos

1. **Subir el código a GitHub** (si no está):
   ```bash
   git remote add origin https://github.com/TU_USUARIO/forjatech-landing.git
   git push -u origin main
   ```

2. **Importar proyecto en Vercel**:
   - Entrá a [vercel.com/new](https://vercel.com/new)
   - Hacé clic en **"Add New Project"** → seleccioná tu repo
   - Vercel detecta Vite automáticamente. Verificá que los valores sean:
     | Campo | Valor |
     |---|---|
     | Framework Preset | Vite |
     | Build Command | `npm run build` |
     | Output Directory | `dist` |
     | Install Command | `npm install` |
   - Hacé clic en **Deploy**

3. **Primer deploy listo** — Vercel te da una URL del tipo `forjatech-landing.vercel.app`.

### Conectar tu dominio personalizado

4. **En Vercel** → tu proyecto → **Settings** → **Domains** → "Add Domain"
   - Ingresá tu dominio: ej. `forjatech.com` o `forjatech.com.ar`
   - Vercel te muestra los registros DNS que tenés que configurar.

5. **En tu registrador de dominios** (NIC Argentina, Namecheap, GoDaddy, etc.), configurá:

   **Si usás el dominio raíz** (`forjatech.com`):
   ```
   Tipo: A
   Host: @
   Valor: 76.76.21.21
   ```

   **Si usás subdominio** (`www.forjatech.com`):
   ```
   Tipo: CNAME
   Host: www
   Valor: cname.vercel-dns.com
   ```

   > Para dominio `.com.ar` en NIC Argentina: entrá a [nic.ar](https://nic.ar), iniciá sesión con CUIT, y editá los nameservers o registros A del dominio.

6. **Verificar propagación**: Puede demorar entre 5 minutos y 48 horas.  
   Podés chequear con: `nslookup forjatech.com`

7. **HTTPS automático** — Vercel gestiona el certificado SSL/TLS sin configuración adicional.

### Deploy automático (CI/CD)

Cada vez que hacés `git push` a `main`, Vercel redespliega automáticamente.  
Los PRs generan previews en URLs separadas.

---

## Opción 2: Netlify

1. Entrá a [netlify.com](https://netlify.com) → **"Add new site"** → "Import from Git"
2. Seleccioná el repo. Configurá:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Hacé clic en **Deploy**
4. Para el dominio: **Domain settings** → "Add custom domain" → configurá los mismos registros DNS de arriba apuntando a los IPs de Netlify (te los muestra en la configuración).

---

## Opción 3: GitHub Pages

Solo recomendado si ya usás GitHub y querés cero costo.

1. Instalá el plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Agregá en `vite.config.js`:
   ```js
   export default {
     base: '/forjatech-landing/', // nombre del repo
   }
   ```

3. Agregá en `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Corré:
   ```bash
   npm run deploy
   ```

5. En GitHub → repo → Settings → Pages → Source: `gh-pages` branch.

> **Limitación**: El dominio personalizado en GitHub Pages requiere configuración extra. Vercel/Netlify lo hacen mucho más simple.

---

## Antes del deploy — Checklist

- [ ] Actualizar el email en `CTASection.jsx`, `Footer.jsx` y `LegalModal.jsx` (buscar `hello@forjatech.dev`)
- [ ] Actualizar links de LinkedIn y GitHub en `Footer.jsx`
- [ ] Reemplazar los `href="#"` en los links sociales del footer
- [ ] Revisar el texto del CTA ("Q4 is now open") si la temporada cambió
- [ ] Correr `npm run build` localmente y verificar que compila sin errores

---

## Variables de entorno

Por ahora el proyecto no usa variables de entorno. Si en el futuro se integra un formulario o analytics:

1. Crear `.env.local` en la raíz (nunca commitear este archivo)
2. En Vercel: **Settings** → **Environment Variables**

---

## Dominios .com.ar — NIC Argentina

Para registrar `forjatech.com.ar`:

1. Entrá a [nic.ar](https://nic.ar) con tu CUIT
2. Buscá disponibilidad del dominio
3. El registro cuesta ~$4.000 ARS/año (precio aproximado 2026)
4. Una vez registrado, editá los DNS siguiendo el paso 5 de Vercel arriba
