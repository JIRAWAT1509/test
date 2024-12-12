<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import { directus } from "@/services/directus";
import { onMounted} from "vue";

async function fetchData() {
    try {
        const data = await directus.items("productlist").readByQuery({
            fields: ["id", "name", "sku", "category", "price", "qty", "statusclass", "status", "rating", "img"],
            filter: { is_active: { _eq: "false" } },
        });
        console.log(data);

    } catch (error) {
        console.error("Error fetching data from Directus:", error);
    }
}

onMounted(async () => {
    try {
        await fetchData();
    } catch (error) {
        console.error("Error loading configuration:", error);
    }
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
