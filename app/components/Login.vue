<template>
    <Page>
        <ActionBar title="Login" />
        <StackLayout orientation="vertical" height="500">
            <TextField v-model="username" hint="Username" />
            <TextField v-model="password" hint="Password" />
            <Button text="Login" @tap="onTapLogin"
                class="btn btn-primary btn-rounded-lg" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            async onTapLogin() {
                console.log(this.username + this.password);
                var response = await fetch(global.rootURL +
                    "/user/login", {
                        method: "POST",
                        credentials: "same-origin",

                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        body: "username=" +
                            encodeURIComponent(this.username) +
                            "&password=" +
                            encodeURIComponent(this.password)
                    });
                console.log(1);
                console.log(response.statusText);
                if (response.ok) {
                    global.username = this.username;
                    console.log(global.username);
                    this.$navigateBack();
                } else if (response.status == 401) { //Wrong password
                    var data = await response.text();
                    await confirm(data);
                } else {
                    await confirm(response.statusText);
                }
            }
        },
        props: ["$delegate"],


        data() {
            return {
                // username:"",
                // password: ""
            };
        }
    };
</script>

<style>
</style>