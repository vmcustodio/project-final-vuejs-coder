<template>
  <div class="articles-by-category">
    <PageTitle icon="fa fa-folder-o" :main="category.name" sub="Categoria"></PageTitle>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.name }}
      </li>
    </ul>
    <div class="load-more">
      <button v-if="loadMore" class="btn btn-lg btn-outline-primary" @click="getArticles">
        Carregar Mais Artigos
      </button>
    </div>
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
    },
    getArticles() {
      const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
      axios(url).then(res => {
        this.articles = this.articles.concat(res.data) // para nao deixar de exibir os artigos, e sim concatenar com os ja exibidos e mostarr mais
        this.page++ // sempre acrescenta a pg pra na proxima requisicao ele pegar a proxima pagina

        if(res.data.length === 0) this.loadMore = false // para nao carregar dados que nao existe
      })
    }
  },
  mounted() {
    this.category.id = this.$route.params.id // para setar o obj completo com id
    this.getCategory() 
    this.getArticles()
  }
}
</script>

<style>
  .articles-by-category ul {
    list-style-type: none;
    padding: 0px;
  }
  .articles-by-category .load-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
</style>