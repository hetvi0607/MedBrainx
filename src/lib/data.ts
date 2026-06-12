import { Activity, Brain, CalendarClock, HeartPulse, ShieldPlus, Sparkles, Stethoscope, Users } from "lucide-react";

export const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/assistant", label: "AI Assistant" },
  { href: "/reports", label: "Reports" },
  { href: "/avatar", label: "Health Avatar" },
  { href: "/doctors", label: "Doctors" },
  { href: "/coach", label: "Coach" },
  { href: "/community", label: "Community" },
  { href: "/emergency", label: "Emergency" }
];

export const featureCards = [
  { title: "AI Health Assistant", text: "Symptom guidance, report explanations, medicine education, and lifestyle coaching with voice-ready chat.", icon: Brain },
  { title: "Digital Twin", text: "A 3D health avatar that reacts to sleep, hydration, activity, records, and stress biomarkers.", icon: Sparkles },
  { title: "Risk Prediction", text: "Predictive panels for diabetes, blood pressure, obesity, and heart health with visual signals.", icon: ShieldPlus },
  { title: "Doctor Marketplace", text: "Book specialists, inspect profiles, compare ratings, and manage appointments.", icon: Stethoscope },
  { title: "Medical Timeline", text: "A cinematic health journey across reports, milestones, medications, and visits.", icon: CalendarClock },
  { title: "Live Community", text: "Anonymous posts, expert sessions, upvotes, comments, and real-time notifications.", icon: Users }
];

export const dashboardScores = [
  { name: "Health", value: 88, color: "#22d3ee" },
  { name: "Sleep", value: 76, color: "#60a5fa" },
  { name: "Stress", value: 41, color: "#a78bfa" },
  { name: "Activity", value: 92, color: "#38bdf8" },
  { name: "Nutrition", value: 81, color: "#e0f2fe" }
];

export const doctors = [
  { name: "Dr. Aarya Mehta", specialty: "Cardiology AI", rating: 4.97, location: "Mumbai NeuroCardio Lab", fee: 1800, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80" },
  { name: "Dr. Rohan Sen", specialty: "Endocrinology", rating: 4.91, location: "Bengaluru Metabolic Studio", fee: 1400, image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80" },
  { name: "Dr. Isha Rao", specialty: "Sleep Medicine", rating: 4.88, location: "Delhi Recovery Institute", fee: 1200, image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80" }
];

export const timeline = [
  { type: "Report", title: "Blood biomarkers normalized", date: "2035-03-02", detail: "Vitamin D improved 18%, HbA1c stable." },
  { type: "Medication", title: "Updated supplement plan", date: "2035-03-11", detail: "Clinician approved magnesium timing adjustment." },
  { type: "Milestone", title: "30 day hydration streak", date: "2035-03-18", detail: "Digital twin hydration aura reached 91%." },
  { type: "Visit", title: "Preventive cardiology scan", date: "2035-03-26", detail: "Low risk output with follow-up in 6 months." }
];

export const riskPanels = [
  { label: "Diabetes", value: 22, trend: "Down 8%", icon: Activity },
  { label: "Blood Pressure", value: 37, trend: "Stable", icon: HeartPulse },
  { label: "Obesity", value: 18, trend: "Down 4%", icon: ShieldPlus },
  { label: "Heart Health", value: 14, trend: "Optimal", icon: Stethoscope }
];
