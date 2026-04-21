/**
 * Utilidades de sanitización para prevenir XSS
 * 
 * NOTA: Los datos en este proyecto son estáticos (hardcodeados),
 * pero estas funciones son necesarias si en el futuro se agregan
 * datos dinámicos (formularios, APIs, etc.)
 */

/**
 * Escapa caracteres HTML peligrosos para prevenir XSS
 * @param str - String a sanitizar
 * @returns String segura para usar en innerHTML
 */
export function escapeHtml(str: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  
  return str.replace(/[&<>"'/]/g, (char) => htmlEntities[char] || char);
}

/**
 * Sanitiza un atributo HTML (para href, src, etc.)
 * Solo permite URLs seguras (http, https, mailto, tel, wa.me)
 * @param url - URL a validar
 * @returns URL si es segura, cadena vacía si no
 */
export function sanitizeUrl(url: string): string {
  const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'javascript:'];
  
  try {
    // Para URLs relativas, permitir
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      return url;
    }
    
    // Para protocolos externos, verificar
    const parsed = new URL(url, 'https://example.com');
    
    // Permitir wa.me como caso especial
    if (url.includes('wa.me')) {
      return url;
    }
    
    if (allowedProtocols.includes(parsed.protocol)) {
      return url;
    }
    
    return '';
  } catch {
    // Si no es una URL válida, verificar si es un path relativo
    if (url.startsWith('#') || url.startsWith('/')) {
      return url;
    }
    return '';
  }
}

/**
 * Sanitiza texto para usar en atributos aria-label, alt, title
 * @param str - Texto a sanitizar
 * @returns Texto limpio
 */
export function sanitizeAttribute(str: string): string {
  return str
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
