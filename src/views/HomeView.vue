<template>
  <div class="home">
    <!--Dividir la pagina en dos secciones:-->
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img src="../assets/img/facebook_title.svg" alt="logo">
          <h2 class="text-center text-lg-start">Conectate con amigos y el resto del mundo usando Facebook</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <!--Seccion de carta aceptando parametros como el titulo:-->
        <Card-comp :btns="btnArray" class="mx-auto card-comp">
          <!--Hacer saber a view que el codigo html se va a mostrar en el slot con name="default"-->
          <template #default>
            <form>
              <div class="mb-3 mt-2">
                <input type="email" class="form-control" placeholder="Ingresa tu email"/>
              </div>
              <div class="mb-3 mt-2">
                <input type="password" class="form-control" placeholder="Ingresa Contraseña"/>
              </div>
            </form>
          </template>

          <!--Seccion html para mostrar footer en cardComp: -->
          <template #footer>
            <hr/>
            <div class="btn btn-success">Crear cuenta</div>
          </template>
        </Card-comp>
      </div>
    </div>
  </div>
</template>

<script>
import CardComp from '../components/CardComp.vue';

export default {
  name: 'HomeView',
  components:{
    CardComp,
  },
  data() {
    return {
      btnArray: [
        {
          txt: "Iniciar sesion",
          class: "btn-primary"
        },
        {
          txt: "Olvidaste tu contraseña",
          class: ""
        },
      ],
    }
  },
}
</script>

<style scoped>
  h2{
    max-width: 470px;
    margin: auto;
    font-size: 1.8rem;
  }
  .home {
    max-width: 895px;
    margin: auto;
  }

  .img-cont{
    /*display: flex;*/
    flex-direction: none;
  }
  .img{
    max-width: 315px;
    margin: 1m auto 0 auto;
  }
  .card-comp{
    max-width: 398px;
  }

  .btn-success{
    margin: auto;
    min-width: 195px;
  }

  @media (min-width: 992px){
    .home {
      margin: 4em auto;
    }

    img{
      margin: 0;
      margin-top: 5.6em;
    }

    h2{
      margin: 0;
      margin-top: -0.8em;
      margin-left: 0.8em;
    }

    .card-comp{
      margin-top: 3rem;
    }
  }
</style>