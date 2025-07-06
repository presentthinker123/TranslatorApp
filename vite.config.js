import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme:{
    extend:{
      fontFamily:{
        righteous:['Righteous','Sans-serif'],
        russoOne:['Russo One','Sans-serif'],
        notoSansJp:['Noto Sans Jp','Sans-serif'],
        shojumaru:['shojumaru','system-ui'],

        
      },
      translate:['active'],
    },
  },
  plugins: [
    
    tailwindcss(),
    
  ],
})