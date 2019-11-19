<template>
    <div>
        <h1>Not Found</h1>
        <p>We couldnt find that page. Back to </p>
        <router-link :to="{name: 'home'}">home</router-link>
    </div>
</template>