<template>
    <Page>
        <ActionBar title="Estate lists" />
        <ListView for="selectedEstate in send" @itemTap="onItemTap">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Label :text="selectedEstate.Propertytitle" class="t-15"
                        style="width: 60%" height="50" />
                    <Label :text="selectedEstate.Estate" class="body"
                        style="width: 60%" height="50" />
                </FlexboxLayout>
            </v-template>
        </ListView>
    </Page>

</template>

<script>
    import PropertyDetails from "./PropertyDetails";
    export default {
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Propertyselected:" + args.item
                .propertytitle);
                this.$navigateTo(PropertyDetails, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedProperty: args.item,
                        $delegate: this
                    }
                });
            }
        },
        props: ["send", "$delegate"],

        data() {
            return {};
        }
    };
</script>
<style>
</style>