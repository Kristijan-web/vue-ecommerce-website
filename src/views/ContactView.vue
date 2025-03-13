<template>
  <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <header class="mb-6 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p class="mt-2 text-gray-600">We'd love to hear from you! Please fill out the form below, and we'll get in touch as soon as possible.</p>
      </header>

      <InfoSection
        title="Our Office"
        textAbove="Feel free to visit us or contact us through the details below."
        imageSrc="shop.jpg" 
        imageAlt="Our Office"
        textBelow="1234 Elm Street, Suite 567, Citytown, ST 12345 |
        Phone: (123) 456-7890 |
        Email: contact@electricemporium.com"
      />

      <form @submit.prevent="submitForm" class="space-y-6">

        <div class="mb-4">
          <CustomInput
            v-model="formData.username"
            label="Username"
            id="username"
            placeholder="Jon Jones"
            :class="{'border-red-500': errors.username}"
          />
          <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
        </div>
        <div class="mb-4">
          <CustomInput
            v-model="formData.subject"
            label="Subject"
            type="text"
            id="subject"
            placeholder="Subject..."
            :class="{'border-red-500': errors.subject}"
          />
          <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your message"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            :class="{'border-red-500': errors.message}"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>
        <div class="flex items-center justify-center">
          <custom-button :text="'Submit'"></custom-button>
        </div>
        <p v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</p>
      </form>

      <div class="mt-10 text-center">
        <h2 class="text-2xl font-semibold text-gray-700">Frequently Asked Questions</h2>
        <p class="mt-2 text-gray-600">Here are some of the common questions we receive.</p>
        <div class="mt-4 space-y-4">
          <FaqItem
            question="What are your office hours?"
            answer="Our office is open Monday through Friday from 9 AM to 5 PM."
          />
          <FaqItem
            question="How can I get support?"
            answer="You can reach our support team via email at support@electricemporium.com or call us at (123) 456-7890."
          />
          <FaqItem
            question="Where are you located?"
            answer="We are located at 1234 Elm Street, Suite 567, Citytown, ST 12345."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from './customInput.vue';
import FaqItem from '@/components/ui/FaqItem.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import InfoSection from '@/components/ui/InfoSection.vue';
export default {
  components: {
    CustomInput,
    FaqItem,
    CustomButton,
    InfoSection
  },
  data() {
    return {
      formData: {
        username: '',
        subject: '',
        message: ''
      },
      errors: {},
      successMessage: ''
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      this.successMessage = '';

      const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
      const subjectPattern = /^.{1,50}$/;
      const messagePattern = /^.{1,500}$/;

      if (!this.formData.username || !usernamePattern.test(this.formData.username)) {
        this.errors.username = 'Username is required and must be 3-15 alphanumeric characters';
      }
      if (!this.formData.subject || !subjectPattern.test(this.formData.subject)) {
        this.errors.subject = 'Subject is required and must be 1-50 characters';
      }
      if (!this.formData.message || !messagePattern.test(this.formData.message)) {
        this.errors.message = 'Message is required and must be 1-500 characters';
      }

      if (Object.keys(this.errors).length === 0) {
        this.successMessage = 'Message sent successfully!';
        this.formData = {
          username: '',
          subject: '',
          message: ''
        };
      }
    }
  }
};
</script>

<style scoped>

</style>
