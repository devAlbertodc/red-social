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
        <Card-comp class="mx-auto card-comp">
          <!--Hacer saber a view que el codigo html se va a mostrar en el slot con name="default"-->
          <template #default>
            <form>
              <div class="mb-3 mt-2">
                <input class="form-control" type="email" v-model="email" placeholder="Ingresa tu email"/>
              </div>
              <div class="mb-3 mt-2">
                <input class="form-control" type="password" v-model="password" placeholder="Ingresa contraseña"/>
              </div>

              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary w-75" @click="googleSignIn">Iniciar sesion </button>
              </div>    
              <p v-if="errMsg">{{ errMsg }}</p>
            </form>
          </template>

          <!--Seccion html para mostrar footer en cardComp: -->
          <template #footer>
            <hr/>
            <div class="d-flex justify-content-center">
              <button class="btn btn-success w-75" @click="register">Registrarse</button>
            </div>
            <hr/>
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger w-75" @click="handleSignOut" v-if="isLoggedIn">Cerrar sesion</button>
            </div>

          </template>
        </Card-comp>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth } from '@/utils/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import CardComp from '../components/CardComp.vue';

//Inicializar valores
const email = ref('');
const password = ref('');
const errMsg = ref('');
const router = useRouter();
const isLoggedIn = ref(false);

//auth/network-request-failed - error cuando no hay conexion a internet

//Nuevo usuario:
const register = () => {
  //Se recogen los valores y se redirige a la sección de posts:
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Usuario creado con nombre:", email.value + " y contraseña " + password.value);
      router.push("/posts");
    })
    .catch((err) => {
      console.log("Error creating user:", err);
    });
}

//Usuario ya existente, se añade gestión de errores:
const googleSignIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("User signed in with email:", email.value);
      router.push("/posts");
    })
    .catch((error) => {
      //errMsg.value = strMsgErr(error);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "El email ingresado no es válido.";
          break;
        case "auth/user-not-found":
          errMsg.value = "El email ingresado no existe.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Contraseña incorrecta.";
          break;
        case "auth/network-request-failed":
          errMsg.value = "Problemas recibiendo los datos. Intenta de nuevo, por favor";
          break;
        default:
          errMsg.value = "Error de autenticación.";
          break;
      }
    });
}

//Comprobar si el usuario esta logueado para mostrar boton de cerrar sesion:
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if(user){
      isLoggedIn.value = true;
    }else{
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
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