export default {
  id: "development-frontend",
  title: "Development (Frontend)",
  icon: "💻",
  owner: "Frontend Developer",
  purpose: "Mengubah design, requirement, dan API Contract menjadi fitur yang berjalan.",

  workflowSteps: [
    {
      step: "1",
      title: "Requirement Review",
      description: "Review Design, Requirement, Acceptance Criteria, dan API Contract"
    },
    {
      step: "2",
      title: "Setup Boilerplate",
      description: "Setup Router, Service, Composables, Page Structure"
    },
    {
      step: "3",
      title: "Setup Types & Dummy Data",
      description: "Generate types dan mock state berdasarkan API Contract"
    },
    {
      step: "4",
      title: "Build Feature",
      description: "Implement feature berdasarkan Design dan API Contract"
    },
    {
      step: "5",
      title: "Build In One View First",
      description: "Fokus menyelesaikan feature sebelum abstraction"
    },
    {
      step: "6",
      title: "Refactor",
      description: "Extract reusable component jika memang diperlukan"
    },
    {
      step: "7",
      title: "Self Testing",
      description: "Validasi semua state, flow, dan responsive behavior"
    },
    {
      step: "8",
      title: "Create Pull Request",
      description: "Submit hasil development untuk review"
    }
  ],

  principles: [
    "API Contract First",
    "Trust The Contract",
    "Build First, Abstract Later",
    "Views As Orchestrator",
    "Feature First Structure",
    "Reusability By Evidence, Not Assumption",
    "Simplicity Over Cleverness",
    "Consistency Over Personal Preference",
    "Readable Code Over Smart Code"
  ],

  standards: {
    api: [
      "API Contract adalah source of truth",
      "Tidak mengubah response schema di frontend",
      "Tidak membuat fallback data palsu",
      "Jika response tidak sesuai contract maka dianggap bug backend",
      "Jika contract tidak sesuai requirement maka revisi contract terlebih dahulu"
    ],

    component: [
      "Gunakan existing component sebelum membuat component baru",
      "1x penggunaan tetap di View",
      "2x penggunaan evaluasi reusable",
      "3x+ penggunaan wajib reusable",
      "Jangan membuat reusable component berdasarkan asumsi"
    ],

    structure: [
      "Feature First Structure",
      "Views sebagai orchestrator",
      "Business logic di composables",
      "API request di services",
      "Shared UI di components"
    ],

    naming: [
      "Chart component wajib suffix Chart",
      "Table component wajib suffix Table",
      "Main page menggunakan nama feature",
      "Detail page menggunakan suffix Detail",
      "Form page menggunakan suffix Form",
      "Composable menggunakan prefix use"
    ],

    codeQuality: [
      "No Defensive Code",
      "No Dead Code",
      "No Console Log",
      "No Commented Code",
      "No Magic Number",
      "Type First Development"
    ]
  },

  checklists: {
    ui: [
      "Design sesuai Figma",
      "Spacing sesuai design system",
      "Typography sesuai design system",
      "Color sesuai design system",
      "Responsive Mobile",
      "Responsive Tablet",
      "Responsive Desktop"
    ],

    states: [
      "Loading State",
      "Skeleton State",
      "Empty State",
      "Success State",
      "Error State",
      "Validation Error State",
      "No Access State"
    ],

    feature: [
      "Requirement terpenuhi",
      "Acceptance Criteria terpenuhi",
      "User Flow sesuai requirement",
      "Interaction sesuai design"
    ],

    integration: [
      "API berhasil terintegrasi",
      "Request sesuai contract",
      "Response sesuai contract",
      "Error handling berjalan"
    ],

    technical: [
      "Build Success",
      "Lint Success",
      "Type Check Success",
      "Tidak ada Console Error",
      "Tidak ada Runtime Error"
    ]
  },

  definitionOfDone: [
    "Feature berjalan sesuai requirement",
    "Feature berjalan sesuai acceptance criteria",
    "Feature berjalan sesuai API Contract",
    "Design terimplementasi dengan benar",
    "Responsive di Mobile, Tablet, dan Desktop",
    "Semua state tervalidasi",
    "Self Testing selesai",
    "Build Success",
    "Lint Success",
    "Type Check Success",
    "Tidak ada issue major dari review",
    "Pull Request approved"
  ]
}