export default {
  id: "api-contract",
  title: "API Contract",
  icon: "🔗",
  owner: "Lead & Fullstack",
  purpose: "Menyepakati kontrak data sebelum development dimulai.",
  workflowSteps: [
    {
      step: "1",
      title: "Requirement Review",
      description: "Review feature, acceptance criteria, dan user flow"
    },
    {
      step: "2",
      title: "Generate Draft Contract",
      description: "Generate draft API Contract menggunakan AI atau template"
    },
    {
      step: "3",
      title: "Lead Review",
      description: "Review consistency dan architecture"
    },
    {
      step: "4",
      title: "Frontend Review",
      description: "Review usability dan kebutuhan UI"
    },
    {
      step: "5",
      title: "Backend Review",
      description: "Review implementasi dan feasibility"
    },
    {
      step: "6",
      title: "Approval",
      description: "Lead, FE, dan BE menyetujui contract"
    },
    {
      step: "7",
      title: "Development Start",
      description: "Development dapat dimulai setelah contract approved"
    }
  ],
  principles: [
    "API Contract First",
    "Frontend & Backend Independent Development",
    "Consistency Over Preference",
    "Schema Stability",
    "Predictable Response",
    "Single Source Of Truth"
  ],
  standards: {
    schema: [
      "One API One Schema",
      "Different Schema Different Endpoint",
      "Response schema tidak berubah berdasarkan data",
      "Parameter boleh mengubah data, bukan schema"
    ],

    naming: [
      "Gunakan naming yang konsisten",
      "Gunakan bahasa yang sama di seluruh endpoint",
      "Gunakan singular atau plural secara konsisten"
    ],

    typing: [
      "Type harus konsisten",
      "Nullability harus jelas",
      "Required dan Optional harus jelas",
      "Enum harus terdokumentasi"
    ],

    response: [
      "Success response konsisten",
      "Error response konsisten",
      "Pagination schema konsisten",
      "Metadata schema konsisten"
    ],

    ownership: [
      "FE tidak boleh mengubah contract sepihak",
      "BE tidak boleh mengubah contract sepihak",
      "Perubahan contract wajib melalui review"
    ]
  },
  checklists: {
    requirementCoverage: [
      "Semua requirement ter-cover",
      "Semua acceptance criteria ter-cover",
      "Semua user flow ter-cover"
    ],

    requestValidation: [
      "Parameter lengkap",
      "Required jelas",
      "Optional jelas",
      "Validation rule jelas"
    ],

    responseValidation: [
      "Success response jelas",
      "Error response jelas",
      "Empty state response jelas",
      "Pagination jelas"
    ],

    typingValidation: [
      "Type konsisten",
      "Nullable jelas",
      "Enum terdokumentasi"
    ],

    consistencyValidation: [
      "Naming konsisten",
      "Schema konsisten",
      "Endpoint konsisten"
    ]
  },
  definitionOfDone: [
    "Requirement sudah ter-cover",
    "Acceptance Criteria sudah ter-cover",
    "Request schema jelas",
    "Response schema jelas",
    "Success dan Error response jelas",
    "Required dan Optional jelas",
    "Type konsisten",
    "One API One Schema",
    "Frontend approve",
    "Backend approve",
    "Lead approve"
  ]
}