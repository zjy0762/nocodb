import { defineNuxtPlugin } from '#app'
import PdfObject from 'pdfobject-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.component('PdfObject', PdfObject)
})