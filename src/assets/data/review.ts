export default {
  id: "review",
  title: "Review",
  icon: "🔍",
  owner: "Lead",
  purpose: "Memastikan hasil development mengikuti standar tim dan mudah dipelihara.",
  workflowSteps: [
    {
      step: "1",
      title: "Review Requirement Context",
      description: "Pahami requirement, acceptance criteria, design, dan API Contract"
    },
    {
      step: "2",
      title: "Review Feature Flow",
      description: "Pastikan flow sesuai dengan requirement"
    },
    {
      step: "3",
      title: "Review Code Quality",
      description: "Review struktur, naming, complexity, dan maintainability"
    },
    {
      step: "4",
      title: "Review SOP Compliance",
      description: "Pastikan development mengikuti SOP tim"
    },
    {
      step: "5",
      title: "Provide Feedback",
      description: "Berikan feedback dan diskusikan solusi"
    },
    {
      step: "6",
      title: "Approve",
      description: "Approve jika tidak ada issue major"
    }
  ],
  principles: [
    "Consistency Over Personal Preference",
    "Simplicity Over Cleverness",
    "Maintainability First",
    "Review The System, Not The Developer",
    "Protect Team Standards",
    "Focus On Major Issues First"
  ],
  checklists: {
    feature: [
      "Feature sesuai requirement",
      "Feature sesuai acceptance criteria",
      "Feature sesuai API Contract",
      "Feature sesuai design"
    ],

    architecture: [
      "Views sebagai orchestrator",
      "Logic ditempatkan di layer yang tepat",
      "Tidak ada coupling berlebihan",
      "Struktur feature konsisten"
    ],

    codeQuality: [
      "Code mudah dibaca",
      "Tidak ada over abstraction",
      "Tidak ada duplicate code berlebihan",
      "Tidak ada dead code",
      "Tidak ada commented code"
    ],

    standards: [
      "Naming convention sesuai",
      "Folder structure sesuai",
      "Component structure sesuai",
      "Trust The Contract dipatuhi"
    ],

    maintainability: [
      "Mudah dipahami developer lain",
      "Mudah diubah di masa depan",
      "Complexity masih wajar"
    ]
  },
  definitionOfDone: [
    "Requirement tervalidasi",
    "Design tervalidasi",
    "API Contract tervalidasi",
    "SOP Development dipatuhi",
    "Tidak ada issue major",
    "Tidak ada issue architecture major",
    "Maintainability acceptable",
    "Lead approve"
  ],
  severityRules: {
    major: [
      "Bug",
      "Wrong Architecture",
      "SOP Violation",
      "Security Issue"
    ],

    minor: [
      "Naming",
      "Refactor Suggestion",
      "Readability Improvement"
    ]
  }
}