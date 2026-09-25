const documents = [
  { id: 'terminos', number: '01', title: 'Términos y condiciones', source: '/legal/terminos.txt' },
  { id: 'privacidad', number: '02', title: 'Política de privacidad y tratamiento de datos personales', source: '/legal/privacidad.txt' },
  { id: 'conducta', number: '03', title: 'Código de conducta', source: '/legal/conducta.txt' },
  {
    id: 'autorizacion',
    number: '04',
    title: 'Autorización para menores de edad',
    source: '/legal/autorizacion.txt',
    download: '/legal/Autorizacion-menores-HackFlow.docx',
  },
]

const legalDocuments = document.querySelector('#legal-documents')

function addTextElement(parent, tagName, text, className = '') {
  const element = document.createElement(tagName)
  element.textContent = text
  if (className) element.className = className
  parent.append(element)
}

function addDocumentContent(parent, content) {
  content.trim().split(/\r?\n\s*\r?\n/).forEach((block) => {
    const text = block.trim()
    if (!text) return
    if (/^Artículo \d+\./i.test(text) || /^\d+\.\s/.test(text)) {
      addTextElement(parent, 'h3', text)
      return
    }
    if (/^(HACKFLOW HACKATHON 2026|POLÍTICA DE PRIVACIDAD)/i.test(text)) {
      addTextElement(parent, 'p', text, 'legal-document__title')
      return
    }
    if (/^(Versión:|Documento oficial de lectura|Instrucción de entrega)/i.test(text)) {
      addTextElement(parent, 'p', text, 'legal-document__version')
      return
    }
    addTextElement(parent, 'p', text)
  })
}

async function renderDocument(documentData) {
  const section = document.createElement('section')
  section.id = documentData.id
  section.className = 'legal-card'

  const header = document.createElement('header')
  header.className = 'legal-card__header'
  addTextElement(header, 'span', documentData.number, 'legal-number')
  addTextElement(header, 'h2', documentData.title)
  if (documentData.download) {
    const download = document.createElement('a')
    download.className = 'legal-download'
    download.href = documentData.download
    download.download = 'Autorizacion-menores-HackFlow.docx'
    download.textContent = 'Descargar para firmar'
    header.append(download)
  }
  section.append(header)

  const content = document.createElement('div')
  content.className = 'legal-content'
  try {
    const response = await fetch(documentData.source)
    if (!response.ok) throw new Error('No se pudo cargar el documento')
    addDocumentContent(content, await response.text())
  } catch {
    addTextElement(content, 'p', 'No fue posible cargar este documento. Intenta actualizar la página o comunícate con la organización.')
  }
  section.append(content)
  legalDocuments.append(section)
}

async function renderDocumentsInOrder() {
  for (const documentData of documents) {
    await renderDocument(documentData)
  }
  const requestedDocument = window.location.hash.slice(1)
  if (requestedDocument) {
    document.getElementById(requestedDocument)?.scrollIntoView()
  }
}

renderDocumentsInOrder()
