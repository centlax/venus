<template>
  <section class="py-14 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="relative max-w-xl mx-auto text-center">
        <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Pricing for all sizes
        </h3>
        <div class="mt-3 max-w-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
          </p>
        </div>
      </div>
      <div class="mt-16 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="relative flex flex-col items-stretch rounded-2xl border-2 mt-6 hover:bg-brand-200/50 hover:border-brand-200"
          :class="{ 'mt-10': plan.isMostPop }"
        >
          <span
            v-if="plan.isMostPop"
            class="absolute top-0 left-0 right-0 mx-auto w-32 -mt-5 px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold"
          >
            Most popular
          </span>
          <div class="p-8 space-y-4 border-b ">
            <span class="text-brand-600 text-xl font-medium">
              {{ plan.name }}
            </span>
            <div class="text-gray-800 text-4xl font-bold">
              ${{ plan.price }} <span class="text-xl text-gray-600 font-normal">/month</span>
            </div>
            <p>
              {{ plan.desc }}
            </p>
            <button
              class="px-3.5 py-2.5 w-full rounded-md font-semibold text-sm text-white bg-brand-600 hover:bg-brand-500 active:bg-brand-700 duration-150"
            >
              Get Started
            </button>
          </div>
          <ul class="p-8 space-y-3">
            <li class="pb-2 text-gray-800 font-medium">
              Features
            </li>
            <li
              v-for="(feature, featureIndex) in plan.features"
              :key="featureIndex"
              class="flex items-center gap-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-brand-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const plans = [
  {
    name: 'Basic',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12,
    isMostPop: false,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor'
    ]
  },
  {
    name: 'Prime',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 35,
    isMostPop: true,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor'
    ]
  },
  {
    name: 'Utra',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 60,
    isMostPop: false,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor'
    ]
  }
]
</script>
