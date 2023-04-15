<template>
  <NavComp/><!--Importar la barra de navegacion-->

  <!--Secci�n gen�rica para todos los componentes.
  Permitir al usuario cambiar de tema claro al oscuro.
  Se deja margen con la barra superior y se crea una fila con dos columnas.
  La primera mostrar� la imagen y la segunda permitir� habilitar o deshabilitar-->
  <div class="container mt-2">
    <div class="row">
      <div class="col col-10 form-check-reverse">
        <img src="./assets/imgDarkMode.png">
      </div>

      <div class="col col-1">
        <div class="form-switch">
        <input class="form-check-input" type="checkbox" role="switch"
              @click="modeToggle" :class="darkDark">
        </div>
      </div>
    </div>
  </div>

  <router-view v-slot="{Component}">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <FootNav/>
</template>

<script>
//Ajustes para hacer funcionar firebase:
import { onMounted } from 'vue';

import FootNav from '@/components/FootNav.vue';
import NavComp from '@/components/NavComp.vue';
//Indicar que el NavComp es un componente. Objeto con propiedades
export default{
  name: 'App',
  setup(){
    onMounted(() => {
      /*auth.onAuthStateChanged((user) => {
        console.log(user)
      });*/
    });
  },
  components: {
    NavComp,
    FootNav
  },  
  data() {
    return {
      darkMode: false
    }
  },  
  methods: {
    //Funciones que permiten a�adir/quitar la clase para aplicar o eliminar el modo nocturno:
    dark() {
      document.querySelector('body').classList.add('dark-mode')
      this.darkMode = true
      this.$emit('dark')
    },
    light() {
      document.querySelector('body').classList.remove('dark-mode')
      this.darkMode = false
      this.$emit('light')
    },
    //Funcion que gestiona la l�gica para cambiar entre modos:
    modeToggle() {
      if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
        this.light()
      } else {
        this.dark()
      }
    },
  },
  computed: {
    darkDark() {
      return this.darkMode && 'darkmode-toggled'
    }
  }
}
</script>

<style>
  #app {
    color: #2c3e50;
  }

  /*Eventos de entrar a un menu */
  .fadeUp-enter-active,
  .fadeUp-leave-active {
    transition: opacity 0.25s, transform 0.25s;
  }

  /*Salida del menu*/
  .fadeUp-enter,
  .fadeUp-leave-to {
    opacity: 0;
    transform: translateY(30%);
  }

  /*Habilitar modo nocturno */
  body {
    background-color: #fff;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  body.dark-mode {
    background-color: #242424;
  }
</style>