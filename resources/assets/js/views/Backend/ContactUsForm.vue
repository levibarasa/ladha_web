<template>
    <form @submit.prevent="sendMessage()">
        <br/>
        <h5 class="text-center p-4"> Contact Us</h5>
        <!-- Name --> 
        <div class="form-group">
            <label for="name">What is your Name</label>

            <input type="text" class="form-control rounded-0"
                   v-model="contact.name"
                   required
                   id="name"  placeholder="Enter your Name">
              </div>

        <!-- Email --><br/>
        <div class="form-group">
            <label for="email">Your email address</label>

            <input type="text" class="form-control rounded-0"
                   v-model="contact.email"
                   required 
                   id="email"   placeholder="Enter email address"> 
        </div>
        <!-- Subject --><br/>
        <div class="form-group">
            <label for="subject">Subject</label>

            <input type="text"  class="form-control rounded-0"
                   v-model="contact.subject"
                   required 
                   id="subject"   placeholder="Subject"> 
        </div>
        <!-- Message --> <br/>
        <div class="form-group">
            <label for="message">Message:</label>

            <textarea class="form-control rounded-0"
                   v-model="contact.message"
                   required placeholder="Message"></textarea>
        </div>
        <br/>
        <button type="submit" 
                class="btn btn-primary rounded-0">Send Message</button>
          <br/><br/><br/>
    </form>
</template>

<script> 
    import axios from 'axios' 
    export default {
        name: "ContactUsForm",
        components: {
            
        },
        data () {
            return {
                contact: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                errors: []
            }
        },

        mounted () { 
        },
        computed: { 
        },
        methods: {
             
            sendMessage () {
            },
        }
    }
</script>

<style scoped>

</style>