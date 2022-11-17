<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="Cod3r - Base de Conhecimento" 
			:hideToggle="!user"
			:hideUserDropdown="!users"
		/>
		<Menu v-if="user"/>
		<Content/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "@/components/templatee/Header"
import Menu from "@/components/templatee/Menu"
import Content from "@/components/templatee/Content"
import Footer from "@/components/templatee/Footer"

export default {
	name: "App",
	components: { Header, Menu, Content, Footer },
	computed: mapState(['isMenuVisible', 'user'])
}
</script>

<style>
* {
	font-family: "Lato", sans-serif;
}

body {
	margin: 0;
}

#app {
	--webkit-font-smoothing: antialiased;
	--moz-osx-font-smoothin: grayscale;

	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas: "header header" "menu content" "menu footer"
}

#app.hide-menu {
	grid-template-areas: "header header" "content content" "footer footer" ;
}
</style>