<template>
    <Page>
        <ActionBar title="Estate details" />
        <ScrollView orientation="vertical">
            <StackLayout orientation="vertical" margin="10">
                <Image :src="selectedProperty.ImageURL" height="200"
                    stretch="aspectFill" />
                <Label :text="selectedProperty.Propertytile" margin="10"
                    class="h3" />
                <Label :text="'Estate: ' + selectedProperty.Estate"
                    class="h4" />
                <Label :text="'Bedrooms: ' + selectedProperty.Bedrooms"
                    class="h4" />
                <Label :text="'Rent: $' + selectedProperty.Rent" class="h4" />
                <Label :text="'Tenants: ' + selectedProperty.ExpectedTenants"
                    class="h4" />
                <Label :text="'Area: ' + selectedProperty.GrossArea"
                    class="h4" />
                <Button :text="buttonText" @tap="onButtonTap"
                    class="btn btn-primary btn-rounded-lg" />
                <!-- <Button text="Move-out" @tap="onMoveout"
                    class="btn btn-primary btn-rounded-lg" /> -->
                <Button text="Address" @tap="onAddress"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Address from "./Address";
    export default {
        methods: {
            // onNavigatedTo: function() {
            //     this.username = global.username;
            // },
            onAddress: function(args) {
                if (this.selectedProperty.Estate == "Gold Coast") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "Gold Coast";
                    });
                } else if (this.selectedProperty.Estate == "City One") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "City One";
                    });
                } else if (this.selectedProperty.Estate =="Festival City") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "Festival City";
                    });
                } else if (this.selectedProperty.Estate =="Taikoo Shing") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "Taikoo Shing";
                    });
                } else if (this.selectedProperty.Estate == "Yau Ma Tei") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "Yau Ma Tei";
                    });
                } else if (this.selectedProperty.Estate =="Calson Court") {
                    this.sendlocations = this.locations.filter(function(l) {
                        return l.Name == "Calson Court";
                    });
                }

                this.$navigateTo(Address, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        Address: this.sendlocations[0].Address,
                        $delegate: this
                    }
                });
            },

            async onButtonTap() {
                console.log("id:" + this.selectedProperty.id);
                // var response = await fetch(
                //     global.rootURL +
                //     "/Estate/" +
                //     this.selectedProperty.id +
                //     "/shows", {
                //         method: "GET",
                //         credentials: "same-origin"
                //     }
                // );
                // if (response.ok) {
                //     this.shows = await response.json();
                //     console.log(JSON.stringify(this.shows));
                //     console.log(1111);
                //     console.log("length:" + this.shows.length);
                // } else {
                //     console.log(response.statusText);
                // }

                // var res = await fetch(global.rootURL + "/user/manages", {
                //     method: "GET",
                //     credentials: "same-origin"
                // });
                // if (res.ok) {
                //     this.myrentalsList = await res.json();
                //     console.log(911);
                // } else {
                //     console.log(res.statusText);
                // }

                // this.send = this.myrentalsList.manages.filter(
                //     function(e) {
                //         return e.id == this.selectedProperty.id;
                //     }.bind(this)
                // );
                // console.log(1997);

                if (this.buttonText == "full") {
                    console.log("full");
                } else if (this.buttonText == "Move-out") {
                    this.onMoveout();
                    // this.buttonText = "Move-in";
                } else if (this.buttonText == "Move-in") {
                    this.onMovein();
                    // this.buttonText = "Move-out";
                }

                // if (this.shows.length >= this.selectedProperty
                //     .ExpectedTenants) {
                //     //判断full
                //     this.buttonText = "full";
                // } else if (global.username != "") {
                //     //判断是否登录
                //     if (this.send.length > 0) {
                //         this.buttonText = "Move-out";
                //         this.onMoveout();
                //         this.buttonText = "Move-in";
                //     } else {
                //         this.buttonText = "Move-in";
                //         this.onMovein();
                //         this.buttonText = "Move-out";
                //     }
                // } else {
                //     await confirm("login first.");
                // }
            },

            async onMovein() {
                var r = await confirm("Confirm move-in?");
                if (this.showsList.shows.length < this.selectedProperty.ExpectedTenants) {
                    if (r) {
                        var response = await fetch(global.rootURL + "/Estate/corent/" + this.selectedProperty.id, {
                                method: "POST",
                                credentials: "same-origin"
                            }
                        );
                        if (response.ok) {
                            var data = await response.json();
                            var result = await confirm({
                                title: "Confirm",
                                message: data.message,
                                okButtonText: "Yes",
                                cancelButtonText: "Cancel"
                            });
                            if (result) {
                                this.buttonText = "Move-out";
                            }
                        }
                    } else if (response.status == 409) {
                        var data = await response.text();
                        await confirm(data);
                    } else {
                        console.log(111111);
                        alert(response.status + ": " + response.statusText);
                    }
                } else {
                    alert("Already full.");
                }
            },

            async onMoveout() {
                var r = await confirm("Confirm move-out?");
                if (r) {
                    var response = await fetch(global.rootURL + "/Estate/cancel/" + this.selectedProperty.id, {
                            method: "POST",
                            credentials: "same-origin"
                        }
                    );
                    if (response.ok) {
                        var data = await response.json();
                        var result = await confirm({
                            title: "Confirm",
                            message: data.message,
                            okButtonText: "Yes",
                            cancelButtonText: "Cancel"
                        });
                        if (result) {
                            this.buttonText = "Move-in";
                        }
                    } else if (response.status == 409) {
                        var data = await response.text();
                        await confirm(data);
                    } else {
                        alert(response.status + ": " + response.statusText);
                    }
                } else {
                    alert("cancelled");
                }
            }
        },

        props: ["selectedProperty", "$delegate"],

        async mounted() {
            if (global.username == "") {
                this.buttonText = "Login first!";
            } else {
                var response = await fetch(global.rootURL + "/Estate/json", {
                        method: "GET",
                        credentials: "same-origin"
                    });
                if (response.ok) {
                    this.estates = await response.json();
                    // console.log(JSON.stringify(this.estates));
                } else {
                    console.log(response.statusText);
                }

                var responseShows = await fetch(global.rootURL + "/Estate/" + this.selectedProperty.id + "/shows", {
                        method: "GET",
                        credentials: "same-origin"
                    }
                );
                if (responseShows.ok) {
                    this.showsList = (await responseShows.json())[0];
                    // console.log(JSON.stringify(this.showsList));
                } else {
                    console.log(response.statusText);
                }
                // this.sendShows = this.showsList.shows.filter(function(e) {
                //         return e.length >= this.selectedProperty.ExpectedTenants;
                //     }.bind(this)
                // );
                console.log(1996);

                var res = await fetch(global.rootURL + "/user/manages", {
                    method: "GET",
                    credentials: "same-origin"
                });
                if (res.ok) {
                    this.myrentalsList = await res.json();
                    console.log(911);
                } else {
                    console.log(res.statusText);
                }

                this.send = this.myrentalsList.manages.filter(function(e) {
                        return e.id == this.selectedProperty.id;
                    }.bind(this)
                );
                console.log(1997);

                if (global.username == "") {
                    this.buttonText = "Login first.";
                } else {
                    if (this.send.length > 0) {
                        this.buttonText = "Move-out";
                    } else {
                        this.buttonText = "Move-in";
                    }
                }
                // if (this.showsList.shows.length >= this.selectedProperty.ExpectedTenants) {
                //     //判断full
                //     this.buttonText = "full";
                // } else if (this.showsList.shows.length < this.selectedProperty.ExpectedTenants && global.username != "") {
                //     //判断是否登录
                //     if (this.send.length > 0) {
                //         this.buttonText = "Move-out";
                //     } else {
                //         this.buttonText = "Move-in";
                //     }
                // }
                // else {
                //     await confirm("login first.");
                // }

                // this.onButtonTap();
                // console.log(77);
            }
        },

        data() {
            return {
                buttonText: "",

                shows: [],

                estates: [],

                sendlocations: [],

                locations: [{
                        Area: "So Kwun Wat",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3673&lng=113.9944&zoom=17&markerLat=22.3673&markerLng=113.9944&markerTitle=Gold%20Coast&locate=true",
                        ChineseName: "香港黃金海岸",
                        Completed: "1990-1993",
                        Developer: "Sino Group",
                        District: "New Territories North-west",
                        Latitude: "22.3673",
                        Longitude: "113.9944",
                        Name: "Gold Coast",
                        NoBlocks: 20,
                        NoUnits: "2,052"
                    },
                    {
                        Area: "Sha Tin",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.386389&lng=114.203889&zoom=17&markerLat=22.386389&markerLng=114.203889&markerTitle=City%20One&locate=true",
                        ChineseName: "沙田第一城",
                        Completed: "1981-1988",
                        Developer: "New World Development\nHenderson Land Development nSun Hung Kai Properties nCheung Kong Holdings ",
                        District: "New Territories East ",
                        Latitude: "22.386389",
                        Longitude: "114.203889",
                        Name: "City One",
                        NoBlocks: 52,
                        NoUnits: "10,642"
                    },
                    {
                        Area: "Tai Wai",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3692&lng=114.1743&zoom=17&markerLat=22.3692&markerLng=114.1743&markerTitle=Festival%20City&locate=true",
                        ChineseName: "名城",
                        Completed: "2010–2012",
                        Developer: "Cheung Kong Holdings\nMTR Corporation",
                        District: "New Territories East",
                        Latitude: "22.3692",
                        Longitude: "114.1743",
                        Name: "Festival City",
                        NoBlocks: 12,
                        NoUnits: "4,304"
                    },
                    {
                        Area: "Quarry Bay",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2863&lng=114.2176&zoom=17&markerLat=22.2863&markerLng=114.2176&markerTitle=Taikoo%20Shing&locate=true",
                        ChineseName: "太古城",
                        Completed: "1970s",
                        Developer: "Swire",
                        District: "Hong Kong Island",
                        Latitude: "22.2863",
                        Longitude: "114.2176",
                        Name: "Taikoo Shing",
                        NoBlocks: 61,
                        NoUnits: "12,698"
                    },
                    {
                        Area: "Yau Ma Tei",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3102705106&lng=114.1705424753&zoom=17&markerLat=22.3102705106&markerLng=114.1705424753&markerTitle=Yau%20Ma%20Tei&locate=true",
                        ChineseName: "油麻地",
                        Completed: "1990-1993",
                        Developer: "Sino Group",
                        District: "Kooloon",
                        Latitude: "22.3102705106",
                        Longitude: "114.1705424753",
                        Name: "Yau Ma Tei",
                        NoBlocks: 40,
                        NoUnits: "2,072 "
                    },
                    {
                        Area: "Kooloon City",
                        Address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3298&lng=114.1926&zoom=17&markerLat=22.3298657855&markerLng=114.1926068369&markerTitle=Calson%20Court&locate=true",
                        ChineseName: "启城轩",
                        Completed: "1990-1993",
                        Developer: "Sino Group",
                        District: "Kooloon City",
                        Latitude: "22.3298657855",
                        Longitude: "114.1926068369",
                        Name: "Calson Court",
                        NoBlocks: 1,
                        NoUnits: "22"
                    }
                ]
            };
        }
    };
</script>

<style>
</style>