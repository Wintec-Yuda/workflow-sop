export default {
  id: "deliver-feature",
  title: "Deliver Feature",
  icon: "📋",
  owner: "Product",
  purpose: "Memastikan fitur siap dikerjakan tanpa asumsi dari tim engineering.",
  workflowSteps: [
    {
      step: "1",
      title: "Define Business Goal",
      description: "Jelaskan tujuan bisnis dan masalah yang ingin diselesaikan"
    },
    {
      step: "2",
      title: "Create User Flow",
      description: "Buat alur pengguna dari awal hingga tujuan tercapai"
    },
    {
      step: "3",
      title: "Create Design",
      description: "Buat desain berdasarkan design system"
    },
    {
      step: "4",
      title: "Define Requirement",
      description: "Tuliskan requirement dan acceptance criteria"
    },
    {
      step: "5",
      title: "Document Edge Cases",
      description: "Dokumentasikan semua kemungkinan kondisi khusus"
    },
    {
      step: "6",
      title: "Engineering Review",
      description: "Review bersama FE, BE, dan Lead"
    },
    {
      step: "7",
      title: "Feature Ready",
      description: "Feature siap masuk proses API Contract"
    }
  ],
  principles: [
    "No Assumption",
    "Design Before Development",
    "Requirement Before Discussion",
    "Edge Case First Thinking",
    "Clarity Over Completeness",
    "Single Source Of Truth"
  ],
  checklists: {
    design: [
      "Menggunakan design system",
      "Tidak membuat komponen baru tanpa alasan jelas",
      "Mobile layout tersedia",
      "Tablet layout tersedia",
      "Desktop layout tersedia"
    ],

    componentStates: [
      "Default",
      "Hover",
      "Active",
      "Disabled",
      "Loading",
      "Error"
    ],

    pageStates: [
      "Loading",
      "Empty",
      "Error",
      "Success"
    ],

    reusablePatterns: [
      "Modal",
      "Table",
      "Filter",
      "Search",
      "Form"
    ],

    interaction: [
      "Button action jelas",
      "Navigation jelas",
      "Redirect jelas",
      "Submit flow jelas",
      "Success flow jelas",
      "Error flow jelas"
    ],

    requirement: [
      "Business Goal jelas",
      "User Flow jelas",
      "Acceptance Criteria lengkap",
      "Permission Rule jelas",
      "Validation Rule jelas"
    ],

    edgeCases: [
      "Data kosong",
      "Request gagal",
      "Tidak memiliki akses",
      "Validasi gagal",
      "Limit data tercapai"
    ]
  },
  definitionOfDone: [
    "Business Goal jelas",
    "Design final",
    "User Flow jelas",
    "Acceptance Criteria lengkap",
    "Validation Rule terdokumentasi",
    "Permission Rule terdokumentasi",
    "Semua state sudah didesain",
    "Responsive behavior jelas",
    "Interaction flow jelas",
    "Edge case terdokumentasi",
    "FE review",
    "BE review",
    "Lead review"
  ]
}