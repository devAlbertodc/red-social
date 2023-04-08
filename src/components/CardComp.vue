<!--CardComp se emplea dentro del componente HomeView-->
<template>
    <div class="card">
        <!--Solo se renderiza cuando se reciba el prop header-->
        <CardHeader v-if="header"  :header="header"/>

        <div class="card-body">
            <!--Mostrar valor dinámico. Si pasamos titulo, se muestra-->
            <h5 v-if="title" class="card-title">{{ title }}</h5>
            <p v-if="parrafo" class="card-text">
                {{ parrafo }}
            </p>
            <!--Mostrar imagen si la prop de picture existe:-->
            <img v-if="picture" :src="picture" alt="post img">

            <!--Se muestra si tiene likes-->
            <ListGroup v-if="likes"/>
            
            <slot name="default"></slot>
            <div class="d-grid gap-2">
                <!--Obtener valor de propiedad texto del objeto btns-->
                <!--Botones dinamicos obtenidos a partir del array de btns en Homeview
                    Se obtiene clase y texto dinamico para cada boton-->
                <button v-for="btn in btns"
                    :key="btn.txt" 
                    class="btn" 
                    :class="btn.class">
                    {{btn.txt}}
                </button>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import ListGroup from './ListGroup.vue';

//Propiedades del componente:
export default {
    name: "CardComp",
    props: ["title", "parrafo", "btns", "picture", "header","likes"],
    components: { CardHeader,ListGroup}
}
</script>

<style scoped>
.card {
	border: none;
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

.card img{
    max-width: 100%;
}

.single-post{
    max-width: 550px;
}

.card-header{
    background-color: transparent;
    padding: 0.5rem 1rem;
    padding-bottom: 0;
    border-bottom: none;
}

@media (min-width: 576px) {
    .card-header .col-8{
        margin-left: 1em;
    }
}
</style>