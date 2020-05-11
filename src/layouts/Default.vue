<template>
  <div class="layout">
    <b-container>
      <b-navbar class="cc-navbar" variant="faded" type="light">
        <g-link to="/">
          <b-navbar-brand tag="h1" class="mb-0">Colors and Code</b-navbar-brand>
        </g-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/archives">Archives</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-row class="justify-content-lg-center">
        <b-col lg="8">
          <slot />
        </b-col>
        <b-col lg="4">
          <mcEmailForm></mcEmailForm>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import mcEmailForm from "~/components/mc-email-form";
export default {
  components: {
    mcEmailForm
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
  html {
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h5 {
  color: gray;
}

.cc-navbar {
  padding: 0 !important;
  border-bottom: 2px solid black;
  margin-bottom: 2em;
  margin-top: 2em;
}
</style>
