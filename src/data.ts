export const sopData = {
  title: "Engineering Workflow & SOP",
  subtitle: "Standard Operating Procedure for Feature Delivery",
  sections: [
    {
      id: "deliver-feature",
      title: "Deliver Feature",
      icon: "📋",
      owner: "Product",
      purpose: "Memastikan fitur siap dikerjakan tanpa asumsi dari tim engineering.",
      designChecklist: [
        {
          title: "Design System",
          items: [
            "Menggunakan design system yang sudah ditentukan",
            "Tidak membuat komponen baru tanpa alasan jelas"
          ]
        },
        {
          title: "Component State",
          items: [
            "Default, Hover, Active, Disabled, Loading, Error"
          ]
        },
        {
          title: "Page State",
          items: [
            "Loading, Empty, Error, Success"
          ]
        },
        {
          title: "Reusable Pattern",
          items: [
            "Tandai komponen yang reusable",
            "Tandai pattern yang reusable (Modal, Table, Filter, Search, Form)"
          ]
        },
        {
          title: "Responsive Behavior",
          items: [
            "Mobile, Tablet, Desktop"
          ]
        },
        {
          title: "Interaction & Flow",
          items: [
            "Klik tombol, Redirect, Submit form, Error handling, Success flow"
          ]
        }
      ],
      requirementChecklist: [
        {
          title: "User Flow",
          items: ["User masuk → Melakukan aksi → Mendapatkan hasil"]
        },
        {
          title: "Acceptance Criteria",
          items: ["User dapat membuat data, mengubah data, menghapus data, dll."]
        },
        {
          title: "Edge Case",
          items: ["Data kosong, Request gagal, Tidak memiliki akses, Validasi gagal, Limit data tercapai"]
        }
      ],
      definitionOfDone: [
        "Design final",
        "Semua state sudah didesain",
        "Responsive behavior jelas",
        "Interaction jelas",
        "User flow jelas",
        "Acceptance criteria lengkap",
        "Edge case terdokumentasi"
      ]
    },
    {
      id: "api-contract",
      title: "API Contract",
      icon: "🔗",
      owner: "Lead & Fullstack",
      purpose: "Menyepakati kontrak data sebelum development dimulai.",
      workflow: [
        "Deliver Feature → Generate API Contract (AI) → Review Lead & Fullstack → Review FE & BE → Approved API Contract → Development"
      ],
      rules: [
        "API Contract First - Wajib selesai sebelum development",
        "AI Assisted - Draft dengan AI, tapi harus direview",
        "Consistent Parameter Structure",
        "Consistent Response Schema",
        "Consistent Type",
        "One API One Schema",
        "Parameter May Change Data, Not Schema",
        "Different Schema = Different Endpoint"
      ],
      definitionOfDone: [
        "Requirement sudah ter-cover",
        "Required dan Optional jelas",
        "Parameter konsisten",
        "Response schema konsisten",
        "Type konsisten",
        "One API One Schema",
        "FE, BE, Lead approve"
      ]
    },
    {
      id: "development",
      title: "Development (Frontend)",
      icon: "💻",
      owner: "Frontend Developer",
      purpose: "Mengubah design, requirement, dan API Contract menjadi fitur yang berjalan.",

      workflowSteps: [
        {
          step: "1",
          title: "Setup Boilerplate",
          description: "Router, API Service, API Composables, Page Structure",
          note: "✅ Dapat dikerjakan sebelum API Contract final untuk mempercepat development"
        },
        {
          step: "2",
          title: "Setup Types & Dummy Data",
          description: "Types, Dummy Data, Mock State berdasarkan API Contract"
        },
        {
          step: "3",
          title: "Build Feature",
          description: "Gunakan API Contract sebagai source of truth"
        },
        {
          step: "4",
          title: "Build in One View First",
          description: "Fokus implementasi di satu file view sebelum melakukan abstraction"
        },
        {
          step: "5",
          title: "Refactor After Feature Works",
          description: "Extract reusable components jika memang diperlukan"
        }
      ],

      principles: [
        "API Contract First",
        "Views as Orchestrator",
        "Trust The Contract"
      ],

      rules: [
        "Trust The Contract - No Defensive Code",
        "Reusability Rules - Cek existing component sebelum membuat baru",
        "Collaboration - Diskusikan dengan Product, PM, atau Backend jika ada ketidakjelasan",

        "Chart Component wajib menggunakan suffix 'Chart'",
        "Table Component wajib menggunakan suffix 'Table'",

        "Main Page View menggunakan nama fitur langsung",
        "Detail Page menggunakan suffix 'Detail'",
        "Form Page menggunakan suffix 'Form'"
      ],

      namingConvention: {
        views: [
          "UserView.vue",
          "UserDetail.vue",
          "UserForm.vue",
          "ProductView.vue",
          "ProductDetail.vue",
          "ProductForm.vue"
        ],

        components: [
          "RevenueChart.vue",
          "SalesChart.vue",
          "UserTable.vue",
          "ProductTable.vue"
        ]
      },

      definitionOfDone: [
        "Feature berjalan sesuai flow",
        "Sesuai Design",
        "Sesuai Requirement",
        "Sesuai Acceptance Criteria",
        "Sesuai API Contract",
        "Self Testing selesai (all states, loading, empty, error, responsive)",
        "Build Success"
      ]
    },
    {
      id: "review",
      title: "Review",
      icon: "🔍",
      owner: "Lead",
      purpose: "Memastikan hasil development mengikuti standar tim dan mudah dipelihara.",
      checklist: [
        "SOP Compliance",
        "Code Simplicity - No over abstraction",
        "Trust Contract - No defensive code",
        "Reusability",
        "Component Complexity",
        "Naming Convention",
        "Maintainability"
      ],
      definitionOfDone: [
        "SOP Development dipatuhi",
        "Tidak ada issue major",
        "Konsistensi terjaga",
        "Lead approve"
      ]
    },
    {
      id: "testing",
      title: "Testing",
      icon: "🧪",
      owner: "QA",
      purpose: "Memastikan fitur sesuai requirement, acceptance criteria, dan edge case.",
      checklist: [
        "Requirement Validation",
        "Edge Case Validation (all states)",
        "Issue Classification (Bug, Enhancement, New Requirement)"
      ],
      definitionOfDone: [
        "Requirement & Acceptance Criteria terpenuhi",
        "Edge Case tervalidasi",
        "Tidak ada bug major",
        "QA approve"
      ]
    }
  ]
};

export const navigation = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'deliver-feature', label: 'Deliver Feature', icon: '📋' },
  { id: 'api-contract', label: 'API Contract', icon: '🔗' },
  { id: 'development', label: 'Development', icon: '💻' },
  { id: 'review', label: 'Review', icon: '🔍' },
  { id: 'testing', label: 'Testing', icon: '🧪' },
];