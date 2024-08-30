<template>
    <div class="home-page">
        <h1>Benvenuti nella Travel App</h1>
        <ul>
            <li v-for="trip in trips" :key="trip.id">
                <router-link :to="'/day/' + trip.id">{{ trip.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            trips: [
                { id: 1, title: 'Viaggio a New York' },
                { id: 2, title: 'Viaggio a Parigi' },
            ],
        };
    },
};
</script>

<style scoped>
.home-page {
    padding: 20px;
}
</style>