<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
    <!-- Top Navigation -->
    <nav class="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">S
          </div>
          <div>
            <div class="font-semibold text-xl tracking-tight">{{ sopData.title }}</div>
            <div class="text-sm text-zinc-500 dark:text-zinc-400">{{ sopData.subtitle }}</div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-zinc-500 dark:text-zinc-400">
            Internal Engineering
          </div>
        </div>
      </div>
    </nav>

    <div class="flex max-w-7xl mx-auto">
      <!-- Sidebar -->
      <div
        class="w-72 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 min-h-[calc(100vh-73px)] p-6 hidden lg:block">
        <div class="mb-8">
          <div class="uppercase text-xs font-semibold tracking-widest text-zinc-400 mb-3">NAVIGATION</div>
          <div class="space-y-1">
            <button v-for="nav in navigation" :key="nav.id" @click="activeSection = nav.id" :class="[
              'w-full text-left px-4 py-3 rounded-3xl flex items-center gap-3 text-sm transition-all',
              activeSection === nav.id
                ? 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-medium'
                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
            ]">
              <span class="text-lg">{{ nav.icon }}</span>
              <span>{{ nav.label }}</span>
            </button>
          </div>
        </div>

        <div class="mt-12">
          <div class="uppercase text-xs font-semibold tracking-widest text-zinc-400 mb-3">QUICK LINKS</div>
          <a href="#definition-of-done" class="block text-sm text-violet-600 dark:text-violet-400 hover:underline py-1">
            Definition of Done
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="lg:hidden fixed bottom-4 left-4 right-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-3xl shadow-2xl p-2 z-50">
        <div class="flex overflow-x-auto gap-1 pb-1 hide-scrollbar">
          <button v-for="nav in navigation" :key="nav.id" @click="activeSection = nav.id"
            class="flex-shrink-0 px-5 py-3 text-xs font-medium rounded-2xl whitespace-nowrap transition-all"
            :class="activeSection === nav.id ? 'bg-violet-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800'">
            {{ nav.label }}
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 min-w-0 p-6 lg:p-10 pb-24 lg:pb-10">
        <!-- Overview -->
        <div v-if="activeSection === 'overview'" class="max-w-3xl">
          <div class="mb-12">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 rounded-3xl text-sm font-medium mb-6">
              <span>🚀</span>
              Process Flow
            </div>
            <h1 class="text-5xl font-semibold tracking-tighter mb-6 leading-none">
              Engineering<br>Workflow SOP
            </h1>
            <p class="text-xl text-zinc-600 dark:text-zinc-400 max-w-md">
              Panduan lengkap untuk memastikan kualitas, konsistensi, dan kecepatan pengembangan fitur.
            </p>
          </div>

          <!-- Process Flow Diagram -->
          <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 mb-16">
            <div class="flex flex-col md:flex-row items-center gap-4 justify-center text-sm">
              <div class="flex-1 text-center p-4 border border-violet-200 dark:border-violet-900 rounded-2xl">
                <div class="text-2xl mb-2">📋</div>
                <div class="font-medium">Deliver Feature</div>
                <div class="text-xs text-zinc-500">Product</div>
              </div>
              <div class="text-3xl text-zinc-300 dark:text-zinc-700">→</div>
              <div class="flex-1 text-center p-4 border border-amber-200 dark:border-amber-900 rounded-2xl">
                <div class="text-2xl mb-2">🔗</div>
                <div class="font-medium">API Contract</div>
                <div class="text-xs text-zinc-500">Lead</div>
              </div>
              <div class="text-3xl text-zinc-300 dark:text-zinc-700">→</div>
              <div class="flex-1 text-center p-4 border border-emerald-200 dark:border-emerald-900 rounded-2xl">
                <div class="text-2xl mb-2">💻</div>
                <div class="font-medium">Development</div>
                <div class="text-xs text-zinc-500">Frontend</div>
              </div>
              <div class="text-3xl text-zinc-300 dark:text-zinc-700">→</div>
              <div class="flex-1 text-center p-4 border border-sky-200 dark:border-sky-900 rounded-2xl">
                <div class="text-2xl mb-2">🔍</div>
                <div class="font-medium">Review</div>
                <div class="text-xs text-zinc-500">Lead</div>
              </div>
              <div class="text-3xl text-zinc-300 dark:text-zinc-700">→</div>
              <div class="flex-1 text-center p-4 border border-rose-200 dark:border-rose-900 rounded-2xl">
                <div class="text-2xl mb-2">🧪</div>
                <div class="font-medium">Testing</div>
                <div class="text-xs text-zinc-500">QA</div>
              </div>
            </div>
          </div>

          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-semibold mb-6">Prinsip Utama</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                <div class="text-4xl mb-4">📜</div>
                <div class="font-semibold mb-2">Contract is the Source of Truth</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">API Contract menjadi acuan utama seluruh tim.
                </div>
              </div>
              <div class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                <div class="text-4xl mb-4">🔄</div>
                <div class="font-semibold mb-2">Trust The Contract</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">Kurangi defensive code dan mapping berlebihan.
                </div>
              </div>
              <div class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                <div class="text-4xl mb-4">🧩</div>
                <div class="font-semibold mb-2">Clean &amp; Maintainable</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">Fokus pada simplicity dan reusability.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Content -->
        <div v-else class="max-w-3xl">
          <div v-for="section in filteredSections" :key="section.id">
            <div class="flex items-center gap-4 mb-8">
              <div class="text-5xl">{{ section.icon }}</div>
              <div>
                <div class="text-sm uppercase tracking-widest text-zinc-400">SECTION {{ sections.indexOf(section) + 1 }}
                </div>
                <h1 class="text-4xl font-semibold tracking-tight">{{ section.title }}</h1>
              </div>
            </div>

            <div class="mb-10 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-2xl">
                  OWNER</div>
                <div class="text-zinc-600 dark:text-zinc-400">{{ section.owner }}</div>
              </div>
              <p class="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ section.purpose }}</p>
            </div>

            <!-- Deliver Feature specific -->
            <div v-if="section.id === 'deliver-feature'">
              <!-- Design Checklist -->
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span>🎨</span> Design Checklist
                </h3>
                <div class="space-y-8">
                  <div v-for="(check, i) in section.designChecklist" :key="i"
                    class="bg-white dark:bg-zinc-900 p-7 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                    <div class="font-medium text-lg mb-5">{{ check.title }}</div>
                    <ul class="space-y-3">
                      <li v-for="(item, idx) in check.items" :key="idx" class="flex gap-3">
                        <span class="text-emerald-500 mt-0.5">✓</span>
                        <span class="text-zinc-600 dark:text-zinc-400">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Requirement Checklist -->
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span>📋</span> Requirement Checklist
                </h3>
                <div class="space-y-8">
                  <div v-for="(check, i) in section.requirementChecklist" :key="i"
                    class="bg-white dark:bg-zinc-900 p-7 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                    <div class="font-medium text-lg mb-5">{{ check.title }}</div>
                    <ul class="space-y-3">
                      <li v-for="(item, idx) in check.items" :key="idx" class="flex gap-3">
                        <span class="text-emerald-500 mt-0.5">✓</span>
                        <span class="text-zinc-600 dark:text-zinc-400">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- DoD -->
              <div id="definition-of-done"
                class="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950 dark:to-fuchsia-950 p-8 rounded-3xl border border-violet-100 dark:border-violet-900">
                <div class="uppercase text-xs tracking-widest font-semibold mb-4 text-violet-600 dark:text-violet-400">
                  DEFINITION OF DONE</div>
                <h3 class="text-2xl font-semibold mb-6">Deliver Feature selesai jika...</h3>
                <div class="grid grid-cols-1 gap-3">
                  <div v-for="(item, i) in section.definitionOfDone" :key="i"
                    class="flex gap-4 items-start bg-white/70 dark:bg-zinc-900/70 p-4 rounded-2xl">
                    <div
                      class="w-6 h-6 rounded-xl bg-white dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center text-emerald-500">
                      ✓</div>
                    <div>{{ item }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- API Contract specific -->
            <div v-else-if="section.id === 'api-contract'">
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Workflow</h3>
                <div class="bg-white dark:bg-zinc-900 p-8 rounded-3xl border">
                  <div v-for="(step, i) in section.workflow" :key="i" class="text-lg text-zinc-600 dark:text-zinc-400">
                    {{ step }}</div>
                </div>
              </div>

              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span>📜</span> Rules
                </h3>
                <div class="space-y-4">
                  <div v-for="(rule, i) in section.rules" :key="i"
                    class="flex gap-4 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                    <div class="text-2xl text-amber-400">•</div>
                    <div class="text-zinc-600 dark:text-zinc-400">{{ rule }}</div>
                  </div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-8 rounded-3xl">
                <div class="uppercase text-xs tracking-widest text-amber-600 dark:text-amber-400 mb-3">PRINCIPAL RULE
                </div>
                <div class="text-3xl font-semibold leading-tight">Contract is the Source of Truth</div>
              </div>
            </div>

            <!-- Development specific -->
            <div v-else-if="section.id === 'development'">

              <!-- Workflow -->
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Workflow Steps</h3>

                <div class="space-y-6">
                  <div v-for="(step, i) in section.workflowSteps" :key="i"
                    class="flex gap-6 bg-white dark:bg-zinc-900 p-7 rounded-3xl border">
                    <div
                      class="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-mono font-bold text-lg text-zinc-400">
                      {{ step.step }}
                    </div>

                    <div class="flex-1">
                      <div class="font-semibold text-lg">
                        {{ step.title }}
                      </div>

                      <div class="text-zinc-500">
                        {{ step.description }}
                      </div>

                      <div v-if="step.note"
                        class="mt-4 inline-flex items-start gap-2 px-4 py-3 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900">
                        <span>💡</span>
                        <span>{{ step.note }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Principles -->
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Core Principles</h3>

                <div class="grid md:grid-cols-3 gap-6">
                  <div v-for="(principle, i) in section.principles" :key="i"
                    class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border">
                    <div class="h-2 w-12 bg-violet-500 rounded mb-6"></div>
                    <div class="font-semibold">
                      {{ principle }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Rules -->
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Development Rules</h3>

                <div class="bg-white dark:bg-zinc-900 rounded-3xl border p-8">
                  <ul class="space-y-4">
                    <li v-for="(rule, i) in section.rules" :key="i" class="flex items-start gap-3">
                      <span
                        class="w-6 h-6 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        !
                      </span>

                      <span>
                        {{ rule }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Naming Convention -->
              <div v-if="section.namingConvention" class="mb-12">
                <h3 class="text-xl font-semibold mb-6">
                  Naming Convention
                </h3>

                <div class="grid lg:grid-cols-2 gap-6">

                  <!-- Views -->
                  <div class="bg-white dark:bg-zinc-900 rounded-3xl border p-8">
                    <div class="flex items-center gap-3 mb-6">
                      <span class="text-2xl">📄</span>
                      <h4 class="font-semibold text-lg">
                        Views
                      </h4>
                    </div>

                    <div class="space-y-3">
                      <div v-for="(view, i) in section.namingConvention.views" :key="i"
                        class="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-xl">
                        {{ view }}
                      </div>
                    </div>
                  </div>

                  <!-- Components -->
                  <div class="bg-white dark:bg-zinc-900 rounded-3xl border p-8">
                    <div class="flex items-center gap-3 mb-6">
                      <span class="text-2xl">🧩</span>
                      <h4 class="font-semibold text-lg">
                        Components
                      </h4>
                    </div>

                    <div class="space-y-3">
                      <div v-for="(component, i) in section.namingConvention.components" :key="i"
                        class="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-xl">
                        {{ component }}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Definition of Done -->
              <div id="definition-of-done"
                class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900">
                <h3 class="text-2xl font-semibold mb-8">
                  Definition of Done
                </h3>

                <ul class="space-y-4">
                  <li v-for="(item, i) in section.definitionOfDone" :key="i" class="flex items-start gap-3">
                    <span
                      class="inline-block w-5 h-5 bg-emerald-500 text-white text-xs rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>

                    <span>
                      {{ item }}
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            <!-- Review -->
            <div v-else-if="section.id === 'review'">
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Review Checklist</h3>
                <div class="grid gap-4">
                  <div v-for="(item, i) in section.checklist" :key="i"
                    class="p-6 bg-white dark:bg-zinc-900 rounded-3xl flex gap-4 items-center border">
                    <div class="text-emerald-500">✓</div>
                    <div class="font-medium">{{ item }}</div>
                  </div>
                </div>
              </div>

              <div class="text-zinc-500 italic border-l-4 border-zinc-200 dark:border-zinc-700 pl-6 py-1">
                Review sistem, bukan selera pribadi.
              </div>
            </div>

            <!-- Testing -->
            <div v-else-if="section.id === 'testing'">
              <div class="mb-12">
                <h3 class="text-xl font-semibold mb-6">Testing Checklist</h3>
                <div class="space-y-6">
                  <div v-for="(item, i) in section.checklist" :key="i"
                    class="p-7 bg-white dark:bg-zinc-900 rounded-3xl border">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { sopData, navigation } from './data.ts'

const activeSection = ref('overview')
const isDark = ref(false)

const filteredSections = computed(() => {
  return sopData.sections.filter(s => s.id === activeSection.value)
})

const sections = computed(() => sopData.sections)

function toggleDarkMode() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize dark mode based on system preference
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
})
</script>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>