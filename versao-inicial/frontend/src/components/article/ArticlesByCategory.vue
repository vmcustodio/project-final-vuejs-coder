<template>
  <div class="articles-by-category">
    <PageTitle icon="fa fa-folder-o" :main="category.name" sub="Categoria"></PageTitle>
  </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../templatee/PageTitle.vue'

export default {
  name: 'ArticlesByCategory',
  components: {PageTitle},
  data() {
    return {
      category: {}, 
      articles: {}, // lista de artigos
      page: 1,
      loadMore: true // botao para carregar mais
    }
  },
  methods: {
    getCategory() {
      const url = `${baseApiUrl}/categories/${this.category.id}` // o id estara dentro do objeto category
      axios(url).then(res => this.category = res.data)
    } 
  },
  mounted() {
    this.category.id = this.$route.params.id // para setar o obj completo com id
    this.getCategory() 
  }
}
</script>

<style>

</style>