<template>
    <Page @navigatedTo="onNavigatedTo">
        <ActionBar title="Home" />

        <StackLayout>
            <BottomNavigation >
                <TabStrip>
                    <TabStripItem>
                        <Label text="Tab 1"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Tab 2"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Tab 3"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Tab 4"></Label>
                    </TabStripItem>
                </TabStrip>

                <TabContentItem>
                    <ListView for="estate in highlighted" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout orientation="vertical" height="400">
                                <Image :src="estate.ImageURL" stretch="aspectFill" style="object-fit:fill" />
                                <Label :text="estate.Propertytitle" class="h2" />
                                <Label :text="estate.Estate" class="h4" />
                                <Label :text="'Rent: $' + estate.Rent" class="h4" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>

                <TabContentItem>
                    <ListView for="location in locations" @itemTap="onShowProperty">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Label :text="location.Name" class="t-15" style="width: 60%" height="50" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>

                <TabContentItem>
                    <ListView for="numOfBedroom in numOfBedrooms" @itemTap="onShowBedroom">
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Label :text="numOfBedroom.num" class="t-15" style="width: 60%" height="50" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>

                <TabContentItem>
                    <StackLayout orientation="vertical" margin="10">
                        <Image src="https://png.pngtree.com/svg/20160321/touxiang_71421.png" width="200" />
                        <Label :text="username" class="t-15 center" />
                        <Button text="Login/Logout" @tap="onLogin" />
                        <Button text="Myrentals" @tap="onMyrentals" />
                    </StackLayout>
                </TabContentItem>

            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import PropertyDetails from "./PropertyDetails";
    import ShowProperty from "./ShowProperty";
    import ShowBedroom from "./ShowBedroom";
    import Login from "./Login";
    import Myrentals from "./Myrentals";
    export default {
        methods: {
            onNavigatedTo: function() {
                this.username = global.username;
            },
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log(88);
                console.log("Property selected: " + args.item.propertytitle);
                console.log(88);
                
                this.$navigateTo(PropertyDetails, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedProperty: args.item,
                        $delegate: this
                    }
                });
            },

            onShowProperty: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Estate selected:" + args.item.estate);

                if (args.index == 0) {
                    this.send = this.estates.filter(function(e) {
                        //send means to send the array to the further page.
                        return e.Estate == "Gold Coast";
                    });
                } else if (args.index == 1) {
                    this.send = this.estates.filter(function(e) {
                        return e.Estate == "City One";
                    });
                } else if (args.index == 2) {
                    this.send = this.estates.filter(function(e) {
                        return e.Estate == "Festival City";
                    });
                } else if (args.index == 3) {
                    this.send = this.estates.filter(function(e) {
                        return e.Estate == "Taikoo Shing";
                    });
                } else if (args.index == 4) {
                    this.send = this.estates.filter(function(e) {
                        return e.Estate == "Yau Ma Tei";
                    });
                } else if (args.index == 5) {
                    this.send = this.estates.filter(function(e) {
                        return e.Estate == "Calson Court";
                    });
                }

                this.$navigateTo(ShowProperty, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        send: this.send,
                        //the props here must match the props of next page "ShowProperty".
                        $delegate: this
                    }
                });
            },

            onShowBedroom: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Bedroom selected:" + args.item
                .propertytitle);

                if (args.index == 0) {
                    //第一行
                    this.bedroomsList = this.estates.filter(function(e) {
                        //send means to send the array to the further page.
                        return e.Bedrooms <= 2;
                    });
                } else {
                    this.bedroomsList = this.estates.filter(function(e) {
                        return e.Bedrooms >= 3;
                    });
                }

                this.$navigateTo(ShowBedroom, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        bedroomsList: this.bedroomsList,
                        //the props here must match the props of next page "ShowBedroom".
                        $delegate: this
                    }
                });
            },

            onLogin: async function(args) {
                console.log(111);
                console.log(global
                .username); //the value here is not empty now. It is undefined.
                if (global.username == "") {
                    // judge whether the 'global.username' is empty.
                    this.$navigateTo(Login, {
                        transition: {},
                        transitionIOS: {},
                        transitionAndroid: {},
                        props: {
                            $delegate: this
                        }
                    });
                } else {
                    var data = await confirm("confirm log out?");
                    if (data) {
                        global.username = ""; // to assign an empty value to 'global.username' .
                        this.username = "";
                    } else {
                        alert("cancelled");
                    }
                    // confirm("wanna log out?");
                    // alert("wanna log out?");  // still has some problem here. completed!
                }
            },

            onMyrentals: async function(args) {
                if (global.username) {
                    var response = await fetch(global.rootURL + "/user/manages", {
                            method: "GET",
                            credentials: "same-origin"
                        });
                    if (response.ok) {
                        this.myrentalsList = await response.json();
                        console.log(3);
                        console.log(JSON.stringify(this.myrentalsList));
                    } else {
                        console.log(response.statusText);
                    }

                    this.$navigateTo(Myrentals, {
                        transition: {},
                        transitionIOS: {},
                        transitionAndroid: {},
                        props: {
                            myrentalsList: this.myrentalsList
                                .manages,
                            $delegate: this
                        }
                    });
                    console.log(22);
                    console.log(this.myrentalsList.manages);
                } else {
                    await confirm("login first.");
                }
            }
        },

        async mounted() {
            var response = await fetch(global.rootURL + "/Estate/json", {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.estates = await response.json();
                console.log(JSON.stringify(this.estates));
            } else {
                console.log(response.statusText);
            }
            this.highlighted = this.estates.filter(function(e) {
                return e.Highlighted == "on";
            });
        },

        data() {
            return {
                highlighted: [],

                username: global.username,

                myrentalsList: [],

                estates: [],

                locations: [{
                        Area: "So Kwun Wat",
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
                        ChineseName: "启城轩",
                        Completed: "1990-1993",
                        Developer: "Sino Group",
                        District: "Kooloon City",
                        Latitude: "22.3298657855",
                        Longitude: "114.1926068369",
                        Name: "Calson court",
                        NoBlocks: 1,
                        NoUnits: "22 "
                    }
                ],

                numOfBedrooms: [{
                        num: "bedrooms<=2"
                    },
                    {
                        num: "bedrooms>=3"
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .center {
        text-align: center;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>