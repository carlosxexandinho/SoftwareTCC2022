<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div id="app">
    <div id="nav">
      <RouterLink to="/clientes">Gerenciador de Clientes</RouterLink> |
      <RouterLink to="/">Dados do Projeto/Construção</RouterLink> | 
      <RouterLink to="/orcamento">Orçamentos</RouterLink>
    </div>

    <div style="margin: 10px 0 20px; font-size: 13px;">
        DESENVOLVIMENTO DE SOFTWARE PARA ESTIMAR O PREÇO DE CONSTRUÇÕES TÉRREA <br>  UTILIZANDO A BASE DE DADOS SEDOP EM COMPARAÇÃO AO CUB <br />
        <b>CARLOS ALEXANDRE DIAS SILVA</b> <br />
        Orientador: Eng. Jose Renato Lima Aguiar
    </div>


    <RouterView />
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
