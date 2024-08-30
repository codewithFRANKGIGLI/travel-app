<template>
    <div class="day-details">
        <h1>{{ dayTitle }}</h1>
        <p>{{ dayDescription }}</p>
        <p><strong>Data:</strong> {{ dayDate }}</p>

        <h2>Itinerario sulla Mappa</h2>
        <MapView :center="mapCenter" :markers="dayStops" />

        <section v-if="dayCuriosities">
            <h3>Curiosità</h3>
            <ul>
                <li v-for="(curiosity, index) in dayCuriosities" :key="index">{{ curiosity }}</li>
            </ul>
        </section>
    </div>
</template>

<script>
import MapView from '/src/components/MapView.vue'; // Importa il componente della mappa

export default {
    name: 'DayDetails',
    components: {
        MapView,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            dayTitle: 'Giornata 1: Esplorazione della Città',
            dayDescription: 'Visiteremo i principali punti di interesse del centro storico.',
            dayDate: '2024-09-01',
            dayStops: [
                { lat: 40.7128, lng: -74.0060, label: 'Statua della Libertà' },
                { lat: 40.7580, lng: -73.9855, label: 'Times Square' },
                { lat: 40.730610, lng: -73.935242, label: 'Central Park' },
            ],
            dayCuriosities: [
                'Lo sapevi? La Statua della Libertà è stata un dono della Francia agli Stati Uniti.',
                'Times Square è chiamata "l’incrocio del mondo".',
                'Central Park è il parco più visitato degli Stati Uniti.'
            ],
            mapCenter: { lat: 40.7128, lng: -74.0060 } // Centro della mappa
        };
    }
};
</script>

<style scoped>
.day-details {
    padding: 20px;
}

h1 {
    margin-bottom: 10px;
}

h2 {
    margin-top: 20px;
}

p {
    margin: 10px 0;
}
</style>