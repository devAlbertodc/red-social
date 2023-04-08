<template>
  <NavComp/><!--Importar la barra de navegacion-->
  <router-view v-slot="{Component}">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <FootNav/>
</template>

<script>
import FootNav from '@/components/FootNav.vue';
import NavComp from '@/components/NavComp.vue';
//Indicar que el NavComp es un componente. Objeto con propiedades
export default{
  name: 'App',
  components: {
    NavComp,
    FootNav
  },
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
</style>