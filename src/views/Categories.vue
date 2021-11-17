<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div class="row" v-else>
        <CategoryCreate @created="addNewCategory"/>
        <CategoryEdit v-if="categories.length" :key="categories.length + updateCount" :categories="categories" @updated="updateCategory"/>
        <p v-else class="center">Vous n'avez pas de categories pour le moment</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate'
import CategoryEdit from '@/components/CategoryEdit'
import Loader from '@/components/app/Loader.vue'

export default {

  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    console.log(this.categories);
    this.loading = false
  },
  components: {
      CategoryCreate,
      CategoryEdit,
      Loader
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
      console.log(this.categories)
    },
    updateCategory(category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>
