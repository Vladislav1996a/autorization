<template>
	<div class="block">
        <router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "empty-layout",
    }
</script>

<style  scoped>
   .block{
        height: 100vh;
        background: rgb(187, 187, 190);
    }
</style>
