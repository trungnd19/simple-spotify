<script setup lang="ts">
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';

export interface Props {
    image: string,
    title: string,
    subTitle: string
}

const props = defineProps<Props>()

const { image, title, subTitle } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="bg-[#111111] hover:bg-[#252525] rounded-md p-4 m-2 cursor-pointer">
            <img class="rounded-md" :src="image" alt="">
            <div class="text-white font-semibold pt-4 text-[17px]">{{ title }}</div>
            <div class="text-gray-400 pt-1 pb-3 text-[14px]">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>
