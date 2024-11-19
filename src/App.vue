<template>
  <div class="app">
    <SideBar/>
    <router-view/>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';


SideBar
</script>

<style lang="scss">
:root{
    --primary : #454374;
    --grey : #64748b;
    --dark : #1e293b;
    --dark-alt : #0c8795;
    --light : #f1f5f9;
    --sidebar--width : 300px;
}

* {
    margin : 0;
    padding : 0;
    box-sizing : boarder-box;
    font-family : 'Fira sans', sans-serif;
}

body {
    background-color : var(--light);
}

button {
    cursor: pointer;
    appearance: none;
    border : none;
    outline : none;
    background : none
}

.app{
    display: flex;

    main {
        flex : 1 1 0;
        padding: 2rem;

        @media (max-width: 768px) {
          padding-left: 6rem;
        }

      
    }
}
</style>
