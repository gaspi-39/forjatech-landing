import { useEffect } from 'react'

const CONTACT_EMAIL = 'hello@forjatech.dev'
const AAIP_URL = 'https://www.argentina.gob.ar/aaip'

function Link({ href, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-ember underline underline-offset-2 hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  )
}

function Section({ title, children }) {
  return (
    <section>
      <h3 className="font-serif font-bold text-white text-lg uppercase tracking-tight mb-sm">
        {title}
      </h3>
      <div className="text-white/70 font-sans text-body-md leading-relaxed space-y-sm">
        {children}
      </div>
    </section>
  )
}

function PrivacyContent() {
  return (
    <div className="space-y-lg">
      <p className="text-white/40 font-sans text-label uppercase tracking-widest">
        Vigente desde Junio 2026 · Ley 25.326 de Protección de Datos Personales · República Argentina
      </p>

      <Section title="1. Responsable del Tratamiento">
        <p>
          <strong className="text-white">ForjaTech</strong> es el responsable del tratamiento de los
          datos personales recopilados a través de este sitio web. Contacto:{' '}
          <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>.
        </p>
      </Section>

      <Section title="2. Datos que Recopilamos">
        <p>
          Recopilamos únicamente los datos que vos nos proporcionás de forma voluntaria al
          contactarnos: nombre, dirección de correo electrónico y descripción del proyecto, son
          procesados por Formspree y no seran almacenados en bases de datos propias de ForjaTech.
          No recopilamos datos sensibles (Art. 2, Ley 25.326), ni datos de menores de 18 años. 
        </p>
      </Section>

      <Section title="3. Finalidad del Tratamiento">
        <p>
          Los datos se utilizan exclusivamente para responder consultas comerciales y gestionar el
          inicio de una relación de trabajo. No usamos tus datos para ninguna finalidad distinta sin
          tu consentimiento expreso previo.
        </p>
      </Section>

      <Section title="4. Conservación de Datos">
        <p>
          Conservamos los datos durante el tiempo necesario para gestionar la relación comercial, sin
          almacenarlos en bases de datos propias de ForjaTech, solo los procesamos a través de Formspree.
          Finalizada ésta, se conservan por un plazo máximo de <strong className="text-white">cinco (5) años</strong>{' '}
          conforme al Art. 2560 del Código Civil y Comercial de la Nación, luego de lo cual son
          eliminados o anonimizados.
        </p>
      </Section>

      <Section title="5. Cesión de Datos a Terceros">
        <p>
          No cedemos, vendemos ni transferimos tus datos personales a terceros, salvo obligación
          legal expresa dispuesta por autoridad competente.
        </p>
      </Section>

      <Section title="6. Tus Derechos (Arts. 14–19, Ley 25.326)">
        <p>Podés ejercer en cualquier momento los siguientes derechos:</p>
        <ul className="list-disc list-inside space-y-xs mt-sm">
          <li><strong className="text-white">Acceso</strong> — conocer qué datos tenemos sobre vos.</li>
          <li><strong className="text-white">Rectificación</strong> — corregir datos inexactos o incompletos.</li>
          <li><strong className="text-white">Supresión</strong> — solicitar la eliminación de tus datos.</li>
          <li><strong className="text-white">Oposición</strong> — oponerte al tratamiento de tus datos.</li>
        </ul>
        <p className="mt-sm">
          Escribinos a <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link> con el asunto
          "Derecho ARSO". Respondemos dentro de los <strong className="text-white">5 días hábiles</strong>.
        </p>
      </Section>

      <Section title="7. Autoridad de Control">
        <p>
          Si considerás que el tratamiento de tus datos infringe la normativa vigente, podés
          presentar un reclamo ante la{' '}
          <strong className="text-white">Agencia de Acceso a la Información Pública (AAIP)</strong>:{' '}
          <Link href={AAIP_URL}>{AAIP_URL}</Link>.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p>
          Este sitio utiliza únicamente cookies técnicas estrictamente necesarias para su
          funcionamiento. No se utilizan cookies analíticas, publicitarias ni de seguimiento de
          terceros.
        </p>
      </Section>

      <Section title="9. Seguridad">
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger tus datos contra
          acceso no autorizado, pérdida, destrucción o divulgación. La transmisión de datos se
          realiza mediante cifrado TLS.
        </p>
      </Section>

      <Section title="10. Modificaciones">
        <p>
          Podemos actualizar esta política ante cambios normativos o en nuestras prácticas. La
          fecha de vigencia indicada al inicio refleja la última actualización. El uso continuado
          del Sitio implica la aceptación de la política vigente.
        </p>
      </Section>
    </div>
  )
}

function TermsContent() {
  return (
    <div className="space-y-lg">
      <p className="text-white/40 font-sans text-label uppercase tracking-widest">
        Vigente desde Junio 2026 · Legislación de la República Argentina
      </p>

      <Section title="1. Objeto y Aceptación">
        <p>
          Los presentes Términos y Condiciones (en adelante, "los Términos") regulan el acceso y
          uso del sitio web de <strong className="text-white">ForjaTech</strong> (en adelante, "el
          Sitio"). Al acceder y utilizar el Sitio, aceptás estos Términos en su totalidad. Si no
          estás de acuerdo, por favor abstente de usar el Sitio.
        </p>
      </Section>

      <Section title="2. Servicios">
        <p>
          ForjaTech ofrece servicios de desarrollo de software, diseño de infraestructura digital y
          consultoría tecnológica. La descripción de servicios en el Sitio es de carácter
          informativo; las condiciones concretas de cada proyecto —incluyendo alcance, plazos y
          honorarios— se acuerdan mediante contrato escrito firmado por ambas partes.
        </p>
      </Section>

      <Section title="3. Propiedad Intelectual">
        <p>
          Todo el contenido del Sitio —incluyendo textos, imágenes, código fuente, logotipos,
          tipografías, animaciones y diseño— es propiedad exclusiva de ForjaTech y está protegido
          por la{' '}
          <strong className="text-white">Ley 11.723 de Propiedad Intelectual</strong> y los Tratados
          Internacionales aplicables. Está prohibida su reproducción, distribución o modificación
          total o parcial sin autorización expresa y escrita de ForjaTech.
        </p>
      </Section>

      <Section title="4. Uso Permitido">
        <p>El Sitio está destinado a uso informativo y comercial legítimo. Queda expresamente prohibido:</p>
        <ul className="list-disc list-inside space-y-xs mt-sm">
          <li>Reproducir o distribuir el contenido del Sitio sin autorización.</li>
          <li>Realizar ingeniería inversa sobre el código o los shaders del Sitio.</li>
          <li>Usar el Sitio para actividades fraudulentas, ilegales o contrarias a la buena fe.</li>
          <li>Sobrecargar o interrumpir los servidores del Sitio (ataques DoS/DDoS).</li>
        </ul>
      </Section>

      <Section title="5. Limitación de Responsabilidad">
        <p>
          El Sitio se provee <em>"tal cual"</em>, sin garantías de disponibilidad continua ni
          ausencia de errores. ForjaTech no será responsable por daños directos, indirectos,
          incidentales o consecuentes derivados del uso o imposibilidad de uso del Sitio, en la
          medida máxima permitida por la legislación argentina vigente (Ley 24.240 y Código Civil y
          Comercial de la Nación).
        </p>
      </Section>

      <Section title="6. Información de Contacto">
        <p>
          ForjaTech exhibe correo electrónico de contacto como medio de comunicación principal:{' '}
          <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>. El plazo de respuesta
          habitual es de 2 a 5 días hábiles.
        </p>
      </Section>

      <Section title="7. Links a Terceros">
        <p>
          El Sitio puede contener enlaces a sitios web de terceros. ForjaTech no se responsabiliza
          por el contenido, prácticas de privacidad ni disponibilidad de dichos sitios.
        </p>
      </Section>

      <Section title="8. Ley Aplicable y Jurisdicción">
        <p>
          Estos Términos se rigen íntegramente por las leyes de la{' '}
          <strong className="text-white">República Argentina</strong>. Ante cualquier controversia
          que no pueda resolverse de forma amistosa, las partes se someten a la jurisdicción
          exclusiva de los{' '}
          <strong className="text-white">
            Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires
          </strong>
          , renunciando expresamente a cualquier otro fuero o jurisdicción.
        </p>
      </Section>

      <Section title="9. Modificaciones">
        <p>
          ForjaTech se reserva el derecho de modificar estos Términos en cualquier momento. Las
          modificaciones entran en vigor desde su publicación en el Sitio. El uso continuado
          implica la aceptación de los Términos vigentes.
        </p>
      </Section>

      <Section title="10. Contacto Legal">
        <p>
          Para consultas sobre estos Términos:{' '}
          <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>.
        </p>
      </Section>
    </div>
  )
}

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const title = type === 'privacy' ? 'Política de Privacidad' : 'Términos y Condiciones'

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-primary-container border-4 border-ember w-full max-w-3xl my-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-lg py-md border-b-4 border-ember">
          <h2 className="font-serif font-bold text-2xl text-white uppercase tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-ember transition-colors font-bold text-xl leading-none ml-md"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-lg py-lg">
          {type === 'privacy' ? <PrivacyContent /> : <TermsContent />}
        </div>

        {/* Footer */}
        <div className="px-lg py-md border-t-4 border-ember flex justify-end">
          <button onClick={onClose} className="btn-ember">
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}
