<script setup>
import { computed } from "vue";

const props = defineProps({
     total: String,
})

const total_price = computed(() => {
     return (props.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',  });
})
</script>
<template>
     <div class="totalparcial">
          <div style="font-size: 10px; text-align: left;"><b>Total parcial:</b></div>
          <div style="font-size: 17px;">{{total_price}}</div>
     </div>
</template>