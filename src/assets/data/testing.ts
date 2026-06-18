export default {
  id: "testing",
  title: "Testing",
  icon: "🧪",
  owner: "QA",
  purpose: "Memastikan fitur sesuai requirement, acceptance criteria, dan edge case.",
  workflowSteps: [
    {
      step: "1",
      title: "Review Context",
      description: "Review requirement, acceptance criteria, design, dan API Contract"
    },
    {
      step: "2",
      title: "Prepare Test Cases",
      description: "Turunkan requirement menjadi test scenario"
    },
    {
      step: "3",
      title: "Execute Testing",
      description: "Validasi seluruh flow dan state"
    },
    {
      step: "4",
      title: "Classify Findings",
      description: "Klasifikasikan issue menjadi Bug, Enhancement, atau New Requirement"
    },
    {
      step: "5",
      title: "Coordinate With Product",
      description: "Validasi issue bersama Product dan PM jika diperlukan"
    },
    {
      step: "6",
      title: "Retesting",
      description: "Retest setelah perbaikan dilakukan"
    },
    {
      step: "7",
      title: "Approval",
      description: "Approve jika seluruh requirement terpenuhi"
    }
  ],
  principles: [
    "Test Against Requirement",
    "Test Against Acceptance Criteria",
    "Validate Edge Cases",
    "Trust The Contract",
    "Quality Over Assumption",
    "Evidence Based Validation",
    "Bug Is Not Enhancement",
    "Enhancement Is Not New Requirement"
  ],
  checklists: {
    requirement: [
      "Business flow sesuai",
      "User flow sesuai",
      "Acceptance criteria terpenuhi",
      "Permission rule sesuai",
      "Validation rule sesuai"
    ],
    states: [
      "Loading State",
      "Empty State",
      "Success State",
      "Error State",
      "Validation Error State",
      "No Access State"
    ], functional: [
      "Create Data",
      "Read Data",
      "Update Data",
      "Delete Data",
      "Search",
      "Filter",
      "Sorting",
      "Pagination"
    ], integration: [
      "Request sesuai API Contract",
      "Response sesuai API Contract",
      "Error handling berjalan",
      "Permission berjalan"
    ], edgeCases: [
      "Data kosong",
      "Request gagal",
      "Network timeout",
      "Tidak memiliki akses",
      "Data tidak ditemukan",
      "Limit data tercapai",
      "Input tidak valid"
    ], issueClassification: [
      "Bug",
      "Enhancement",
      "New Requirement"
    ]
  },
  definitionOfDone: [
    "Requirement tervalidasi",
    "Acceptance Criteria tervalidasi",
    "User Flow tervalidasi",
    "API Contract tervalidasi",
    "Semua state tervalidasi",
    "Edge Case tervalidasi",
    "Tidak ada bug major",
    "Seluruh bug major sudah diperbaiki",
    "Retesting selesai",
    "QA approve"
  ],
  severityRules: {
    critical: [
      "Feature tidak dapat digunakan",
      "Data corruption",
      "Security issue"
    ],

    major: [
      "Requirement tidak terpenuhi",
      "Acceptance criteria gagal",
      "User flow gagal"
    ],

    minor: [
      "UI issue",
      "Alignment issue",
      "Typo",
      "Minor UX issue"
    ]
  }
}