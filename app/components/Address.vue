<template>
    <Page>
        <ActionBar title="Address" />
        <WebView :src="Address" />
    </Page>
</template>
<script>
    export default {
        props: ["Address", "$delegate"],

        // methods: {
        //         console.log(selectedProperty);
        // },

        data() {
            return {
                estates: []
            };
        }
    };
</script>

<style>
</style>