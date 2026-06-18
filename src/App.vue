<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 flex">
    <!-- Mobile Top Bar -->
    <div
      class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-xl">🔄</div>
        <div>
          <h1 class="text-xl font-bold tracking-tight">SOP Flow</h1>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div class="px-3 py-1.5 bg-zinc-800 rounded-2xl text-xs flex items-center gap-2">
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span class="text-emerald-400">Live</span>
        </div>
        <button @click="toggleSidebar" class="w-10 h-10 flex items-center justify-center text-2xl">
          ☰
        </button>
      </div>
    </div>

    <!-- Sidebar -->
    <div :class="[
      'w-72 bg-zinc-900 border-r border-zinc-800 flex flex-col fixed top-0 bottom-0 left-0 z-50 transition-transform duration-300 lg:translate-x-0',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <!-- Logo/Header -->
      <div class="p-6 border-b border-zinc-800 lg:pt-8">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl">🔄</div>
          <div>
            <h1 class="text-2xl font-bold tracking-tight">SOP Flow</h1>
            <p class="text-xs text-zinc-500">Engineering Workflow</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex-1 overflow-y-auto py-6">
        <nav class="px-3 space-y-1">
          <button v-for="item in navigation" :key="item.id" @click="navigateTo(item.id)" :class="[
            'w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all hover:bg-zinc-800',
            currentView === item.id
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              : 'text-zinc-400 hover:text-zinc-200'
          ]">
            <span class="text-xl">{{ item.icon }}</span>
            <span class="font-medium">{{ item.label }}</span>
          </button>
        </nav>

        <!-- Quick Stats -->
        <div class="mt-10 px-6">
          <div class="bg-zinc-800/50 rounded-3xl p-5 border border-zinc-700">
            <div class="text-xs uppercase tracking-widest text-zinc-500 mb-3">Process Stages</div>
            <div class="space-y-4">
              <div v-for="(step, i) in sopData.sections" :key="i" class="flex items-center gap-3">
                <div
                  class="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs font-mono text-emerald-400">
                  {{ i + 1 }}
                </div>
                <div class="text-sm text-zinc-400 truncate">{{ step.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 border-t border-zinc-800 text-xs text-zinc-500">
        <div class="flex items-center justify-between">
          <div>Built for clarity</div>
          <div class="flex gap-2">
            <span class="px-2 py-1 bg-zinc-800 rounded-lg">v1.0</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay for mobile -->
    <div v-if="isSidebarOpen" @click="toggleSidebar" class="lg:hidden fixed inset-0 bg-black/70 z-40"></div>

    <!-- Main Content -->
    <div class="flex-1 lg:ml-72 min-h-screen flex flex-col">
      <!-- Desktop Top Bar -->
      <div
        class="hidden lg:flex sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800 px-8 py-5 items-center justify-between">
        <div class="flex items-center gap-4">
          <h2 class="text-3xl font-semibold tracking-tight" v-if="currentView === 'overview'">Engineering Workflow</h2>
          <h2 class="text-3xl font-semibold tracking-tight" v-else>{{ getCurrentSection?.title }}</h2>
          <span class="text-4xl">{{ getCurrentSection?.icon || '📋' }}</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="px-4 py-2 bg-zinc-800 rounded-2xl text-sm flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span class="text-emerald-400 font-medium">Live SOP</span>
          </div>
          <button @click="currentView = 'overview'"
            class="px-5 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 rounded-2xl font-semibold text-sm transition flex items-center gap-2">
            ← Overview
          </button>
        </div>
      </div>

      <!-- Main Scroll Area -->
      <div class="flex-1 overflow-y-auto pt-16 lg:pt-6 p-4 md:p-6 lg:p-8">
        <!-- Overview View -->
        <div v-if="currentView === 'overview'" class="max-w-7xl mx-auto">
          <!-- Hero -->
          <div class="mb-12 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full text-sm mb-4">
              <span class="text-emerald-400">●</span>
              STANDARD OPERATING PROCEDURE
            </div>
            <h1 class="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-4">
              From Idea to Production
            </h1>
            <p class="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0">
              A clear, repeatable process that empowers teams to deliver high-quality features faster with fewer
              misunderstandings.
            </p>
          </div>

          <!-- Flow Diagram -->
          <div class="mb-16">
            <div class="relative">
              <div
                class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-emerald-500/20">
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
                <div v-for="(section, index) in sopData.sections" :key="index"
                  class="bg-zinc-900 border border-zinc-700 hover:border-emerald-500/50 rounded-3xl p-6 transition-all group">
                  <div class="flex justify-between items-start mb-6">
                    <div class="text-4xl transition-transform group-hover:scale-110">{{ section.icon }}</div>
                    <div class="text-right">
                      <div class="text-xs font-mono text-emerald-400">STEP {{ index + 1 }}</div>
                      <div class="text-xs text-zinc-500 mt-1">{{ section.owner }}</div>
                    </div>
                  </div>

                  <h3 class="font-semibold text-xl mb-3">{{ section.title }}</h3>
                  <p class="text-zinc-400 text-sm line-clamp-4">{{ section.purpose }}</p>

                  <button @click="goToSection(section.id)"
                    class="mt-6 text-xs uppercase tracking-widest px-4 py-2.5 border border-zinc-700 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 rounded-2xl transition-all w-full">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Principles -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 mb-12">
            <h3 class="uppercase text-xs tracking-widest text-zinc-500 mb-6">Core Principles Across All Stages</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(principle, i) in allPrinciples" :key="i"
                class="bg-zinc-800/70 p-5 rounded-2xl text-sm border border-transparent hover:border-emerald-500/30 transition">
                {{ principle }}
              </div>
            </div>
          </div>

          <!-- Quick Highlights -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item, i) in sopData.quickHighlights" :key="i" :class="[
              'bg-gradient-to-br rounded-3xl p-8 border transition-all',
              `from-${item.color}-500/10 to-transparent border-${item.color}-500/20`
            ]">
              <div :class="`text-${item.color}-400 mb-2 text-3xl`">{{ item.icon }}</div>
              <div class="font-semibold text-lg">{{ item.title }}</div>
              <div class="text-sm text-zinc-400 mt-1">{{ item.description }}</div>
            </div>
          </div>
        </div>

        <!-- Section Detail View -->
        <div v-else class="max-w-5xl mx-auto space-y-12">
          <div v-if="getCurrentSection" class="space-y-12">
            <!-- Purpose -->
            <div class="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 md:p-8">
              <div class="uppercase text-xs tracking-widest text-emerald-400 mb-2">PURPOSE</div>
              <p class="text-2xl leading-tight text-zinc-100">{{ getCurrentSection.purpose }}</p>
            </div>

            <!-- Workflow Steps -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span class="text-3xl">📍</span>
                <h3 class="text-2xl font-semibold">Workflow Steps</h3>
              </div>

              <div class="space-y-4">
                <div v-for="(step, idx) in getCurrentSection.workflowSteps" :key="idx"
                  class="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition rounded-3xl p-6 flex flex-col md:flex-row gap-6">
                  <div
                    class="w-12 h-12 bg-zinc-800 text-emerald-400 rounded-2xl flex-shrink-0 flex items-center justify-center font-mono text-xl font-bold mx-auto md:mx-0">
                    {{ step.step }}
                  </div>
                  <div class="flex-1 text-center md:text-left">
                    <div class="font-semibold text-xl mb-1">{{ step.title }}</div>
                    <p class="text-zinc-400">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Principles -->
            <div v-if="getCurrentSection.principles?.length">
              <div class="flex items-center gap-3 mb-6">
                <span class="text-3xl">🧭</span>
                <h3 class="text-2xl font-semibold">Principles</h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(principle, i) in getCurrentSection.principles" :key="i"
                  class="bg-zinc-900 border border-zinc-700 px-6 py-5 rounded-3xl text-lg">
                  {{ principle }}
                </div>
              </div>
            </div>

            <!-- Standards -->
            <div v-if="getCurrentSection.standards">
              <div class="flex items-center gap-3 mb-6">
                <span class="text-3xl">📏</span>
                <h3 class="text-2xl font-semibold">Standards</h3>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div v-for="(category, key) in getCurrentSection.standards" :key="key" class="space-y-4">
                  <div class="uppercase text-xs font-mono tracking-widest text-zinc-500">{{ formatKey(key) }}</div>
                  <ul class="space-y-3">
                    <li v-for="(item, i) in category" :key="i"
                      class="pl-5 border-l-2 border-emerald-500/40 text-zinc-300">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Checklists -->
            <div v-if="getCurrentSection.checklists">
              <div class="flex items-center gap-3 mb-6">
                <span class="text-3xl">✅</span>
                <h3 class="text-2xl font-semibold">Checklists</h3>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div v-for="(items, key) in getCurrentSection.checklists" :key="key"
                  class="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
                  <div class="font-medium uppercase tracking-widest text-xs text-zinc-400 mb-5">{{ formatKey(key) }}
                  </div>
                  <ul class="space-y-3">
                    <li v-for="(item, i) in items" :key="i" class="flex items-start gap-3">
                      <span class="text-emerald-400 mt-0.5">✓</span>
                      <span class="text-zinc-300">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Definition of Done -->
            <div class="bg-emerald-500/5 border border-emerald-500/30 rounded-3xl p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="px-5 py-2 bg-emerald-500 text-black font-semibold rounded-2xl">DoD</div>
                <h3 class="text-2xl font-semibold">Definition of Done</h3>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="(item, i) in getCurrentSection.definitionOfDone" :key="i"
                  class="flex gap-3 items-center bg-zinc-900 px-6 py-4 rounded-2xl border border-emerald-500/10">
                  <div
                    class="w-5 h-5 rounded-lg border border-emerald-500 flex items-center justify-center text-xs text-emerald-400">
                    ✓
                  </div>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Severity Rules -->
            <div v-if="getCurrentSection.severityRules" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(rules, level) in getCurrentSection.severityRules" :key="level"
                class="bg-zinc-900 border border-zinc-700 rounded-3xl p-7">
                <div class="uppercase text-xs font-mono mb-4 flex items-center gap-2">
                  <span :class="level === 'critical' || level === 'major' ? 'text-red-400' : 'text-amber-400'">
                    {{ level.toUpperCase() }}
                  </span>
                </div>
                <ul class="space-y-3">
                  <li v-for="(rule, i) in rules" :key="i" class="text-zinc-300">• {{ rule }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { sopData, navigation } from './assets/data/workflow-sop.ts'
import type { Section } from './types/workflow-sop.ts'

const currentView = ref<'overview' | string>('overview')
const isSidebarOpen = ref(false)

const getCurrentSection = computed(() => {
  if (currentView.value === 'overview') return null
  return sopData.sections.find(s => s.id === currentView.value) as Section | null
})

const allPrinciples = computed(() => {
  const principles = new Set<string>()
  sopData.sections.forEach(section => {
    if (section.principles) {
      section.principles.forEach(p => principles.add(p))
    }
  })
  return Array.from(principles).slice(0, 9)
})

function navigateTo(id: string) {
  currentView.value = id
  isSidebarOpen.value = false
}

function goToSection(id: string) {
  currentView.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim()
}

// Close sidebar when pressing ESC
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isSidebarOpen.value) {
      isSidebarOpen.value = false
    }
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Space Grotesk', sans-serif;
}

/* Improve line-clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>