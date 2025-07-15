// Update the import path below to the correct relative path if needed
import { ProfileData } from "../types/portfolio"


export const portfolioConfig: ProfileData = {
  name: "Aniruddha Paul",
  title: "Product Lead",
  company: "Growth Loops Technology",
  companyLogo: "/placeholder.svg?height=40&width=40",
  profileImage: "/placeholder.svg?height=200&width=200",
  status: "available", // available | working | busy
  location: "Kolkata, India",
  email: "aniru.paul444@gmail.com",
  github: "aniuddha",
  linkedin: "aniruddhapaul444",
  experience: "8+ years",
  skills: ["Product Strategy", "Growth Hacking", "Data Analytics", "Team Leadership", "SaaS"],
  currentProject: "AI-Powered Drone Surveillance System",
}

export const statusConfig = {
  available: {
    label: "Available for Opportunities",
    color: "bg-green-500",
    pulse: true,
  },
  working: {
    label: "Currently Working",
    color: "bg-blue-500",
    pulse: false,
  },
  busy: {
    label: "Busy - Limited Availability",
    color: "bg-yellow-500",
    pulse: false,
  },
}
