<template>
  <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <header class="mb-6 text-center">
        <h1 class="text-3xl font-bold text-gray-800">About Electric Emporium</h1>
        <p class="mt-2 text-gray-600">Your one-stop shop for the best in electronics and gadgets.</p>
      </header>

      <InfoSection
      title="Our Story"
      textAbove="Founded in 2023, Electric Emporium was born from a passion for cutting-edge technology and a commitment to delivering the best products to our customers."
      imageSrc="us.jpg"
      imageAlt="Our Team"
      textBelow="Innovation is in our DNA, and customer satisfaction is at the heart of everything we do."
    />

      <section class="mb-8 text-center">
        <h2 class="text-2xl font-semibold text-gray-700">Our Values</h2>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard 
            userName="Quality Products" 
            review="We meticulously curate our selection to ensure every item meets the highest standards of quality and innovation."
          />
          <ReviewCard 
            userName="Exceptional Service" 
            review="Customer service is a cornerstone of our business. We strive to provide prompt and personalized assistance."
          />
          <ReviewCard 
            userName="Sustainability" 
            review="We believe in doing business responsibly and are committed to reducing our environmental footprint through sustainable practices."
          />
        </div>
      </section>

      <InfoSection
        title="Our Products"
        textAbove="From smartphones and tablets to smart home devices and accessories, we carry a variety of tech products that cater to your every need."
        imageSrc="background.jpg"
        imageAlt="Our Products"
        textBelow="Explore our catalog and discover the latest innovations in technology."
      />

      <InfoSection
        title="Meet the Team"
        textAbove="Our dedicated team of tech enthusiasts works tirelessly to ensure you receive the best shopping experience."
        imageSrc="team.jpg"
        imageAlt="Our Team"
        textBelow="We’re passionate about helping our customers find the perfect products for their needs."
      />
    </div>
  </div>
</template>
<script>
import ReviewCard from '@/components/ui/ReviewCard.vue';
import InfoSection from '@/components/ui/InfoSection.vue';
export default {
  components: {
    ReviewCard,
    InfoSection
  }
};
</script>

<style scoped>

</style>
