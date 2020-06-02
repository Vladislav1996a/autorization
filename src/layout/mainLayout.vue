<template>
	<div>
		<block-header></block-header>
        <router-view></router-view>
	</div>
</template>

<script>
    import blockHeader from '@/components/header.vue'
    export default {
        name: "main-layout",
        components:{
            'block-header': blockHeader
        }
    }
</script>
