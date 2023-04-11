<template>
    <div class="posts">
        <img src="../assets/img/facebook_title.svg"
        alt="mazebook" class="logo">
        
        <CardComp class="mt-2 mx-auto single-post" 
        :header="{name: 'Lewis Hamilton', picture: 'https://i.pinimg.com/originals/83/ad/45/83ad455fd53bf620e19679a4601098bf.jpg'}" 
        parrafo="Mercedes W14 2023 season" picture="https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Launches2023/MercedesLaunch/Merc-4.png.transform/9col/image.png"
        :likes="true"/>
        
        <CardComp class="mt-2 mx-auto single-post" 
        :header="{name: 'Colton Herta', picture: 'https://cdn-4.motorsport.com/images/mgl/01WAgBvY/s800/81-dragonspeed-usa-oreca-lmp2--1.jpg'}" 
        parrafo="IMSA BMW" picture="http://www.imsa.com/wp-content/uploads/sites/32/2023/01/03/levitt-IMSA-1222-12449_2023-01-04.jpg"
        :likes="true"/>
        
        <CardComp class="mt-2 mx-auto single-post" 
        :header="{name: 'Sebastian vettel', picture: 'https://img.remediosdigitales.com/654d2f/red-20bull-20rb8-20--20abbey-20--20sebastian-20vettel/1366_2000.jpg'}" 
        parrafo="Sebastian Vettel testing in full wet tires" picture="https://images.pexels.com/photos/13857977/pexels-photo-13857977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :likes="true"/>

        <CardComp class="mt-2 mx-auto single-post" 
        :header="{name: 'AbuDhabi', picture: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}" 
        parrafo="Abu dhabi sunset" picture="https://images.pexels.com/photos/6697875/pexels-photo-6697875.jpeg?auto=compress&cs=tinysrgb&w=600"
        :likes="true"/>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
export default {
    name: 'PostsView',
    components: {
        CardComp
    },
}
</script> 

<style scoped>
h2 {
    max-width: 470px;
    margin: auto;
    font-size: 1.8rem;
}
.home {
    max-width: 895px;
    margin: auto;
}

.img-cont {
    /*display: flex;*/
    flex-direction: none;
}

.img {
    max-width: 315px;
    margin: 1m auto 0 auto;
}

.card-comp {
    max-width: 398px;
}

.btn-success {
    margin: auto;
}

.posts {
    min-height: 60vh;
    max-width: 895px;
    margin: auto;
}

.logo {
    max-width: 115px;
    padding: 0.2rem;
}
</style>