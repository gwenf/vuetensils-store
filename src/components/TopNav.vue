<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <ul class="dropdown menu" data-dropdown-menu>
        <li class="menu-text">Awesome Shop</li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/past-purchases">Past Purchases</router-link></li>
      </ul>
    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li><button type="button" class="button">Menu</button></li>
      </ul>
    </div>
  </div>
</template>
