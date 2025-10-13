export const logoOverrides = {
  'lumirelle/vs-shell-format': 'https://raw.githubusercontent.com/lumirelle/vs-shell-format/refs/heads/master/logo.png?raw=true',
} as Record<string, string>

// @unocss-include
export const subLogosMatch = [
  [/^nuxt-/, 'i-logos-nuxt-icon'],
  [/^vite-/, 'i-logos-vitejs'],
  [/^eslint-/, 'i-logos-eslint'],
  [/^vscode-/, 'i-logos-visual-studio-code'],
  [/^shiki-/i, 'https://github.com/shikijs.png'],
  [/^slidev-/, 'https://github.com/slidevjs.png'],
] as const
