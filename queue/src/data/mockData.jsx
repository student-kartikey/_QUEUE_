export const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    counter: "C-02",
    averageWait: 35,
    visitorsToday: 84,
    activeTokens: 18
  },
  {
    id: "general",
    name: "General OPD",
    counter: "G-01",
    averageWait: 22,
    visitorsToday: 126,
    activeTokens: 31
  },
  {
    id: "billing",
    name: "Billing Desk",
    counter: "B-04",
    averageWait: 14,
    visitorsToday: 52,
    activeTokens: 9
  }
];

export const liveQueue = {
  token: "A45",
  department: "Cardiology",
  currentlyServing: "A30",
  peopleBeforeYou: 15,
  estimatedWait: 45,
  counter: "C-02",
  notifyAt: "A41"
};

export const staffQueue = [
  { token: "A31", name: "Riya Sharma", service: "Consultation", status: "Waiting" },
  { token: "A32", name: "Aman Verma", service: "Follow-up", status: "Waiting" },
  { token: "A33", name: "Neha Patel", service: "ECG Review", status: "Waiting" },
  { token: "A34", name: "Kabir Rao", service: "Consultation", status: "Waiting" },
  { token: "A35", name: "Sara Khan", service: "Report Check", status: "Waiting" }
];

export const analytics = [
  { label: "Average Wait", value: "31 min" },
  { label: "Visitors Today", value: "240" },
  { label: "Completed Tokens", value: "198" },
  { label: "Active Counters", value: "8" }
];
