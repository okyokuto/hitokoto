import { ManifestV3Export } from '@crxjs/vite-plugin'

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'Hitokoto',
  version: '0.0.2',
  chrome_url_overrides: {
    newtab: 'index.html'
  },
  icons: {
    '16': 'icon.png',
    '32': 'icon.png',
    '48': 'icon.png',
    '128': 'icon.png'
  },
}

export default manifest
