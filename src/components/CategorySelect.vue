<template>
    <RouterLink to="library">
        <div
            v-if="randColor.color"
            :style="`background-color: ${randColor.color};`"
            class="
                relative
                aspect-square
                overflow-hidden
                contrast-[2]
                brightness-[0.87]
            "
        >
            <div class="text-white pt-3 pl-4 font-semibold text-[23px]">{{ category }}</div>
            <img
                class="
                    absolute
                    max-w-[100px]
                    bottom-0
                    -right-3.5
                    rotate-[20deg]
                "
                :src="image || ''"
            >
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';

export interface Props {
    category: string,
    image: string,
}

const props = defineProps<Props>()
const { category } = toRefs(props)

const randColor = ref()
randColor.value = uniqolor.random()
</script>

