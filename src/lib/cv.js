// Résumé PDFs live in public/docs and are generated from cv/ (see cv/README.md).
export const cvHref = (meta) => `${process.env.PUBLIC_URL}/docs/${meta.cvFile}`;
