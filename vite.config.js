import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // optional, helps visualize bundle
  ],
  build: {
    chunkSizeWarningLimit: 1000, // optional: raises the warning limit from 500kB to 1000kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split each node_module package into its own chunk
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
});
