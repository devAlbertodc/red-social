<template>
    <!--La cabecera tendrá una fila con 3 columnas.
        Para mostrar imagen de perfil, nombre usuario y boton de opciones-->
        <div class="card-header">
            <div class="row">
                <div class="col-2 col-sm-1">
                    <img class="avatar-img" 
                    :src="header.picture"
                    alt="Avatar de Sebastian">
                </div>

                <div class="col-8 col-sm-9">
                    <h4 class="card-header-title m-0">
                        <router-link to="/profile">
                            {{header.name}}
                        </router-link>
                    </h4>
                    <small class="text-muted card-header-subtitle">Hace dos minutos</small>
                </div>
                
                <div class="col-1">
                    <button class="btn d-flex align-items-center more-btn">
                    <span class="material-icons-round">
                        more_horiz
                    </span>
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
export default{
    name: "CardHeader",
    props: ['header']
}
</script>

<style>
.avatar-img{
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.more-btn{
    border-radius: 50%;
    padding: 0.5em;
    margin: 0.3em;
}

.card-header-title{
    line-height: 0.7;
}

.card-header-subtitle{
    font-size: 0.8em;
}
</style>