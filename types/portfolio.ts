export interface ProfileData {
  name: string
  title: string
  company: string
  companyLogo: string
  profileImage: string
  status: "available" | "working" | "busy"
  location: string
  email: string
  github: string
  linkedin: string
  experience: string
  skills: string[]
  currentProject: string
}

export interface TerminalLine {
  type: "input" | "output" | "system"
  content: string
  timestamp?: Date
}

export interface Command {
  name: string
  description: string
  action: () => string
}
