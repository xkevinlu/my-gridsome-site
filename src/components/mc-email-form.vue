<template>
  <div class="post-footer">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us8.list-manage.com/subscribe/post?u=3cbefd8a2dbedaff8d299f6fb&amp;id=6a6039bbeb"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h5>Newsletter</h5>
          <div class="mc-field-group">
            <p>If you’d like to receive posts via email, feel free to sign up for my newsletter.</p>
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              description="New post every sometimes."
            >
              <b-form-input
                id="mce-EMAIL"
                type="email"
                required
                placeholder="you@youremail.com"
                value name="EMAIL"
              ></b-form-input>
            </b-form-group>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_3cbefd8a2dbedaff8d299f6fb_6a6039bbeb" tabindex="-1" value />
          </div>
          <div class="clear"></div>
          <b-button
            variant="outline-primary"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-subscribe"
            class="mc-subscribe"
          >Subscribe</b-button>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>


<script>
</script>
<style scoped>

.post-footer {
  margin-top:2em;
  margin-bottom:3em;
}
</style>