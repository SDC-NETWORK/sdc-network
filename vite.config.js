import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "/sdc-vite/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',

        // Meherpur
        meherpur: 'meherpur/meherpur.html',

        amdah: 'meherpur/amdah/amdah.html',
        amdahp: 'meherpur/amdah/person.html',

        amjhupi: 'meherpur/amjhupi/amjhupi.html',
        amjhupip: 'meherpur/amjhupi/person.html',

        buripota: 'meherpur/buripota/buripota.html',
        buripotap: 'meherpur/buripota/person.html',

        kutubpur: 'meherpur/kutubpur/kutubpur.html',
        kutubpurp: 'meherpur/kutubpur/person.html',

        pirojpur: 'meherpur/pirojpur/pirojpur.html',
        pirojpurp: 'meherpur/pirojpur/person.html',
        
        // Gangni
        gangni: 'gangni/gangni.html',

        bamondi: 'gangni/bamondi/bamondi.html',
        bamondip: 'gangni/bamondi/person.html',

        dhankhola: 'gangni/dhankhola/dhankhola.html',
        dhankholap: 'gangni/dhankhola/person.html',

        kathuli: 'gangni/kathuli/kathuli.html',
        kathulip: 'gangni/kathuli/person.html',

        kazipur: 'gangni/kazipur/kazipur.html',
        kazipurp: 'gangni/kazipur/person.html',

        motormura: 'gangni/motormura/motormura.html',
        motormurap: 'gangni/motormura/person.html',

        raipur: 'gangni/raipur/raipur.html',
        raipurp: 'gangni/raipur/person.html',
        
        saharbati: 'gangni/saharbati/saharbati.html',
        saharbatip: 'gangni/saharbati/person.html',

        sholotaka: 'gangni/sholotaka/sholotaka.html',
        sholotakap: 'gangni/sholotaka/person.html',

        tetulbaria: 'gangni/tetulbaria/tetulbaria.html',
        tetulbariap: 'gangni/tetulbaria/person.html',

        // Mujibnagar
        mujibnagar: 'mujibnagar/mujibnagar.html',

        bagoan: 'mujibnagar/bagoan/bagoan.html',
        bagoanp: 'mujibnagar/bagoan/person.html',

        dariapur: 'mujibnagar/dariapur/dariapur.html',
        dariapurp: 'mujibnagar/dariapur/person.html',

        mohajonpur: 'mujibnagar/mohajonpur/mohajonpur.html',
        mohajonpurp: 'mujibnagar/mohajonpur/person.html',

        monakhali: 'mujibnagar/monakhali/monakhali.html',
        monakhalip: 'mujibnagar/monakhali/person.html',

      },
    },
  },
})

