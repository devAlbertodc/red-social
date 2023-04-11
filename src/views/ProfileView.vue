<template>
    <div class="container">
        <!--Imagen de encabezado-->
        <div class="row">
            <img class="imgEncabezado" src="https://pbs.twimg.com/profile_banners/213969309/1665017374/600x200" alt="Encabezado">
        </div>

        <!--Seccion para seguir perfil, leer bio...-->
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col col-9">
                        <img class="imgPerfil" src="https://i.pinimg.com/originals/83/ad/45/83ad455fd53bf620e19679a4601098bf.jpg" alt="FotoPerfil">
                    </div>
                    
                    <div class="col col-1">
                        <button class="btn btn-dark d-flex more-btn">
                            <span class="material-icons-round">
                                more_horiz  
                            </span>
                        </button>
                    </div>
                    
                    <div class="col col-1">
                        <button class="btn btn-dark mt-2 follow-btn">
                            Seguir
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <b>Lewis Hamilton</b>  
                        <br>
                        @LewisHamilton
                    </div>
                </div>
            </div>
        </div>

        <!--Seccion para la bio-->
        <div class="row mt-2">
            <div class="col">
                Based Diet. Love Animals. Living in my purpose, for adventure, open-mindedness and positivity
                <br>
                <a class="translate-bio">Traducir la biografia</a>
            </div>
        </div>

        <!--Seccion para ubicacion, web y se unio en...-->
    </div>
</template>

<script src="../../node_modules/light-switch-bootstrap/switch.js"></script>
<!--<script>
    export default{
        name: 'profile',
        props: ['photoHeader'],
    }
</script>-->

<style>
    .container{
        max-width: 800px;
    }

    .imgPerfil{
        width: 75px;
        height: 75px;
        border-radius: 50%;
    }

    .follow-btn{
        width: 80px;
        border-radius: 40%;
        margin: 0.3em;
    }

    .translate-bio{
        color: blue; 
        text-decoration-line: underline;
    }
</style>