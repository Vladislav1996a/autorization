<template>
	<div>
        <div v-for="(item, i) in list" :key="i" @click="VueDetailsClicked(item)">
			{{item.title}}
		</div>
    </div>
</template>

<script>
export default {
    props:['list'],
    methods:{
        VueDetailsClicked(item){
            this.$emit('VueDetails', item.id)
        }
    }
}
</script>