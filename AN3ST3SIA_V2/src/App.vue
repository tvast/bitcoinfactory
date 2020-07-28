<template>
  <div>
    <template>
      <div>
        <div v-if="!$route.meta.plainLayout">
          <div id="app">
            <router-view />
          </div>
        </div>

        <div v-if="$route.meta.plainLayout">
          <router-view />
        </div>
      </div>
    </template>
  </div>
</template>
