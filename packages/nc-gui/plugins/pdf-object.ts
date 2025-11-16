import PDFObject from 'pdfobject'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('pdfobject', PDFObject)
})